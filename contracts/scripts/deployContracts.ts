import { Wallet, getDefaultProvider} from "ethers";
require('dotenv').config()
import { ethers, run, network } from "hardhat";
import { NutritionistNFT__factory, UserNFT__factory, Treasury__factory, Community__factory } from "../typechain-types";

//const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
//const wallet = new ethers.Wallet(PRIVATE_KEY, ethers.provider);

const privateKey = process.env.PRIVATE_KEY as string;
const wallet = new Wallet(privateKey);

const arbitrumRpc = "https://goerli-rollup.arbitrum.io/rpc"
const registryAddr = "0x37D9dC70bfcd8BC77Ec2858836B923c560E891D1"
const registrarAddr = "0x1433C1BDfCF1b2E1CE843Ede6FcC5d6e409fE56E"
const linkAddr = "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28"

const communityContract = "0x3a65168B746766066288B83417329a7F901b5569"
const treasuryContract = "0x9E1eF5A92C9Bf97460Cd00C0105979153EA45b27"
const nutritionistNftContract = "0xA39d26482B5c226Fd02A5f3e159C72ee03d63Fc0"
const userNftContract = "0x6D919b8dC30BEf41b56Aa8b18b2052c9459F8E9A"

async function main() {
    //await deployCommunityContracts();
  
    //await setupNFTs();

    // const chainID = network.config.chainId;
    // if (chainID != 31337) {
    //     await verifyContract()
    // }

    await joinCommunity(communityContract);
}

async function deployTreasury() {
    //console.log("Deploying Treasury....");

    //const provider = getDefaultProvider(rpc)
    //const connectedWallet = wallet.connect(provider);
    //const TreasuryFactory = new Treasury__factory(connectedWallet);

    const TreasuryFactory = await ethers.getContractFactory("Treasury");
    const treasury = await TreasuryFactory.deploy();
    await treasury.deployed();
    console.log("---- Treasury Contract was deployed to: ---- ", treasury.address);
    return treasury.address;
}

async function deployUserNFT(_communityAddr: any) {
    //console.log("Deploying UserNFT....");
    const UserNFTFactory = await ethers.getContractFactory("UserNFT");
    const userNFT = await UserNFTFactory.deploy("User NFT", "UST", _communityAddr);
    await userNFT.deployed();
    console.log("---- UserNFT Contract was deployed to: ---- ", userNFT.address);
    return userNFT.address;
}

async function deployNutritionistNFT(_communityAddr: any) {
    //console.log("Deploying NutrionistNFT....");
    const NutritionistNFTFactory = await ethers.getContractFactory("NutritionistNFT");
    const nutritionistNFT = await NutritionistNFTFactory.deploy("Nutritionist NFT", "NUT", _communityAddr);
    await nutritionistNFT.deployed();
    console.log("---- NutritionistNFT Contract was deployed to: ---- ", nutritionistNFT.address);
    return nutritionistNFT.address;
}

async function joinCommunity(_communityAddr: any) {
    
    const provider = getDefaultProvider(arbitrumRpc);
    const connectedWallet = wallet.connect(provider);

    const communityFactory = new Community__factory(connectedWallet);
    const community = communityFactory.attach(_communityAddr);

    console.log("joining community...")
    const amount = ethers.utils.parseEther("0.01");
    const tx = await community.joinCommunity("hello", "nft", {gasLimit: 6000000, value: amount})
    await tx.wait();
    console.log("community successfully joined")
}

async function setupNFTs() {
    let userNFTAddr = "0x6D919b8dC30BEf41b56Aa8b18b2052c9459F8E9A"
    let nutritionistNFTAddr = "0xA39d26482B5c226Fd02A5f3e159C72ee03d63Fc0"
    let communityAddr = "0x3a65168B746766066288B83417329a7F901b5569"

    const provider = getDefaultProvider(arbitrumRpc);
    const connectedWallet = wallet.connect(provider);

    const communityFactory = new Community__factory(connectedWallet);
    const community = communityFactory.attach(communityAddr);

    try {
        console.log("Setting up NFTs for Arbitrum")
        const tx = await community.setNFTs(userNFTAddr, nutritionistNFTAddr);
        await tx.wait();
        console.log("NFTs setup successful")
    }

    catch (error) {
        console.log(`[source] community.setNFTs ERROR!`);
        console.log(`[source]`, error);

    }
}


async function deployCommunityContracts() {
    console.log("Deploying Contracts for Arbitrum....");
    let treasuryAddr;
    let communityAddr;
    try {
        console.log("Deploying treasury for Arbitrum");
        treasuryAddr = await deployTreasury();

        const CommunityFactory = await ethers.getContractFactory("Community"/*, wallet*/);

        console.log("Deploying Community contract for Arbitrum");
        const community = await CommunityFactory.deploy(treasuryAddr, linkAddr, registrarAddr, registryAddr);
        await community.deployed();
        communityAddr = community.address;
        console.log("---- Community Contract for Arbitrum was deployed to Arbitrum testnet at this address: ---- ", community.address);
    }
    catch (error) {
        console.error("Error deploying Community for Arbitrum:", error);
        throw error;
    }

    console.log("Deploying UserNFT for Arbitrum....");
    let userNFT;
    try {
        userNFT = await deployUserNFT(communityAddr);
    }
    catch (error) {
        console.error("Error User NFT for Arbitrum:", error);
        throw error;
    }

    console.log("Deploying NutritionistNFT for Arbitrum....");
    let nutritionistNFT;
    try {
        nutritionistNFT = await deployNutritionistNFT(communityAddr);
    }
    catch (error) {
        console.error("Error Nutritionist NFT for Arbitrum:", error);
        throw error;
    }
}

async function verifyContract() {

    console.log(`Verifying nutritionistNFT contract for Arbitrum...`);

    try {
        await run("verify:verify", {
            address: nutritionistNftContract,
            constructorArguments: ["Nutritionist NFT", "NUT", communityContract],
        });
        //console.log(`contract for ${chain.name} verified`);
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
        } else {
            console.log(e);
        }
    }
}


main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
