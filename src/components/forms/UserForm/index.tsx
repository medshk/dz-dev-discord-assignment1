import React from "react";
import SubmitBtn from "../../buttons/SubmitBtn";
interface IMyProps {
	title: string;
}
export default function UserForm({ title }: IMyProps) {
	const handleSubmit = () => {};
	return (
		<div className="w-full p-4">
			<div className="flex pb-8 border-b border-b-slate-300">
				<button>{"<--"}</button>
				<h1 className="text-lg ml-2 font-bold">{title}</h1>
			</div>

			{/* user form */}
			<form className=" w-full mt-4 mb-4">
				<div className="mb-4">
					<label className="block text-sm font-bold mb-2" htmlFor="email">
						Name
					</label>
					<input
						className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
						id="Name"
						type="text"
						placeholder="Name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-bold mb-2" htmlFor="email">
						Email
					</label>
					<input
						className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
						id="Email"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-bold mb-2" htmlFor="email">
						City
					</label>
					<input
						className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
						id="City"
						type="text"
						placeholder="City"
					/>
				</div>
				{/* <div className="mb-6">
					<label
						className="block text-sm font-bold mb-2"
            
						htmlFor="password"
					>
						Password
					</label>
					<input
						className=" appearance-none border  rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            
						id="password"
						type="password"
						placeholder="******************"
					/>
					<p className="text-red-500 text-xs italic">
          Please choose a password.
        </p>
				</div> */}
				<div className="flex items-center justify-end">
					<button
						className="  hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Cancel
					</button>
					<SubmitBtn handleClick={handleSubmit} />
				</div>
			</form>
		</div>
	);
}
