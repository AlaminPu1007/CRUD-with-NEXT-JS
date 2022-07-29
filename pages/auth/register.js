import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import styles from "../../css-module/auth/Login.module.css";
import useUser from "../../lib/useUser";

export default function register() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      // mutateUser(
      await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // );
    } catch (error) {
      if (error) {
        console.log(error.message, "error message from register screen");
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        {/* <input
          type="text"
          placeholder="Enter your last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        /> */}
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
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <div>
          <Link href="/auth/login">
            <a>Already have an account? Please sign-in.</a>
          </Link>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
