const {getAuctionContract} = require("../contracts/auction");
const ethers = require("ethers");

class Auction {
    constructor(provider, signer, auctionAddress) {
        this.provider = provider
        this.signer = signer
        this.auctionAddress = auctionAddress
        this.auction = null
    }

    initAuction = async () => {
        if (this.auction) return
        this.auction = await getAuctionContract(this.provider, this.signer, this.auctionAddress)
    }

    getHighestBid = async() => {
        await this.initAuction()
        const highestBid = await this.auction.contract.getHighestBid()
        return highestBid
    }

    getHighestBidder = async() => {
        await this.initAuction()
        const highestBidder = await this.auction.contract.getHighestBidder()
        return highestBidder
    }

    getOwner = async() => {
        await this.initAuction()
        const owner = await this.auction.contract.getOwner()
        return owner
    }

    getEndBlock = async() => {
        await this.initAuction()
        const endBlock = await this.auction.contract.getEndBlock()
        return endBlock
    }

    getTokenId = async() => {
        await this.initAuction()
        const tokenId = await this.auction.contract.getTokenId()
        return tokenId
    }

    getWithdrawalFee = async() => {
        await this.initAuction()
        const fee = await this.auction.contract.getWithdrawalFee()
        return fee
    }

    placeBid = async(amount) => {
        await this.initAuction()
        const tx = await this.auction.signer.placeBid({value: ethers.utils.parseEther(amount)})
        return tx
    }

    cancelAuction = async() => {
        // cancel auction
        await this.initAuction()
        const tx = await this.auction.signer.cancelAuction()
        return tx
    }

    withdraw = async(amount) => {
        // You need to send selling Fee of 25% if you are highest bidder and want to withdraw your NFT and money.
        // If you are owner or didn't win then you can withdraw it easily
        await this.initAuction()
        const tx = await this.auction.signer.withdraw({value: ethers.utils.parseEther(amount)})
        return tx
    }

    isAuctionLive = async() => {
        await this.initAuction()
        const result = await this.auction.contract.isAuctionLive()
        return result
    }
}

module.exports = Auction