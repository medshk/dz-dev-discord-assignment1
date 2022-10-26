import React from "react";
import { users } from "../../../features/users/usersSlice";
import EditBtn from "../../buttons/EditBtn";
import TableRow from "./TableRow";

export default function UserTable({ users }: users) {
  return (
    <table className="table-auto w-full ">
      <thead className="p-8">
        <tr className="border-t-slate-500 border-t border-b  border-b-slate-400 h-10 ">
          <th className="text-center">id</th>
          <th className="text-center">Name</th>
          <th className="text-center">Username</th>
          <th className="text-center">Email</th>
          <th className="text-center">City</th>
          <th className="text-center">Edit</th>
          <th className="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* <TableRow user=/>
        <TableRow />
        <TableRow />
        <TableRow /> */}
        {users.map((user) => (
          <TableRow user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}
