import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import add from '../src/add.js';

describe('add', () => {
  it('should add two numbers correctly', () => {
    assert.equal(add(10, 20), 30);
  });
});