import Link from "next/link";
import { links } from "@/lib/constants";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav className={`flex flex-col gap-1 ${className}`}>
      {links.map(({ href, label }) => {
        if (href === "/") return null;
        return (
          <Link
            key={href}
            href={href}
            className="relative group px-6 py-3 xl:pl-[91px] transition-all"
          >
            <span className="relative z-10 px-6 font-bold py-3">{label}</span>
            <span className="absolute inset-0 bg-[#121037] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
