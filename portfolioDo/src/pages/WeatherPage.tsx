import weatherMain from '../images/weatherMain.png';
import weather from '../images/weather.png';

const WeatherPage = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-5'>
          <img src={weather} alt='weather logo' className='w-20 mr-3' />
          <div>
            <h1 className='font-bold text-4xl mb-1.5'>오늘 뭐 입지?</h1>
            <p className='text-sm text-slate-400'>2022. 02 - 2022. 03</p>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2'>
            프로젝트 메인 이미지
          </p>
          <img src={weatherMain} alt='project image' className='w-full' />
        </div>
        <div className='flex flex-col gap-5 border-[0.5px] p-5'>
          <p className='font-bold text-xl'>프로젝트 링크</p>
          <div>
            <p className='font-bold text-base mb-1'>Github. </p>
            <a className='text-blue-600'>
              https://github.com/leedo97y/backup_folder
            </a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>Video. </p>
            <a className='text-blue-600'>
              https://cdn-api.elice.io/recruit-api-attachment/attachment/42f906a51bba4f29addc091f549feaab/weather.MP4
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>HTML, CSS, JavaScript, Git, Github, SourceTree, Figma</div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 '>
            집을 나설때마다 애매한 날씨 때문에 입고 나갈 옷을 고민하는 사람들을
            위해 기온별 옷차림을 알려주는 웹페이지를 만들었습니다.\n open
            Weather API를 사용한 첫 프로젝트였습니다.\n 팀원은 백엔드 1명,
            프론트 4명으로 구성되어 있었으며, Vanilla JS를 사용하였습니다.\n
            팀원 모두가 개발이 처음이었으므로 언어를 다루는 데 미숙하여 배포를
            하지 못했지만,\n 프로젝트를 진행하며 협업이 진행되는 방식을 알 수
            있었습니다.\n 프로젝트가 진행됨에 따라, 기온에 따른 옷차림을
            보여주기 위해서 날씨에 따른 옷 아이콘을 어떤 방식으로 변화를 줄 수
            있을지,\n 이야기 부분에서 보여지는 사용자의 아이디 형식을 무엇으로
            정하면 좋을지 등의 고민사항이 있었습니다.\n 날씨에 따른 옷차림을
            보여주는 부분은 대표가 될만한 옷 아이콘 몇 개를 선정한 뒤,\n 이를
            Open Weather API의 날씨 코드를 사용하여 날씨 범위에 따라 다르게
            나타나도록 구현하였습니다.\n 이야기 부분은 사용자가 로그인 후에
            이용할 수 있으며, 사용자가 위치한 지역 날씨에 대한 본인의 의견을
            남기는 공간이며,\n 지역에 따른 Open Weather API로는 사용자의 상세한
            지역까지는 알 수 없기 때문에 제목 대신에 본인의 세부 지역을 적는
            칸을 만들어 세부적인 지역의 날씨도 알 수 있도록 하여 사용성을
            높였습니다.\n 저는 이 중 회원가입 폼과 로그인 폼 등의 UI을 디자인
            하였으며, 전체 페이지의 UI도 디자인 하였습니다.\n 또, 소통에
            미숙했음에도 불구하고 해시태그를 통해 상세 옷차림을 알려주는 부분,\n
            한 줄 참견 등 사용자의 사용성을 높일 수 있는 다양한 아이디어를 내며
            기획의 즐거움도 느낄 수 있었습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
