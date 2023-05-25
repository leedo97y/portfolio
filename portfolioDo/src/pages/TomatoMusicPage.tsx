import tomatoMain from '../images/tomatoMain.png';

const TomatoMusicPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <h1 className='font-bold text-3xl mb-3s'>Tomato-Music</h1>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-4'>Project Image</p>
          <img src={tomatoMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5 '>
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
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div className=''>
            JavaScript, Scss, Webpack, Pug, Git, Github, Fly.io
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 p-5'>
          <p className='font-bold text-xl'>프로젝트 설명</p>
          <div className='w-full'>
            <div>
              멜론이라는 스트리밍 사이트를 참고하여 Tomato-music이라는 사이트를
              구현하였으며, vanillaJS를 사용했습니다.
            </div>
            <div>
              프로젝트를 진행하며 반복되는 코드가 많아졌으며, 이를 컴포넌트화
              하고 html 코드를 줄이기 위해 Pug를 사용했습니다.
              <br />
              또, Webpack을 사용하여 js 파일, css 파일, img 파일, audio 파일
              등을 번들링하여 네트워크의 요청을 최소화하여 성능 최적화를
              하였습니다.
            </div>
            <div>
              배포는 fly.io라는 사이트에서 진행하였고, 사이트에 나와있는 코드를
              참고하여 CLI를 통해 진행하였습니다.
            </div>
            <div>
              프로젝트 기획부터 프론트엔드 개발, 백엔드 개발, 배포 등을 전부
              경험해보며, 프로젝트 코드가 어떻게 진행되는지, 데이터를 어떻게
              다루어야하는지 등을 알게 되었습니다.
            </div>
            <div>
              tomato-music은 메인페이지, 로그인 페이지, 플레이리스트 페이지, pop
              star 페이지, k-pop 페이지, top tracks 페이지로 구성되어 있습니다.
            </div>
            <div>
              메인페이지에서는 last.fm API를 사용하여 구현한 pop top 50 인기
              차트를 볼 수 있으며, 저장된 오디오 파일을 사용하여 미니
              플레이리스트를 재생할 수 있습니다.
            </div>
            <div>
              이메일과 비밀번호, 닉네임을 사용하여 회원가입을 할 수 있으며,
              로그인 페이지에서 가입시 사용한 이메일과 비밀번호를 통해 로그인이
              가능합니다. 로그인이 완료되면 헤더에 있는{' '}
            </div>
            <div>
              my playlist 페이지에서는 저장된 오디오 파일을 사용하여,
              플레이리스트에 음악 추가 및 삭제가 가능합니다.
            </div>
            <div>
              pop star 페이지에서는 last.fm API를 사용하여 구현한 3위까지의 pop
              star 순위를 볼 수 있으며, 1위에 해당하는 pop star의 소개를 볼 수
              있습니다.
            </div>
            <div>
              k-pop 페이지에서는 last.fm API를 사용하여 구현한 k-pop top 50 앨범
              차트를 볼 수 있으며, 1위에 해당하는 k-pop 아티스트의 소개글을 볼
              수 있습니다. top tracks 페이지에서는 위치를 기반으로 한 last.fm
              API를 사용하여 각 나라의 인기 차트를 5위까지 보여주며, 카드
              형식으로 만들어 hover 시 차트가 나오도록 구현하였습니다. 여기서
              카드는 나라마다 특성이 담긴 사진으로 배경을 지정하였습니다.
            </div>
            <div>
              오디오 파일을 사용하는 미니 플레이리스트는 차후 리팩토링 진행시
              mongoDB와 multer cloudinary를 이용하여 데이터베이스로 관리하도록
              변경할 예정입니다. 회원가입 페이지는 express-session을 사용하여
              구현하였으며, 이메일, 패스워드, 닉네임을 입력하여 회원가입이
              가능합니다. 로그인 페이지는 회원가입 시 입력한 정보로 로그인이
              가능하도록 구현하였으며, 미리 dbTester용으로 지정해둔 이메일과
              패스워드를 사용하여 로그인도 가능하게 구현하였습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomatoMusicPage;
