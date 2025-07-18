export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute lg:min-h-screen lg:w-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/modular/layout-bg.png')",
        }}
      />
      <div
        className="absolute min-h-screen w-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/modular/fade-bg.png')",
        }}
      />

      {children}
    </>
  );
}
