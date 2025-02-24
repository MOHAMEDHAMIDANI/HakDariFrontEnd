"use client";
import { useState } from "react";
import Image from "next/image";
import { Urbanist, Poppins } from "next/font/google";
import emailjs from "@emailjs/browser";
import {
  SignupFormSchema1,
  SignupFormSchema2,
} from "@/validations/signupschema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const urbanist = Urbanist({
  weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

function generateVerificationCode(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

function SignupPage() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      verificationSent ? SignupFormSchema2 : SignupFormSchema1
    ),
  });

  const onSubmit1 = (data) => {
    sendEmail(data);
  };

  const onSubmit2 = (data) => {
    if (data.verificationCode === generatedCode) {
      alert("Verification Successful");
      
    } else {
      alert("Verification Failed");
    }
  };

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const sendEmail = (data) => {
    const code = generateVerificationCode();
    setGeneratedCode(code);
    emailjs
      .send(
        serviceId,
        "template_9d4k2dj",
        {
          name: data.name,
          email: data.email,
          verificationcode: code,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setVerificationSent(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div
      className={`container flex min-w-full min-h-screen lg:flex-row justify-between ${poppins.className} flex-col-reverse`}
    >
      <div className="signup-form w-[100%] lg:w-[50%] min-h-full lg:p-6 text-center flex justify-center items-center md:h-auto h-[100%]">
        <div className="form-container w-[80%] lg:w-[60%] text-start h-[100%] flex flex-col justify-between items-center">
          <div className={`intro text-start w-[100%] font-normal`}>
            <h2 className={`${urbanist.className} text-3xl font-extrabold`}>
              Create an Account
            </h2>
            <p className="lg:mt-7 mt-5">
              Today Is A New Day. It&apos;s Your Day. You Shape It.
            </p>
            <p className="mt-2">Sign Up To Start Managing Your Projects.</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit1)}
            className={`form w-full h-[70%] flex flex-col justify-between Items-center ${
              verificationSent ? "hidden" : ""
            }`}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                {...register("address")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn w-full rounded-lg bg-login-btn p-4 text-xl text-login-btnText font-medium"
            >
              Create an Account
            </button>
          </form>

          <form
            onSubmit={handleSubmit(onSubmit2)}
            className={`form w-full h-[70%] flex flex-col justify-between Items-center ${
              verificationSent ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col">
              <label htmlFor="verificationCode" className="font-medium">
                Email Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                {...register("verificationCode")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.verificationCode && (
                <p className="text-red-500">
                  {errors.verificationCode.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className="mt-5 bg-login-inputbg p-4 focus:outline-none rounded-md"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn w-full rounded-lg bg-login-btn p-4 text-xl text-login-btnText font-medium"
            >
              Verify Account
            </button>
          </form>

          <p className="text-login-Primarytext tracking-wide font-medium min-w-80 lg:mt-5 mt-2">
            Already have an Account?{" "}
            <Link href="/login" className="text-right text-login-Link ">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <div className="image-container w-full h-[45vh] lg:w-[50%] relative top-0 lg:h-screen overflow-hidden p-6 lg:sticky">
        <Image
          src="/images/bg1.png"
          alt="login"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default SignupPage;
