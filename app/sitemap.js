export default function sitemap() {
  const baseUrl = "https://mrdenterprises.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

