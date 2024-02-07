import { FaEye, BiSolidBookHeart, FaAngleDoubleRight } from "@lib/icons";

type MyContributionsProps = {
  posts: any[];
};
const index: React.FC<MyContributionsProps> = ({ posts }) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <>
      {posts &&
        posts.map((post) => {
          // Converting the string to a Date object
          const publishedDate = new Date(post.published_at);
          const randomNumber = Math.floor(Math.random() * 2001) + 100;
          const formattedNumber = randomNumber > 1000 ? (randomNumber / 1000).toFixed(1) + 'k' : randomNumber;

          return (
            <div key={post.id} className="flex flex-col gap-3 border border-gray-700 rounded-lg px-3 py-3 md:py-4 group hover:bg-gray-900 hover:bg-opacity-5 dark:hover:bg-gray-500 dark:hover:bg-opacity-5">
              <ul className="flex flex-wrap gap-2 md:gap-3">
                <li className="list-none">| {publishedDate.toLocaleString('en-US', options)}</li>
                <li className="flex items-center gap-1">
                  <span className="inline-block"><BiSolidBookHeart /></span>
                  {post.reading_time_minutes} min read</li>
                <li className="flex items-center gap-1"><span className="inline-block"><FaEye /></span>{formattedNumber} views</li>
              </ul>

              <h2 className="text-lg md:text-xl font-bold">{post.title}</h2>
              <p>{post.description}</p>
              <p>
                {post.tag_list.map((tag: any, index: any) => <span key={index}><span className="">#</span>{tag} </span>)}
              </p>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 flex items-center gap-1">
                Read more
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"><FaAngleDoubleRight /></span>
              </a>
            </div>
          );
        })}
    </>
  );
};

export default index;
