export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="absolute -z-10 bg-repeat w-full h-full min-h-screen"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
          backgroundSize: "auto",
        }}
      />
      {children}
    </>
  );
}
