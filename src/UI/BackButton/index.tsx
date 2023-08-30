import ArrowLeftIcon from "@/components/icons/emoutes/arrowLeft"
import { useRouter } from "next/router"

type Props = {
    src?: JSX.Element,

  }

export default function BackButton({src}: Props) {  
  const router = useRouter();
  return (
    <div className="backButton" onClick={() => router.back()}>
      <ArrowLeftIcon />
    </div>
  )
}
