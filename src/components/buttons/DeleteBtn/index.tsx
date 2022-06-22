import React, { useState } from "react";
import DeleteUserModal from "../../modals/DeleteUserModal";

export default function DeleteBtn({ handleClick }: any) {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				onClick={() => setShowModal(true)}
				className="rounded text-white bg-red-500 py-1 px-2"
			>
				Delete
			</button>
			{showModal && <DeleteUserModal setShowModal={setShowModal} />}
		</>
	);
}
