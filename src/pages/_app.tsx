import '@/styles/globals.css'
import Welcome from '@/components/welcome'
import type { AppProps } from 'next/app'
import { Jost } from 'next/font/google'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const inter = Jost({ subsets: ['latin'] })
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return ( 
    // <main className={`${inter.className} flex p-[30px] min-w-[775px] max-w-[1440px]`}>
    <main className={`${inter.className} flex p-[30px] justify-between`}>
      <QueryClientProvider client={queryClient}>
        <Welcome />
        <Component {...pageProps} />
      </QueryClientProvider>
    </main>
)}
