import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type MenuCardProps = {
  icon: string | StaticImageData;
  title: string;
  href?: string;
};

export default function MenuCard({ icon, title, href }: MenuCardProps) {
  const content = (
    <div className='flex flex-col gap-1.5 p-2 shadow-md rounded-lg bg-white items-center hover:scale-105 transition-transform cursor-pointer'>
      <Image src={icon} alt={title} width={65} height={65} />
      <p className='text-center'>{title}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
