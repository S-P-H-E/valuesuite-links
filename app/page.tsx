import Image from "next/image";
import One from '@/public/01.jpg'
import Two from '@/public/02.jpg'
import Link from "next/link";
import clsx from "clsx";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  const links = [
    {
      icon: <FaInstagram size={20}/>,
      name: 'Instagram',
      link: 'https://www.instagram.com/valuesuite',
      enable: true
    },
    {
      icon: <FaTiktok size={20}/>,
      name: 'TikTok',
      link: 'https://www.tiktok.com/@valuesuite',
      enable: true,
    },
    {
      icon: <FaYoutube size={20}/>,
      name: 'YouTube',
      link: 'https://www.youtube.com/@valuesuite',
      enable: true
    }
  ]
  return (
    <div className="h-[100dvh] w-full bg-black text-white">
      <div className="max-w-[850px] mx-auto h-[40dvh] relative pt-6 px-6">
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent z-10 absolute"/>
        <Image src={Two} alt="banner" width={1000} height={50} className="w-[100dvw] h-full object-cover object-center rounded-t-2xl"/>
      </div>
      <div className="absolute top-[13rem] w-full h-fit flex flex-col justify-center items-center z-20 gap-1">
        <Image src={One} alt="profile" width={100} height={100} className="rounded-full aspect-square" />
        <h1 className="text-3xl font-semibold">Valuesuite™</h1>
        <p className="text-[#b5b5b5]">@valuesuite</p>
        <div className="flex flex-col gap-5 mt-5">
          {links.map((link, index)=>(
              <Link key={index} href={link.link} target="_blank" className={clsx(link.enable ? "text-white" : "text-[#454545] bg-[#0a0a0a]", "border border-[#282828] bg-[#1f1f1f] w-[70vw] sm:w-[450px] flex justify-center items-center gap-2 p-4 rounded-2xl")}>
                  {link.icon}
                  <h1 className="font-medium">{link.name}</h1>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
