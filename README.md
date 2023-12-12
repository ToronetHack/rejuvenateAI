# RejuvenateAI x New Horizon hack 

Live Demo - [Youtube video](https://youtu.be/ItiJEXY74lE) <br />
Live Link - [RejuvenateAI dapp](https://rejuvenate-ai.vercel.app/) <br />

## ✨ Description

[RejuvenateAI](https://rejuvenate-ai.vercel.app/) is the first community blockchain based project powered by community built for community to promote healthy living and achieve  healthy locations where people live up to a 100 years all around the world. We are trying to make sure people live healthy by incorporating healthy habits into their lifestyle and trying to make sure they get the most out of the human experience by discovering their purpose if they haven't already and enjoying this life, all while doing it together as a community being accountable to each other.

## Inspiration

People are becoming obsessed with living longer, but they don't know how, they are spending so much money on drugs and supplements, but are they really doing it correctly? We don't think so, so that's why we at RejuvenateAI have come up with this idea to focus on nutrition and fitness. What if we can create communities that are focused on living up to 100 years. 

## What we built

Our features empower personal healthy living habits by:

- Allowing users to setup meetings with nutritionists who would offer professional consultation to them.
- Providing educative articles that can inspire users to live healthier lives. 
- Providing educative meal and fitness plans that paid subscribers have access to.
- Users can interact with each other in our communities and work on health goals/challenges together.
- Users can set up in real life events in communities and meet up and do healthy activities together like long walks, marathons etc.

## 💻 How we built RejuvenateAI

Here's a breakdown of how it was built:


1. Users can sign up with the ```registerUser``` function, which they will pay the subscription fee and then get onboarded into our platform to enjoy our services

2. Nutritionists can sign up with the ```applyForNutritionistRole``` function, which they will pass their credentials into and have their application status set to pending.

3. We will then see their application status, and after verifying their credentials and see that it's legitimate we can now approve their status by calling the ```approveNutritionistRole``` function, which will approve the nutritionists and set their application status as accepted, and they can now be onboarded into our platform.

4. Now these nutritionists can now create meal plans by calling ``createMealPlans`` which will create meal plans for users to access.

5. Users can join communities and chat in these communities, the chat feature is powered by push protocol, there are also ongoing challenges and events going on in communities.


## Where we deployed to/contract details

We created and deployed our smart contracts on the XRP EVM Sidechain testnet chain. 

### XRP EVM Sidechain Testnet

1. CommunityNetwork contract 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 - [View source code](https://github.com/newhorizonhack/rejuvenateAI/blob/main/contracts/contracts/CommunityNetwork.sol) | [View on XRP EVM Sidechain](https://evm-sidechain.xrpl.org/address/0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512)

2. Treasury contract 0x5FbDB2315678afecb367f032d93F642f64180aa3 - [View source code](https://github.com/newhorizonhack/rejuvenateAI/blob/main/contracts/contracts/Treasury.sol) | [View on XRP EVM Sidechain](https://evm-sidechain.xrpl.org/address/0x5FbDB2315678afecb367f032d93F642f64180aa3)

3. User NFT contract 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 - [View source code](https://github.com/newhorizonhack/rejuvenateAI/blob/main/contracts/contracts/UserNFT.sol) | [View on XRP EVM Sidechain](https://evm-sidechain.xrpl.org/address/0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0)

4. Nutritionist NFT contract 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 - [View source code](https://github.com/newhorizonhack/rejuvenateAI/blob/main/contracts/contracts/NutritionistNFT.sol) | [View on XRP EVM Sidechain](https://evm-sidechain.xrpl.org/address/0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9)


