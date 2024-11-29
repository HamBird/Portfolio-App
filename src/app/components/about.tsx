import Image from "next/image";
import Content from "./content";

export default function About() {

    return (
        <Content picture="/About.jpg" container="container bg-white bg-opacity-75 text-black flex flex-col items-center h-[calc(100vh-4.4rem)] sm:h-[91vh] rounded-3xl mx-autogh">
            {/* container bg-gray-400 bg-opacity-75 text-black flex flex-col items-center h-[77vh] sm:h-[91vh] rounded-3xl mx-auto overflow-y-auto scrollbar-hide text-center */}
            <div className="w-full h-1/2 flex flex-row justify-center mt-[3%]">
                <div className="w-1/5 h-[50%] mt-[4%] pl-[7%]">
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
                <div className="w-4/5 h-1/3 text-xl pr-[15%] pl-[15%] pt-7">
                    <p className="text-2xl font-bold mb-5 text-center">About Me</p>
                    <p>
                        I'm Nathaniel Rojas, a recent graduate from NAIT with knowledge of multiple 
                        technologies. I've explored developing Express.js web apps, Next.js,
                            Flutter apps, and even IoT service utilizing MicroPython. 
                        Each project reflects my curiosity towards different technologies used within the
                        software world. In my downtime, I research current technologies and experiment with
                        IoT modules.
                    </p>
                    <p className="pt-2">
                        I'm excited to continue learning and developing my skills. I wish to contribute to
                        projects and the chance to display my skills.
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-full h-2/3 self-start pl-[8%] text-xl pr-[5%]">
                <div className="w-3/5">
                    <p className="text-2xl font-bold mb-5 text-center">Education</p>
                    <p className="font-bold">Diploma in Computer Engineering Technology</p>
                    <p>Graduation Date: April 2024</p>
                    <ul className="pt-3 list-disc">
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
                <div className="relative h-2/5 w-2/5 mt-[7%]">
                    <Image
                        src="/open-book-icon-free-vector.jpg"
                        alt="Book Picture"
                        sizes="100vw"
                        fill
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

{/*<div className="w-4/5 h-1/2 self-start mt-[3%] ml-[7%] pl-[3%] text-xl pr-[5%]">
    <p className="text-2xl font-bold mb-5 text-center">Education</p>
    /* I am a recent graduate from NAIT with a diploma in Computer Engineering Technology with a GPA of 3.7. I was taught how to manage databases in MySQL and Server 
    SQL
    <div>
        <p className="font-bold">Diploma in Computer Engineering Technology</p>
        <p>Graduation Date: April 2024</p>
        /* <p className="font-bold text-center pt-3">Relevant Coursework:</p> 
        <ul className="pt-3 list-disc">
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
</div> */}