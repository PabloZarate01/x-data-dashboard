import React from "react";

interface ContentContainerProps {
    children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
    return (
        <div className="w-full sm:w-[calc(100%-76px)] lg:w-[calc(100%-16rem)] px-[30px] py-[30px] text-app-dark-gray sm:ml-[76px] lg:ml-64">
            {children}
        </div>
    );
};

export default ContentContainer;