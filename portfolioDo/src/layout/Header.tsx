const Header = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 max-w-full h-20'>
        <h3 className='w-full h-28 m-8 text-3xl font-bold'>@leedo97y</h3>
        <div className='grid grid-cols-3 gap-4 m-8 text-xl font-bold'>
          <p>Profile.</p>
          <p>Project.</p>
          <p>
            <a href='https://velog.io/@dlehdus97'>My Blog.</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
