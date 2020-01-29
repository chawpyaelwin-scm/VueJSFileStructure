import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

/**
 * View Components
 */
// import Home from "./views/Home.vue";
import RegisterForm from "./components/RegisterForm.module.vue";
import SignIn from "./views/SignIn.vue";
import UserList from "./components/UserList.vue";
const ORDER_CREATE_META = {
  header: false,
  headerLeft: "CANCEL_ORDER"
};

const localData = JSON.parse(localStorage.getItem("vuex"));

const AppRoutes = [
  {
    path: "/",
    redirect: () => {
      return "/sign-in";
      // if (localData && localData.user.name !== "") {
      //   if (localData.user.role === "ADMIN") {
      //     return "/admin/dashboard";
      //   } else {
      //     return "/home";
      //   }
      // } else {
      //   return "/sign-in";
      // }
    },
    component: () => {
      return SignIn;
      // if (localData.user.name !== "") {
      //   if (localData.user.role === "ADMIN") {
      //     return AdminDashBoard;
      //   } else {
      //     return Home;
      //   }
      // } else {
      //   return SignIn;
      // }
    }
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/createForm",
    component: RegisterForm,
    meta: {
      title: "CREATE FORM"
    }
  },
  {
    path: "/userlist",
    component: UserList,
    meta: {
      title: "User List"
    }
  }

];

export const router = new Router({
  routes: [...AppRoutes]
});
//  router.beforeEach((to, from, next) => {
//   const localData = JSON.parse(localStorage.getItem("vuex"));
//   next("sign-in");
  // if (to.matched.some(record => record.meta.adminAuth)) {
  //   if (!localData) {
  //     next("sign-in");
  //   } else {
  //     if (
  //       localData &&
  //       (localData.user.role === "CLIENT_USER" ||
  //         localData.user.role === "CLIENT_CONTRIBUTOR")
  //     ) {
  //       next("/not-found");
  //     } else {
  //       next();
  //     }
  //   }
  // } else if (to.matched.some(record => record.meta.userAuth)) {
  //   if (!localData) {
  //     next("sign-in");
  //   } else {
  //     if (localData && localData.user.role === "ADMIN") {
  //       next("/not-found");
  //     } else {
  //       next();
  //     }
  //   }
  // } else {
  //   next();
  // }
// });
