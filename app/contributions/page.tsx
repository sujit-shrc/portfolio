import Footer from '@/components/Footer';
import MyContributions from '@/components/MyContributions';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-2xl md:text-3xl'>Delve into My Blog Posts and Explore My Open Source Contributions!</h1>
      <MyContributions />
      <Footer />
    </div>
  )
}

export default page
