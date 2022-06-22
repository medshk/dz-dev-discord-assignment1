import AddUserBtn from "./components/buttons/AddUserBtn";
import DeleteBtn from "./components/buttons/DeleteBtn";
import EditBtn from "./components/buttons/EditBtn";
import SubmitBtn from "./components/buttons/SubmitBtn";
import LoginForm from "./components/forms/LoginForm";
import UserForm from "./components/forms/UserForm";
import UserTable from "./components/tables/UsersTable";
import AddUser from "./pages/AddUser";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/addUser" element={<AddUser />} />
					<Route path="/editUser" element={<EditUser />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
