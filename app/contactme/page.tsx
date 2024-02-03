
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center mt-6 md:mt-10 lg:mt-12'>
      <h1 className='text-3xl'>Reach Out and Lets Collaborate!</h1>
        <ContactMe />
        <Footer />
    </div>
  )
}

export default page
