'use strict';

class Queue {
  constructor() {
    this._storage = [];
  }

  enqueue(value) {
    this._storage.push(value);
  }

  dequeue() {
    return this._storage.shift();
  }

  peek() {
    return this._storage[0];
  }

  isEmpty() {
    return !this._stoage; //this is not 100%
  }
}

module.exports = Queue;
