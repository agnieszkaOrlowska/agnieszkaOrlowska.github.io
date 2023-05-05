<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
      services: []
    }
  },
  methods: {
    renderServices: async function(){
    const servicesSnapshot = await getDocs(collection(firestore, `uslugodawcy/${this.$route.params.providerId}/uslugi`));
    servicesSnapshot.forEach((doc) => {
      var newService = {
          id: doc.id,
          name: doc.data()['nazwa'],
          description: doc.data()['opis'],
          price: doc.data()['cena']
        }
          this.services.push(newService)})
        }
    },
    beforeMount() {
    this.renderServices()
    }
    }
</script>

<template>
    <h1>Available services from {{ this.$route.params.providerName }}:</h1>
    <router-link :to="`/services/${this.$route.params.providerName}/${this.$route.params.providerId}/reviews`">
      <h2>Check reviews</h2>
    </router-link>
    <div class="container" v-for="service in services">
        <div class="row">
        <div class="col-md-4">
            <div class="card">
            <div class="card-header">
                {{ service.name }}
            </div>
            <div class="card-body">
                <p class="card-text">{{ service.description }}</p>
            </div>
            <div class="card-body">
                <p class="card-text">{{ service.price }}PLN</p>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>