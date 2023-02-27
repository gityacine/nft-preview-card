
export default function Card() {

    return (
        <div className="flex flex-col bg-[#14253d] p-7 rounded-3xl space-y-4 m-7 shadow-2xl">
            <div className="relative">
                <a href="#">
                    <img className="w-full mx-0 sm:w-80 rounded-xl" src="image-equilibrium.jpg" alt="nft-equilibrium" />
                    <div className="flex absolute transition duration-300 items-center justify-center w-full h-full top-0 rounded-xl bg-[#00fff7]/50 opacity-0 sm:hover:opacity-100">
                        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z" /><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero" /></g></svg>
                    </div>
                </a>
            </div>
            <div className="flex flex-col divide-y divide-[#2f415b] sm:w-80">
                <div className="flex flex-col space-y-4 py-3">
                    <div className="w-fit">
                        <h1 className="text-white font-outfit font-semibold text-2xl sm:hover:text-[#00fff7] active:text-[#00fff7]">
                            <a href="#">Equilibrium #3429</a>
                        </h1>
                    </div>
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
                <div className="flex items-center space-x-5 pt-5">
                    <img className="w-10 border-[1px] rounded-full" src="image-avatar.png" alt="avatar-img" />
                    <div className="flex space-x-1">
                        <span className="text-[#8bacda] font-outfit font-normal text-lg">Creation of</span>
                        <a className="text-white font-outfit font-normal text-lg sm:hover:text-[#00fff7] active:text-[#00fff7]" href="#">Jules Wyvern</a>
                    </div>
                </div>
            </div>
        </div>
    );
}