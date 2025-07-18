export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute h-full lg:w-full bg-cover bg-center bg-repeat -z-10"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      ></div>
      {children}
    </>
  );
}
