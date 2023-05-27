const Header = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 justify-between max-w-full h-20'>
        <h3 className='w-full h-28 m-8 text-3xl font-bold italic'>@leedo97y</h3>
        <div className='grid grid-cols-3 gap-4 text-right m-8 pr-5 text-xl font-bold italic'>
          <p>Profile.</p>
          <p>Project.</p>
          <p>
            <a
              href='https://velog.io/@dlehdus97'
              className='transition ease-in-out duration-200 hover:text-blue-500 active:text-blue-500 focus:text-blue-500'
            >
              My Blog.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
