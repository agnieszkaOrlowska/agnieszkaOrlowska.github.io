//initialize serviceworker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    }

const app1 = Vue.createApp ({
    data() {
            return {
                email: "",
                password: ""
            }
        },
    methods: {
            form_log_button() {
                console.log (this.email + this.password)
            }
        }
    })