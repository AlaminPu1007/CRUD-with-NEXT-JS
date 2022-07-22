import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
// import useUser from "../../lib/useUser";

export default function login() {
  // here we just check if user is already logged in and redirect to profile
  // const { mutateUser } = useUser({
  //   redirectTo: "/dashboard/Home",
  //   redirectIfFound: false,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // LoginMethod({ data, router });
    e.preventDefault();
    // const body = {
    //   username: data.email,
    // };

    // try {
    //   mutateUser(
    //     await fetch("/api/login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(body),
    //     })
    //   );
    // } catch (error) {
    //   if (error) {
    //     console.log(error.message);
    //   } else {
    //     console.error("An unexpected error happened:", error);
    //   }
    // }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input
          {...register("email", { required: true, maxLength: 20 })}
          name="email"
          id="email"
          type="email"
          autoComplete="off"
          placeholder="jon@example.com"
        />

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true, maxLength: 10 })}
        />
        <div>
          <Link href="/auth/register">
            <a>Don't have an account? Please create an account.</a>
          </Link>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
