type Props = {
    children?: React.ReactNode
  }

export default function MainWrap({children}: Props) {
  return ( 
    <div className="p-[20px] bg-[#fff] mt-[10px] rounded-[20px]">
      {children}
    </div>
  )
}
