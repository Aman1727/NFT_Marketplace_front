const ICollectibles = {
  "contractName": "ICollectibles",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "metadataURI",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "royaltyPercent",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getTokenIdsByOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "getTokenURIsByIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenIdsForSale",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "getTokenPriceByIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTokenPriceWithFeesById",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sellFeePercent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "bidIncrement",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "createAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllAuctions",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newSellFeePercent",
          "type": "uint256"
        }
      ],
      "name": "changeSellFeePercent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "creatorOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenRoyaltyPercent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getTokenIdsForSaleByOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newSellFeePercent\",\"type\":\"uint256\"}],\"name\":\"changeSellFeePercent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"bidIncrement\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"startBlock\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endBlock\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"createAuction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"creatorOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllAuctions\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getTokenIdsByOwner\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTokenIdsForSale\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getTokenIdsForSaleByOwner\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"getTokenPriceByIds\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getTokenPriceWithFeesById\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"getTokenURIsByIds\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"royaltyPercent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"sell\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sellFeePercent\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenRoyaltyPercent\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":\"ICollectibles\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":{\"keccak256\":\"0xe1b0a19c14ed663cbfae31c2b42098baac90b078e5f5c76e7e45b7b921e89ee4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3fc030be028b727545ede584875d7b9cf7081be7642cd4dd69daf0d1eef53ba2\",\"dweb:/ipfs/QmQmdA1AKzgrHYyXou7975MTHCLzVNRxYX5Efqy56KuhAm\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xc1c941ad1e580b4623007305921efe2f26fc7320a4edc226234dd707c658a428\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://473e11d739868e0d9f48254ccf84ba63290d6a2321d59a37b74c244a27f9cad7\",\"dweb:/ipfs/QmUGzDmecP936jzgM7SYyGwR1YgBGsveoHHJTbDfB8jbGF\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC721/IERC721.sol\";\r\n\r\ninterface ICollectibles is IERC721 {\r\n    function mint(string memory metadataURI, uint royaltyPercent, uint price) external;\r\n    function getTokenIdsByOwner(address _owner) external view returns(uint[] memory);\r\n    function getTokenURIsByIds(uint[] memory tokenIds) external view returns(string[] memory);\r\n    function sell(uint tokenId, uint price) external;\r\n    function buy(uint tokenId) external payable;\r\n    function getTokenIdsForSale() external view returns(uint[] memory);\r\n    function getTokenPriceByIds(uint[] memory tokenIds) external view returns(uint[] memory);\r\n    function getTokenPriceWithFeesById(uint tokenId) external view returns (uint);\r\n    function sellFeePercent() external view returns (uint);\r\n    function createAuction(uint bidIncrement, uint startBlock, uint endBlock, uint tokenId) external;\r\n    function getAllAuctions() external view returns (address[] memory);\r\n    function withdraw() external;\r\n    function changeSellFeePercent(uint newSellFeePercent) external;\r\n    function creatorOf(uint tokenId) view external returns(address);\r\n    function tokenRoyaltyPercent(uint tokenId) view external returns (uint);\r\n    function transferOwnership(address newOwner) external;\r\n    function getTokenIdsForSaleByOwner(address _owner) external view returns(uint[] memory);\r\n    function owner() external view returns(address);\r\n}\r\n",
  "sourcePath": "C:/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
  "ast": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        127
      ],
      "IERC165": [
        255
      ],
      "IERC721": [
        243
      ]
    },
    "id": 128,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 128,
        "sourceUnit": 244,
        "src": "60:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 3,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 243,
              "src": "149:7:0"
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:0"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 127,
        "linearizedBaseContracts": [
          127,
          243,
          255
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "1c635ded",
            "id": 13,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "metadataURI",
                  "nameLocation": "192:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "178:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8,
                  "mutability": "mutable",
                  "name": "royaltyPercent",
                  "nameLocation": "210:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "205:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "231:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "226:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:60:0"
            },
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:0"
            },
            "scope": 127,
            "src": "164:83:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 21,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "262:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "289:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "281:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:16:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "319:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "319:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18,
                    "nodeType": "ArrayTypeName",
                    "src": "319:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "318:15:0"
            },
            "scope": 127,
            "src": "253:81:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 30,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "349:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "381:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 30,
                  "src": "367:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "367:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23,
                    "nodeType": "ArrayTypeName",
                    "src": "367:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "366:24:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30,
                  "src": "413:15:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "413:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27,
                    "nodeType": "ArrayTypeName",
                    "src": "413:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "412:17:0"
            },
            "scope": 127,
            "src": "340:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 37,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "445:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "455:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 37,
                  "src": "450:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "469:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 37,
                  "src": "464:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "464:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "449:26:0"
            },
            "returnParameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "484:0:0"
            },
            "scope": 127,
            "src": "436:49:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 42,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "500:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "509:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "504:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "503:14:0"
            },
            "returnParameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "534:0:0"
            },
            "scope": 127,
            "src": "491:44:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "af73154d",
            "id": 48,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSale",
            "nameLocation": "550:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "568:2:0"
            },
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48,
                  "src": "593:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "593:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 45,
                    "nodeType": "ArrayTypeName",
                    "src": "593:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "592:15:0"
            },
            "scope": 127,
            "src": "541:67:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "553b9816",
            "id": 57,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceByIds",
            "nameLocation": "623:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 52,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "656:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "642:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "642:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50,
                    "nodeType": "ArrayTypeName",
                    "src": "642:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "641:24:0"
            },
            "returnParameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "688:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 53,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "688:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 54,
                    "nodeType": "ArrayTypeName",
                    "src": "688:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "687:15:0"
            },
            "scope": 127,
            "src": "614:89:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8816bd93",
            "id": 64,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceWithFeesById",
            "nameLocation": "718:25:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "749:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "744:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "743:14:0"
            },
            "returnParameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "781:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:6:0"
            },
            "scope": 127,
            "src": "709:78:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "e0d30d9b",
            "id": 69,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sellFeePercent",
            "nameLocation": "802:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:0"
            },
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "842:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "842:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "841:6:0"
            },
            "scope": 127,
            "src": "793:55:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "431f21da",
            "id": 80,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createAuction",
            "nameLocation": "863:13:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "bidIncrement",
                  "nameLocation": "882:12:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "877:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "startBlock",
                  "nameLocation": "901:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "896:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "896:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "endBlock",
                  "nameLocation": "918:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "913:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "933:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "928:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "928:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:65:0"
            },
            "returnParameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:0"
            },
            "scope": 127,
            "src": "854:97:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "cbd2bdfd",
            "id": 86,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getAllAuctions",
            "nameLocation": "966:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "980:2:0"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "1006:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 82,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1006:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 83,
                    "nodeType": "ArrayTypeName",
                    "src": "1006:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1005:18:0"
            },
            "scope": 127,
            "src": "957:67:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "3ccfd60b",
            "id": 89,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "1039:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1047:2:0"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1058:0:0"
            },
            "scope": 127,
            "src": "1030:29:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "9d5258d7",
            "id": 94,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "changeSellFeePercent",
            "nameLocation": "1074:20:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91,
                  "mutability": "mutable",
                  "name": "newSellFeePercent",
                  "nameLocation": "1100:17:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 94,
                  "src": "1095:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1095:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1094:24:0"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1127:0:0"
            },
            "scope": 127,
            "src": "1065:63:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "589a1743",
            "id": 101,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "creatorOf",
            "nameLocation": "1143:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 96,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1158:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1153:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1153:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1152:14:0"
            },
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1189:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1188:9:0"
            },
            "scope": 127,
            "src": "1134:64:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "e1a51897",
            "id": 108,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tokenRoyaltyPercent",
            "nameLocation": "1213:19:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1238:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "1233:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1233:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1232:14:0"
            },
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "1270:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1270:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1269:6:0"
            },
            "scope": 127,
            "src": "1204:72:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "f2fde38b",
            "id": 113,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferOwnership",
            "nameLocation": "1291:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1317:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 113,
                  "src": "1309:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1308:18:0"
            },
            "returnParameters": {
              "id": 112,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1335:0:0"
            },
            "scope": 127,
            "src": "1282:54:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d5be49be",
            "id": 121,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSaleByOwner",
            "nameLocation": "1351:25:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1385:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 121,
                  "src": "1377:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1376:16:0"
            },
            "returnParameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121,
                  "src": "1415:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 117,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1415:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 118,
                    "nodeType": "ArrayTypeName",
                    "src": "1415:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1414:15:0"
            },
            "scope": 127,
            "src": "1342:88:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8da5cb5b",
            "id": 126,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "1445:5:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1450:2:0"
            },
            "returnParameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 126,
                  "src": "1475:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1475:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1474:9:0"
            },
            "scope": 127,
            "src": "1436:48:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 128,
        "src": "122:1365:0",
        "usedErrors": []
      }
    ],
    "src": "33:1456:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        127
      ],
      "IERC165": [
        255
      ],
      "IERC721": [
        243
      ]
    },
    "id": 128,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 2,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 128,
        "sourceUnit": 244,
        "src": "60:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 3,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 243,
              "src": "149:7:0"
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:0"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 127,
        "linearizedBaseContracts": [
          127,
          243,
          255
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "1c635ded",
            "id": 13,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "metadataURI",
                  "nameLocation": "192:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "178:25:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8,
                  "mutability": "mutable",
                  "name": "royaltyPercent",
                  "nameLocation": "210:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "205:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "231:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 13,
                  "src": "226:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "226:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:60:0"
            },
            "returnParameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "246:0:0"
            },
            "scope": 127,
            "src": "164:83:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 21,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "262:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "289:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "281:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "281:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "280:16:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "319:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 17,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "319:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 18,
                    "nodeType": "ArrayTypeName",
                    "src": "319:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "318:15:0"
            },
            "scope": 127,
            "src": "253:81:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 30,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "349:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "381:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 30,
                  "src": "367:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "367:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 23,
                    "nodeType": "ArrayTypeName",
                    "src": "367:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "366:24:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 30,
                  "src": "413:15:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "413:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 27,
                    "nodeType": "ArrayTypeName",
                    "src": "413:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "412:17:0"
            },
            "scope": 127,
            "src": "340:90:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 37,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "445:4:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "455:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 37,
                  "src": "450:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "469:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 37,
                  "src": "464:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "464:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "449:26:0"
            },
            "returnParameters": {
              "id": 36,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "484:0:0"
            },
            "scope": 127,
            "src": "436:49:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 42,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "500:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "509:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "504:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "503:14:0"
            },
            "returnParameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "534:0:0"
            },
            "scope": 127,
            "src": "491:44:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "af73154d",
            "id": 48,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSale",
            "nameLocation": "550:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "568:2:0"
            },
            "returnParameters": {
              "id": 47,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 46,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 48,
                  "src": "593:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 44,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "593:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 45,
                    "nodeType": "ArrayTypeName",
                    "src": "593:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "592:15:0"
            },
            "scope": 127,
            "src": "541:67:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "553b9816",
            "id": 57,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceByIds",
            "nameLocation": "623:18:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 52,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "656:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "642:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 49,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "642:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 50,
                    "nodeType": "ArrayTypeName",
                    "src": "642:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "641:24:0"
            },
            "returnParameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "688:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 53,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "688:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 54,
                    "nodeType": "ArrayTypeName",
                    "src": "688:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "687:15:0"
            },
            "scope": 127,
            "src": "614:89:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8816bd93",
            "id": 64,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceWithFeesById",
            "nameLocation": "718:25:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "749:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "744:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "743:14:0"
            },
            "returnParameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "781:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "781:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "780:6:0"
            },
            "scope": 127,
            "src": "709:78:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "e0d30d9b",
            "id": 69,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sellFeePercent",
            "nameLocation": "802:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "816:2:0"
            },
            "returnParameters": {
              "id": 68,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "842:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 66,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "842:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "841:6:0"
            },
            "scope": 127,
            "src": "793:55:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "431f21da",
            "id": 80,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createAuction",
            "nameLocation": "863:13:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "bidIncrement",
                  "nameLocation": "882:12:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "877:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "startBlock",
                  "nameLocation": "901:10:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "896:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "896:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 75,
                  "mutability": "mutable",
                  "name": "endBlock",
                  "nameLocation": "918:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "913:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 74,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "913:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "933:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "928:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "928:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:65:0"
            },
            "returnParameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "950:0:0"
            },
            "scope": 127,
            "src": "854:97:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "cbd2bdfd",
            "id": 86,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getAllAuctions",
            "nameLocation": "966:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "980:2:0"
            },
            "returnParameters": {
              "id": 85,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 84,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 86,
                  "src": "1006:16:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 82,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1006:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 83,
                    "nodeType": "ArrayTypeName",
                    "src": "1006:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1005:18:0"
            },
            "scope": 127,
            "src": "957:67:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "3ccfd60b",
            "id": 89,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "1039:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1047:2:0"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1058:0:0"
            },
            "scope": 127,
            "src": "1030:29:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "9d5258d7",
            "id": 94,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "changeSellFeePercent",
            "nameLocation": "1074:20:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 91,
                  "mutability": "mutable",
                  "name": "newSellFeePercent",
                  "nameLocation": "1100:17:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 94,
                  "src": "1095:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1095:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1094:24:0"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1127:0:0"
            },
            "scope": 127,
            "src": "1065:63:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "589a1743",
            "id": 101,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "creatorOf",
            "nameLocation": "1143:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 96,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1158:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1153:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1153:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1152:14:0"
            },
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 99,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1189:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 98,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1188:9:0"
            },
            "scope": 127,
            "src": "1134:64:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "e1a51897",
            "id": 108,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "tokenRoyaltyPercent",
            "nameLocation": "1213:19:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1238:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "1233:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1233:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1232:14:0"
            },
            "returnParameters": {
              "id": 107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 108,
                  "src": "1270:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1270:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1269:6:0"
            },
            "scope": 127,
            "src": "1204:72:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "f2fde38b",
            "id": 113,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferOwnership",
            "nameLocation": "1291:17:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 110,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1317:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 113,
                  "src": "1309:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1309:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1308:18:0"
            },
            "returnParameters": {
              "id": 112,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1335:0:0"
            },
            "scope": 127,
            "src": "1282:54:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d5be49be",
            "id": 121,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSaleByOwner",
            "nameLocation": "1351:25:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 115,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1385:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 121,
                  "src": "1377:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1377:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1376:16:0"
            },
            "returnParameters": {
              "id": 120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 119,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 121,
                  "src": "1415:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 117,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1415:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 118,
                    "nodeType": "ArrayTypeName",
                    "src": "1415:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1414:15:0"
            },
            "scope": 127,
            "src": "1342:88:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8da5cb5b",
            "id": 126,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "1445:5:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 122,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1450:2:0"
            },
            "returnParameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 126,
                  "src": "1475:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1475:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1474:9:0"
            },
            "scope": 127,
            "src": "1436:48:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 128,
        "src": "122:1365:0",
        "usedErrors": []
      }
    ],
    "src": "33:1456:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-05-13T10:58:35.058Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the number of tokens in ``owner``'s account."
      },
      "getApproved(uint256)": {
        "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
      },
      "ownerOf(uint256)": {
        "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};
module.exports = ICollectibles;