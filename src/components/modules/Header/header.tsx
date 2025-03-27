import Button from "@/components/UI/Button"
import Image from "next/image"
import Link from "next/link"
import { PathEnum } from "@/types/path.enum"
export default function Header() {
    return (
        <div className="flex fixed position-fixed flex-row top-0 left-0 right-0 w-full bg-black items-center justify-between p-4 h-[88]">
                
                <Link href="/dashboard" className="ml-12">
                <div className="flex flex-row gap-3">
                <Image src="/logo.svg" alt="logo" width="48" height="54" className=""/>
                <h1 className="text-primary font-extrabold text-[38px]">Spoti-Stat</h1>
                </div>
                </Link>

                <div className="flex flex-row gap-16 text-primary font-semibold text-[24px] mr-0">
                    <Link href={PathEnum.TRACKS}>Tracks</Link>       
                    <Link href={PathEnum.ARTISTS}>Artists</Link>       
                    <Link href={PathEnum.ALBUMS}>Albums</Link>       
                    <Link href={PathEnum.GENRES}>Genres</Link>       
                    <Link href={PathEnum.RECOMENDATIONS}>Recomendations</Link>            
                </div>
                <Link href={PathEnum.SETTINGS}>
                    <Button size='sm' style='primary' type="button" className="mr-12 text-[20px] font-bold rounded-1xl" >Settings</Button>
                </Link>
        </div>
    )

}