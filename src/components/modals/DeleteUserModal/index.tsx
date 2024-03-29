import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { deleteUser } from "../../../features/users/usersSlice";
import DeleteBtn from "../../buttons/DeleteBtn";
import Portal from "../Portal";

interface Iprops {
  setShowModal: (isShowModal: boolean) => void;
  userId: number;
}

export default function DeleteUserModal({ setShowModal, userId }: Iprops) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(userId));
  };
  return (
    <Portal>
      <div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] grid place-items-center">
        <div className="w-[80%] bg-white rounded p-4 h-44">
          <h1 className="text-lg font-bold">Delete Confirmation</h1>
          <div className="flex justify-end mt-16">
            <button
              onClick={() => setShowModal(false)}
              className="border border-black rounded px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <DeleteBtn handleClick={handleDelete} />
          </div>
        </div>
      </div>
    </Portal>
  );
}
