import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex fixed bg-white justify-center items-center w-full z-10">
  <SignUp />
  </div>
  )
}