import { createRouter, createWebHistory } from 'vue-router'
import {getAuth,onAuthStateChanged} from "firebase/auth";
import LogInView from "@/views/LogInView.vue";
import MainDashboard from "@/components/MainDashboard.vue";
import ProfileView from "@/components/Profile.vue";
import CompletedProjectView from "@/components/CompletedProject.vue";
import DashBoard from "@/views/DashBoardView.vue";
import CreateProject from "@/components/CreateProject.vue";
import Library from "@/components/Library.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import RegisterView from "@/views/RegisterView.vue";
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
      path:'/forgot-password',
      name:'forgot-password',
      component: ForgotPasswordView
    },
    {
      path:'/register',
      name:'register',
      component: RegisterView
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
      }, {
        path:'create_project',
        component:CreateProject
      }, {
        path: 'library',
        component:Library
      }

      ]
    }


  ]
})

router.beforeEach((to, from, next) => {

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not authenticated
      if(to.name === 'forgot-password' || to.name==='register') {
        next();
      }
      else if (to.name !== 'login') {
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



