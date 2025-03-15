import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters List | Your App Name",
  description: "Explore a list of characters with detailed information, including their name, species, status, and image.",
  openGraph: {
    title: "Characters List | Your App Name",
    description: "Explore a list of characters with detailed information, including their name, species, status, and image.",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpMh27AADc9XGX_I4JQs7d0al84zLr-PrSQ&s",
        width: 1200,
        height: 630,
        alt: "Characters List Preview",
      },
    ],
    siteName: "Your App Name",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Characters List | Your App Name",
    description: "Explore a list of characters with detailed information, including their name, species, status, and image.",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpMh27AADc9XGX_I4JQs7d0al84zLr-PrSQ&s",
        width: 1200,
        height: 630,
        alt: "Characters List Preview",
      },
    ],
  },
};

export default function Home() {
  return (
    <></>
  );
}
