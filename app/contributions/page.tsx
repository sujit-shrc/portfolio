import MyContributions from '@/components/MyContributions';

const page: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-10 mt-8 md:mt-10 lg:mt-16 mx-0 md:mx-4 lg:mx-14 px-4 md:px-6'>
      <h1 className='text-2xl md:text-3xl'>Delve into My Blog Posts and Explore My Open Source Contributions!</h1>
      <MyContributions />
    </div>
  )
}

export default page