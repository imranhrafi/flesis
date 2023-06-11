import Head from "next/head";
import React from "react";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Flesis - Manage you file easily and effectively",
  description: "GLet’s Manage Your Files Easier And Simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='max-w-screen-xl mx-auto'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
