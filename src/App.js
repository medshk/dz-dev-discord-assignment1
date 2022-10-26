import AddUser from "./pages/AddUser";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import { useAppSelector } from "./app/hooks";

function App() {
  const isLoggIn = useAppSelector((state) => state.admin.adminTooken);
  console.log("app login", isLoggIn);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggIn ? <Dashboard /> : <Navigate replace to={"/login"} />
            }
          />
          <Route
            exact
            path="/login"
            element={!isLoggIn ? <Login /> : <Navigate replace to={"/"} />}
          />
          <Route
            exact
            path="/addUser"
            element={
              isLoggIn ? <AddUser /> : <Navigate replace to={"/login"} />
            }
          />
          <Route
            exact
            path="/editUser/:id"
            element={
              isLoggIn ? <EditUser /> : <Navigate replace to={"/login"} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
