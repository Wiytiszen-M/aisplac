import Link from "next/link";
type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export function SmartLink({ href, children, className, onClick }: Props) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {" "}
        {children}{" "}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {" "}
      {children}{" "}
    </Link>
  );
}
