import React from "react";

interface WrapperContainerProps {
    children: React.ReactNode;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[2440px] mx-auto">
            {children}
        </div>
    );
};

export default WrapperContainer;