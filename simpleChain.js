const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data) {
        this.height = 0
        this.body = data
        this.time = 0
        this.previousBlockHash = ""
        this.hash = ""
    }
}

class Blockchain {
    constructor() {
        this.chain = []
        this.addBlock(new Block("First block in the chain = Genesis block"))
    }

    addBlock(newBlock) {
        if (this.chain.length>0){
            newBlock.previousBlockHash = this.chain[this.chain.length-1].hash
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()
        newBlock.height = this.chain.length
        newBlock.time = new Date().getTime().toString().slice(0,-3)
        this.chain.push(newBlock)
    }
}