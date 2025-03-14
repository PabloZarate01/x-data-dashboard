import React from "react";
import classNames from "classnames";

type Props = {
    title: string;
    value: string;
    active?: boolean;
};

const StatsCard: React.FC<Props> = ({ title, value, active }) => {
    return (
        <div className={classNames(
            "w-full h-[134px] max-w-[298px] bg-white rounded-lg flex flex-col items-center justify-center p-4 ring-[1px] ring-app-light-stone",
            {
                "border-app-primary border-[1px] ring-app-light-blue": active,
                "hover:border-app-primary hover:border-[1px] hover:ring-app-light-blue": !active
            }
        )}>
            <h3 className="text-app-gray-muted text-[19px] font-bold">{title}</h3>
            <p className="text-[40px] font-bold text-app-darker-gray">{value}</p>
        </div>
    );
};

export default StatsCard;