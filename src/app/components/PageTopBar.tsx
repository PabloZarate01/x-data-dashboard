import React from "react";
import Image from "next/image";

type PageTopBarProps = {
    pageTitle: string
}
const PageTopBar: React.FC<PageTopBarProps> = ({
    pageTitle
}) => {
    return (
        <div className="hidden sm:flex w-full h-[44px] items-center justify-between mb-[54px]">
            <h1 className="text-2xl font-bold text-app-dark-gray">{pageTitle}</h1>
            <div className="flex items-center gap-6">
                <Image src={'images/search.svg'} width={16} height={16} alt={"Search"} />
                <div className="relative">
                    <Image src={'images/notification.svg'} width={16} height={16} alt={"Notifications"} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-app-primary rounded-full"></span>
                </div>
                <div className="flex items-center gap-3.5 border-l pl-4 border-app-light-stone">
                    <span className="text-sm font-medium text-app-dark-gray">Pablo Zárate</span>
                    <Image
                        src="/images/logologo.svg"
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default PageTopBar;