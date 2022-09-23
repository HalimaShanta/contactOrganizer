<template>
    <NavBar />
    <div>
    <form @submit.prevent="getData">
      <input type="search" class="search" v-model="search">
      <input type="submit" class="btn btn-primary">
    </form>
  
    <div>
      <contact-list v-for="contact in displayContactList" :key="contact.id" :contactData="contact"></contact-list>
    </div>
  </div>
  </template>
  
  <script>
    import NavBar from '@/components/Nav-Bar.vue'
    import contactList from './contacts/contact-list.vue';
  //import contact from '@/store/modules/contact';
  import axios from 'axios';
  
  export default {
    data(){
      return{
        search:'',
        
        
      }
    },
    name: 'Contact-List',
    components: {
      NavBar,
      contactList
    },
  
    computed:{
      displayContactList(){
        return this.$store.getters['contact/displayContact'];
        
      },
    },
     props: ['id'],
    created(){
      this.$store.dispatch('contact/getContact');
    },
    methods: {
      async getData(){
        const result = await axios.get(`https://contact-organizer-a2f2b-default-rtdb.firebaseio.com/${this.search}.json`);
          this.data = result.data;
          console.log(result.data)
      },
    }
   
  };
  </script>
  
  <style>
    .search {
      border-radius: 5px;
      outline: none;
      border: none;
     
      width: 50%;
  }
  
  </style>