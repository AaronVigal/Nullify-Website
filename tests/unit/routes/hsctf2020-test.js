import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hsctf2020', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hsctf2020');
    assert.ok(route);
  });
});
