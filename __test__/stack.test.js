'use strict';

// npm run test is finding an error "cannot resolve path"
// this connects to the Stack constructor I made in stack.js
// .. goes up to lib, lib/stack should be the right path so I'm not sure why it's broken
const Stack = require('../lib/stack');

describe('Test for pushing to top', () => {
  const stack = new Stack();
  test('pushToTop test', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.end.value).toEqual(3);
  });

  test('testing popOffTop', () => {
    stack.pop();
    expect(stack.end.value).toEqual(2);
  });

  test('Testing Peek', () => {
    expect(stack.peek()).toEqual(1);
  });

  test('Testing isEmpty', () => {
    expect(stack.empty()).toBeFalsy();
  });
});
