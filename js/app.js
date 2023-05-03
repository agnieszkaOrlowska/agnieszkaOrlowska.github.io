//initialize serviceworker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    }
  
//vue stuff
const app = Vue.createApp({
      data() {
        return {
          message: 'Hello Vue!'
        }
      }
    })