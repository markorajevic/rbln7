<template>
  <div class="mailchimp">
    <div class="newsletter-input" id="mc_embed_signup">
      <form
        :action="config.url"
        method="get"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate subscr-form"
        target="_blank"
        @submit.prevent="submitMailchimp"
        novalidate
      >
        <input
          type="input"
          name="MERGE0"
          id="MERGE0"
          v-model="subscribeEmail"
          ref="inputValue"
          required
          :placeholder="$t('newsletter-placeholder')"
        >

        <div id="mce-responses" class="clear">
          <p
            :class="{'fade-out': !errorMsg}"
            class="response regular-font h6 text-white"
            id="mce-error-response"
            v-html="errorMsg"
          ></p>
        </div>

        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" :name="config.spamPrevent" tabindex="-1" value>
        </div>

        <button type="submit" id="submit-button" @click="submitMailChimp">
          <span class="text-white" v-html="config.sendButton"></span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "mailchimp",

  data: () => ({
    errorMsg: null,
    subscribeEmail: null
  }),

  props: ["config"],

  mounted() {},

  methods: {
    submitMailChimp(e) {
      let self = this;
      let $form = $("#mc-embedded-subscribe-form");
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
</script>
