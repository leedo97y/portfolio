import Header from '../layout/Header';
import Profile from '../layout/Profile';
import Projects from '../layout/Projects';
import chat from '../images/chat.png';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className='grid justify-center m-5 w-screen box-border mt-10 '>
        <div className='flex flex-row items-center w-full'>
          <img
            src={chat}
            alt='chat bubble image'
            className='w-[5rem] h-[5rem] mr-5 ml-5'
          />
          <p className='text-4xl font-bold mt-8 mb-10 pt-4'>
            &nbsp; 소통을 중요시하는 프론트엔드 개발자 이도연입니다.
          </p>
        </div>
        <Profile />
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
