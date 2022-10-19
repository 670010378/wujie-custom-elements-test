(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class App1CustomElements extends HTMLElement {
      constructor() {
          super();
      }
      connectedCallback() {
          this.render();
      }
      render() {
          this.innerHTML = '<div>app1自定义组件</div>';
      }
  }
  window.customElements.define('app1-custom-elements', App1CustomElements);

}));
