export default function BlobBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg" aria-hidden="true">
      <div
        className="animate-float absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-40 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--cherry), transparent 70%)" }}
      />
      <div
        className="animate-float absolute top-1/4 -right-36 h-[420px] w-[420px] rounded-full opacity-40 blur-[90px] [animation-delay:-5s]"
        style={{ background: "radial-gradient(circle, var(--navy-light), transparent 70%)" }}
      />
      <div
        className="animate-float absolute -bottom-36 left-[30%] h-[380px] w-[380px] rounded-full opacity-30 blur-[90px] [animation-delay:-10s]"
        style={{ background: "radial-gradient(circle, var(--cherry-dark), transparent 70%)" }}
      />
    </div>
  );
}
