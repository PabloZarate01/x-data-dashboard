import React from "react";
import WrapperContainer from "@/app/components/WrapperContainer";
import ContentContainer from "@/app/components/ContentContainer";
import Sidebar from "@components/Sidebar";
import Topbar from "@components/Topbar";
import StatsCard from "@components/StatsCard";
import TrendsChart from "@components/TrendsChart";
import FilesTable from "@components/FilesTable";
import PageTopBar from "@/app/components/PageTopBar";

const DashboardPage = () => {
    return (
        <WrapperContainer>
            <div className="hidden sm:block w-64">
                <Sidebar />
            </div>
            <div className="block sm:hidden">
                <Topbar />
            </div>
            <ContentContainer>
                <PageTopBar pageTitle="Overview" />
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-6 gap-y-4">
                    <StatsCard title="Unresolved" value="60" />
                    <StatsCard title="Overdue" value="16" />
                    <StatsCard title="Open" value="43" />
                    <StatsCard title="On hold" value="64" />
                </div>
                <div className="mt-6">
                    <TrendsChart />
                </div>
                <div className="mt-6">
                    <FilesTable />
                </div>
            </ContentContainer>
        </WrapperContainer>
    );
};

export default DashboardPage;