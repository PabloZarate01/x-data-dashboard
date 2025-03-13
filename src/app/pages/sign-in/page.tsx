import React from "react";
import LoginContainer from "@components/LoginContainer";
import AppInput from "@/app/components/AppInput";
import { useForm } from "react-hook-form";
import { SignInFormData, signInSchema } from "@app-types/signInPageTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useAppDispatch } from "@hooks/useAppHooks";
import { login } from "@store/slices/authSlice";

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: yupResolver(signInSchema),
    });
    const dispatch = useAppDispatch();

    const onSubmit = async (data: SignInFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        dispatch(login({
            id: '1',
            email: data.email,
            name: "John Doe",
            role: "admin",
        }));
    };

    return (
        <LoginContainer>
            <div className="flex flex-col items-center gap-4 mb-8">
                <Image
                    src="images/logologo.svg"
                    alt="Logo"
                    width={48}
                    height={48}
                />
                <p className="font-bold text-app-gray-muted text-[19px]">Dashboard Kit</p>
            </div>
            <h1 className="text-2xl font-semibold text-app-darker-gray text-center mb-3">Log In to Dashboard Kit</h1>
            <p className="text-center text-app-gray-text text-[14px]">Enter your email and password below</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-12">
                <AppInput
                    label="EMAIL"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    register={register}
                    error={errors.email?.message}
                />
                <AppInput
                    label="PASSWORD"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    register={register}
                    error={errors.password?.message}
                    showForgotPassword={true}
                />
                <button
                    type="submit"
                    className="w-full bg-app-primary text-white py-2 rounded-md hover:bg-app-light-blue transition shadow-[0px_4px_12px_#3751FF40]"
                >
                    Log In
                </button>
            </form>
            <p className="text-center text-app-gray-text text-sm mt-8">
                Don’t have an account?{" "}
                <a href="#" className="text-app-primary font-semibold hover:underline">
                    Sign up
                </a>
            </p>
        </LoginContainer>
    );
};

export default SignInPage;