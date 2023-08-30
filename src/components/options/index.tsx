import BackButton from "@/UI/BackButton"

type Props = {
    children?: React.ReactNode
    title: string
  }

export default function Options({children, title}: Props) {
  return (
    <div className="flex mb-[20px]">
      <BackButton />
      <h2 className="flex px-[30px] items-center justify-center h-[40px] bg-[#FF868E] rounded-[10px] text-[#fff] text-[20px] ml-[10px] uppercase">{title}</h2>
      {children}
    </div>
  )
}
