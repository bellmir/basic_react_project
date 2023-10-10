// router
import { createBrowserRouter } from "react-router-dom";
// components
import Home from "@/pages/Home/Home";
import Sample from "@/pages/Sample/Sample";
import NotFound from "@/pages/NotFound/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/sample",
		element: <Sample />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
export default router;
