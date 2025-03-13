import React, { useState } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface AppInputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    error?: string;
    showForgotPassword?: boolean; // New prop for forgot password link
}

const AppInput = <T extends FieldValues>({
    label,
    name,
    type = "text",
    placeholder,
    register,
    error,
    showForgotPassword = false,
}: AppInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center">
                <label htmlFor={name} className="text-sm font-semibold text-app-gray-muted">
                    {label}
                </label>
                {showForgotPassword && (
                    <a href="#" className="text-[10px] text-app-gray-text hover:underline">
                        Forgot password?
                    </a>
                )}
            </div>
            <div className="relative">
                <input
                    id={name}
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    {...register(name)}
                    className="border border-app-light-gray rounded-md p-2 w-full pr-10 text-app-dark-gray"
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                        {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};

export default AppInput;