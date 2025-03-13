import React from "react";

interface ContentContainerProps {
    children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:max-w-[744px] xs:max-w-[390px]">
            {children}
        </div>
    );
};

export default ContentContainer;