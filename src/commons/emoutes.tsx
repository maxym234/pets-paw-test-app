import { useMutation } from 'react-query'
import SmileIcon from '../components/icons/emoutes/smile'
import LikeIcon from '../components/icons/emoutes/like'
import SadIcon from '../components/icons/emoutes/sad'
import WhiteLikeIcon from '@/components/icons/emoutes/whiteLike'

export const emoutes = [
    {
        key: 1,
        src: (width?: string, height?: string, isLike?: boolean, isCurrentPage?: boolean) => <SmileIcon width={width} height={height} isCurrentPage={isCurrentPage} />,
        name: 'like',
        background: '#97EAB9',
        text: 'was added to Likes',
    },
    {
        key: 2,
        name: 'favourite',
        src: (width?: string, height?: string, isLike?: boolean, isCurrentPage?: boolean) => isLike ? <LikeIcon width={width} height={height} isCurrentPage={isCurrentPage}/> : <WhiteLikeIcon />,
        background: '#FF868E',
        text: 'was added to Favourites',
    },
    {
        key: 3,
        name: 'dislike',
        src: (width?: string, height?: string, isLike?: boolean, isCurrentPage?: boolean) => <SadIcon width={width} height={height} isCurrentPage={isCurrentPage}/>,
        background: '#FFD280',
        text: 'was added to Dislikes',
    },
]