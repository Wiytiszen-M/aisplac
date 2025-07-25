export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute md:min-h-screen lg:w-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      />
      {children}
    </>
  );
}
