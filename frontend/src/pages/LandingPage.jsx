import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import hero from "../assets/hero2.png";
import { App_FEATURES } from "../utils/data";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";

const LandingPage = () => {
	const navigate = useNavigate();

	const [openAuthModal, setOpenAuthModal] = useState(false);
	const [currentPage, setCurrentPage] = useState("login");

	const submitHandler = () => {
		// TODO: Add navigation or modal logic here
	};

	return (
		<>
			<div className="w-full min-h-full bg-[#FFFCEF] px-6">
				{" "}
				{/* Added horizontal padding */}
				<div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-2" />
				<div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
					{/* Header */}
					<header className="flex justify-between items-center mb-16">
						<div className="text-xl text-black font-bold">PrepMate</div>
						<button
							className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
							onClick={() => setOpenAuthModal(true)}
						>
							Login
						</button>
					</header>

					{/* Main Hero Section */}
					<div className="flex flex-col md:flex-row items-center">
						{/* Left Column */}
						<div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
							<div className="flex items-center justify-left mb-2">
								<div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
									<LuSparkles />
									AI Powered
								</div>
							</div>

							<h1 className="text-5xl text-black font-medium mb-4 leading-tight">
								Ace Interview with <br />
								<span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
									AI-Powered
								</span>{" "}
								Learning
							</h1>

							<p className="text-[17px] text-gray-800 mb-6">
								Access role-specific interview questions, expand answers on
								demand, dive deep into key concepts, and organize your prep your
								way. From preparation to mastery—your all-in-one interview
								toolkit is here.
							</p>

							<button
								className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
								onClick={submitHandler}
							>
								Get Started
							</button>
						</div>

						{/* Right Column */}
						<div className="w-full md:w-1/2 flex justify-center">
							<img src={hero} alt="Hero Visual" className="w-[300px] h-auto" />
						</div>
					</div>
				</div>
			</div>

			<div className="w-full min-h-full bg-[#FFFCEF] mt-10">
				<div className="container ,x-auto px-4 pt-10 pb-20">
					<section className="mt-5">
						<h2 className="text-2xl font-medium text-center mb-12">
							Features That Make You Shine
						</h2>

						<div className="flex flex-col items-center gap-8">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
								{App_FEATURES.slice(0, 3).map((feature) => (
									<div
										key={feature.id}
										className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
									>
										<h3 className="text-base font-semibold mb-3">
											{feature.title}
										</h3>
										<p className="text-gray-600">{feature.description}</p>
									</div>
								))}
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{App_FEATURES.slice(3).map((feature) => (
									<div
										key={feature.id}
										className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100"
									>
										<h3 className="text-base font-semibold mb-3">
											{feature.title}
										</h3>
										<p className="text-gray-600">{feature.description}</p>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="text-sm bg-gray-300 text-secondary text-center p-5 mt-5">
				copyright@2025
			</div>

			<Modal 
                isOpen={openAuthModal}
                onclose={()=>{
                    setOpenAuthModal(false);
                    setCurrentPage("login")
                }}
                hideHeader
            >
				<div>
					{currentPage === "login" ? (
						<Login setCurrentPage={setCurrentPage} />
					) : currentPage === "signup" ? (
						<SignUp setCurrentPage={setCurrentPage} />
					) : null}
				</div>
			</Modal>
		</>
	);
};

export default LandingPage;
