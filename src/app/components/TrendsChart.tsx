import React from "react";
import Image from "next/image";
import TrendsStats from "./TrendsStats";

const TrendsChart = () => {
    return (
        <div className="flex bg-white rounded-lg shadow">
            <div className="flex flex-2/3 flex-col px-6 py-6">
                <h3 className="text-xl font-semibold text-app-dark-gray mb-2">Todays trends</h3>
                <p className="text-sm text-app-gray-muted mb-4">as of 25 May 2019, 09:41 PM</p>
                <div className="max-w-[686px] max-h-[380px]">
                    <Image
                        src="/images/full-graph.png"
                        alt="Trends Graph"
                        width={686}
                        height={380}
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <div className="flex flex-1/3 py-6 border-l border-app-light-stone">
                <TrendsStats />
            </div>
        </div>
    );
}

export default TrendsChart;