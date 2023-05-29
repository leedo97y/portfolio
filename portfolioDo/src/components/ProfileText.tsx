const ProfileText: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 w-fit h-fit text-xl font-bold box-border '>
      <div className='flex flex-row justify-between'>
        <p>name.</p>
        <span className='ml-5 text-base font-medium'>이도연 (LEE DO YEON)</span>
      </div>
      <div className='flex flex-row justify-between'>
        <p>birth.</p>
        <span className='ml-5 text-base font-medium'>1997. 10. 24</span>
      </div>
      <div className='flex flex-row justify-between'>
        <p>address.</p>
        <span className='ml-5 text-base font-medium'>서울시 노원구</span>
      </div>

      <div className='flex flex-row justify-between'>
        <p>email.</p>
        <a
          href='mailto:dlehdus1433@gmail.com'
          className='ml-5 text-base font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          dlehdus1433@gmail.com
        </a>
      </div>
      <div className='flex flex-row mt-5 justify-between'>
        <p>github.</p>
        <a
          href='https://github.com/leedo97y'
          className='ml-5 text-base font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          https://github.com/leedo97y
        </a>
      </div>
      <div className='flex flex-row justify-between'>
        <p>velog.</p>
        <a
          href='https://velog.io/@dlehdus97'
          className='ml-5 text-base font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          https://velog.io/@dlehdus97
        </a>
      </div>
    </div>
  );
};

export default ProfileText;
