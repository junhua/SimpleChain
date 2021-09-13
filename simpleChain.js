class Block {
    constructor(data) {
        this.height = 0
        this.body = data
        this.time = 0
        this.previousblockhash = ""
        this.hash = ""
    }
}

class Blockchain {
    constructor() {
        this.chain = []
    }

    addBlock(newBlock) {
        this.chain.push(newBlock)
    }
}