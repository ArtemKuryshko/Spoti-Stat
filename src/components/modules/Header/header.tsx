import Button from "@/components/UI/Button"
import Image from "next/image"
import Link from "next/link"
import { PathEnum } from "@/types/path.enum"
import { ProfileService } from "@/services/profile.service"
import UserIcon from "../User/UserIcon"


export default async function Header() {

    const {data} = await ProfileService.GetProfile()
    const name = data.display_name
    const image = data.images[0].url
    
    return (
        <div className="flex fixed position-fixed flex-row top-0 left-0 right-0 w-full bg-black items-center justify-between p-4 h-[72]">
                
                <Link href={PathEnum.DASHBOARD} className="ml-24">
                <div className="flex flex-row gap-3">
                <Image src="/logo.svg" alt="logo" width="32" height="36" className=""/>
                <h1 className="text-primary font-extrabold text-[28px]">Spoti-Stat</h1>
                </div>
                </Link>

                <div className="flex flex-row gap-16 text-primary font-semibold text-[20px] ">
                    <Link href={PathEnum.TRACKS}>Tracks</Link>       
                    <Link href={PathEnum.ARTISTS}>Artists</Link>       
                    <Link href={PathEnum.ALBUMS}>Albums</Link>       
                    <Link href={PathEnum.GENRES}>Genres</Link>       
                    <Link href={PathEnum.RECOMENDATIONS}>Recomendations</Link>            
                </div>
                <Link href={PathEnum.SETTINGS} className="mr-24">
                    <UserIcon name = {name} image = {image} />
                </Link>
        </div>
    )

}