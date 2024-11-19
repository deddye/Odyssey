export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="group/design-root dark relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[#111518]"
      style={{ fontFamily: "Be Vietnam Pro, Noto Sans, sans-serif" }}
    >
      <main>{children}</main>
    </div>
  );
}
