import Image from "next/image";
import React from "react";

const Topbar = () => {
    return (
        <div className="h-[59px] w-full bg-app-dark-gray flex items-center justify-between px-4">
            <div className="flex items-center">
                <Image src={'images/logologo.svg'} width={32} height={32} alt="x-data" />
            </div>
            <div className="flex items-center">
                <Image src={'images/notification.svg'} width={16} height={16} alt={"Notifications"} />
            </div>
        </div>
    );
};

export default Topbar;