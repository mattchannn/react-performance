import React from "react";
import ExploreIcon from "@material-ui/icons/Explore";
import Looks4Icon from "@material-ui/icons/Looks4";
import ShowChartIcon from "@material-ui/icons/ShowChart";
//import { Insights } from "./pages";
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Insights = React.lazy(() => import("./pages/Insights/Insights"));
const Products = React.lazy(() => import("./pages/Products"));



export default {
  items: [
    {
      path: "/",
      name: "Dashboard",
      type: "link",
      icon: ExploreIcon,
      component: Dashboard,
    },
    {
      path: "/products",
      name: "Products",
      type: "link",
      icon: Looks4Icon,
      component: Products,
    },
    {
      path: "/insights",
      name: "Insights",
      type: "link",
      icon: ShowChartIcon,
      component: Insights,
    },
  ],
};
