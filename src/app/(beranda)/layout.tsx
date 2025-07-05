export default function Layout({
  hero,
  konsentrasi,
  tentang,
  agenda,
}: {
  hero: React.ReactNode;
  konsentrasi: React.ReactNode;
  tentang: React.ReactNode;
  agenda: React.ReactNode;
}) {
  const maxWidth = "max-w-4xl mx-auto";
  return (
    <main>
      {hero}
      <div className={maxWidth}>{konsentrasi}</div>
      <span className="h-[0.7px] w-full bg-[#C7C7C7] mb-10 block" />
      <div className={maxWidth}>{tentang}</div>
      {agenda}
    </main>
  );
}
