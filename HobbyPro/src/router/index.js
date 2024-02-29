import { createRouter, createWebHistory } from 'vue-router'
import MainDashboard from '../views/MainDashboard.vue'
import ProfileView from '../views/ProfileView.vue'
import ProjectDetailsView from '../views/project/ProjectDetailsView.vue'
import StageDetailsView from '../views/project/StageDetailsView.vue'
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
      path: '/project/:id',
      name: 'projectDetails',
      component: ProjectDetailsView,
      prop: true
    },
    {
      path: '/completedProject',
      name: 'completedProject',
      component: CompletedProjectView
    },
    {
      path: '/stage/:id',
      name: 'StageDetails',
      components: StageDetailsView,
      props: true
    }
  ]
})

export default router
