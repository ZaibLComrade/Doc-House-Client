import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../layout/home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{ path: "/", element: <Home/> },
		]
	},
	{ path: "/login", element: <p>This is login page</p>},
	{ path: "/register", element: <p>This is register page</p>},
	{ path: "/*", element: <p>404 Not Found</p>},
])

export default router;
