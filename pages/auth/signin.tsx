import type { NextPage } from "next";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { Logo } from "../../components/icons";
import { AnimatedInput } from "../../components";


interface SignInInfo {
  email: string;
  password: string;
}

export const SignIn: NextPage = () => {
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);


  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      Router.replace("/");
    }
  }, [status]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      email: signInInfo.email,
      password: signInInfo.password,
      redirect: false,
    }).then(({ error }) => {
      if (error) {
        setError("Invalid email or password. Try again.");
      }
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
              value={signInInfo.email}
              handleChange={(e) => {
                setSignInInfo({ ...signInInfo, email: e.target.value });
              }}
            />
            <AnimatedInput
              type="password"
              name="password"
              value={signInInfo.password}
              handleChange={(e) => {
                setSignInInfo({ ...signInInfo, password: e.target.value });
              }}
            />
          </div>
          <div className="w-full relative flex justify-center">
            {error && (
              <div className="absolute -top-4 text-brand-red text-sm">
                {error}
              </div>
            )}
            <button
              className="py-3 px-6 bg-brand-300 font-medium text-white min-w-[160px] rounded-sm my-4 shadow-md disabled:opacity-60"
              type="submit"
              disabled={
                signInInfo.email.length === 0 ||
                signInInfo.password.length === 0
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
          <button className=" text-brand-300 font-semibold"
            onClick={() => Router.replace("/auth/signup") }
          >Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
