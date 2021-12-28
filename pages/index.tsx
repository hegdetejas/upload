import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

// components
import Header from "./components/header";


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayHeader, setDisplayHeader] = useState(true);
  useEffect(() => {
    const username = window.localStorage.getItem("user");
    if (username) {
      setIsLoggedIn(true);
    }
  }, [])

  // async function load() {
  //   let greeting = await fetch("./api/user")
  //     .then((greeting) => greeting.json());
  //   setUser(greeting.name);
  // };

  const welcome = () => {
    if (isLoggedIn) {
      return (
        <div className="flex flex-row justify-center text-3xl text-white font-light animate-pulse">
          Welcome {isLoggedIn}
        </div> 
      )
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }

  return (
    <Header
      auth={isLoggedIn}
      displayHeader={displayHeader}
    />
  )
}
