import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface inputs {
	email: string;
	password: string;
}
type loginFormType = {
	getCredentails: (data: inputs) => void;
};

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	})
	.required();
export default function LoginForm({ getCredentails }: loginFormType) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<inputs>({
		resolver: yupResolver(schema),
	});
	const submit: SubmitHandler<inputs> = (data) => getCredentails(data);
	return (
		<div className="w-full max-w-xs">
			<form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submit)}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="Email"
						type="email"
						placeholder="Email"
						{...register("email", { required: true })}
					/>
					{errors.email && (
						<p className="text-red-500 text-xs italic">
							Please choose an email.
						</p>
					)}
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						{...register("password", { required: true })}
					/>
					{errors.password && (
						<p className="text-red-500 text-xs italic">
							Please choose a password.
						</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
}
