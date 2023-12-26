
const TyperComponent: React.FC = () => {

  return (
    <div className="font-limelight text-3xl md:text-4xl lg:text-5xl font-semibold min-h-[calc(100vh-320px)] md:min-h-[calc(100vh-270px)] flex items-center p-4">
      <div className='w-100 sm:w-3/4 mx-auto sm:mx-12 space-y-2 sm:space-y-4'>
        <h1 className="text-2xl sm:text-4xl">Software Developer, <span className="text-emerald-500">OpenSource Contributor</span> and <span className='text-emerald-500'>Linux Administrator</span></h1>
        <div className="space-y-1">
          <p className='text-sm sm:text-base'>
            I&apos;m Sujit Kumar, a software engineer based in Kanpur, India 📍. I love to create products that are not only beautiful and intuitive but also a delightful to use.
          </p>
          <p className="text-sm sm:text-base">
            I Currently work as a Full Stack Engineer Intern at ProSecdevs, where I am developing impactful real-world industry projects with a global reach 🌏.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TyperComponent;
