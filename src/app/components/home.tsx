import Image from "next/image";
import Content from "./content";

export default function Home() {
    return (
        <Content picture={"/Home.jpg"} container="container bg-white bg-opacity-75 text-black flex flex-row flex-wrap sm:flex-auto sm:flex-nowrap items-center justify-between h-[calc(100vh-4.4rem)] sm:h-[91vh] p-3 sm:p-9 rounded-3xl mx-auto overflow-y-auto">
            <div className="sm:w-1/2 sm:ml-[4%] relative w-full sm:flex sm:justify-center">
                <Image
                    src="/Temp-PortfolioPic.png"
                    alt="Portfolio Pic"
                    height="456"
                    width="348"
                    style={{
                        objectFit: "contain"
                    }}
                />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pr-8 sm:pl-8 pt-3 sm:pt-0 sm:text-center overflow-y-auto">
                <p className="text-lg sm:text-4xl font-mono">
                    My Name Is Nathaniel Rojas
                </p>
                <p className="text-sm sm:text-lg pt-5">
                    I'm currently exploring different skills from building C# applications, Web applications and
                    IoT devices. My current projects range from web technologies such as Express.js and Next.js to
                    using communicating to IoT modules on C. Feel free to explore my portfolio and I'd love the chance to display
                    my skills.  
                </p>
                <p className="sm:text-base text-sm pt-2">
                    Below are some of the different technologies I have used:
                </p>
                <div className="w-80 h-48">
                    <Image
                        src="/Technologies.png"
                        alt="Technology Skills"
                        height="186"
                        width="312"
                        style={{objectFit: "contain"}}
                    />
                </div>
            </div>
        </Content>
    );
}