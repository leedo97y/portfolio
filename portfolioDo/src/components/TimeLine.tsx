import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioDataType } from '../types/dataType';
import tomutoMain from '../images/tomatoMain.png';
import tripmatchMain from '../images/tripmatchMain.png';
import friedeggMain from '../images/friedeggMain.png';
import retfilxMain from '../images/retfilxMain.png';
import weatherMain from '../images/weatherMain.png';

const TimeLine: React.FC = () => {
  const [data, setData] = useState<PortfolioDataType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch('./data.json').then((res) => res.json());

        if (fetchData) {
          setData(fetchData);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div className='flex flex-row gap-5 justify-center box-border w-min h-fit m-5'>
      <ol className='border-l border-neutral-300 dark:border-neutral-500 w-full mr-20'>
        {/* <!--First item--> */}
        <li>
          <div className='flex-start flex items-center pt-3'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              {data?.project[4].period[0]} - {data?.project[4].period[1]}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                {data?.project[4].name}
              </h4>
              <span className='ml-5 text-blue-500 font-bold pt-0.5'>
                {data?.project[4].percent}
              </span>
              <span className='ml-3 text-slate-500 font-bold pt-0.5'>
                {data?.project[4].teamInfo}
              </span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-2'>
              <img
                src={tomutoMain}
                alt='tomuto main image'
                className='w-full'
              />
              <p className='text-sm mb-2 italic'>
                {data?.project[4].stack
                  .filter(
                    (item) =>
                      item !== 'Git' &&
                      item !== 'Github' &&
                      item !== 'Gitlab' &&
                      item !== 'Figma' &&
                      item !== 'Figjam',
                  )
                  .join(', ')}
              </p>
            </div>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm whitespace-pre-wrap'>
              {data?.project[4].shortDesc}
            </p>
            <Link to='/tomuto' preventScrollReset={true}>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 '
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
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              {data?.project[3].period[0]} - {data?.project[3].period[1]}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                {data?.project[3].name.slice(0, 10)}
              </h4>
              <span className='ml-5 text-blue-500 font-bold pt-0.5'>
                {data?.project[3].percent}
              </span>
              <span className='ml-3 text-slate-500 font-bold pt-0.5'>
                {data?.project[3].teamInfo}
              </span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-2'>
              <img
                src={tripmatchMain}
                alt='tripmatch main image'
                className='w-full'
              />
              <p className='text-sm mb-2 italic'>
                {data?.project[3].stack
                  .filter(
                    (item) =>
                      item !== 'Git' &&
                      item !== 'Github' &&
                      item !== 'Gitlab' &&
                      item !== 'Figma' &&
                      item !== 'Figjam',
                  )
                  .join(', ')}
              </p>
            </div>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 mt-3 text-sm whitespace-pre-wrap'>
              <span className='bg-yellow-100 p-1 pr-3 pl-3  text-gray-800'>
                🏆 {data?.certificate[0].name}&nbsp;-&nbsp;
                {data?.certificate[0].description}
              </span>
              {data?.project[3].shortDesc}
            </p>
            <Link to='/tripmatch'>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 '
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
        {/* <!--third item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              {data?.project[2].period[0]} - {data?.project[2].period[1]}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                {data?.project[2].name}
              </h4>
              <span className='ml-5 text-blue-500 font-bold pt-0.5'>
                {data?.project[2].percent}
              </span>
              <span className='ml-3 text-slate-500 font-bold pt-0.5'>
                {data?.project[2].teamInfo}
              </span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-2'>
              <img
                src={retfilxMain}
                alt='retfilx main image'
                className='w-full'
              />
              <p className='text-sm mb-2 italic'>
                {data?.project[2].stack
                  .filter(
                    (item) =>
                      item !== 'Git' &&
                      item !== 'Github' &&
                      item !== 'Gitlab' &&
                      item !== 'Figma' &&
                      item !== 'Figjam' &&
                      item !== 'SourceTree',
                  )
                  .join(', ')}
              </p>
            </div>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm whitespace-pre-wrap'>
              {data?.project[2].shortDesc}
              <br />
            </p>
            <Link to='/retfilx'>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-o hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 )]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
      </ol>
      <ol className='border-l border-neutral-300 dark:border-neutral-500 w-fit'>
        {/* <!--fourth item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              {data?.project[1].period[0]} - {data?.project[1].period[1]}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                {data?.project[1].name}
              </h4>
              <span className='ml-5 text-blue-500 font-bold pt-0.5'>
                {data?.project[1].percent}
              </span>
              <span className='ml-3 text-slate-500 font-bold pt-0.5'>
                {data?.project[1].teamInfo}
              </span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-2'>
              <img
                src={friedeggMain}
                alt='friedegg main image'
                className='w-full'
              />
              <p className='text-sm mb-2 italic'>
                {data?.project[1].stack
                  .filter(
                    (item) =>
                      item !== 'Git' &&
                      item !== 'Github' &&
                      item !== 'Gitlab' &&
                      item !== 'Figma' &&
                      item !== 'Figjam' &&
                      item !== 'SourceTree',
                  )
                  .join(', ')}
              </p>
            </div>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm whitespace-pre-wrap'>
              {data?.project[1].shortDesc}
            </p>
            <Link to='/friedegg'>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-o hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 )]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
        {/* <!--fifth item--> */}
        <li>
          <div className='flex-start flex items-center pt-2'>
            <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue dark:bg-blue-700'></div>
            <p className='text-sm text-neutral-500 dark:text-neutral-300'>
              {data?.project[0].period[0]} - {data?.project[0].period[1]}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <div className='flex flex-row'>
              <h4 className='mb-1.5 text-xl font-semibold'>
                {data?.project[0].name}
              </h4>
              <span className='ml-5 text-blue-500 font-bold pt-0.5'>
                {data?.project[0].percent}
              </span>
              <span className='ml-3 text-slate-500 font-bold pt-0.5'>
                {data?.project[0].teamInfo}
              </span>
            </div>
            <div className='w-full flex flex-col gap-5 mt-2'>
              <img
                src={weatherMain}
                alt='weather main image'
                className='w-full'
              />
              <p className='text-sm mb-2 italic'>
                {data?.project[0].stack
                  .filter(
                    (item) =>
                      item !== 'Git' &&
                      item !== 'Github' &&
                      item !== 'Gitlab' &&
                      item !== 'Figma' &&
                      item !== 'Figjam' &&
                      item !== 'SourceTree',
                  )
                  .join(', ')}
              </p>
            </div>
            <p className='mb-3 text-neutral-500 dark:text-neutral-300 w-96 text-sm whitespace-pre-wrap'>
              {data?.project[0].shortDesc}
            </p>
            <Link to='/weather'>
              <button
                type='button'
                className='mt-3 inline-block rounded bg-blue-600 px-4 pb-[5px] pt-[6px] text-xs font-medium leading-normal text-white transition duration-150 ease-in-o hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 )]'
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                자세히 보기
              </button>
            </Link>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;
