import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-qunit-before/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | qunit before', {
  before() {
    console.log('this is before in qunit-before-test');
  }
});

test('visiting /qunit-before', function(assert) {
  visit('/qunit-before');

  andThen(function() {
    assert.equal(currentURL(), '/qunit-before');
  });
});
