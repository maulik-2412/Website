
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import Head from "next/head"
import "../styles/globals.css" 

const inter = Inter({ subsets: ["latin"] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Maulik Tyagi-Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio of Maulik Tyagi, a passionate Full Stack Developer creating amazing web experiences with modern technologies."
        />
        <meta
          name="keywords"
          content="portfolio, full stack developer, react, next.js, web development, mern stack, maulik tyagi, software engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.className} scroll-smooth`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
