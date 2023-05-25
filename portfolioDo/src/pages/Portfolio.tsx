import Introduction from '../layout/Introduction';
import Profile from '../layout/Profile';
import Projects from '../layout/Projects';

const Portfolio = () => {
  return (
    <>
      <div className='grid justify-center m-5 w-screen box-border mt-10'>
        <h1 className='text-4xl font-bold m-3 mb-8'>
          💬 소통을 중요시하는 프론트엔드 개발자 이도연입니다.
        </h1>
        <Profile />
        <Introduction />
        <Projects />
      </div>
    </>
  );
};

export default Portfolio;
