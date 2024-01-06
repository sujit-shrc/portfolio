import Footer from '@/components/Footer';
import data from '../../locales/data.json'
import AboutMe from '@/components/AboutMe';

const page: React.FC = () => {
  const title = data['about-me'].title
  return (
    <div className='flex flex-col gap-8 items-center mt-12'>
        <h1 className='text-4xl'>{title}</h1>
        <AboutMe />
        <Footer />
    </div>
  )
}

export default page
