import About from "../About";
import Error from "../Error";
import Home from "../Home";
import MainLayout from "../MainRoute/MainRoute";
import UserDetails from "../UserDetails";
import UserInfoOutlet from "../UserInfoOutlet";
import Users from "../Users";

export const Routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "users",
        element: <UserInfoOutlet />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ":userId",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
];
//elementin childreni varsa Outlet olmalidir parentde
