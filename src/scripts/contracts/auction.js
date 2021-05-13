const {Contract} = require('ethers');
const IAuction = require("./abi/IAuction");

async function getAuctionContract(provider, signer, auctionAddress) {
    const auctionContract = new Contract(auctionAddress, IAuction.abi, provider)
    const auctionSigner = auctionContract.connect(signer)
    return {contract: auctionContract, signer: auctionSigner}
}

module.exports = {
    getAuctionContract
}
