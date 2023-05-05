<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, } from 'firebase/firestore';
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
const firestore = getFirestore(app);

export default {
  data() {
    return {
      providers: []
    }
  },
  methods: {
    renderProviders: async function(){
    const providersSnapshot = await getDocs(collection(firestore, "uslugodawcy"));
    providersSnapshot.forEach((doc) => {
      var newProvider = {
          name: doc.data()['nazwa'],
          description: doc.data()['opis'],
          rating: doc.data()['ocena']
        }
          this.providers.push(newProvider)})
        }
    },
    created() {
   this.renderProviders()
    }
    }
</script>

<template>
    <div class="container" v-for="provider in providers">
        <div class="row">
        <div class="col-md-4">
            <div class="card">
            <div class="card-header">
                {{ provider.name }}
            </div>
            <div class="card-body">
                <p class="card-text">{{ provider.description }}</p>
            </div>
            <div class="card-body">
                <p class="card-text">{{ provider.rating }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>