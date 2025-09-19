"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config"; // path to your studio config

export default function StudioPage() {
  return <NextStudio config={config} />;
}
