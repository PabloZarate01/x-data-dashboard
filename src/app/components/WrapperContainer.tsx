import React from "react";

interface WrapperContainerProps {
    children: React.ReactNode;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4">
            {children}
        </div>
    );
};

export default WrapperContainer;