const assert = require('assert');
const app = require('../../src/app');

describe('\'renewallogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('renewallogs');

    assert.ok(service, 'Registered the service (renewallogs)');
  });
});
