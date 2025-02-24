"use client";
import { useState } from "react";
import Image from "next/image";
import { Urbanist, Poppins } from "next/font/google";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/validations/loginschema";
import Link from "next/link";

const urbanist = Urbanist({
    weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
    subsets: ["latin"],
});
const poppins = Poppins({
    weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
    subsets: ["latin"],
});

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div
            className={`container  pt-16 flex min-w-full min-h-screen lg:flex-row justify-between ${poppins.className} flex-col-reverse`}
        >
            <div className="login-form w-[100%] lg:w-[50%] min-h-full lg:p-6 text-center flex justify-center items-center md:h-auto h-[100%]">
                <div className="form-container w-[80%] lg:w-[60%] text-start lg:h-[90%] h-[100%] flex flex-col justify-between items-center">
                    <div className={`intro text-start w-[100%] font-normal`}>
                        <h2 className={`${urbanist.className} text-3xl font-extrabold`}>
                            WELCOME BACK 👋
                        </h2>
                        <p className="lg:mt-7 mt-5">
                            Today Is A New Day. It&apos;s Your Day. You Shape It.
                        </p>
                        <p className="mt-2">Sign In To Start Managing Your Projects.</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="form w-full h-[50%]"
                    >
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
                        <div className="flex flex-col mt-7">
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
                        <div className="mt-8">
                            <p className="text-right text-login-Link my-5">
                                <a href="#" className="font-medium">
                                    Forgot Password?
                                </a>
                            </p>
                            <button
                                type="submit"
                                className="btn w-full rounded-lg bg-login-btn p-4 text-xl text-login-btnText font-medium"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="social-login  lg:mt-10 flex flex-col justify-between w-[100%] h-[30%] items-center">
                        <div className="flex items-center justify-center w-[60%] my-10 lg:my-2">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <div className="w-[100%] lg:h-[70%] h-[35%] lg:text-center flex flex-col items-center ">
                            <div className="lg:block flex flex-row justify-between h-[100%] w-[100%]">
                                <button className="bg-login-inputbg text-login-Secondarytext p-3 lg:w-[70%] w-[45%] rounded-md lg:min-w-60 font-normal">
                                    <Image
                                        width={25}
                                        height={25}
                                        src="/images/login-google.svg"
                                        alt="google"
                                        className="inline-flex"
                                    />{" "}
                                    <span className="md:hidden">Google</span>
                                    <span className="hidden md:inline">Sign in with Google</span>
                                </button>
                                <button className="bg-login-inputbg text-login-Secondarytext lg:mt-4 p-3 lg:w-[70%] w-[45%] rounded-md lg:min-w-60 font-normal">
                                    <Image
                                        width={25}
                                        height={25}
                                        src="/images/login-facebook.svg"
                                        alt="facebook"
                                        className="inline-flex "
                                    />{" "}
                                    <span className="md:hidden">Facebook</span>
                                    <span className="hidden md:inline">
                                        Sign in with Facebook
                                    </span>
                                </button>
                            </div>
                            <p className="text-login-Primarytext tracking-wide font-medium min-w-80 lg:mt-5 mt-2">
                                Don&apos;t you have an Account?{" "}
                                <Link href="/signup" className="text-right text-login-Link ">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container w-full h-[45vh] lg:w-[50%] relative top-0 lg:h-screen overflow-hidden p-6 lg:sticky">
                <Image
                    src="/images/bg2.png"
                    alt="login"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}

export default LoginPage;
