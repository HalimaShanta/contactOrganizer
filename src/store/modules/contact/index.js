const getters = {
    displayContact:(state) => state.contact
}

const actions = {
    async getContact(context){
        const response = await fetch('https://contact-organizer-a2f2b-default-rtdb.firebaseio.com/.json',{
          method:'GET'
        });
        const responseData = await response.json();
        const modifiedData = [];

        for (const data in responseData){
            modifiedData.push(responseData[data]);
        }
  
        context.commit('updateContactList', modifiedData);
      }
    }

const mutations = {
    updateContactList(state,payload){
        state.contact = payload;
        }
}

export default{
    namespaced:true,
    state(){
        return {
            contact:null
        }
    },
    getters,
    actions,
    mutations
}