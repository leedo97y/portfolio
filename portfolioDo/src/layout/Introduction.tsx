import IntroComponents from '../components/IntroComponents';

const Introduction = () => {
  return (
    <div className='flex flex-col mt-8'>
      <div className='m-2 border-b-[1px] pb-2'>
        <p className='text-2xl font-bold pl-2 bg-gray-700'>Introduction</p>
      </div>
      <div className='flex flex-col gap-5 justify-center box-border h-fit m-5'>
        <div className='flex flex-col items-center'>
          <IntroComponents />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
