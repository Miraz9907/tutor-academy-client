import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import PremiumCourse from "../../Pages/Courses/PremiumCourse/PremiumCourse";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/courses',
            loader: () => fetch('http://localhost:5000/courses'),
            element: <Courses></Courses>
         },
         
         {
            path: '/courses/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
           
         },
         {
            path: 'courses/:idd/coursesss/:id',
            element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>,
            // loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            loader: ({params}) => fetch(`http://localhost:5000/coursesss/${params.idd.id}`)
         },
         {
            path: '/faq',
            element: <FAQ></FAQ>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
        ]
      }
])