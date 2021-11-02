import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | meeting', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:meeting');
    assert.ok(controller);
  });
});
