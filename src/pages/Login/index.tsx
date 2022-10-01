import LoginForm from "../../components/forms/LoginForm";
import { inputs } from "../../components/forms/LoginForm";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { adminLogin } from "../../features/admin/adminActions";
import { useEffect } from "react";
import { getUsers } from "../../features/users/usersActions";

export default function Login() {
	const count = useAppSelector((state) => state.admin.adminTooken);

	console.log("gggg", count);
	const dispatch = useAppDispatch();
	const getCredentails = (data: inputs) => dispatch(adminLogin(data));

	dispatch(getUsers());
	const users = useAppSelector((state) => state.users.value);
	a;
	console.log("usersssss", users);

	return (
		<div className="grid place-items-center">
			<LoginForm getCredentails={getCredentails} />
		</div>
	);
}
