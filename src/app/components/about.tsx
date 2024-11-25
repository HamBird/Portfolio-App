import Image from "next/image";
import Content from "./content";

export default function About() {

    return (
        <Content picture="/Education.jpg">
            <div className="w-1/5 h-[20%] ml-[4%] mt-[7%] self-start">
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
                    <p className="mt-[10%] text-center">Northern Alberta Institute of Technology</p>
                </div>
                <div className="w-4/5 h-[80%] self-start mt-[3%] ml-[7%] pl-[3%] text-xl pr-[5%]">
                    <p className="text-2xl font-bold mb-5 text-center">Education</p>
                    {/* I am a recent graduate from NAIT with a diploma in Computer Engineering Technology with a GPA of 3.7. I was taught how to manage databases in MySQL and Server 
                    SQL */}
                    <div>
                        <p className="font-bold">Diploma in Computer Engineering Technology</p>
                        <p>Graduation Date: April 2024</p>
                        {/* <p className="font-bold text-center pt-3">Relevant Coursework:</p> */}
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
                </div>
        </Content>
    )
}