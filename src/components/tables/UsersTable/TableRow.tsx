import React from "react";
import DeleteBtn from "../../buttons/DeleteBtn";
import EditBtn from "../../buttons/EditBtn";

export default function TableRow() {
	const handleEdit = () => {};
	const handleDelete = () => {};
	return (
		<tr className="h-12">
			<td className="text-center">1</td>
			<td className="text-center">Malcolm Lockyer</td>
			<td className="text-center">mal12</td>
			<td className="text-center">mal12@gmail.com</td>
			<td className="text-center">California</td>
			<td className="text-center">
				<EditBtn handleClick={handleEdit} />
			</td>
			<td className="text-center">
				<DeleteBtn handleClick={handleDelete} />
			</td>
		</tr>
	);
}
