import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";
import { Input } from "~/components/input";
import { Button } from "~/components/button";
import { Link } from "react-router";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm();

  function login(data: FieldValues) {
    console.log(data);
  }

  return (
    <main className="h-screen">
      <div className="flex items-center justify-center min-h-60vh">
        <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-5">
          <h1 className="font-bold text-center text-2xl mb-2">
            Log in to Foodie
          </h1>
          <p>Capture food finds and share with your friends.</p>

          <form onSubmit={handleSubmit(login)}>
            <label className="block my-2">
              Username or Email
              <Input
                type="text"
                {...register("username", { required: true })}
                className="w-full"
              />
            </label>

            <label className="block my-2">
              Password
              <div className="relative">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", { required: true, minLength: 6 })}
                  className="w-full pr-6"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-0 top-0 p-2 h-full"
                >
                  {passwordVisible ? (
                    <div className="i-solar:eye-closed-line-duotone"></div>
                  ) : (
                    <div className="i-solar:eye-line-duotone"></div>
                  )}
                </button>
              </div>
            </label>

            <Link to="/forgot-password" className="text-sky-500 block text-sm">
              Forgot Password?
            </Link>
            <Button type="submit" className="my-2 hover:bg-sky-700 w-full">
              Log In
            </Button>

            <p className="text-sm text-neutral-400">
              New to Foodie?{" "}
              <Link to="/create-account" className="text-sky-500">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
