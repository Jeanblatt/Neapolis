import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";
import { SOCIAL_IMAGE_SIZE, SocialImageContent } from "@/lib/social-image";

export const alt = `${SITE_NAME} — Boutique informatique en Tunisie`;
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialImageContent />, size);
}
