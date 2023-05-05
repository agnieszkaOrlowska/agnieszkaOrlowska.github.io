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
      reviews: []
    }
  },
  methods: {
    renderReviews: async function(){
    const reviewsSnapshot = await getDocs(collection(firestore, `uslugodawcy/${this.$route.params.providerId}/recenzje`));
    reviewsSnapshot.forEach((doc) => {
      var newReview = {
          id: doc.id,
          imageURL: doc.data()['URLzdjecia'],
          login: doc.data()['login'],
          rating: doc.data()['ocena'],
          title: doc.data()['tytul'],
          contents: doc.data()['tresc']
        }
          this.reviews.push(newReview)})
        }
    },
    beforeMount() {
    this.renderReviews()
    }
    }
</script>

<template>
    <h1>Reviews for {{ this.$route.params.providerName }}:</h1>

    <div class="container" v-for="review in reviews">
        <div class="row">
        <div class="col-md-4">
            <div class="card">
            <div class="card-header">
                {{ review.title }}
            </div>
            <div class="card-body">
                <p class="card-text">Posted by: {{ review.login }}</p>
            </div>
            <div class="card-body">
                <img :src="review.imageURL" width="700" height="400">
            </div>
            <div class="card-body">
                <p class="card-text">{{ review.rating }}/5</p>
            </div>
            <div class="card-body">
                <p class="card-text">{{ review.contents }}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <router-link :to="`/services/${this.$route.params.providerName}/${this.$route.params.providerId}/reviews/add`">
      <button>Add your own review</button>
    </router-link>
</template>