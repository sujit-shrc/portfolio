"use client"
import Link from 'next/link';

interface Props{
    href: string;
    title: string;
    description: string;
}

const Card: React.FC<Props> = ({ href, title, description }) => {
  return (
    <div className="group h-[10.5rem] md:h-40 flex items-center justify-center rounded-lg border border-gray-300 dark:border-neutral-800 px-4 py-4 transition-colors hover:border-gray-500 dark:hover:border-gray-500">
    <Link href={href}>
        <h2 className="mb-2 text-2xl lg:text-[1.7rem] font-semibold">
          {title}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 md:max-w-[30ch] text-sm opacity-50">{description}</p>
    </Link>
  </div>
  )
}

export default Card