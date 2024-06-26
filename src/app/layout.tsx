import "@app/globals.css";
import "@fontsource/cinzel";
import type { Metadata } from "next";
import { AppBar } from "@components";
import {Cinzel} from "@next/font/google"

const cinzel= Cinzel({
  subsets: ["latin"],
  weight: ["400"]
})

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Unity Travels",
  description:
    "Facilitating Student arrivals and departures all over UK, Day Trips, Picnics, Weddings, Luxury Hires and much more.",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        url: "/assets/favicon/icon-light.png",
        href: "/assets/favicon/icon-light.png",
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        url: "/assets/favicon/icon-dark.png",
        href: "/assets/favicon/icon-dark.png",
      },
    ],
  },
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="app relative">
        <AppBar />
        <main className={cinzel.className}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
