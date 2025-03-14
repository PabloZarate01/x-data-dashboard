import React from "react";

const stats = [
    { label: "Resolved", value: "449" },
    { label: "Received", value: "426" },
    { label: "Average first response time", value: "33m" },
    { label: "Average response time", value: "3h 8m" },
    { label: "Resolution within SLA", value: "94%" },
];

const TrendsStats = () => {
    return (
        <div className="w-full grid grid-cols-1">
            {stats.map((stat, index) => (
                <div key={index} className="py-4 border-b-[1px] last:border-none border-app-light-stone items-center flex flex-col justify-center">
                    <p className="text-sm px-4 text-app-gray-muted">{stat.label}</p>
                    <p className="text-2xl px-4 font-bold text-app-dark-gray">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendsStats;
