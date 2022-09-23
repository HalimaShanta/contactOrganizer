<template>
    <NavBar />
    <div class="container">
      <div class="h2 fw-bold title">Create Contact</div>
        <router-link to="/" class="back btn btn-success btn-lg"><i class="fa fa-arrow-left"></i> Go Back</router-link>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis quam quis orci pellentesque, euismod mattis orci vestibulum. Pellentesque non mollis massa, ac scelerisque quam. Vestibulum finibus convallis odio, ac commodo velit mattis sed.</p>
      </div>
      <form>
        <div class="form-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" v-model="firstname" placeholder="Enter First Name">
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" v-model="lastname" placeholder="Enter Last Name">
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" v-model="email" placeholder="Enter Email">
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="number" v-model="phone" placeholder="Enter Phone Number">
          </div>
        </div>
        <div class="button">
          <input type="submit" class="btn btn-success" value="Save" @click.prevent="processForm()">
          <input type="submit" class="btn btn-danger" value="Clear Form" @click.prevent="ClearForm()">
        </div>
      </form>
  </template>
  
  <script>
  
  import NavBar from "./Nav-Bar.vue";
  export default {
      name: 'Add-Contact',
   components: { NavBar},
   data(){
    return {
      firstname:'',
      lastname:'',
      email:'',
      phone:''
    }
   },
   props:['id'],
   methods:{
    processForm(){
      if(this.firstname !== '' && this.lastname !== '' && this.email !== '' && this.phone !== ''){
        this.$store.dispatch('messages/saveMessage',{
          id: this.$route.params.id,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone
  
        });
        this.$router.push({ path: '/'});
      }
    },
    ClearForm(){
      location.reload();
    }
  }
  };
  </script>
  
  <style>
  body{
    height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    
  }
  .back {
    float: right;
  }
  .container{
    max-width: 700px;
    width: 100%;
  }
  .container .title {
    position: relative;
    color: #6e0260;
  }
  .container .title::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
  }
  form {
    margin-left: 200px;
  }
  .container form .form-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  form .form-details .input-box{
    width: calc(100% /2 - 20px);
    /* margin: 20px 0 12px 0; */
    margin-bottom: 15px;
  }
  .form-details .input-box .details {
    font-weight: 500;
    margin-bottom: 5px;
    display: block;
  }
  .form-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
  }
  form .button {
    height: 40px;
    margin: 20px 0;
  
  }
  form .button input{
    height: 100%;
    width: 24%;
    outline: none;
    
    
  }
  
  </style>