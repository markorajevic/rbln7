<template>
  <div class="intersection">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "intersection",
  data: () => ({
    visible: false,

    defaults: {
      root: null,
      rootMargin: "0%",
      threshold: [0.15]
    }
  }),

  mixins: [],

  props: ["customOptions"],

  watch: {
    visible(v) {}
  },

  computed: {
    intersectionOptions() {
      var options = _.merge({}, this.defaults, this.customOptions);
      return options;
    }
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

  mounted() {
    setTimeout(() => {
      this.observer = new IntersectionObserver(
        this.callback,
        this.intersectionOptions
      );
      this.observer.observe(this.$el);
    }, 0);
  },

  methods: {
    callback(a, elem) {
      let self = this;

      this.visible = a[0].isIntersecting;

      if (this.visible) {
        this.$emit("enter", elem[0]);
      } else {
        this.$emit("leave", elem[0]);
      }
    }
  }
};
</script>
