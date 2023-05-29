const Header: React.FC = () => {
  const clickProfile = () => {
    window.scrollTo(0, 239);
  };

  const clickProject = () => {
    window.scrollTo(0, 714);
  };

  return (
    <>
      <div className='grid grid-cols-2 gap-4 justify-between max-w-full h-20'>
        <h3 className='w-full h-28 m-8 text-3xl font-bold italic'>@leedo97y</h3>
        <div className='grid grid-cols-3 gap-4 text-right m-8 pr-5 text-xl font-bold italic'>
          <p onClick={clickProfile} className='cursor-pointer'>
            Profile.
          </p>
          <p onClick={clickProject} className='cursor-pointer'>
            Project.
          </p>
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
