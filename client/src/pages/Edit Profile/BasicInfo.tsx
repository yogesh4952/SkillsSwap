import { NavLink } from 'react-router-dom';
import Upload from '../../icons/Upload';
import { useDataContext } from '../../store/Context';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { useEffect, useState, type ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import axiosClient from '../../axiosInstance';

const BasicInfo = () => {
  const {
    firstname,
    lastname,
    setFirstname,
    setLastname,
    bio,
    setBio,
    location,
    setLocation,
    setImageUrl,
    imageUrl,
  } = useDataContext();

  const { getToken } = useAuth();
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getToken();
        const response = await axios.get<{
          data: {
            firstname: string;
            lastname: string;
            bio: string;
            location: string;
            imageUrl: string;
          };
        }>('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLastname(response.data.data.lastname);
        setBio(response.data.data.bio);
        setLocation(response.data.data.location);
        setImageUrl(response.data.data.imageUrl);
      } catch (error: any) {
        toast.error(error.message || 'Failed to fetch user data');
        console.error(error);
      }
    };

    getData();
  }, [imageUrl, image]);

  const handleChangeImageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImageUrl(URL.createObjectURL(selectedFile)); // for preview
      setImage(selectedFile); // actual File object for upload
    }
  };

  const handleSubmitImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const token = await getToken();
      formData.append('profile', image);

      const data = await axiosClient.post('/user/update-image', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.data.success) {
        toast.success('Image uploaded succesfully');
        const serverImagePath = data.data.user.imageUrl;
        setImageUrl(`http://localhost:5000/${serverImagePath}`);
      } else {
        toast.error('Failde to upload image');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        console.log(error);
      }
      toast.error('Unexpected Error');
    }
  };

  // Handle Image Upload
  useEffect(() => {});
  return (
    <div>
      <div className='mt-6 mb-3 rounded shadow-lg border border-gray-200 px-6 py-4'>
        <h1 className='text-2xl sm:text-3xl tracking-wide font-bold '>
          Basic Information
        </h1>
        <p className='tracking-tight text-gray-700'>
          Let others know who you are and what you're passionate about
        </p>

        <div className='flex gap-5 mt-6 items-center'>
          <div
            id='left'
            className='rounded-full overflow-auto w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-400'
          >
            <img
              src={imageUrl}
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>

          <div id='right'>
            <form>
              <div className='mb-4'>
                <input
                  type='file'
                  name='profile'
                  id='file-input'
                  onChange={handleChangeImageUrl}
                  className='text-sm border border-gray-200 px-2 py-3'
                  accept='image/*'
                />
              </div>

              <div className='flex gap-2 border border-gray-200 px-4 max-w-40'>
                <Upload />
                <button
                  type='submit'
                  className='text-sm sm:text-md p-2 sm:px-4 sm:py-2'
                  onClick={handleSubmitImageUpload}
                >
                  Upload photo
                </button>
              </div>
            </form>

            <div className='mt-4 text-gray-600'>
              A friendly photo helps build trust with potential learning
              partners.
            </div>
          </div>
        </div>

        <form className='mt-5'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='firstname'>First Name</label>
              <input
                className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
                type='text'
                name='firstname'
                id='firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value.trim())}
                placeholder='john'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Last Name</label>
              <input
                className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
                type='text'
                name='lastname'
                id='lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value.trim())}
                placeholder='doe'
              />
            </div>
          </div>

          <div className='mt-3'>
            <label htmlFor='bio'>Bio</label>
            <textarea
              name='bio'
              id='bio'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className='focus:outline-blue-400 min-h-40 border w-full rounded border-gray-300 px-4 py-2'
              placeholder='Tell us about yourself, your background, and what motivates you to learn and teach...'
            />
          </div>
          <p className='text-gray-500'>
            A good bio helps others understand your learning style and
            interests.
          </p>

          <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor='location'>Location (Optional)</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
              type='text'
              name='location'
              id='location'
              placeholder='city, country'
            />
          </div>
          <p className='mt-2 text-gray-500'>
            This helps us suggest local meetups and time zone compatible
            matches.
          </p>
        </form>
      </div>

      <div className='flex justify-end mt-4'>
        <NavLink
          to='/edit-profile/skills'
          className='px-4 py-2 bg-black hover:bg-gray-950 transition-all cursor-pointer text-white rounded'
        >
          Next
        </NavLink>
      </div>
    </div>
  );
};

export default BasicInfo;
