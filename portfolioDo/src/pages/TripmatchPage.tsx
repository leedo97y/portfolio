import tripmatchMain from '../images/tripmatchMain.png';
import tomuto from '../images/tomuto.png';

const TripmatchPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-8'>
          <img src={tomuto} alt='' className='w-20' />
          <h1 className='font-bold text-4xl mb-3s'>
            TripMatch - 여행 동행자 매칭 서비스
          </h1>
        </div>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2'>
            프로젝트 메인 이미지
          </p>
          <img src={tripmatchMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>프로젝트 링크</p>
          <div>
            <p className='font-bold text-base mb-1'>Github. </p>
            <a className='text-sky-600'>
              https://github.com/leedo97y/TripMatch
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>WebSite. </p>
            <a className='text-sky-600'>
              https://web-trip-match-1b5xkk2fldeum3x7.gksl2.cloudtype.app/
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>Figma. </p>
            <a className='text-sky-600'>
              https://www.figma.com/file/4bLsUoLZ1HW0FUGzgelvmP/figma-flowchart?node-id=0%3A1
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>Video. </p>
            <a className='text-sky-600'>
              https://drive.google.com/file/d/1pUVAXMA1YtMgFE6_HKV3qnQrUT_zsGUm/view?usp=share_link
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>
            React, TypeScript, Styled-Components, Sass, Redux, Cloudtype.io,
            Git, Gitlab, Figma, Figjam
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 '>
            혼자 국내 여행하는 사람들을 위한 서비스인 여행 동행자 매칭 서비스
            TripMatch를 만들었습니다.
            <br />
            <br />
            타입 안정성을 위해 TypeScript와 React를 사용하였으며, tsx를 사용하며
            React에서의 이벤트 타입과 Props 타입을 설정해주는 방법을 익힐 수
            있었습니다.
            <br />
            <br />
            또, 프로젝트를 통한 다양한 경험과 빠른 패키지 설치를 위해 npm 대신
            yarn이라는 패키지 관리 툴을 사용하였습니다.
            <br />
            <br />
            기획 시, 체계적으로 각 페이지에 필요한 사항들을 Figma, Figjam을
            사용하여 정리하고 구성하였으며,
            <br />
            이 중 나의 게시글 내역, 나의 댓글 내역, 신청 받은 내역, 신청한
            내역과 동행 신청 취소, 리뷰 기능을 담당했습니다.
            <br />
            <br />
            팀원이 프론트엔드 5명, 백엔드 1명으로 구성되어 화면 구성 속도에 비해
            서버 구성 속도가 느렸으므로 기획 시 프론트엔드 팀원들이 Figma의 ERD
            테이블 기능을 사용하여
            <br />
            각자 페이지에 필요한 데이터를 미리 적어주어 백엔드가 1명인 부담을 덜
            수 있었습니다.
            <br />
            <br />
            타인과의 동행을 해야하는 서비스이기 때문에 어떻게 해야 서비스
            이용자들 간의 신뢰를 높일 수 있을지가 문제였으며,
            <br />
            이에 대한 해결 방안으로 별점 리뷰 기능을 통해 동행 신청자가 상대방을
            신뢰할 수 있도록 만들어주었으며,
            <br />
            사용자에게 통일감과 편리함을 주기 위해 리뷰 모달의 border나 프로필
            이미지 위치, 창의 크기 등의 디자인을 수정해주었습니다.
            <br />
            <br />
            이러한 별점 리뷰 기능은 별점을 입력하고 확인 버튼을 누를때 5점 만점
            기준으로 점수가 데이터의 matchPoint에 저장되는 방식을 사용했으며,
            <br />
            보낸 점수는 상대방의 정보에서 환산된 평균 점수로 확인할 수 있습니다.
            <br />
            또, 마이 페이지 헤더 부분에서는 이러한 방식으로 타인이 평가한 자신의
            점수를 볼 수 있도록 하였습니다.
            <br />
            <br />
            신청한 내역에서는 Date 객체와 getTime 메소드를 활용하여 7일간만 리뷰
            버튼이 보이도록 설정했으며, 같은 방식으로 사용자의 편리함을 위해
            리뷰 버튼 밑에 여행이 끝난후 몇 일이 지났는지 알려주는 문구를
            띄워주도록 하였습니다.
            <br />
            <br />
            신청한 내역을 개발하며 연락을 위한 개인정보를 상대방에게 어떻게
            전달할 것인지에 대한 문제가 있었으며,
            <br />
            범죄 예방 차원에서 신청 status가 수락일 경우에 한해 상대방의 연락
            정보가 나타나도록 하였습니다.
            <br />
            이러한 연락 정보는 사용자의 자율성을 위해 SNS 아이디, 핸드폰 번호 등
            다양한 연락 수단을 적을 수 있도록 설정했습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripmatchPage;
