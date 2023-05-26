import TimeLine from '../components/TimeLine';

const Projects = () => {
  return (
    <div className='flex flex-col mt-10 justify-center w-full'>
      <div className='m-2 pb-2 scroll-pb-24'>
        <p className='text-2xl font-bold pl-2 bg-blue-900 p-[0.5px]'>
          Projects
        </p>
      </div>
      <TimeLine />
    </div>
  );
};

export default Projects;
