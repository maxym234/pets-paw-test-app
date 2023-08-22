import '@/styles/globals.css'
import Welcome from '@/components/welcome'
import type { AppProps } from 'next/app'
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <main className={`${inter.className} flex p-[30px] min-w-[775px] max-w-[1440px]`}>
      <Welcome />
      <Component {...pageProps} />
    </main>
)}
