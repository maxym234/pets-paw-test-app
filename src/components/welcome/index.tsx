import Image from 'next/image'
import Link from 'next/link'
import { menu } from '@/commons/menu'
import { useRouter } from 'next/router'

export default function Welcome() {
    const styles = {
        fontSizeText: '20px'
    } 
    const route = useRouter();    
  return (
    <div className="flex flex-col ml-[117px] w-[446px] mr-[72px]">
        <Link href={'/'}>
            <Image
                src="/logo.svg"
                alt="Logo"
                style={{position: 'fixed'}}
                width={100}
                height={24}
            />
        </Link>
        <div className="flex flex-col items-center mt-[80px] desktop:items-start fixed">
            <Image
                src="/hi.svg"
                alt=""
                style={{objectFit: 'cover'}}
                width={182}
                height={58}
            />
            <span className={`text-[${styles.fontSizeText}] text-[#8C8C8C] mt-[10px] font-medium`}>Welcome to MacPaw Bootcamp 2023</span>
            <span className={`text-[${styles.fontSizeText}] text-[#1D1D1D] mt-[60px] mb-[20px] font-medium`}>Lets start using The Cat API</span>
            <div className="flex">
                {menu.map(item => {
                    const { id, background, name, width, height, src, link } = item;  
                    const isCurrentPage = route.pathname === link;                                                     
                    return (
                        <div key={id} className="[&:not(:last-child)]:mr-[16px]">
                            <div className={`flex items-center pl-[10px] w-[138px] h-[198px] rounded-[20px] border-4 border-[#ffffff99] hover:!border-[#fff]`} style={{background, borderColor: `${isCurrentPage ? '#FBE0DC' : '#ffffff99' }`}}>
                                <Image
                                    src={src}
                                    alt=""
                                    width={width}
                                    height={height}
                                />
                            </div>
                            <Link href={link} className="menu_link" style={{background: `${isCurrentPage ? '#FF868E' : '#fff'}`, color: `${isCurrentPage ? '#fff' : '#FF868E'}`}}>{name}</Link>
                        </div>
                    )}
                )}
            </div>
        </div>
    </div>
  )
}
