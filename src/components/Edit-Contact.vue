<template>
    <NavBar />
    <div class="container">
          <div class="h2 text-success fw-bold">Edit Contact</div>
          <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis quam quis orci pellentesque, euismod mattis orci vestibulum. Pellentesque non mollis massa, ac scelerisque quam. Vestibulum finibus convallis odio, ac commodo velit mattis sed. Fusce sodales facilisis efficitur. Mauris fringilla lobortis mi. Ut sagittis nec nisi ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis ac dolor eget ipsum ultricies tristique.</p>
        </div>
          <form>
      <div class="form-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" v-model="contacts.firstname" placeholder="Update First Name">
        </div>
        <div class="input-box">
          <span class="details">Last Name</span>
          <input type="text" v-model="contacts.lastname" placeholder="Update Last Name">
        </div>
        <div class="input-box">
          <span class="details">Email</span>
          <input type="text" v-model="contacts.email" placeholder="Update Email">
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" v-model="contacts.phone" placeholder="Update Phone Number">
        </div>
      </div>
      <div class="button">
        <input type="submit" class="btn btn-success" value="Update" @click.prevent="updateContact()">
      </div>
    </form>
  </template>

  <script>
    import NavBar from "./Nav-Bar.vue";
    import axios from "axios";
    
    export default {
    name: 'Edit-Contact',
    components: { NavBar},
    data: function (){
        return {
            
            
            contacts: {
                contactId: this.$route.params.id,
                firstname:'',
                lastname:'',
                email:'',
                phone:''
            }
        }
    },
    methods:{
        async updateContact(){
            console.log(this.contacts)
            await axios.put(`https://contact-organizer-a2f2b-default-rtdb.firebaseio.com/${this.$route.params.id}.json`,{
                id: this.$route.params.id,
                firstname: this.contacts.firstname,
                lastname: this.contacts.lastname,
                email: this.contacts.email,
                phone: this.contacts.phone
            });
                this.$router.push({ path: '/contact'});
            }
            
            
        },
    mounted: async function(){
        const result = await axios.get(`http://contact-organizer-a2f2b-default-rtdb.firebaseio.com/${this.$route.params.id}.json`);
        console.log(result.data);
        this.contacts = result.data;
    }
    }
  </script>