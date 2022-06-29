import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Home from '../pages/Home.vue'
import Index from "../pages/index.vue";
import ProjectManage from '../pages/projectManage/ProjectManage.vue';
import ProjectDetail from '../pages/projectManage/ProjectDetail.vue'
import InfoShow from '../pages/infoManage/InfoShow.vue';
import InfoModify from '../pages/infoManage/InfoModify.vue';
import Error from '../pages/error/Error.vue';
export const routes = [

  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [ //通过children配置子级路由
      {
        path: "infoShow",
        name: "infoShow",
        component: InfoShow,
      },
      {
        path: "infoModify",
        name: "infoModify",
        component: InfoModify,
      },
      {
        path: "projectManage",
        name: "projectManage",
        component: ProjectManage,
      },
      {
        path: "projectDetail/:id",
        name: "projectDetail",
        component: ProjectDetail,
      },
      {
        path: "index",
        name: "index",
        component: Index,
      },
    ]
  },

  {
    path: "/error",
    name: "error",
    component: Error,
  },
  {
    // path: "*",
    path: '/',
    redirect: "/home/index"
  },
]