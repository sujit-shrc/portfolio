import data from '../../locales/data.json'
import AboutMe from '@/components/AboutMe';

const page: React.FC = () => {
  const title = data['about-me'].title
  return (
    <div className='flex flex-col items-center mx-14'>
        <h1 className='text-4xl text-white'>{title}</h1>
        <AboutMe />
    </div>
  )
}

export default page
