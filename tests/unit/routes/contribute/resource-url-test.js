import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contribute/resource-url', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contribute/resource-url');
    assert.ok(route);
  });
});
