<script>
import { store } from './store.js'
export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
    <header>
      <div v-show="!store.userAuthenticated">
        <img src="../assets/ghost_sad.png" height="50">
        <p>You are not logged in!</p>
      </div>
      <div v-show="store.userAuthenticated">
        <img src="../assets/ghost.png" height="50">
        <p>You are logged in as: {{ store.userEmail }}</p>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/providers">Providers</router-link></li>
          <li><router-link to="/login">Log in</router-link></li>
          <li><router-link to="/signup">Sign up</router-link></li>
          <button @click="store.logout()">Log out</button>
          <h3></h3>
        </ul>
      </nav>
    </header>
  </template>

