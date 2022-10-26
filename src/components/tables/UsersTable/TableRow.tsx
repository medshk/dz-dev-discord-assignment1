import React, { useState } from "react";
import { user } from "../../../features/users/usersSlice";
import DeleteBtn from "../../buttons/DeleteBtn";
import EditBtn from "../../buttons/EditBtn";
import DeleteUserModal from "../../modals/DeleteUserModal";

interface Iuser {
  user: user;
}

export default function TableRow({ user }: Iuser) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const { id, name, username, email, city } = user;
  return (
    <>
      <tr className="h-12">
        <td className="text-center">{id}</td>
        <td className="text-center">{name}</td>
        <td className="text-center">{username}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{city}</td>
        <td className="text-center">
          <EditBtn userId={id} />
        </td>
        <td className="text-center">
          <DeleteBtn handleClick={openModal} />
        </td>
      </tr>
      {showModal && (
        <DeleteUserModal setShowModal={setShowModal} userId={id!} />
      )}
    </>
  );
}
