import Header from "../components/header";
import Link from 'next/link';

export default function Signup() {
    return (
        <>
            <Header auth={false} displayHeader={false} />
            <div className="flex flex-row justify-center pt-20">
                <div className="grid grid-rows-5 grid-cols-3 border rounded border-green-300 w-1/3">
                    <div className="col-start-1 row-start-1 flex flex-row justify-end text-xl text-green-300 font-light pt-10">
                        Username:
                    </div>
                    <div className="col-start-2 col-end-4 row-start-1 flex flex-row justify-center pl-10 pr-16 pt-10">
                        <input type="text" placeholder="Enter username" className="max-h-7 bg-black border border-green-300 rounded text-center text-green-300 w-full"/>
                    </div>
                    <div className="col-start-1 row-start-2 flex flex-row justify-end text-xl text-green-300 font-light pt-5">
                        Email:
                    </div>
                    <div className="col-start-2 col-end-4 row-start-2 flex flex-row justify-center pl-10 pr-16 pt-5">
                        <input type="email" placeholder="Enter email" className="max-h-7 bg-black border border-green-300 rounded text-center text-green-300 w-full"/>
                    </div>
                    <div className="col-start-1 row-start-3 flex flex-row justify-end text-xl text-green-300 font-light pb-8">
                        Password:
                    </div>
                    <div className="col-start-2 col-end-4 row-start-3 flex flex-row justify-center pl-10 pr-16">
                        <input type="password" placeholder="Enter password" className="max-h-7 bg-black border border-green-300 rounded text-center text-green-300 w-full"/>
                    </div>
                    <div className="col-start-2 row-start-4 flex flex-row justify-center text-xl text-green-300 cursor-pointer border border-green-300 rounded hover:bg-pointerHover h-10">
                        <div className="pt-1">
                            Sign Up Now!
                        </div>
                    </div>
                    <div className="col-start-1 col-end-4 row-start-5 flex flex-row justify-center text-sm text-green-300">
                        Already have an account? Log in <span className="underline"><Link href="/login">here</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};