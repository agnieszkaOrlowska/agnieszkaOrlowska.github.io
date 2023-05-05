import { reactive } from 'vue'

export const store = reactive({
    userAuthenticated: false,
    cart: [],
    userEmail: ""
})