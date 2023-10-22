"use client"

import logo from "@assets/index";
import Image from "next/image";
import { validateEmail, validatePassword } from "@utils/formValidate";
import { useState } from "react";

export default function LoginForm() {
    return (
        <main>
            <div className="inline-flex justify-center pl-[500px] py-36 items-center">
                <div className="flex flex-col justify-between items-center gap-6">
                <Image className="flex items-center w-16" src={logo} alt="HOKC logo" />
                <div className="flex p-6 flex-col items-start gap-2 rounded-lg border border-solid border-[#EFEFF0]">
                    <form>
                    <label htmlFor="email" className="flex flex-col items-start gap-1">
                            <span className="text-[12px] font-medium">
                                Email
                            </span>
                    </label>
                    <input type="email" className="items-start flex gap-2 p-2 placeholder:text-xs bg-[#ececec] w-[350px] rounded focus:outline-cyan-500 focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Enter Email"/>
                    </form>
                    
                    <label htmlFor="email" className="flex flex-col items-start gap-1">
                            <span className="text-[12px] font-medium">
                                Password
                            </span>
                    </label>
                    <input type="password" className="items-start flex gap-2 p-2 placeholder:text-xs bg-[#ececec] w-[350px] rounded focus:outline-cyan-500 focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Enter Password" />
                    <button type="submit" className="flex justify-center items-center self-stretch bg-black rounded-md p-[6px] text-base">
                        <span className="text-[12px] font-medium text-white ">
                            Login
                        </span>
                    </button>
                </div>
                </div>

            </div>
        </main>
    )
}