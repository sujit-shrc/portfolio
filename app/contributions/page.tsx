import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import MyContributions from '@/components/MyContributions';
import Featured from '@/components/MyContributions/Featured';
type MyContributionsProps = {
  posts: any[];
};

const fetchDevToPosts = async () => {
  try {
    const response = await fetch(
      'https://dev.to/api/articles?username=mnamesujit'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


const page: NextPage = async () => {
  const posts = await fetchDevToPosts()
  return (
    <div className='flex flex-col gap-2 md:gap-8'>
      <h1 className='font-bold text-2xl md:text-4xl mt-2 md:mt-10'>Delve into My Blog Posts and Explore My Open Source Contributions!</h1>
      <div className="flex gap-2 md:gap-4">
            <div className='w-100 md:w-3/5 flex flex-col gap-2'>
              <MyContributions posts = {posts} />
            </div>
            <div className="hidden md:flex md:flex-col md:w-2/5 h-fit"><Featured /></div>
      </div>
      <Footer />
    </div>
  )
}

export default page;
