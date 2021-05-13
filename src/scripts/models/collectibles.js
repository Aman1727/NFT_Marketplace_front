const {getCollectiblesContract} = require("../contracts/collectibles");
const ethers = require("ethers");

class Collectibles {
    constructor(provider, signer, collectiblesAddress) {
        this.provider = provider
        this.signer = signer
        this.collectiblesAddress = collectiblesAddress
        this.collectibles = null
    }

    initCollectibles = async() => {
        if(this.collectibles) return
        this.collectibles = await getCollectiblesContract(this.provider, this.signer, this.collectiblesAddress)
    }

    create = async(metadataURI, royaltyPercent, price) => {
        await this.initCollectibles()
        // No minting charge: {value: ethers.utils.parseEther("0.2")}
        const tx = await this.collectibles.signer.mint(metadataURI, royaltyPercent, ethers.utils.parseEther(price))
        return tx
    }

    getTokenIdsByOwner = async(ownerAddress) => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokenIdsByOwner(ownerAddress);
        return tokenIds;
    }


    getTokenURIsByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenURIs = await this.collectibles.contract.getTokenURIsByIds(tokenIds);
        return tokenURIs;
    }

    sell = async(tokenId, price) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.sell(tokenId, ethers.utils.parseEther(price))
        return tx
    }

    buy = async(tokenId, amount) => {
        // Make sure you include sellCharge in amount
        await this.initCollectibles()
        const tx = await this.collectibles.signer.buy(tokenId, {value: amount})
        return tx
    }

    getTokenIdsForSale = async() => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokenIdsForSale()
        return tokenIds
    }

    getTokenPriceByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenPrices = await this.collectibles.contract.getTokenPriceByIds(tokenIds)
        return tokenPrices
    }

    getTokenIdsForSaleByOwner = async(ownerAddress) => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokenIdsForSaleByOwner(ownerAddress);
        return tokenIds;
    }

    sellFeePercent = async() => {
        await this.initCollectibles()
        const sellFeePercentage = await this.collectibles.contract.sellFeePercent()
        return sellFeePercentage
    }
    createAuction = async(bidIncrement, startBlock, endBlock, tokenId) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.createAuction(bidIncrement, startBlock, endBlock, tokenId)
        return tx
    }
    getAllAuctions = async() => {
        await this.initCollectibles()
        const allAuctions = await this.collectibles.contract.getAllAuctions()
        return allAuctions
    };

    tokenRoyaltyPercent = async(tokenId) => {
        await this.initCollectibles()
        const royaltyPercent = await this.collectibles.contract.tokenRoyaltyPercent(tokenId)
        return royaltyPercent
    }

    getTokenPriceWithFeesById= async(tokenId) => {
        await this.initCollectibles()
        const totalAmount = await this.collectibles.contract.getTokenPriceWithFeesById(tokenId)
        return totalAmount
    }

    ownerOf = async(tokenId) => {
        await this.initCollectibles()
        const owner = await this.collectibles.contract.ownerOf(tokenId)
        return owner
    }

    creatorOf = async(tokenId) => {
        await this.initCollectibles()
        const creator = await this.collectibles.contract.creatorOf(tokenId)
        return creator
    }

    ownerSend = async() => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.ownerSend()
        return tx
    }

    changeSellFeePercent = async(feePercent) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.changeSellFeePercent(feePercent)
        return tx
    }
}

module.exports = Collectibles
