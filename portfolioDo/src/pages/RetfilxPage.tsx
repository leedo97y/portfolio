import retfilxMain from '../images/retfilxMain.png';
import netfilx from '../images/netfilxlogo.png';

const RetfilxPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-8'>
          <img src={netfilx} alt='' className='w-20' />
          <div>
            <h1 className='font-bold text-4xl mb-1.5'>Retfilx</h1>
            <p className='text-sm text-slate-400'>2022. 10 - 2022. 11</p>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2'>
            프로젝트 메인 이미지
          </p>
          <img src={retfilxMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>프로젝트 링크</p>
          <div>
            <p className='font-bold text-base mb-1'>Github. </p>
            <a className='text-blue-600'>https://github.com/leedo97y/Retflix</a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>WebSite. </p>
            <a className='text-blue-600'>https://retflix.vercel.app/</a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>
            React, Emotion, Vercel, React-icons, Figma, Git, Github, Jira
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 '>
            React로 Netfilx의 UI를 만들어보며 React 스터디를 진행했습니다.
            <br />
            <br />
            Figma로 페이지를 디자인 한 뒤 각자 한 페이지나 부분적인 컴포넌트를
            맡았으며,
            <br />
            제가 맡은 부분은 메인 페이지의 헤더와 푸터 컴포넌트, 프로필 이전
            페이지였습니다.
            <br />
            <br />
            5명 모두 프론트였기 때문에 데이터를 다루는 작업에 한계가 있었고,
            <br />
            평소에 관심이 있었던 넷플릭스를 선택하여 간단한 페이지 UI 구성과
            디자인을 경험해보기로 했습니다.
            <br />
            <br />
            개발하며 생겼던 고민사항으로는 메인 페이지에 자동으로 재생되는
            영상을 어떻게 넣을지와 영화 정보를 어디서 가져올 것인지,
            <br />
            로그인 여부에 따른 라우팅 설정 방법 등이 있었습니다.
            <br />
            <br />
            메인 페이지를 구성할 당시, 백엔드를 담당하는 사람이 없어 영상
            데이터를 받아와서 다룰 수 없다는 문제가 있었습니다.
            <br />
            따라서 React-player라는 라이브러리를 사용하여 유투브 링크를 넣어
            영상을 재생가능하게 해주는 방법을 사용하여 이 문제를 해결했습니다.
            <br />
            영화 정보 역시 백엔드가 없어 데이터를 받아와서 사용할 수 없는 문제가
            있었기 때문에 Open Movie API 중 Netfilx의 영화 정보를 제공해주는
            API를 사용했습니다.
            <br />
            <br />
            로그인 여부에 따라 라우팅을 다르게 보여주고자 로그인 시에 Math
            객체의 random 메서드를 사용하여 간이 토큰을 발행해 부여해주었으며,
            <br />
            토큰의 유무에 따라 토큰이 없을 경우 인트로 페이지를 첫 페이지로
            라우팅 해주고, 토큰이 있을 경우 메인페이지가 첫 페이지가 되도록
            라우팅해 주도록 설정했습니다.
            <br />
            그러나 토큰 값이 변수에 저장된 상태로 reloading이 되지 않아서 문제가
            발생했으며,
            <br />
            추후에 로그인 페이지에서 로그인 완료 후 첫 페이지로 navigate를
            해주는 코드 뒤에 reloading을 해주는 코드를 추가하여 문제를 해결할 수
            있었습니다.
            <br />
            <br />
            아이콘은 React-icons 패키지를 사용해 import하여 구현하였는데,
            아이콘을 컴포넌트처럼 삽입하여 편리하게 사용할 수 있다는 장점이
            있었습니다.
            <br />
            또, 스타일 코드에서 svg로 아이콘의 스타일을 일괄 조정해줄 수 있어
            간편하다는 장점이 있었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetfilxPage;
