import Image from "next/image";

export default function About() {
    return (
        <div className="mt-7">
            <Image
                className="dark:invert -z-10"
                src="/About.jpg"
                alt="Background Pic"
                fill={true}
                priority
            />
            <div className="container bg-white bg-opacity-75 text-black flex items-center justify-between h-[77vh] sm:h-[91vh] p-9 rounded-3xl mx-auto">

            </div>
        </div>
    )
}