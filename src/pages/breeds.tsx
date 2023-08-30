import Image from 'next/image'
import { Inter } from 'next/font/google'
import Search from '@/components/search'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="h-[840px] max-desktop:h-[540px] max-desktop:mt-[30px] w-[680px] rounded-[20px] ml-[65px]">
      <Search>
          <div>
            
          </div>
      </Search>
    </div>
  )
}
