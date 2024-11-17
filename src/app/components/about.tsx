import Image from "next/image";

export default function About() {
    return (
        <div className="mt-7">
            <Image
                className="dark:invert -z-10"
                src="/Education.jpg"
                alt="Background Pic"
                fill={true}
                priority
            />
            <div className="container bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl mx-auto">
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
                <div className="w-4/5 h-[80%] self-start mt-[7%] ml-[7%] pl-[3%]">
                    Hello Here Is Temporary Text
                </div>
            </div>
        </div>
    )
}