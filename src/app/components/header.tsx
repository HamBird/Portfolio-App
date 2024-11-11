'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header () {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const preference = localStorage.getItem("darkMode");
        if (preference) {
            setDarkMode(preference === "true")
            document.documentElement.classList.add('dark');
        }
    });

    const toggleDarkMode = () => {
        const updatedPreference = !darkMode;
        setDarkMode(updatedPreference);
        localStorage.setItem("darkMode", '${updatedPreference}');

        if (updatedPreference) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white">
            Home
        </a>
        <div className="flex items-center space-x-4">
            <Link href="/about" className="text-white">About Me</Link>
            <Link href="/education" className="text-white">Education</Link>
            <div className="relative group">
                <p className="text-white cursor-pointer">Projects</p>
                <div className="absolute right-0 mt-1 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-95 group-hover:scale-100 transition-all duration-150 ease-out">
                    <a href="https://github.com/HamBird/NAIT-Capstone" target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Automatic Door Lock</a>
                    <a href="https://github.com/HamBird/Express-JS-Photo-Gallery" target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Express Photo Gallery</a>
                    <a href="https://github.com/HamBird/Portfolio-App" target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Portfolio App</a>
                </div>
            </div>
            <a href="https://github.com/HamBird" target="_blank" className="text-white">Github</a>
        </div>
      </div>
    </nav>
  );
};


