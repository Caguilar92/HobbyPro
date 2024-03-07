import { createRouter, createWebHistory } from 'vue-router'
import {getAuth,onAuthStateChanged} from "firebase/auth";
import LogInView from "@/views/LogInView.vue";
import MainDashboard from "@/components/MainDashboard.vue";
import ProfileView from "@/components/Profile.vue";
import CompletedProjectView from "@/components/CompletedProject.vue";
import DashBoard from "@/views/DashBoardView.vue";
const auth = getAuth();
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',redirect:'/dashboard',

    },

    {
      path:'/login',
      name:'login',
      component: LogInView
    },
    {
      path:'/dashboard',
      component:DashBoard,
      redirect:'/dashboard/main',
      children:[{
        path:'main',
        component:MainDashboard,
      }, {
        path:'profile',
        component:ProfileView
      }, {
        path:'completed_projects',
        component:CompletedProjectView
      }

      ]
    }


  ]
})

router.beforeEach((to, from, next) => {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not authenticated
      if (to.name !== 'login') {
        // If user is not authenticated and trying to access a page other than login, redirect to login
        next({ path: '/login' });
      } else {
        // Otherwise, allow navigation
        next();
      }
    } else {
      // User is authenticated, allow navigation to the requested page
      next();
    }
  });
});



