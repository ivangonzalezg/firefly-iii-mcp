import test from 'node:test';
import assert from 'node:assert/strict';

import { tools } from '../build/tools.js';

test('tools collection is well-formed', () => {
  assert.ok(Array.isArray(tools), 'tools should be an array');
  assert.ok(tools.length > 0, 'tools array should not be empty');

  for (const tool of tools) {
    assert.ok(tool.name, 'tool must have a name');
    assert.ok(tool.description, `${tool.name} should have a description`);
    assert.ok(tool.method, `${tool.name} should declare HTTP method`);
    assert.ok(tool.pathTemplate, `${tool.name} should declare path template`);
    assert.ok(tool.zodShape, `${tool.name} should expose zod shape`);
  }
});
