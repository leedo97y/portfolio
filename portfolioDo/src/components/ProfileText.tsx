const ProfileText = () => {
  return (
    <div className='flex flex-col gap-5 w-80 h-80 text-xl font-bold box-border'>
      <p>
        name. &nbsp;
        <span className='text-base font-medium'>이도연 (LEE DO YEON)</span>
      </p>
      <p>
        birth. &nbsp;
        <span className='text-base font-medium'>1997. 10. 24</span>
      </p>
      <p>
        address. &nbsp;
        <span className='text-base font-medium'>서울시 노원구</span>
      </p>
      <p>
        email. &nbsp;
        <a
          href='mailto:dlehdus1433@gmail.com'
          className='text-base font-medium text-blue-500'
        >
          dlehdus1433@gmail.com
        </a>
      </p>

      <br />
      <p>
        github. &nbsp;
        <a
          href='https://github.com/leedo97y'
          className='text-base font-medium text-blue-500'
        >
          https://github.com/leedo97y
        </a>
      </p>
      <p>
        velog. &nbsp;
        <a
          href='https://velog.io/@dlehdus97'
          className='text-base font-medium text-blue-500'
        >
          https://velog.io/@dlehdus97
        </a>
      </p>
    </div>
  );
};

export default ProfileText;
