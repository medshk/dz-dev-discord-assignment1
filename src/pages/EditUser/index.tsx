import React from "react";
import UserForm from "../../components/forms/UserForm";

export default function EditUser() {
	return (
		<div className="m-8 rounded border border-slate-300">
			<UserForm title={"Add User"} />
		</div>
	);
}
