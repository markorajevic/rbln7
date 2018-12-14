<template>
  <div class="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";

export default {
  name: "smooth-scroll", // vue component name
  data: () => ({
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
  }),
  props: ["customOptions", "preventEvents", "scrollTo"],
  computed: {
    smoothOptions() {
      var options = _.merge({}, this.defaults, this.customOptions);
      return options;
    }
  },

  beforeDestroy() {
    if (this.scrollbar) {
      this.scrollbar.removeListener();
      this.scrollbar.destroy();
    }
  },
  mounted() {
    this.initSmooth(this.$el);
  },

  watch: {
    scrollTo(y) {
      this.scrollbar.scrollTo(0, y, 600);
    }
  },
  methods: {
    initSmooth(el) {
      var self = this;

      // let ticking;
      // if (this.isMobile) {
      //   this.$el.removeEventListener('scroll', self.onScroll);
      //   this.$el.addEventListener('scroll', self.onScroll)
      //   return
      // }

      // Scrollbar.use(OverscrollPlugin);

      this.scrollbar = Scrollbar.init(el, this.smoothOptions);

      this.$bus.$on("updateScrollbar", e => {
        this.scrollbar.update();
      });

      if (this.preventEvents) {
        return;
      }

      this.scrollbar.addListener(status => {
        if (this.transitioning) {
          return;
        }
      });
    }
  }
};
</script>
