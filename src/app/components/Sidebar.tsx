import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../hooks/useAppHooks";
import { logout } from "../store/slices/authSlice";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import {
    ChartPieIcon,
    ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";

const sidebarItems: { route?: string; icon?: JSX.Element; label?: string; isDivider?: boolean }[] = [
    { route: "#overview", icon: <ChartPieIcon className="h-4 w-4 text-app-gray-text" />, label: "Overview" },
    { route: "#tickets", icon: <Image src="/images/ticket-icon.svg" width={16} height={11} alt="Tickets" />, label: "Tickets" },
    { route: "#ideas", icon: <Image src="/images/light-bulb.svg" width={11} height={16} alt="Ideas" />, label: "Ideas" },
    { route: "#contacts", icon: <Image src="/images/contacts-icon.svg" width={16} height={11} alt="Contacts" />, label: "Contacts" },
    { route: "#agents", icon: <Image src="/images/agents-icon.svg" width={14} height={16} alt="Agents" />, label: "Agents" },
    { route: "#articles", icon: <Image src="/images/book-icon.svg" width={14} height={16} alt="Articles" />, label: "Articles" },
    { isDivider: true },
    { route: "#settings", icon: <Image src="/images/settings-icon.svg" width={14} height={15} alt="Settings" />, label: "Settings" },
    { route: "#subscription", icon: <Image src="/images/subscription-icon.svg" width={12} height={16} alt="Subscription" />, label: "Subscription" },
];

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [currentHash, setCurrentHash] = useState("");

    const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    const collapsed = isTablet;

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={classNames(
                "h-screen bg-app-dark-gray text-white fixed top-0 left-0 shadow-lg flex flex-col transition-all overflow-hidden",
                {
                    "w-[76px]": isTablet,
                    "w-[255px]": isDesktop,
                }
            )}
        >
            <div className="flex flex-col items-center py-[30px]">
                <div className="flex items-center text-lg font-bold gap-3 text-app-gray-text text-[19px] mb-14">
                    <Image src="/images/logologo.svg" alt="Logo" width={32} height={32} />
                    {!collapsed && <span>Dashboard Kit</span>}
                </div>
                <nav className="flex flex-col gap-4 w-full">
                    {sidebarItems.map((item, index) =>
                        item.isDivider ? (
                            <hr key={index} className="border-t border-[#3f424a]" />
                        ) : (
                            <SidebarItem
                                onClick={() => setCurrentHash(item.route ?? "")}
                                key={item.route}
                                active={currentHash === item.route}
                                route={item.route}
                                icon={item.icon!}
                                label={item.label ?? ''}
                                collapsed={collapsed}
                            />
                        )
                    )}
                    <SidebarItem
                        onClick={() => dispatch(logout())}
                        icon={<ArrowLeftCircleIcon className="h-4 w-4 text-app-gray-text" />}
                        label="Logout"
                        collapsed={collapsed}
                    />
                </nav>
            </div>
        </motion.div>
    );
};

const SidebarItem = ({ route = "#", onClick, icon, label, active, collapsed }: { route?: string; onClick?: () => void; icon: JSX.Element; label: string; active?: boolean; collapsed?: boolean }) => (
    <Link href={route} onClick={onClick}>
        <div
            role="button"
            onClick={onClick}
            className={classNames(
                "relative flex items-center gap-3 h-14 cursor-pointer px-8 transition-all",
                {
                    "bg-[#3e4049] border-l-3 border-app-light-blue": active,
                    "hover:bg-[#3e4049] hover:border-l-3 hover:border-app-light-blue": !active,
                    "justify-center px-0": collapsed,
                }
            )}
        >
            <span className="text-base">{icon}</span>
            {!collapsed && <span className="text-base text-app-gray-text">{label}</span>}
        </div>
    </Link>
);

export default Sidebar;