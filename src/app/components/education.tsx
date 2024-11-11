import Image from "next/image";

export default function Education() {
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
                <div className="w-1/4 h-[20%] ml-[4%] relative opacity-85">
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
            </div>
        </div>
    )
}