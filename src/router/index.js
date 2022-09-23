import AddContactVue from '@/components/Add-Contact.vue'
import EditContactVue from '@/components/Edit-Contact.vue'
import ContactListVue from '@/components/Contact-List.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    // children: [
    //   {
    //     path: ':contactId',
    //     component: EditContactVue,
    //     props: true
    //   }
    // ],
    component: ContactListVue
  },
  {
    path: '/add',
    name: 'addcontact',
    component: AddContactVue
  },
  {
    path: '/edit/:id',
    props: true,
    name: 'editContact',
    component: EditContactVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
