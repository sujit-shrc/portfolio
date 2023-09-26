
import ContactMe from '@/components/ContactMe';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center  mt-8 md:mt-10 lg:mt-16 px-6'>
      <h1 className='text-3xl'>Reach Out and Let's Collaborate!</h1>
        <ContactMe />
    </div>
  )
}

export default page