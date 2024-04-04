import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AppPager from "@/pages/appPerger";
import 'react-quill/dist/quill.snow.css'

const inter = Cairo({ subsets: ["arabic"] });
//
export const metadata = {
  title: "Dr Mohamed Elsayed",
  description: "Ezabella Clinics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        
      </head>
      <body className={inter.className}>
        <main className="">
          <AppPager Component={children} />
        </main>
      </body>
    </html>
  );
}
