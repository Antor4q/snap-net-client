import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Home/Explore/Explore";
import Messages from "../pages/Home/Messages/Messages";
import Notifications from "../pages/Home/Notifications/Notifications";
import Bookmarks from "../pages/Home/Bookmarks/Bookmarks";
import Profile from "../pages/Home/Profile/Profile";
import SignUp from "../pages/Home/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Root/></PrivateRoute>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
       
        {
          path: "explore",
          element: <Explore/>
        },
        {
          path: "messages",
          element: <Messages/>
        },
        {
          path: "notifications",
          element: <Notifications/>
        },
        {
          path: "bookmarks",
          element: <Bookmarks/>
        },
        {
          path: "profile",
          element: <Profile/>
        }
      ]
    },
    {
      path: "signIn",
      element: <SignIn/>
    },
    {
      path: "signUp",
      element: <SignUp/>
    }
  ]);

export default router;