import React from "react";

const StatisticCard: React.FC = () => {
    return (
        <div className="px-20">
            <div className="bg-[#286F6C] py-10 grid grid-cols-4 justify-items-center">
                <div>
                    <h1 className="text-4xl text-white font-bold">120</h1>
                    <p className="text-white">Products</p>
                </div>
                <div className="border-x-2 w-full">
                    <h1 className="text-4xl text-white font-bold text-center">120</h1>
                    <p className="text-white text-center">Products</p>
                </div>
                <div className="border-r-2 w-full">
                    <h1 className="text-4xl text-white font-bold text-center">120</h1>
                    <p className="text-white text-center">Products</p>
                </div>
                <div>
                    <h1 className="text-4xl text-white font-bold">120</h1>
                    <p className="text-white">Products</p>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard;