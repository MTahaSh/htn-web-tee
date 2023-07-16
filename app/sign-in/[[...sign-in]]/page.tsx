import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex h-screen bg-white justify-center items-center w-full z-10">
        <SignIn/>
        </div>
        )
}