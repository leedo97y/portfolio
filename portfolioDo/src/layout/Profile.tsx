import ProfileText from '../components/ProfileText';
import ProfileImage from '../images/myImage2.png';

const Profile = () => {
  return (
    <div className='flex flex-col'>
      <div className='m-2 border-b-[1px] pb-2'>
        <p className='text-2xl font-bold pl-2 bg-gray-700'>About Me</p>
      </div>
      <div className='flex flex-row justify-center gap-20 box-border max-h-full m-5'>
        <img className='w-80 h-80' src={ProfileImage} alt='profile Image' />
        <ProfileText />
      </div>
    </div>
  );
};

export default Profile;
