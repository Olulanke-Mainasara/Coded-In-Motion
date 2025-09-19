import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { muxInput } from "sanity-plugin-mux-input";
import deskStructure from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Coded in Motion",

  projectId: "swq5sqnd",
  dataset: "production",

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
    muxInput(),
  ],

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
});
