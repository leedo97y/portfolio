import { Link } from 'react-router-dom';
import TomatoMusicPage from '../pages/TomatoMusicPage';

const TimeLine = () => {
  return (
    <div className='grid grid-cols-2 gap-5 justify-center box-border w-fit h-fit m-5'>
      <ol className='border-l border-neutral-300 dark:border-neutral-500 w-fit'>
        {/* <!--First item--> */}
        <li>
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-cyan dark:bg-cyan-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              2023. 03 - 2023. 04
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                Tomuto ( Tomato-Music )
              </h4>
              <span className='ml-5 text-sky-500 font-bold pt-0.5'>100%</span>
            </div>
            <p className='text-sm mb-2'>
              Javascript, Pug, Webpack, Styled-component, fly.io
            </p>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm'>
              melon 사이트를 참고하여 개발한 뮤직 플레이어 사이트 프로젝트
              <br />
              <br />
              - localStorage를 활용한 사용자 개인 플레이리스트 개발
              <br />
              - last.fm API를 통해 아티스트 설명 페이지 개발
              <br />
              - fly.io를 통한 배포
              <br />
              - Styled-component를 사용하여 스타일링
              <br />
              - Pug를 통한 손쉽고 간단한 마크업
              <br />
              - Webpack을 통한 image, audio 파일 번들링을 통해 성능 최적화
              <br />
            </p>
            <Link to='/tomato-music'>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-sky-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
        {/* <!--Second item--> */}
        <li>
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-cyan dark:bg-cyan-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              2022. 12 - 2023. 01
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>TripMatch</h4>
              <span className='ml-5 text-sky-500 font-bold pt-0.5'>30%</span>
            </div>
            <p className='text-sm mb-2'>
              React, Typescript, Styled-component, Redux, Cloudetype.io
            </p>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm'>
              엘리스 SW 트랙 3기에서 진행한 여행 동행 매칭 서비스 프로젝트
              <br />
              <br />
              <span className='bg-yellow-100 p-1 pr-3 pl-3 text-gray-800'>
                🏆 프로젝트 최우수상 수상 - 17팀 중 2등
              </span>
              <br />
              <br />
              - Figma을 사용하여 사용자 관련 페이지 기획
              <br />
              - Typescript를 사용하여 타입 안정성을 높임.
              <br />
              - globalStyle 적용, Theme color를 정해 코드에 적용
              <br />
              - 인증정보를 담은 authAxios 사용
              <br />
              - Date 객체를 통한 리뷰 페이지 UI 개선
              <br />
              - Cloudtype.io를 통한 배포
              <br />
            </p>
            <button
              type='button'
              className='mt-3 inline-block rounded bg-sky-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              자세히 보기
            </button>
          </div>
        </li>
        {/* <!--third item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-cyan dark:bg-cyan-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              2022. 10 - 2022. 11
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>Retfilx</h4>
              <span className='ml-5 text-sky-500 font-bold pt-0.5'>30%</span>
            </div>
            <p className='text-sm mb-2'>React, Emotion, React-icons, Vercel</p>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm'>
              React 스터디에서 진행한 넷플릭스 UI 클론 프로젝트
              <br />
              <br />
              - CSS hover, active 속성을 활용한 header의 드롭다운 프로필
              <br />
              - JIRA를 통한 프로젝트 일정 관리
              <br />
              - grid, flex를 혼합하여 사용, UI 구현
              <br />
              - Vercel을 통한 배포
              <br />
              - Emotion, React-icon을 사용하여 스타일링
              <br />
            </p>
            <button
              type='button'
              className='mt-3 inline-block rounded bg-sky-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              자세히 보기
            </button>
          </div>
        </li>
      </ol>

      <ol className='border-l border-neutral-300 dark:border-neutral-500 w-fit'>
        {/* <!--fourth item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-cyan dark:bg-cyan-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              2022. 09 - 2022. 10
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>계란후라이</h4>
              <span className='ml-5 text-sky-500 font-bold pt-0.5'>30%</span>
            </div>
            <p className='text-sm mb-2'>Javascript, CSS, HTML, Bulma, Trello</p>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm'>
              엘리스 SW 트랙 3기에서 진행한 농산물 거래 쇼핑몰 프로젝트
              <br />
              <br />
              - jwt를 사용한 로그인
              <br />
              - fetch 함수의 POST 메서드를 사용한 로그인 정보 수정 페이지
              <br />
              - Trello를 통한 프로젝트 일정 관리
              <br />
              - Bulma, CSS를 통한 스타일링
              <br />
            </p>
            <button
              type='button'
              className='mt-3 inline-block rounded bg-sky-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              자세히 보기
            </button>
          </div>
        </li>
        {/* <!--fifth item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-cyan dark:bg-cyan-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              2022. 02 - 2022. 03
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>오늘 뭐 입지?</h4>
              <span className='ml-5 text-sky-500 font-bold pt-0.5'>20%</span>
            </div>
            <p className='text-sm mb-2'>Javascript, CSS, HTML</p>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm'>
              기온별 옷차림 웹사이트 프로젝트
              <br />
              <br />
              - 로그인, 회원가입, 메인 페이지 마크업
              <br />
              - 위치 기반 Open Weather API를 사용한 날씨 알림 기능
              <br />
              - 페이지 전체 style 개선
              <br />
            </p>
            <button
              type='button'
              className='mt-3 inline-block rounded bg-sky-600 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              자세히 보기
            </button>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
