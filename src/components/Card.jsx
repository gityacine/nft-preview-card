
export default function Card() {

    return (
        <div className="flex flex-col bg-[#14253d] p-7 rounded-3xl">
            <img className="w-full rounded-xl" src="image-equilibrium.jpg" alt="nft-equilibrium" />
            <div className="flex flex-col divide-y divide-[#2f415b] mt-2">
                <div className="flex flex-col space-y-4 py-4">
                    <h1 className="text-white font-outfit font-semibold text-2xl">Equilibrium #3429</h1>
                    <p className="text-[#8bacda] font-outfit font-light text-lg">Our Equilibrium collection promotes balance and calm.</p>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                            <span className="text-[#00fff7] font-outfit font-semibold text-lg">0.041 ETH</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>
                            <span className="text-[#8bacda] font-outfit font-normal text-lg">3 days left</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-5 pt-4">
                    <img className="w-10 border-[1px] rounded-full" src="image-avatar.png" alt="avatar-img" />
                    <div className="flex space-x-1">
                        <span className="text-[#8bacda] font-outfit font-normal text-lg">Creation of</span>
                        <span className="text-white font-outfit font-normal text-lg">Jules Wyvern</span>
                    </div>
                </div>
            </div>

        </div>
    );
}