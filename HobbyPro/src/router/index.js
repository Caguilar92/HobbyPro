import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '../views/MainDashboard.vue'
import ProfileView from '../views/ProfileView.vue'
import ProjectView from '../views/ProjectView.vue'
import CompletedProjectView from '../views/CompletedProjectViewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainDashboard',
      component: MainDashboard
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/completedProject',
      name: 'completedProject',
      component: CompletedProjectView
    }
  ]
})

export default router
