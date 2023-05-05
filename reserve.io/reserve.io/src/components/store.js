import { reactive } from 'vue'

export const store = reactive({
    userAuthenticated: false,
    cart: [],
    cartTotal: 0,
    userEmail: "",
    
    login() {
        this.userAuthenticated = true
    },
    logout() {
        this.userAuthenticated = false
        this.userEmail = ""
    }
})