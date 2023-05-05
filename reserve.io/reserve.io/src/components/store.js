import { reactive } from 'vue'

export const store = reactive({
    userAuthenticated: false,
    cart: [],
    userEmail: "",
    login() {
        this.userAuthenticated = true
    },
    logout() {
        this.userAuthenticated = false
        this.userEmail = ""
    }
})