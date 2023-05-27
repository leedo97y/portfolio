import friedeggMain from '../images/friedeggMain.png';
import friedegg from '../images/friedegg.png';

const FriedEggPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-8'>
          <img src={friedegg} alt='' className='w-20' />
          <div>
            <h1 className='font-bold text-4xl mb-1.5'>계란후라이</h1>
            <p className='text-sm text-slate-400'>2022. 09 - 2022. 10</p>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2'>
            프로젝트 메인 이미지
          </p>
          <img src={friedeggMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>프로젝트 링크</p>
          <div>
            <p className='font-bold text-base mb-1'>Github. </p>
            <a className='text-blue-600'>
              https://github.com/leedo97y/vegetable
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>Video. </p>
            <a className='text-blue-600'>
              https://drive.google.com/file/d/1I3fyRzdBMLiX_vOxWasrhFlgjrB7dRbr/view?usp=share_link
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>
            HTML, CSS, JavaScript, EJS, Bulma, Git, Gitlab, Trello, Figma
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 '>
            농장주가 직접 농산물을 등록하여 플랫폼을 통해 소비자와 거래할 수
            있는 계란후라이라는 농산물 쇼핑몰을 만들었습니다.\n Vanilla JS로
            진행한 프로젝트였으며, 백엔드 2명, 프론트 3명으로 구성되어 있었고
            JavaScipt를 사용했습니다.\n 제가 맡은 부분은 마이페이지, 과거
            주문내역, 주문별 상세 내역, 관리자 관리 페이지, 에러 페이지, 푸터
            컴포넌트 입니다.\n 마이페이지는 Session Storage에 저장된 jwt 토큰을
            받아와서 로그인 한 사용자가 자신의 정보를 수정하거나 탈퇴 할 수
            있도록 하였고, 주문한 내역 또한 볼 수 있도록 하였습니다.\n 또,
            마이페이지에서 사용성을 높이기 위해 정보 수정 기능에 Daum 주소 API
            를 사용하여 사용자가 자신의 주소를 입력하기 쉽게 만들었습니다.\n \n
            과거 주문 내역 페이지에서는 사용자가 자신이 주문했던 내역을 주문서
            이름으로 확인 할 수 있도록 하였고,\n 이에 대한 상세 내역은 주문별
            상세 내역 페이지에서 볼 수 있도록 하였습니다.\n 관리자 관리 페이지는
            관리자가 제품 관리, 카테고리 관리, 주문 관리를 할 수 있는 페이지의
            도입 페이지로 관리자가 사용하는 페이지를 모아놓아 사용성을
            높였습니다.\n 푸터는 거의 모든 페이지에 반복되는 부분이며 어떻게
            넣어야 효율적일지 가장 고민했던 부분이었으며,\n ejs를 사용하여 푸터
            HTML을 컴포넌트화 하여 각 페이지에 넣어 주었습니다.\n ejs를 사용하며
            결과적으로 코드의 재사용성을 높일 수 있었으며 코드가 간결해져
            효율적인 관리를 할 수 있었습니다.\n 또, 서버의 데이터를 받아와서
            HTML 내에서 바로 사용 수 있다는 장점도 있었습니다.\n 일정 관리는
            Trello를 사용하였으며, 사용법이 간단하고 가시적으로 프로젝트
            진행도가 보여 기한에 맞춘 프로젝트의 전반적인 관리를 잘 할 수
            있었다는 장점이 있었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriedEggPage;
