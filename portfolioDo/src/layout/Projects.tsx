import TimeLine from '../components/TimeLine';

const Projects = () => {
  return (
    <div className='flex flex-col mt-10'>
      <div className='border-b-[1px] m-2 pb-2 scroll-pb-24'>
        <p className='text-2xl font-bold pl-2 bg-gray-700'>Projects</p>
      </div>
      <TimeLine />
    </div>
  );
};

export default Projects;
