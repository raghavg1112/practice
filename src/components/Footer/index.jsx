import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between px-8 items-center bg-white text-gray-700 font-semibold  bottom-0 z-10 w-full py-2 fixed footer-shadow">
        <p>© 2023</p>
        <div className="flex items-center">
          <p className="font-medium">
            Made with <span className="text-red-500">❤️</span> by Raghav.
          </p>
          <p></p>
        </div>
      </div>
    </>
  );
}
