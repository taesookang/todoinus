import type { NextPage } from "next";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { Logo } from "../../components/icons";
import { AnimatedInput } from "../../components";
import { useCreateUserMutation, CreateUserDocument } from "../../_generated";

interface SignUpInfo {
  email: string;
  name: string;
  password: string;
}

export const SignUp: NextPage = () => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    email: "",
    name: "",
    password: "",
  });

  const { status } = useSession();
  const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
    variables: {
      email: signUpInfo.email,
      name: signUpInfo.name,
      password: signUpInfo.password,
    },
  });
  useEffect(() => {
    if (status === "authenticated") {
      Router.replace("/");
    }
  }, [status]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await createUserMutation().then(() => {
      signIn("credentials", {
        email: signUpInfo.email,
        password: signUpInfo.password,
        redirect: false,
      });
    });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full sm:max-w-[360px] flex flex-col gap-4">
        <form
          className="w-full flex flex-col justify-center items-center px-4 py-8 gap-8 border border-brand-border rounded-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 items-center justify-center my-4">
            <Logo size={36} color={"#1D8780"} />
            <span className=" text-brand-300 font-bold text-3xl tracking-wider">
              Todoinus
            </span>
          </div>
          <div className="w-full flex flex-col gap-7">
            <AnimatedInput
              type="email"
              name="email"
              value={signUpInfo.email}
              handleChange={(e) => {
                setSignUpInfo({ ...signUpInfo, email: e.target.value });
              }}
            />
            <AnimatedInput
              type="text"
              name="username"
              value={signUpInfo.name}
              handleChange={(e) => {
                setSignUpInfo({ ...signUpInfo, name: e.target.value });
              }}
            />
            <AnimatedInput
              type="password"
              name="password"
              value={signUpInfo.password}
              handleChange={(e) => {
                setSignUpInfo({ ...signUpInfo, password: e.target.value });
              }}
            />
          </div>
          <div className="w-full relative flex justify-center">
            {error && (
              <div className="absolute -top-4 text-brand-red text-sm">
                {error.message}
              </div>
            )}
            <button
              className="py-3 px-6 bg-brand-300 font-medium text-white min-w-[160px] rounded-sm my-4 shadow-md disabled:opacity-60"
              type="submit"
              disabled={
                signUpInfo.email.length === 0 ||
                signUpInfo.password.length === 0 ||
                signUpInfo.name.length === 0
              }
            >
              Log In
            </button>
          </div>
        </form>
        <div className="w-full flex items-center justify-center border border-brand-border rounded-sm py-6 px-4">
          <p className="text-sm text-brand-black/80 mr-2">
            Don't have an account?
          </p>
          <button
            className=" text-brand-300 font-semibold"
            onClick={() => Router.replace("/auth/signin")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
