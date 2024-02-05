import Link from 'next/link';

interface IconProp{
    icon: React.ReactNode;
    href: string;
    title: string;
}

const index: React.FC<IconProp> = ({icon, href, title}) => {
    return (
        <div className="bg-black text-white dark:bg-white dark:text-black hover:bg-slate-900 dark:hover:bg-opacity-80 p-2 rounded-full hover:bg-gray-700">
          <Link href={href}>
            {icon}
            {/* {title} */}
          </Link>
        </div>
      );

}

export default index
