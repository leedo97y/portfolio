import { useEffect, useState } from 'react';
import { PortfolioDataType } from '../types/dataType';
import friedeggMain from '../images/friedeggMain.png';
import friedegg from '../images/friedegg.png';

const FriedEggPage = () => {
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

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col gap-5 m-10 w-2/3'>
        <div className='flex flex-row items-center gap-4 mb-8'>
          <img src={friedegg} alt='' className='w-20' />
          <div>
            <h1 className='font-bold text-4xl mb-1.5'>
              {data?.project[1].name}
            </h1>
            <p className='text-sm text-slate-400'>
              {data?.project[1].period[0]} - {data?.project[1].period[1]}
            </p>
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
            <a className='text-blue-600'>{data?.project[1].repoUrl}</a>
          </div>
          <div>
            <p className=' font-bold text-base mb-1'>Video. </p>
            <a className='text-blue-600'>{data?.project[1].videoUrl} </a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
          <p className='font-bold text-xl'>기술 스택</p>
          <div>{data?.project[1].stack.join(', ')}</div>
        </div>
        <div className='flex flex-col justify-center gap-5'>
          <p className='font-bold text-2xl border-b-[0.5px] pb-2'>
            프로젝트 설명
          </p>
          <div className='flex flex-col w-full gap-2 leading-7 whitespace-pre-wrap'>
            {data?.project[1].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriedEggPage;
