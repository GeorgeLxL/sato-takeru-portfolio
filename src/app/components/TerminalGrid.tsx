export default function TerminalGrid() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Horizontal lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(74,222,128,0.04) 1px, transparent 1px)",
        backgroundSize: "100% 32px",
      }} />
      {/* Vertical lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(to right, rgba(74,222,128,0.04) 1px, transparent 1px)",
        backgroundSize: "40px 100%",
      }} />
    </div>
  );
}
