import Link from 'next/link';

interface Props{
    href: string;
    title: string;
    description: string;
}

const Card: React.FC<Props> = ({ href, title, description }) => {
  return (
    <div className="group h-[10.5rem] md:h-36 px-4 py-4 flex items-center rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 dark:hover:border-opacity-40 transition-all hover:shadow-[5px_5px_4px_0px_rgba(4,120,87,1)] bg-opacity-10 bg-gray-300 dark:bg-gray-900 dark:bg-opacity-10">
      <Link href={href}>
        <h2 className="text-2xl lg:text-[1.7rem] font-semibold mb-2 group-hover:text-emerald-500">
          {title}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="text-sm opacity-80 m-0 md:max-w-[30ch] group-hover:opacity-90">
          {description}
        </p>
      </Link>
    </div>
  )
}

export default Card