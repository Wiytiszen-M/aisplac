export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute -z-10 bg-cover bg-center bg-no-repeat md:min-h-screen lg:w-full"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      ></div>
      {children}
    </>
  );
}
