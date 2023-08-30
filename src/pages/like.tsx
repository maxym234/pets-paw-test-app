import { useQuery } from 'react-query'
import Search from '@/components/search'
import MainWrap from '@/components/main'
import Options from '@/components/options'
import { getVotings } from './api/cats';
import Image from 'antd/lib/image';
import { Spin } from 'antd';

type Image = {
  id: string,
  url: string
}

type DataVotings = {
  id: number,
  country_code: string,
  created_at: string,
  image_id: string,
  sub_id: string | null,
  value: number,
  image: Image
}

export default function LikePage() {

  const { data = [], isFetching, status } = useQuery<DataVotings[] | undefined>({queryFn: getVotings, staleTime: Infinity, cacheTime: Infinity}); 
  const isDataArray  = Array.isArray(data)
  const likeVoting =  isDataArray ? data?.filter(item => item?.value === 1) : [];
  
  return (
    <div className="h-[840px] max-desktop:h-[540px] max-desktop:mt-[30px] w-[680px] rounded-[20px] ml-[65px]">
      <Search>
        <MainWrap>
          <Options title="Voiting"/>
          {!isFetching ? <div className="gallery">
            {likeVoting?.map((item) => {
              const { id, image } = item;
              return (
                <>
                {image?.url && 
                  <li key={id}>
                    <Image alt={image?.id} src={image?.url} style={{maxHeight: '300px', maxWidth: '420px', borderRadius: '20px'}} />
                  </li>
                }
                </>
              )
            })}
            {!isDataArray && <p className='flex h-[60px] w-full items-center pl-[20px] bg-[#F8F8F7] text-[#8C8C8C] rounded-[10px]'>No item found</p>}
          </div> : <Spin style={{width: '100%'}} />}
        </MainWrap>
      </Search>
    </div>
  )
}
