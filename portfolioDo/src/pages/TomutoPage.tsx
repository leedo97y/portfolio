import tomatoMain from '../images/tomatoMain.png';
import tomuto from '../images/tomuto.png';

const TomatoMusicPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-8'>
          <img src={tomuto} alt='' className='w-20' />
          <h1 className='font-bold text-4xl mb-3s'>Tomuto ( Tomato-Music )</h1>
        </div>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2'>
            프로젝트 메인 이미지
          </p>
          <img src={tomatoMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>프로젝트 링크</p>
          <div>
            <p className='font-bold text-base mb-1'>Github. </p>
            <a className='text-sky-600'>
              https://github.com/leedo97y/melon-clone
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>WebSite. </p>
            <a className='text-sky-600'>https://tomato-music.fly.dev/</a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>JavaScript, Scss, Webpack, Pug, Git, Github, Fly.io</div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 '>
            <div>
              멜론이라는 스트리밍 사이트를 참고하여 Tomuto라는 사이트를
              구현하였으며, vanillaJS를 사용했습니다.
              <br />
              프로젝트를 진행하며 반복되는 코드가 많아졌기 때문에 코드를 간단히
              하기 위해 Pug를 사용했습니다.
              <br />
              Webpack을 사용하여 js, css, img, audio 파일을 번들링하여
              네트워크의 요청을 최소화하여 성능 최적화를 하였으며, 코드
              스플리팅을 진행하여 필요한 번들만 로딩할 수 있도록 해주어 초기
              로딩시간을 줄여주었습니다.
              <br />
              배포는 fly.io라는 사이트에서 진행하였고, 사이트에 나와있는 코드를
              참고하여 CLI를 통해 진행하였습니다.
            </div>
            <div>
              Tomuto를 개발하며 프로젝트 기획부터 프론트엔드 개발, 백엔드 개발,
              배포 등을 전부 경험해보며, 프로젝트 코드가 어떻게 진행되는지,
              데이터를 어떻게 다루어야하는지 등을 알게 되었습니다.
            </div>
            <div>
              Tomuto는 메인페이지, 로그인 페이지, 플레이리스트 페이지, pop star
              페이지, k-pop 페이지, top tracks 페이지로 구성되어 있습니다.
              <br />
              <br />
              메인페이지에서는 last.fm API를 사용하여 구현한 pop top 50 인기
              차트를 볼 수 있으며, 저장된 오디오 파일을 사용하여 미니
              플레이리스트를 재생할 수 있습니다.
              <br />
              <br />
              이메일과 비밀번호, 닉네임을 사용하여 회원가입을 할 수 있으며,
              로그인 페이지에서 가입시 사용한 이메일과 비밀번호를 통해 로그인이
              가능합니다.
              <br />
              로그인이 완료되면 헤더에 있는 닉네임이 guest에서 회원가입 시
              작성했던 닉네임으로 변하며, myplaylist로 들어갈 수 있는 버튼이
              나타납니다.
              <br />
              <br />
              my playlist 페이지에서는 저장된 오디오 파일을 사용하여,
              플레이리스트에 음악 추가 및 삭제가 가능합니다.
              <br />
              <br />
              pop star 페이지에서는 last.fm API를 사용하여 구현한 3위까지의 pop
              star 순위를 볼 수 있으며, 1위에 해당하는 pop star의 소개를 볼 수
              있습니다.
              <br />
              <br />
              k-pop 페이지에서는 last.fm API를 사용하여 구현한 k-pop top 50 앨범
              차트를 볼 수 있으며, 1위에 해당하는 k-pop 아티스트의 소개글을 볼
              수 있습니다.
              <br />
              <br />
              top tracks 페이지에서는 위치를 기반으로 한 last.fm API를 사용하여
              각 나라의 인기 차트를 5위까지 볼 수 있습니다.
              <br />
              차트는 카드 형식에 animation을 사용하여 hover 시 돌아가며
              나타나도록 하였으며, 나라마다 특성이 담긴 이미지로 배경을
              지정하고, gray filter를 사용하여 UI 상의 통일감을 주었습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomatoMusicPage;
