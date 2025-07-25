export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute -z-10 h-full bg-cover bg-center bg-repeat lg:w-full"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      ></div>
      {children}
    </>
  );
}
