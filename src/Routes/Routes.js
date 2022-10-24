import { createBrowserHistory } from "@remix-run/router";
import Main from "../layout/Main";

export const routes = createBrowserHistory([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                
            }
        ]
    }
])