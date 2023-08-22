import Image from 'next/image'
export default function Home() {
  return (
      <div >
        <div className="bg-[#FBE0DC] h-[840px] max-tablet:h-[540px] max-tablet:mt-[30px] w-[680px] rounded-[20px] ml-[65px]"></div>
        <Image
          src="/main.svg"
          alt="Vercel Logo"
          className="main_img"
          width={775}
          height={900}
          priority
        />
      </div>
  )
}
