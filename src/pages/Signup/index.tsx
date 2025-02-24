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

const urbanist = Urbanist({ weight: ["800"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

function generateVerificationCode(length: number = 6): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
}

type SignupForm1 = z.infer<typeof SignupFormSchema1>;
type SignupForm2 = z.infer<typeof SignupFormSchema2>;

export default function SignupPage() {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [verificationSent, setVerificationSent] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm1 | SignupForm2>({
    resolver: zodResolver(
      verificationSent ? SignupFormSchema2 : SignupFormSchema1
    ),
  });

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

  const sendEmail = async (data: SignupForm1) => {
    const code = generateVerificationCode();
    setVerificationCode(code);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name: data.name, email: data.email, verificationcode: code },
        publicKey
      );
      setVerificationSent(true);
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Failed to send verification code. Try again later.");
    }
  };

  const handleVerify = (data: SignupForm2) => {
    if (data.verificationCode === verificationCode) {
      alert("Verification Successful!");
    } else {
      alert("Incorrect verification code.");
    }
  };

  return (
    <div
      className={`container flex min-w-full min-h-screen lg:flex-row justify-between ${poppins.className} flex-col-reverse`}
    >
      {}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-4/5 lg:w-3/5 flex flex-col space-y-6">
          <div className="text-start">
            <h2 className={`${urbanist.className} text-3xl font-extrabold`}>
              Create an Account
            </h2>
            <p className="mt-3">Sign up to start managing your projects.</p>
          </div>

          {}
          {!verificationSent && (
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col space-y-4"
            >
              <InputField
                label="Full Name"
                id="name"
                register={register}
                errors={errors}
              />
              <InputField
                label="Email"
                id="email"
                type="email"
                register={register}
                errors={errors}
              />
              <InputField
                label="Phone"
                id="phone"
                register={register}
                errors={errors}
              />
              <InputField
                label="Address"
                id="address"
                register={register}
                errors={errors}
              />
              <button type="submit" className="btn-primary">
                Create an Account
              </button>
            </form>
          )}

          {}
          {verificationSent && (
            <form
              onSubmit={handleSubmit(handleVerify)}
              className="flex flex-col space-y-4"
            >
              <InputField
                label="Verification Code"
                id="verificationCode"
                register={register}
                errors={errors}
              />
              <InputField
                label="Password"
                id="password"
                type="password"
                register={register}
                errors={errors}
              />
              <InputField
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                register={register}
                errors={errors}
              />
              <button type="submit" className="btn-primary">
                Verify Account
              </button>
            </form>
          )}

          <p className="text-center">
            Already have an Account?{" "}
            <Link href="/Login" className="text-blue-500">
              Log In
            </Link>
          </p>
        </div>
      </div>

      {}
      <div className="w-full h-60 lg:w-1/2 lg:h-screen">
        <Image
          src="/images/bg1.png"
          alt="Signup"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  register: any;
  errors: any;
}

const InputField = ({
  label,
  id,
  type = "text",
  register,
  errors,
}: InputFieldProps) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="font-medium">
      {label}
    </label>
    <input
      type={type}
      id={id}
      {...register(id)}
      className="mt-2 p-3 bg-gray-100 focus:outline-none rounded-md"
    />
    {errors[id] && (
      <p className="text-red-500 text-sm">{errors[id]?.message}</p>
    )}
  </div>
);
