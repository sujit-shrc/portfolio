import Link from 'next/link';

interface IconProp{
    icon: React.ReactNode;
    href: string;
    title: string;
}

const index: React.FC<IconProp> = ({icon, href, title}) => {
    return (
        <div className="bg-slate-200 hover:bg-slate-400 rounded-lg px-8 py-6 m-6">
          <Link href={href}>
            {icon}
            {/* {title} */}
          </Link>
        </div>
      );

}

export default index
