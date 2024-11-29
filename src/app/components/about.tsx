import Image from "next/image";
import Content from "./content";

export default function About() {

    return (
        <Content picture="/About.jpg" container="container bg-white bg-opacity-75 text-black flex flex-col items-center h-[calc(100vh-4.4rem)] sm:h-[91vh] rounded-3xl mx-auto overflow-y-auto">
            {/* container bg-gray-400 bg-opacity-75 text-black flex flex-col items-center h-[77vh] sm:h-[91vh] rounded-3xl mx-auto overflow-y-auto scrollbar-hide text-center */}
            <div className="w-full mb-52 sm:mb-0 sm:h-1/2 flex flex-row sm:flex-nowrap flex-wrap justify-center mt-[3%]">
                <div className="w-full sm:w-1/5 h-[50%] mt-[4%] sm:pl-[7%]">
                    <div className="h-[100%] relative opacity-85">
                        <Image
                            src="/NAIT.png"
                            alt="NAIT Pic"
                            sizes="100vw"
                            fill
                            style={{
                                objectFit: "contain"
                            }}
                            priority
                        />
                    </div>
                    <p className="mt-[10%] hidden sm:block text-center">Northern Alberta Institute of Technology</p>
                </div>
                <div className="w-full sm:w-4/5 sm:h-1/3 text-xl sm:pr-[15%] sm:pl-[15%] sm:pt-7 pr-3 pl-3">
                    <p className="text-xl sm:text-2xl font-bold mb-5 text-center sm:mt-0 mt-3">About Me</p>
                    <p className="text-base sm:text-xl">
                        I'm Nathaniel Rojas, a recent graduate from NAIT with knowledge of multiple 
                        technologies. I've explored developing Express.js web apps, Next.js,
                            Flutter apps, and even IoT service utilizing MicroPython. 
                        Each project reflects my curiosity towards different technologies used within the
                        software world. In my downtime, I research current technologies and experiment with
                        IoT modules.
                    </p>
                    <p className="text-base sm:text-xl pt-2">
                        I'm excited to continue learning and developing my skills. I wish to contribute to
                        projects and the chance to display my skills.
                    </p>
                </div>
            </div>
            <div className="flex flex-row sm:flex-nowrap flex-wrap w-full sm:h-2/3 self-start pl-[8%] text-xl pr-[5%]">
                <div className="sm:w-3/5 w-full order-2 sm:order-1 sm:mb-0 mb-6">
                    <p className="sm:text-2xl text-xl font-bold mb-5 text-center">Education</p>
                    <p className="text-xl font-bold">Diploma in Computer Engineering Technology</p>
                    <p>Graduation Date: April 2024</p>
                    <ul className="pt-3 list-disc sm:text-xl text-base">
                        <li>
                            Relevant Coursework: Database Programming, Web Development, 
                            Software Development, Embedded System Design, 
                            Programmable logic design, and PLC Programming.

                        </li>
                        <li className="pt-2">
                            Academic Achievements: Dean's Honour Roll (3 Terms), 
                            Jason Lang Scholarship Recipient
                        </li>
                        <li className="pt-2">
                            Technical Project: "The Automatic Door Lock" 
                            - Developed a IoT door lock
                            integrating an RFID sensor and BlueTooth technologies 
                            to track activity in real-time.
                        </li>
                        <p className="pt-3 font-bold">Self Taught Programs:</p>
                        <li className="pt-2">
                            Express JS - Explored API fetch calls, storage management, and file validation.

                        </li>
                        <li className="pt-2">
                            Next JS - Explored routing and modular code.
                        </li>
                    </ul>
                </div>
                <div className="sm:relative sm:order-2 order-1 sm:h-2/5 sm:w-2/5 place-items-center sm:mt-[7%] w-80 h-48 mb-6">
                    <Image
                        src="/open-book-icon-free-vector.jpg"
                        alt="Book Picture"
                        // sizes="100vw"
                        // fill
                        height="200"
                        width="200"
                        style={{
                            objectFit: "contain"
                        }}
                        priority
                    />
                </div>
            </div>
        </Content>
    )
}
/*
<div className="w-80 h-48">
                    <Image
                        src="/Technologies.png"
                        alt="Technology Skills"
                        height="186"
                        width="312"
                        style={{objectFit: "contain"}}
                    />
                </div>*/