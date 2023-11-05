// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "./interfaces/INutritionistNFT.sol";
import {SBT} from "./SBT.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NutritionistNFT is INutritionistNFT, SBT {
    using Strings for uint256;

    using Counters for Counters.Counter;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    Counters.Counter private tokenUriIds;

    address public owner;

    constructor(
        string memory name,
        string memory symbol,
        address _owner
    ) SBT(name, symbol) {
        owner = _owner;
    }
0x40e9d632ead25ef40ec258cf82b5fafeba54dc517516d4bba270d04d0f9f7fde usernft
0xc5231ccfbe735c859ae0ed73fbea8ca1f461eb85c204aee0a47d586719a876d1 nutrinft
    // FUNCTIONS
    function mint(address nutritionist, string memory uri) external override {
        require(msg.sender == owner, "caller not owner");
        _mintUsingAutomaticTokenId(nutritionist);
        tokenUriIds.increment();
        uint256 tokenUriId = tokenUriIds.current();

        _setTokenURI(tokenUriId, uri);

        emit MintNutritionistNFT(nutritionist);
    }

    function burn(address nutritionist, uint256 _tokenId) external override {
        require(msg.sender == owner, "caller not owner");
        _burn(nutritionist, _tokenId);

        if (bytes(_tokenURIs[_tokenId]).length != 0) {
            delete _tokenURIs[_tokenId];
        }
        emit BurnNutritionistNFT(nutritionist, _tokenId);
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }

        return super.tokenURI(tokenId);
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _setTokenURI(
        uint256 tokenId,
        string memory _tokenURI
    ) internal virtual {
        require(
            _exists(tokenId),
            "ERC721URIStorage: URI set of nonexistent token"
        );
        _tokenURIs[tokenId] = _tokenURI;
    }
}
