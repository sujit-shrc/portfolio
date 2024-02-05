import Footer from '@/components/Footer';
import data from '../../locales/data.json'
import AboutMe from '@/components/AboutMe';

const page: React.FC = () => {
  const title = data['about-me'].title
  return (
    <div className='flex flex-col gap-2 md:gap-8 items-center mt-2 md:mt-10 lg:mt-12'>
        <h1 className='text-2xl font-bold md:text-4xl'>{title}</h1>
        <AboutMe />
        <Footer />
    </div>
  )
}

export default page
