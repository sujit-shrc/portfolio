
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center mt-2 md:mt-10 lg:mt-12'>
      <h1 className='text-2xl md:text-4xl font-bold'>Reach Out and Lets Collaborate!</h1>
        <ContactMe />
        <Footer />
    </div>
  )
}

export default page