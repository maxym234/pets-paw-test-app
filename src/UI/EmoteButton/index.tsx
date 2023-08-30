import Link from 'next/link';

type Props = {
    key: number,
    src?: JSX.Element,
    name: string
    isCurrentPage: boolean
  }

export default function EmouteButton({key, src, name, isCurrentPage}: Props) { 
   
  return (
        <Link key={key} href={name}>
          <div className="emoteButton" style={{background: isCurrentPage ? '#FF868E' : '#FFF'}}>
            {src}
          </div>
        </Link>
  )
}
