const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let string = '( ' + value + (' )');
    this.chain.push(string);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw Error;
    }
    if (!((position >= 1) && (position <= this.chain.length))) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = this.chain.join('~~');
    this.chain = [];
    return string;
  }
};

module.exports = chainMaker;