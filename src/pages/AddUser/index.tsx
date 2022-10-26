import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import UserForm, { userInputs } from "../../components/forms/UserForm";
import { SubmitHandler } from "react-hook-form";

import { addUser } from "../../features/users/usersSlice";

export default function AddUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddUser: SubmitHandler<userInputs> = (data) => {
    dispatch(addUser(data));
    navigate("/");
  };
  return (
    <div>
      <UserForm title={"Add User"} handleUser={handleAddUser} />
    </div>
  );
}
