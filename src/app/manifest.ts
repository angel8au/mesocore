import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mesocore",
    short_name: "Mesocore",
    description:
      "Mesoterapia de precisión con formulaciones de origen europeo.",
    start_url: "/",
    display: "standalone",
    background_color: "#dadcdc",
    theme_color: "#314c54",
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
