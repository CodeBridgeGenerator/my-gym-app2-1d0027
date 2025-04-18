const assert = require('assert');
const app = require('../../src/app');

describe('\'membershipplans\' service', () => {
  it('registered the service', () => {
    const service = app.service('membershipplans');

    assert.ok(service, 'Registered the service (membershipplans)');
  });
});
