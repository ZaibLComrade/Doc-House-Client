import {Outlet} from "react-router-dom";
import Navbar from "./layout/home/shared/Navbar";

export default function App() {
	return <>
		<Navbar/>
		<Outlet/>
	</>
}
