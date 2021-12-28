import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header(props: any) {
    const signUpButton = () => {
        console.log(props)
        if (!props.displayHeader) {
            return (
                null
            )
        } else {
            return (
                <div className="col-start-3 flex flex-row justify-start gap-8">
                    <Link href="/signup">
                        <div 
                            className="p-3 border border-green-300 rounded text-green-300 font-light cursor-pointer hover:bg-pointerHover"
                        >
                            Sign Up
                        </div>
                    </Link>
                    <div className="p-3 pr-4 pl-4 border border-green-300 rounded text-green-300 font-light cursor-pointer hover:bg-pointerHover">
                        Log In
                    </div>
                </div>
            )
        };
    };

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 pt-12 pb-12 mr-10 bg-background">
                <div className="col-start-1 flex flex-rows justify-end">
                    <Link href="/"><h2 className="text-4xl text-green-300 font-light cursor-pointer animate-bounce">PhotoBank</h2></Link>
                </div>
                {signUpButton()}
            </div>
        </div>
    )
}