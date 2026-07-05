import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 };

export function SocialImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 24,
        padding: 96,
        background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #60a5fa 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          N
        </div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>{SITE_NAME}</div>
      </div>
      <div style={{ fontSize: 32, maxWidth: 900, opacity: 0.92 }}>{SITE_DESCRIPTION}</div>
    </div>
  );
}
