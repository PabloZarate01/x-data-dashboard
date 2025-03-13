import React from "react";

interface LoginContainerProps {
    children: React.ReactNode;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-app-dark-gray">
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 
        w-[380px] min-h-[710px] 
        sm:w-[600px] sm:min-h-[582px] 
        md:w-[380px] md:min-h-[582px]">
                {children}
            </div>
        </div>
    );
};

export default LoginContainer;