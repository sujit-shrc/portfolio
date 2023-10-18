import data from '../../locales/data.json'
import AboutMe from '@/components/AboutMe';

const page: React.FC = () => {
  const title = data['about-me'].title
  return (
    <div className='flex flex-col gap-8 items-center mt-8 md:mt-10 lg:mt-16 mx-0 md:mx-4 lg:mx-14 px-4 md:px-6'>
        <h1 className='text-4xl'>{title}</h1>
        <AboutMe />
    </div>
  )
}

export default page