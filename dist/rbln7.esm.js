import Scrollbar from 'smooth-scrollbar';
import $ from 'jquery';

//

var script = {
  name: "smooth-scroll", // vue component name
  data: function () { return ({
    speed: 600,
    defaults: {
      damping: 0.1,
      renderByPixels: true,
      plugins: {
        overscroll: {
          enable: true,
          maxOverscroll: 150,
          damping: 0.2
        }
      }
    }
  }); },
  props: ["options", "preventEvents", "scrollTo", "overscroll"],
  computed: {
    smoothOptions: function smoothOptions() {
      var options = _.merge({}, this.defaults, this.options);
      return options;
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this.scrollbar) {
      this.scrollbar.removeListener();
      this.scrollbar.destroy();
    }
  },
  mounted: function mounted() {
    this.initSmooth(this.$el);
  },

  watch: {
    scrollTo: function scrollTo(y) {
      this.scrollbar.scrollTo(0, y, 600);
    }
  },
  methods: {
    initSmooth: function initSmooth(el) {
      var this$1 = this;
      // console.log("dadadada");
      // if (this.overscroll) {
      // Scrollbar.use(OverscrollPlugin);
      // }
      this.scrollbar = Scrollbar.init(el, this.smoothOptions);

      this.$bus.$on("updateScrollbar", function (e) {
        this$1.scrollbar.update();
      });

      if (this.preventEvents) {
        return;
      }

      this.scrollbar.addListener(function (status) {
        if (this$1.transitioning) {
          return;
        }
      });
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "scroll-wrapper" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/Marko/Desktop/rbln7/src/lib-components/js/SmoothScroll.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var SmoothScroll = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$1 = {
  name: "intersection",
  data: function () { return ({
    visible: false,

    defaults: {
      root: null,
      rootMargin: "0%",
      threshold: [0.15]
    }
  }); },

  mixins: [],

  props: ["customOptions"],

  watch: {
    visible: function visible(v) {}
  },

  computed: {
    intersectionOptions: function intersectionOptions() {
      var options = _.merge({}, this.defaults, this.customOptions);
      return options;
    }
  },

  beforeDestroy: function beforeDestroy() {
    this.observer.disconnect();
  },

  mounted: function mounted() {
    var this$1 = this;

    setTimeout(function () {
      this$1.observer = new IntersectionObserver(
        this$1.callback,
        this$1.intersectionOptions
      );
      this$1.observer.observe(this$1.$el);
    }, 0);
  },

  methods: {
    callback: function callback(a, elem) {

      this.visible = a[0].isIntersecting;

      if (this.visible) {
        this.$emit("enter", elem[0]);
      } else {
        this.$emit("leave", elem[0]);
      }
    }
  }
};

/* script */
            var __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "intersection" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/Marko/Desktop/rbln7/src/lib-components/js/Intersection.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Intersection = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
var script$2 = {
  name: "mailchimp",

  data: function () { return ({
    errorMsg: null,
    subscribeEmail: null
  }); },

  props: ["config"],

  mounted: function mounted() {},

  methods: {
    submitMailChimp: function submitMailChimp(e) {
      var self = this;
      var $form = $("#mc-embedded-subscribe-form");
      e.preventDefault();
      $.ajax({
        type: $form.attr("method"),
        url: $form.attr("action"),
        data: $form.serialize(),
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        error: function(err) {
          console.log("err");
        },
        success: function(data) {
          if (data.result === "success") {
            self.sent = true;
            self.errorMsg = "";
            self.subscribeEmail = "";
            self.sent = false;
            self.$emit("sent", true);
          } else {
            self.$emit("sent", false);
            self.errorMsg = data.msg;
          }
        }
      });
    }
  }
};

/* script */
            var __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "mailchimp" }, [
    _c(
      "div",
      { staticClass: "newsletter-input", attrs: { id: "mc_embed_signup" } },
      [
        _c(
          "form",
          {
            staticClass: "validate subscr-form",
            attrs: {
              action: _vm.config.url,
              method: "get",
              id: "mc-embedded-subscribe-form",
              name: "mc-embedded-subscribe-form",
              target: "_blank",
              novalidate: ""
            },
            on: {
              submit: function($event) {
                $event.preventDefault();
                return _vm.submitMailchimp($event)
              }
            }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.subscribeEmail,
                  expression: "subscribeEmail"
                }
              ],
              ref: "inputValue",
              attrs: {
                type: "input",
                name: "MERGE0",
                id: "MERGE0",
                required: "",
                placeholder: _vm.$t("newsletter-placeholder")
              },
              domProps: { value: _vm.subscribeEmail },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.subscribeEmail = $event.target.value;
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "clear", attrs: { id: "mce-responses" } },
              [
                _c("p", {
                  staticClass: "response regular-font h6 text-white",
                  class: { "fade-out": !_vm.errorMsg },
                  attrs: { id: "mce-error-response" },
                  domProps: { innerHTML: _vm._s(_vm.errorMsg) }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: { position: "absolute", left: "-5000px" },
                attrs: { "aria-hidden": "true" }
              },
              [
                _c("input", {
                  attrs: {
                    type: "text",
                    name: _vm.config.spamPrevent,
                    tabindex: "-1",
                    value: ""
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                attrs: { type: "submit", id: "submit-button" },
                on: { click: _vm.submitMailChimp }
              },
              [
                _c("span", {
                  staticClass: "text-white",
                  domProps: { innerHTML: _vm._s(_vm.config.sendButton) }
                })
              ]
            )
          ]
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/Marko/Desktop/rbln7/src/lib-components/js/MailChimp.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var MailChimp = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  MailChimp: MailChimp,
  SmoothScroll: SmoothScroll,
  Intersection: Intersection
});

// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { MailChimp, SmoothScroll, Intersection };
