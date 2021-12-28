import { useEffect } from "react";
import Header from "./components/header";

export default function Signup(props: any) {
    return (
        <div className="flex flex-col">
            <Header auth={false} displayHeader={false} />
        </div>
    );
};