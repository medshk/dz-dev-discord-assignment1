import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserTable from "../../components/tables/UsersTable";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getUsers } from "../../features/users/usersActions";
import { adminLogin } from "../../features/admin/adminActions";

export default function Dashboard() {
  const users = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     dispatch(getUsers());
  //   }, []);
  console.log("admin", users);
  return (
    <div className="m-4 p-8 border border-slate-300 rounded">
      <div className="pb-8 border-b border-b-slate-300 flex justify-between mb-8">
        <h1 className="text-3xl">Dashboard</h1>
        <Link to="/addUser">
          <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded">
            Add User
          </button>
        </Link>
      </div>
      {/* users table */}
      <UserTable users={users} />
    </div>
  );
}
