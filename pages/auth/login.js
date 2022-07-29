import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
// import useUser from "../../lib/useUser";
import styles from "../../css-module/auth/Login.module.css";

import api from "../../api-configs/instance";

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

    try {
      const res = await api.post("/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log(res.data, "from onsubmit method");
    } catch (err) {
      console.log(err.message, "error message from login");
    }

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
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
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
