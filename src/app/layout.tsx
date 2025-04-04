import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";
import Script from "next/script";
import "react-day-picker/style.css";
import "swiper/css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axioon",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script type="text/javascript" id="clarity">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o5nqnjy3jk");`}
      </Script>
      <CookiesProvider>
        <body>{children}</body>
      </CookiesProvider>
    </html>
  );
}
