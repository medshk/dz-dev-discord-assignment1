import LoginForm from "../../components/forms/LoginForm";
import { inputs } from "../../components/forms/LoginForm";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { adminLogin } from "../../features/admin/adminActions";
import { Navigate } from "react-router-dom";

export default function Login() {
  const token = useAppSelector((state) => state.admin.adminTooken);
  console.log("token", token);
  const dispatch = useAppDispatch();
  const getCredentails = (data: inputs) => dispatch(adminLogin(data));
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid place-items-center">
      <LoginForm getCredentails={getCredentails} />
    </div>
  );
}
