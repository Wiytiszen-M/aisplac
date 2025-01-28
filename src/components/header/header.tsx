import { Buy, ShoppingCart, User } from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="absolute top-16 flex w-full justify-between z-10">
      <div className="flex items-center ml-[160px]">
        <button className="p-2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <Link href="/">
        <Image src="/logo.svg" width={112} height={64} alt="logo" />
      </Link>
      <div className="flex gap-3 mr-[160px]">
        <ShoppingCart className="w-12 h-12" />
        <Buy className="w-12 h-12" />
        <User className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Header;
