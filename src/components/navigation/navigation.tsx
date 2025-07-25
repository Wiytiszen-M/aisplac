import Link from 'next/link';
import { links } from '@/lib/constants';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = '' }: NavigationProps) => {
  return (
    <nav className={`flex flex-col gap-1 ${className}`}>
      {links.map(({ href, label }) => {
        if (href === '/') return null;
        return (
          <Link
            key={href}
            href={href}
            className="group relative px-6 py-3 transition-all xl:pl-[91px]"
          >
            <span className="relative z-10 px-6 py-3 font-bold">{label}</span>
            <span className="absolute inset-0 -translate-x-full transform rounded-r bg-[#121037] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
