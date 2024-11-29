'use client';
import React, {useState} from 'react';
import Content from "./content";
import "../globals.css";

type projectData = {
    name: string,
    detail?: string,
    website?: string,
    github?: string
}

export default function Projects() {
    const projects: projectData[] = [ 
        { 
            name: "Automatic Door Lock", 
            detail: "A smart door lock built with a Pico W to read oncoming RFID tags and Bluetooth from phones to remotely trigger a solenoid. Used Flutter to handle MQTT calls and view information from a database which included Users, Doors, and Activity.", 
            github: "https://github.com/HamBird/NAIT-Capstone" 
        }, 
        { 
            name: "Express Photo Gallery", 
            detail: "Built utilizing Express js and API calls to modify images from the server", 
            github: "https://github.com/HamBird/Express-JS-Photo-Gallery" 
        }, 
        { 
            name: "Portfolio App", 
            detail: "Built using Nextjs, created with modular code using tailwind", 
            website: "http://localhost:3000", 
            github: "https://github.com/HamBird/Portfolio-App"
        },
    ];
    
    // states to open dropdowns and close dropdowns
    const [openDropDown, setOpen] = useState("");

    const toggleDropdown = (name: string) => {
        setOpen(openDropDown === name ? "" : name);
    }

    return (
        <Content picture="/Projects.jpg" container="container bg-gray-400 bg-opacity-75 text-black flex flex-col items-center h-[calc(100vh-4.4rem)] sm:h-[91vh] rounded-3xl mx-auto overflow-y-auto scrollbar-hide text-center">
            <div className="text-2xl sticky top-0 bg-gray-600 text-white w-full pt-6 pb-5 z-20">Active Projects</div>
            <div className="sm:w-[60%] w-[90%] pt-9 pb-14">
                {
                    projects.map((project, index) => Dropdowns(project, openDropDown === project.name, toggleDropdown))
                }
            </div>
        </Content>
    )
}

const Dropdowns = ( data:projectData, isOpen:boolean, toggle:(name: string)=>void ) => {
    // creates a list of elements
    var links: JSX.Element[] = [];
    // filters out undefined data in the objects and gets the length of data filled in
    let activeLinks = Object.values(data).filter(value => value !== undefined).length;
    // compensates the length if the detail field is filled in
    activeLinks = data.detail === undefined ? activeLinks : activeLinks - 1; 
    // Checks if there is more than one website present to evenly split width
    var classAttributes = "px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-xl text-xl " + (activeLinks > 2 ? `w-1/${activeLinks-1}` : "w-full");

    // Checks if the data in the object is filled and is not the name or detail. Adds a reference containing the URL to a list
    Object.entries(data).filter(pairs => pairs[1] !== undefined && pairs[0] !== "name" && pairs[0] !== "detail")
        .map(pairs => links.push(
        <a key={pairs[0]} href={pairs[1]} rel="noopener noreferrer" target="_blank" className={classAttributes}>
            {pairs[0].charAt(0).toUpperCase() + pairs[0].slice(1)}
        </a>
        )
    );

    // toggles between the stored name to display dropdown contents and close the previous active dropdown
    return (
        <div key={data.name} className={`rounded-xl text-white bg-purple-600 mt-2 pt-3 ${isOpen ? "border-2 border-black" : "border-0"}`}>
            <p className="cursor-pointer h-12 text-xl pt-1" onClick={() => toggle(data.name)}>{data.name}</p>
            {isOpen && (<div className="flex flex-row flex-wrap bg-white rounded-b-xl transition-all duration-150 ease-out">
                {data.detail !== undefined && (<div className="px-4 py-2 text-gray-800 text-base sm:text-lg w-full font-bold">{data.detail}</div>) }
                {links}
            </div>)}
        </div>
    );
}