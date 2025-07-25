export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute -z-10 bg-cover bg-center bg-no-repeat lg:min-h-screen lg:w-full"
        style={{
          backgroundImage: "url('/modular/layout-bg.png')",
        }}
      />
      <div
        className="md:hidden absolute -z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modular/bg-mobile.png')",
        }}
      />
      <div
        className="absolute -z-10 min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modular/fade-bg.png')",
        }}
      />

      {children}
    </>
  );
}
