import Vue from 'vue';
import VueValidator from 'vue-validator';

Vue.use(VueValidator);

window.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: document.getElementById('sample'),
    methods: {
      onSubmit: function(e) {
        this.$validate(true, () => {
          if(this.$vali.invalid) {
            e.preventDefault();
          }
        });
      },
    },
  });

});
