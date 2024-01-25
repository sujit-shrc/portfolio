import Link from 'next/link';

interface IconProp{
    icon: React.ReactNode;
    href: string;
    title: string;
}

const index: React.FC<IconProp> = ({icon, href, title}) => {
    return (
        <div className="border border-gray-500 p-2 rounded-full hover:bg-gray-700">
          <Link href={href}>
            {icon}
            {/* {title} */}
          </Link>
        </div>
      );

}

export default index
