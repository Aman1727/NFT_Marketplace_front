const IAuction = {
  "contractName": "IAuction",
  "abi": [
    {
      "inputs": [],
      "name": "getHighestBid",
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
      "name": "isAuctionLive",
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
      "inputs": [],
      "name": "placeBid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cancelAuction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getHighestBidder",
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
      "inputs": [],
      "name": "getOwner",
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
      "inputs": [],
      "name": "getTokenId",
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
      "name": "getWithdrawalFee",
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
      "name": "getEndBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"cancelAuction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getEndBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getHighestBid\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getHighestBidder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTokenId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawalFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isAuctionLive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"placeBid\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/IAuction.sol\":\"IAuction\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/IAuction.sol\":{\"keccak256\":\"0x56a0c1ccbc40091e760f6f38b15c0704fd20fcacf783ff7170511eeb85e1fc6c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://50ffbf28fc5b6abcb5de00f0ee9c5d8840a93cb1f1cb064662383fcbc29c7647\",\"dweb:/ipfs/QmUQiwFDiW7wBfmKKyXHznxm9eqRMFhRQwCgkA11gxL8Bp\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ninterface IAuction {\r\n    function getHighestBid() external view returns(uint);\r\n    function isAuctionLive() external view returns(bool);\r\n    function placeBid() external payable;\r\n    function cancelAuction() external;\r\n    function withdraw() external payable;\r\n    function getHighestBidder() external view returns(address);\r\n    function getOwner() external view returns(address);\r\n    function getTokenId() external view returns(uint);\r\n    function getWithdrawalFee() external view returns(uint);\r\n    function getEndBlock() external view returns(uint);\r\n}\r\n",
  "sourcePath": "C:/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/IAuction.sol",
  "ast": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/IAuction.sol",
    "exportedSymbols": {
      "IAuction": [
        664
      ]
    },
    "id": 665,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 619,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 664,
        "linearizedBaseContracts": [
          664
        ],
        "name": "IAuction",
        "nameLocation": "70:8:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "4979440a",
            "id": 624,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getHighestBid",
            "nameLocation": "95:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "108:2:1"
            },
            "returnParameters": {
              "id": 623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 624,
                  "src": "133:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "132:6:1"
            },
            "scope": 664,
            "src": "86:53:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "1be19f4b",
            "id": 629,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isAuctionLive",
            "nameLocation": "154:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:2:1"
            },
            "returnParameters": {
              "id": 628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 627,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 629,
                  "src": "192:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "191:6:1"
            },
            "scope": 664,
            "src": "145:53:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "ecfc7ecc",
            "id": 632,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "placeBid",
            "nameLocation": "213:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:2:1"
            },
            "returnParameters": {
              "id": 631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "240:0:1"
            },
            "scope": 664,
            "src": "204:37:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8fa8b790",
            "id": 635,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "cancelAuction",
            "nameLocation": "256:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "269:2:1"
            },
            "returnParameters": {
              "id": 634,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "280:0:1"
            },
            "scope": 664,
            "src": "247:34:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "3ccfd60b",
            "id": 638,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "296:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 636,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:2:1"
            },
            "returnParameters": {
              "id": 637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "323:0:1"
            },
            "scope": 664,
            "src": "287:37:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "003495a4",
            "id": 643,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getHighestBidder",
            "nameLocation": "339:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 639,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "355:2:1"
            },
            "returnParameters": {
              "id": 642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 641,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 643,
                  "src": "380:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "379:9:1"
            },
            "scope": 664,
            "src": "330:59:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "893d20e8",
            "id": 648,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getOwner",
            "nameLocation": "404:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 644,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "412:2:1"
            },
            "returnParameters": {
              "id": 647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 646,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 648,
                  "src": "437:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "436:9:1"
            },
            "scope": 664,
            "src": "395:51:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "010a38f5",
            "id": 653,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenId",
            "nameLocation": "461:10:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:2:1"
            },
            "returnParameters": {
              "id": 652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 651,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 653,
                  "src": "496:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 650,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "495:6:1"
            },
            "scope": 664,
            "src": "452:50:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d8e159f8",
            "id": 658,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdrawalFee",
            "nameLocation": "517:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "533:2:1"
            },
            "returnParameters": {
              "id": 657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 656,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 658,
                  "src": "558:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "557:6:1"
            },
            "scope": 664,
            "src": "508:56:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "fb7a5f4f",
            "id": 663,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEndBlock",
            "nameLocation": "579:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "590:2:1"
            },
            "returnParameters": {
              "id": 662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 661,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 663,
                  "src": "615:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 660,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "614:6:1"
            },
            "scope": 664,
            "src": "570:51:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 665,
        "src": "60:564:1",
        "usedErrors": []
      }
    ],
    "src": "33:593:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/IAuction.sol",
    "exportedSymbols": {
      "IAuction": [
        664
      ]
    },
    "id": 665,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 619,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 664,
        "linearizedBaseContracts": [
          664
        ],
        "name": "IAuction",
        "nameLocation": "70:8:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "4979440a",
            "id": 624,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getHighestBid",
            "nameLocation": "95:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "108:2:1"
            },
            "returnParameters": {
              "id": 623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 624,
                  "src": "133:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "132:6:1"
            },
            "scope": 664,
            "src": "86:53:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "1be19f4b",
            "id": 629,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isAuctionLive",
            "nameLocation": "154:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "167:2:1"
            },
            "returnParameters": {
              "id": 628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 627,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 629,
                  "src": "192:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 626,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "192:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "191:6:1"
            },
            "scope": 664,
            "src": "145:53:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "ecfc7ecc",
            "id": 632,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "placeBid",
            "nameLocation": "213:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:2:1"
            },
            "returnParameters": {
              "id": 631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "240:0:1"
            },
            "scope": 664,
            "src": "204:37:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "8fa8b790",
            "id": 635,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "cancelAuction",
            "nameLocation": "256:13:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "269:2:1"
            },
            "returnParameters": {
              "id": 634,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "280:0:1"
            },
            "scope": 664,
            "src": "247:34:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "3ccfd60b",
            "id": 638,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "296:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 636,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "304:2:1"
            },
            "returnParameters": {
              "id": 637,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "323:0:1"
            },
            "scope": 664,
            "src": "287:37:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "003495a4",
            "id": 643,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getHighestBidder",
            "nameLocation": "339:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 639,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "355:2:1"
            },
            "returnParameters": {
              "id": 642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 641,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 643,
                  "src": "380:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "379:9:1"
            },
            "scope": 664,
            "src": "330:59:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "893d20e8",
            "id": 648,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getOwner",
            "nameLocation": "404:8:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 644,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "412:2:1"
            },
            "returnParameters": {
              "id": 647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 646,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 648,
                  "src": "437:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "436:9:1"
            },
            "scope": 664,
            "src": "395:51:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "010a38f5",
            "id": 653,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenId",
            "nameLocation": "461:10:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 649,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "471:2:1"
            },
            "returnParameters": {
              "id": 652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 651,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 653,
                  "src": "496:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 650,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "495:6:1"
            },
            "scope": 664,
            "src": "452:50:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d8e159f8",
            "id": 658,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdrawalFee",
            "nameLocation": "517:16:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "533:2:1"
            },
            "returnParameters": {
              "id": 657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 656,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 658,
                  "src": "558:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 655,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "557:6:1"
            },
            "scope": 664,
            "src": "508:56:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "fb7a5f4f",
            "id": 663,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getEndBlock",
            "nameLocation": "579:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "590:2:1"
            },
            "returnParameters": {
              "id": 662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 661,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 663,
                  "src": "615:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 660,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "615:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "614:6:1"
            },
            "scope": 664,
            "src": "570:51:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 665,
        "src": "60:564:1",
        "usedErrors": []
      }
    ],
    "src": "33:593:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-05-10T16:59:54.943Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};
module.exports = IAuction;