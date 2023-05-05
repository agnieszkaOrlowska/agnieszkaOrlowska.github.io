<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { store } from "./store.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVOhJEWMLfgI-wcNowIxo2YknhJB5c8LU",
  authDomain: "reserveio.firebaseapp.com",
  projectId: "reserveio",
  storageBucket: "reserveio.appspot.com",
  messagingSenderId: "666994813739",
  appId: "1:666994813739:web:6c2a95c15c639d3e73f36e",
  measurementId: "G-6H6FXQ5QXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
    data() {
      return {
        email: "",
        password: "",
        store,
      }
    },
    methods: {
        signIn: async function(){
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then(store.userAuthenthicated=true,
            store.userEmail=this.email)
            .catch (error =>  {var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
    },
    }}
</script>

<template>
    <div class="container">
        <h1>Log in:</h1>
   <label for="uname"><b>E-mail</b></label>
   <input type="text" placeholder="Enter Username" name="uname" required v-model="email">
   <div></div>
   <label for="psw"><b>Password</b></label>
   <input type="password" placeholder="Enter Password" name="psw" required v-model="password">
   <div></div>
   <button type="submit" @click="signIn">Login</button>
 </div>
</template>