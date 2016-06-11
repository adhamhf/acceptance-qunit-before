import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

export default function(name, options = {}) {
  module(name, {
    before() {
      if (options.before) {
        options.before.apply(this, arguments);
        console.log('this is before in module-for-acceptance');
      }
    },
    beforeEach() {
      this.application = startApp();

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }

      destroyApp(this.application);
    }
  });
}
