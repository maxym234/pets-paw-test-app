import AutoComplete from '@/UI/AutoComplete'
import EmouteButton from '@/UI/EmoteButton';
import { emoutes } from '@/commons/emoutes';

import { useRouter } from 'next/router';


type Props = {
    children: React.ReactNode
  }

export default function Search({children}: Props) {
  const router = useRouter()
  return ( 
    <div className="flex flex-col  max-w-[680px]">
        <div className="flex">
            <AutoComplete placeholder='Search for breeds by name' />
            {emoutes.map((item) => {
              const isCurrentPage = router.asPath === `/${item?.name}`
              return (
                <EmouteButton key={item.key} isCurrentPage={isCurrentPage} src={item.src('30', '30', true, isCurrentPage)} name={item.name} />)}
              )
            }
        </div>
        {children}
    </div>
  )
}
