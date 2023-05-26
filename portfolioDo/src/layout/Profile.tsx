import IntroComponents from '../components/IntroduceComponents';
import ProfileText from '../components/ProfileText';
// import ProfileImage from '../images/myImage2.png';

const Profile = () => {
  return (
    <div className='flex flex-col'>
      <div className='m-2  pb-2'>
        <p className='text-2xl font-bold pl-2 bg-blue-900 p-[0.5px]'>
          Profile.
        </p>
      </div>
      <div className='flex flex-row justify-start gap-20 box-border max-h-full m-5'>
        {/* <img className='w-80 h-80' src={ProfileImage} alt='profile Image' /> */}
        <ProfileText />
        <IntroComponents />
      </div>
    </div>
  );
};

export default Profile;
