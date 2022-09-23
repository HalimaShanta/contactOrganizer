<template>
    <div class="container mt-3">
      
      <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" class="contact-img">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">{{displayName}}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{ email }}</span></li>
                  <li class="list-group-item">Mobile No.: <span class="fw-bold">{{ phone }}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <!-- <router-link to="/contact" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link> -->
                <router-link :to="`/edit/${contactData.id}`" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                <button class="btn btn-danger my-1" @click.prevent="deleteContact(contactData.id)"><i class="fa fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
      import axios from "axios";

export default {
    data(){
        return {
        
        }
    },
    props:['contactData'],
    computed: {
        displayName(){
            return this.contactData.firstname+' '+this.contactData.lastname;
        },
        email(){
            return this.contactData.email;
        },
        phone(){
            return this.contactData.phone;
        },
        contactId(){
          return this.contactData.id;
        }
    },
    
    methods: {

      async deleteContact(id){
        let result = await axios.delete(`https://contact-organizer-a2f2b-default-rtdb.firebaseio.com/${id}.json`);
        console.log(result.data);
        location.reload();
        
      }

}
}
</script>

<style>
  .contact-img{
    width: 150px;
  }

</style>