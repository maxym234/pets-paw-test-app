import { useQuery, useMutation } from 'react-query'
import Search from '@/components/search'
import MainWrap from '@/components/main'
import Options from '@/components/options'
import { getImageCat, postLikeDislikeCat, postFovouriteCat } from './api/cats';
import Image from 'next/image';
import { emoutes } from '@/commons/emoutes';
import Spin from 'antd/lib/spin';
import { useState } from 'react';

type ActionLog = {
  logId: number,
  imageId: string,
  logTime: string,
  name: string,
  text: string,
  likeImg: boolean,
  icon: (width: string, height: string, like?: boolean) => any 
}

export default function VotingPage() {
  const date = new Date();
  const logHour = date.getHours();
  const logMinutes = date.getMinutes();

  const [actionLogs, setActionLogs] = useState<ActionLog[]>([])
  const [isLikeImage, setIsLikeImage] = useState<boolean>(true)

  const { data: images, refetch, isFetching } = useQuery({queryFn: getImageCat, staleTime: Infinity, cacheTime: Infinity});  
  const { id, url, height } = images?.[0] || {}
  const {mutate: mutateLikeDislike} = useMutation(postLikeDislikeCat,{
    onSuccess:()=>{
      setIsLikeImage(true)
        refetch()
    }
  });  
  const {mutate: mutateFavourite} = useMutation(postFovouriteCat,{
    onSuccess:()=>{
      setIsLikeImage(!isLikeImage)
    }
  });  

  return (
    <div className="h-[840px] max-desktop:h-[540px] max-desktop:mt-[30px] w-[680px] rounded-[20px] ml-[65px]">
      <Search>
        <MainWrap>
          <Options title="Voiting"/>
          {!isFetching ?
            <Image alt={id} loader={() => url} src={url} width={640} height={height} style={{height: '360px', borderRadius: '20px'}} /> 
              : 
            <Spin size="large" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '640px', height: '360px'}} />}
          <div className='flex w-[240px] h-[80px] relative bottom-[40px] left-[200px] bg-[#fff] rounded-[20px] border-2 border-white'>
            {emoutes.map((item) => {
              const { key, src, background, name, text } = item;
              const handleClick = (e: any) => {
                let _key = 0
                setActionLogs([...actionLogs, {logId: ++_key, imageId: id,  logTime: `${logHour}:${logMinutes}`, text, icon: src, name, likeImg: isLikeImage}])                
                switch (name) {
                  case 'like':
                   return mutateLikeDislike({image_id: id, value: 1});
                  case 'favourite': 
                    return mutateFavourite({image_id: id});
                  case 'dislike':
                   return mutateLikeDislike({image_id: id, value: -1});
                }
              }
              
              return (
                <div key={key} onClick={(event) => handleClick((event))} className="votings_svg" style={{background}}>{src('30', '30', isLikeImage)}</div>
              )})}
          </div>
          {actionLogs.map((item) => {
            const { logId, logTime, imageId, text, icon, name, likeImg } = item;
            console.log(likeImg, name);
            
            return (
              <div key={logId} className='flex items-center justify-between h-[60px] bg-[#F8F8F7] rounded-[10px] px-[25px] mb-[10px]'>
                <div className='flex items-center'>
                  <div className='flex px-[10px] py-[3px] bg-[#fff] h-[30px] rounded-[5px]'>{logTime}</div>
                  <p className='text-[#8C8C8C] text-[16px] ml-[30px]'>Image ID: {imageId} {!likeImg ? name === 'like' ? text : 'was removed from Favourites' : text}</p>
                </div>
                {!likeImg ? name === 'like' ? icon('20', '20') : '' : icon('20', '20', true)}
              </div>
            )
          })}
        </MainWrap>
      </Search>
    </div>
  )
}
