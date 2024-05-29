'use strict';

//////////////////////////////////////////////////////////

  const { createApp } = Vue

  createApp({
    data() {
      return {

        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: [],
        numEmails: 10,

      }
    },

    methods: {

      apiCall() {

        axios.get(this.url).then((response) => {
          this.emails.push(response.data.response);
        })

      },

      isLoading () {
        if (this.emails.length < this.numEmails) return true;
      },

    },

    created() {
      for(let i = 0; i < this.numEmails; i++) {
        this.apiCall();
      }
    }
  }).mount('#app')