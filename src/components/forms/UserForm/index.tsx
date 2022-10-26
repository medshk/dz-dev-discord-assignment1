import React from "react";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../buttons/SubmitBtn";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addUser, user } from "../../../features/users/usersSlice";
import { useAppDispatch } from "../../../app/hooks";

interface IMyProps {
  title: string;
  user?: user;
  handleUser: SubmitHandler<userInputs>;
}

export interface userInputs {
  name: string;
  username: string;
  email: string;
  city?: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    username: yup.string().required(),
    city: yup.string(),
  })
  .required();

export default function UserForm({ title, user, handleUser }: IMyProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInputs>({
    resolver: yupResolver(schema),
  });

  //   const handleSubmit = () => {};
  return (
    <div className="w-full p-4">
      <div className="flex pb-8 border-b border-b-slate-300">
        <button onClick={() => navigate(-1)}>{"<--"}</button>
        <h1 className="text-lg ml-2 font-bold">{title}</h1>
      </div>

      {/* user form */}
      <form className=" w-full mt-4 mb-4" onSubmit={handleSubmit(handleUser)}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Name
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder={user?.name || "name"}
            defaultValue={user?.name || ""}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Please choose a name.</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Username"
            type="text"
            placeholder={user?.username || "username"}
            defaultValue={user?.username || ""}
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              Please choose a username.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="text"
            placeholder={user?.email || "email"}
            defaultValue={user?.email || ""}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              Please choose an email.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            City
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="City"
            type="text"
            placeholder={user?.city || "city"}
            defaultValue={user?.city || ""}
            {...register("city")}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="  hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
          <SubmitBtn />
          {/* <button className="rounded text-white bg-blue-500 py-1 px-2">
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
}
