'use strict';

const Node = require('./node');

module.exports = class Stack {
  constructor() {
    this.top = null;
  }

  pushToTop(value) {
    const node = new Node(value);

    node.next = this.top;
    this.top = node;
    return this;
  }

  popOffTop() {
    this.top = this.top.next;
    return this;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }
};
