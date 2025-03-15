import React from "react";
import Image from "next/image";

const files = [
    { name: "Tech requirements.pdf", size: "200 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Olivia Rhye" },
    { name: "Dashboard screenshot.jpg", size: "720 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Phoenix Baker" },
    { name: "Dashboard prototype recording.mp4", size: "16 MB", uploaded: "Jan 2, 2022", updated: "Jan 2, 2022", uploader: "Lana Steiner" },
    { name: "Dashboard prototype FINAL.fig", size: "4.2 MB", uploaded: "Jan 6, 2022", updated: "Jan 6, 2022", uploader: "Demi Wilkinson" },
    { name: "UX Design Guidelines.docx", size: "400 KB", uploaded: "Jan 8, 2022", updated: "Jan 8, 2022", uploader: "Candice Wu" },
    { name: "Dashboard interaction.framerx", size: "12 MB", uploaded: "Jan 6, 2022", updated: "Jan 6, 2022", uploader: "Natali Craig" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
    { name: "App inspiration.png", size: "800 KB", uploaded: "Jan 4, 2022", updated: "Jan 4, 2022", uploader: "Drew Cano" },
];

const FilesTable = () => {
    return (
        <div className="bg-white pt-6 rounded-lg shadow w-full">
            <div className="flex justify-between items-center mb-6 px-6">
                <h2 className="text-xl font-semibold text-app-dark-blue">Files uploaded</h2>
                <div className="flex gap-2">
                    <button className="border border-app-light-stone w-[118px] justify-center h-10 rounded-lg text-app-dark-gray-200 font-medium text-sm hover:bg-app-light-blue transition-colors">
                        Download all
                    </button>
                    <button className="bg-app-purple text-white text-center justify-center w-[108px] h-10 rounded-lg flex items-center gap-2 font-medium text-sm hover:bg-app-dark-blue transition-colors">
                        <Image
                            alt="Upload icon"
                            src="images/cloud-arrow-up.svg"
                            width={18}
                            height={15}
                        />
                        Upload
                    </button>
                </div>
            </div>
            <div className="max-h-[560px] overflow-auto">
                <table className="w-full border-collapse font-inter">
                    <thead>
                        <tr className="text-left text-sto text-sm border-b border-app-light-stone">
                            <th className="h-[72px] pl-6"><input type="checkbox" /></th>
                            <th className="h-[72px]">File name</th>
                            <th className="h-[72px]">File size</th>
                            <th className="h-[72px]">Date uploaded</th>
                            <th className="h-[72px]">Last updated</th>
                            <th className="h-[72px]">Uploaded by</th>
                            <th className="h-[72px] pl-6"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={index} className="border-b border-app-light-stone last:border-none odd:bg-gray-50 hover:bg-gray-100">
                                <td className="h-[72px] text-app-gray-text-100 pl-6"><input type="checkbox" /></td>
                                <td className="h-[72px] text-app-dark-blue">{file.name}</td>
                                <td className="h-[72px] text-app-gray-text-100">{file.size}</td>
                                <td className="h-[72px] text-app-gray-text-100">{file.uploaded}</td>
                                <td className="h-[72px] text-app-gray-text-100">{file.updated}</td>
                                <td className="h-[72px] text-app-gray-text-100">{file.uploader}</td>
                                <td className="h-[72px] text-app-gray-text-100 pl-6 text-gray-400 cursor-pointer">⋮</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FilesTable;