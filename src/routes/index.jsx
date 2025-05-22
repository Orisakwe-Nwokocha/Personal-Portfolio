import Layout from "../components/layout";
import Home from "../pages/home/home";
import QuizApp from "../pages/javaTutorials/coreJava";

export const ROUTE = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            }
        ]
    },
    {
        path: "/core-java/quiz",
        element: <QuizApp/>,
    }
]