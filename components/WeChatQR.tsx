// Placeholder WeChat QR code — replace the SVG with a real <img> once you have the QR image.
export default function WeChatQR({ size = 128 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.625}
        height={size * 0.625}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity="0.35"
      >
        {/* Top-left finder square */}
        <rect x="2" y="2" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5" />
        <rect x="9" y="9" width="14" height="14" fill="#f2f0ed" />
        {/* Top-right finder square */}
        <rect x="50" y="2" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5" />
        <rect x="57" y="9" width="14" height="14" fill="#f2f0ed" />
        {/* Bottom-left finder square */}
        <rect x="2" y="50" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5" />
        <rect x="9" y="57" width="14" height="14" fill="#f2f0ed" />
        {/* Data modules */}
        <rect x="38" y="2"  width="6" height="6" fill="#f2f0ed" />
        <rect x="38" y="12" width="6" height="6" fill="#f2f0ed" />
        <rect x="48" y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="38" y="48" width="6" height="6" fill="#f2f0ed" />
        <rect x="48" y="58" width="6" height="6" fill="#f2f0ed" />
        <rect x="60" y="48" width="6" height="6" fill="#f2f0ed" />
        <rect x="60" y="60" width="6" height="6" fill="#f2f0ed" />
        <rect x="72" y="48" width="6" height="6" fill="#f2f0ed" />
        <rect x="2"  y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="12" y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="22" y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="38" y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="72" y="38" width="6" height="6" fill="#f2f0ed" />
        <rect x="72" y="60" width="6" height="6" fill="#f2f0ed" />
        <rect x="60" y="72" width="6" height="6" fill="#f2f0ed" />
        <rect x="72" y="72" width="6" height="6" fill="#f2f0ed" />
        <rect x="38" y="60" width="6" height="6" fill="#f2f0ed" />
        <rect x="38" y="72" width="6" height="6" fill="#f2f0ed" />
      </svg>
    </div>
  );
}
