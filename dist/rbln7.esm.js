import Scrollbar from 'smooth-scrollbar';

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
  props: ["customOptions", "preventEvents", "scrollTo"],
  computed: {
    smoothOptions: function smoothOptions() {
      var options = _.merge({}, this.defaults, this.customOptions);
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

      // let ticking;
      // if (this.isMobile) {
      //   this.$el.removeEventListener('scroll', self.onScroll);
      //   this.$el.addEventListener('scroll', self.onScroll)
      //   return
      // }

      // Scrollbar.use(OverscrollPlugin);

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

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  SmoothScroll: SmoothScroll
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

export { SmoothScroll };
