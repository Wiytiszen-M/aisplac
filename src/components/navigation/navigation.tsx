import Link from "next/link";

interface NavigationProps {
  className?: string;
}

const links = [
  { href: "/pvc", label: "PCV" },
  { href: "/steelframe", label: "MATERIAL DE PRODUCCIÓN EN SECO" },
  { href: "/solar-energy", label: "ENERGÍA SOLAR" },
  { href: "/modular", label: "MÓDULOS HABITABLES" },
  { href: "/aisplac", label: "AISPLAC" },
  { href: "/novedades", label: "NOVEDADES" },
  { href: "/contact-us", label: "CONTACT US" },
];

const Navigation = ({ className = "" }: NavigationProps) => {
  return (
    <nav className={`flex flex-col gap-1 ${className}`}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="relative group px-6 py-3 xl:pl-[91px] text-white transition-all"
        >
          <span className="relative z-10 px-6 py-3">{label}</span>
          <span className="absolute inset-0 bg-[#121037] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
