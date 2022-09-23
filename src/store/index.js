import { createStore } from 'vuex'
import contactModule from './modules/contact/index.js';

import messagesModules from './modules/messages/index.js';


// const store = new createStore.Store({
//   modules:{
//     contact:contactModule
//   }
// })

// export default store;


export default createStore({
  state: {
  },
  getters: {
    // displayContact:(state) => state.contact
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contact:contactModule,
    messages: messagesModules
  }
})
