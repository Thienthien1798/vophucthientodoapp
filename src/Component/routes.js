import { Todo } from "./Todo";
import { Home } from "./Home";
export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/To-Do-App",
        component: Todo,
        label: "To Do App" 
    },
    {
        path:"/Home",
        component:Home,
        label:"Home"
    },
    {
        path:"",
        component:Home,
    }
];