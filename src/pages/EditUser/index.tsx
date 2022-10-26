import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import UserForm, { userInputs } from "../../components/forms/UserForm";
import { SubmitHandler } from "react-hook-form";
import { addUser, editUser } from "../../features/users/usersSlice";

export default function EditUser() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("id", id);
  const users = useAppSelector((state) => state.users.value);
  const user = users.find((user) => user.id === parseInt(id!));
  console.log("user", user);

  const handleEdit: SubmitHandler<userInputs> = (data) => {
    dispatch(editUser({ id: parseInt(id!), ...data }));
    navigate("/");
  };

  //   to do add handelEditUser and handleAddUser outside UserForm component
  //   pass param as function to UserForm component
  return (
    <div className="m-8 rounded border border-slate-300">
      <UserForm title={"Add User"} user={user!} handleUser={handleEdit} />
    </div>
  );
}
