import { useEffect } from "react";
import Header from "../components/header";
import Link from 'next/link';

export default function Login() {
    return (
        <>
            <Header auth={false} displayHeader={false} />
            <div className="flex flex-row justify-center pt-20">
                <div className="grid grid-rows-4 grid-cols-3 border rounded border-green-300 w-1/3 pt-10">
                    <div className="col-start-1 row-start-1 flex flex-row justify-end text-xl text-green-300 font-light pt-3">
                        Email:
                    </div>
                    <div className="col-start-2 col-end-4 row-start-1 flex flex-row justify-center pl-10 pr-16 pt-3">
                        <input type="email" placeholder="Enter email" className="max-h-7 bg-black border border-green-300 rounded text-center text-green-300 w-full"/>
                    </div>
                    <div className="col-start-1 row-start-2 flex flex-row justify-end text-xl text-green-300 font-light pb-8">
                        Password:
                    </div>
                    <div className="col-start-2 col-end-4 row-start-2 flex flex-row justify-center pl-10 pr-16">
                        <input type="password" placeholder="Enter password" className="max-h-7 bg-black border border-green-300 rounded text-center text-green-300 w-full"/>
                    </div>
                    <div className="col-start-2 row-start-3 flex flex-row justify-center text-xl text-green-300 cursor-pointer border border-green-300 rounded hover:bg-pointerHover h-10">
                        <div className="pt-1">
                            Log In!
                        </div>
                    </div>
                    <div className="col-start-1 col-end-4 row-start-4 flex flex-row justify-center text-sm text-green-300">
                        Don't have an account yet? Sign up <span className="underline"><Link href="/signup">here</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};