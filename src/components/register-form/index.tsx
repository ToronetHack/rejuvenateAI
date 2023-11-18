'use client';
import React, { useEffect } from 'react';
//import { useRouter } from 'next/navigation';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { uploadPromptToIpfs } from '@/helpers/prompt';
import { Stack, Tab,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, Button, Radio, RadioGroup } from '@chakra-ui/react';
import { NewUserType } from '../new-user-type';
//import { useAuth } from "near-social-bridge";

const RegisterForm = ({isOpen,onClose}:{isOpen:boolean,onClose:()=>void}) => {
  //const auth = useAuth()
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Field is required'),
    sex: Yup.string().required('Field is required'),
    weight: Yup.string().required('Field is required'),
    height: Yup.string().required('Field is required'),
    diet: Yup.string().required('Field is required'),
    active: Yup.string().required('Field is required'),
    sitting: Yup.string().required('Field is required'),
    alcohol: Yup.string().required('Field is required'),
    smoke: Yup.string().required('Field is required'),
    sleepLength: Yup.string().required('Field is required'),
    overallHealth: Yup.string().required('Field is required'),
    birthDate: Yup.string().required('Field is required'),
    smokingStopped: Yup.string(),
    smokingLength: Yup.string(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    //    const cid = await uploadPromptToIpfs(data);
    router.push('/member/dashboard');
  };
  const dietOptions = [

 'I eat 5 or more servings of vegetables per day',
 'I eat two or more servings of fruit per day', 
 'I have two or more servings of dairy (or equivalent) per day', 
 'My cereals are mostly whole grains',
 'I eat fast lean protein every day',
 'I eat fast food once per week or less', 
 'I eat pastries or cakes once a week or less', 
 'I have less than 1 teaspoon of salt per day', 
 'I have 2 or less alcoholic drinks on any day', 
 'I drink at least 2 litres of water per day', 
  ];
  
  const overallHealthOptions = [
   'Excellent',
   'Very good',
   'Good',
   'Fair',
   'Poor'
  ];
  const smokingOptions = [
   'less than 5 cigarettes',
   '5 to 10 cigarettes',
   '11 to 20 cigarettes',
   'above 20 cigarettes'
  ];
  return (
    <div className='modal'>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{lg:'3xl',base:'xl'}}>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewUserType/>
                     <form
          className='w-full flex flex-col gap-7'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              className='input w-full max-w-[100%]'
              {...register('fullName')}
              placeholder='Full name'
            />
            <div className='text-red-200'>{errors.fullName?.message}</div>
          </div>
          <div>
            <input
              type='date'
              id='start'
              {...register('birthDate')}
              className='input w-full max-w-[100%]'
            ></input>
            <div className='text-red-200'>{errors.birthDate?.message}</div>
          </div>
          <div>
            <select
              className='select w-full max-w-[100%]'
              {...register('sex')}
              placeholder="What's your biological sex?"
              defaultValue=''
            >
              <option value='' disabled>
                What&apos;s your biological sex?
              </option>
              <option value='name'>Male</option>
              <option value='female'>Female</option>
            </select>
            <div className='text-red-200'>{errors.sex?.message}</div>
          </div>
          <div>
            <input
              className='input w-full max-w-[100%]'
              {...register('weight')}
              placeholder="What's your weight in kg?"
            />
            <div className='text-red-200'>{errors.weight?.message}</div>
          </div>
          <div>
            <input
              className='input w-full max-w-[100%]'
              {...register('height')}
              placeholder="What's your height in feet and inches?"
            />
            <div className='text-red-200'>{errors.height?.message}</div>
          </div>
          <div>
            <select
              className='select w-full max-w-[100%]'
              {...register('diet')}
              placeholder='Tell us about your diet?'
              defaultValue=''
            >
              <option value='' disabled>
                Tell us about your diet?
              </option>
              {dietOptions.map((diet,i)=> <option key={'diet'+i} value={diet}>
                {diet}
              </option>)}
             
             
            </select>
            <div className='text-red-200'>{errors.diet?.message}</div>
          </div>
          <div>
            <select
              {...register('active')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                How active are you on an average week?
              </option>
              <option value='inactive'>inactive</option>
              <option value='active'>active</option>
              <option value='very active'>very active</option>
            </select>
            <div className='text-red-200'>{errors.active?.message}</div>
          </div>
          <div>
            <select
              {...register('sitting')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                How many hours a day are you sitting
              </option>
              {Array.from({length:23},(_,i) => (
                <option value={i+1} key={'sitting'+i}>
                  {i+1}
                </option>
              ))}
            </select>
            <div className='text-red-200'>{errors.sitting?.message}</div>
          </div>
          <div>
            <select
              {...register('alcohol')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                How much alcohol do you drink
              </option>
              <option value='0 - 10 drinks a week'>0 - 10 drinks a week</option>
              <option value='10 - 20 drinks a week'>
                10 - 20 drinks a week
              </option>
              <option value='greater than 20 drinks a week'>
                greater than 20 drinks a week
              </option>
            </select>
            <div className='text-red-200'>{errors.alcohol?.message}</div>
          </div>
          <div>
            <select
              {...register('smoke')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                Do you smoke?
              </option>
              <option value='Never smoked'>Never smoked</option>
              <option value='Ex smoker'>Ex smoker</option>
              <option value='Current smoker'>Current smoker</option>
            </select>
            <div className='text-red-200'>{errors.smoke?.message}</div>
          </div>
          <div>
            <select
              {...register('smokingStopped')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                If you are an ex-smoker, how many months ago did you stop?
              </option>
              <option value='less than 6 months ago'>
                less than 6 months ago
              </option>
              <option value='six to twelve months ago'>
                six to twelve months ago
              </option>
              <option value='more than twelve months ago'>
                more than twelve months ago
              </option>
            </select>
          </div>
          <div>
            <select
              {...register('smokingLength')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                If you are a current smoker, how many cigarettes do you smoke
                per day?
              </option>
              {smokingOptions.map((smokingOpt,i)=> <option key={'smokingOpt'+i} value={smokingOpt} >
                {smokingOpt}
              </option>)}
            </select>
          </div>
          <div>
            <select
              {...register('sleepLength')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                How mamy hours of sleep do you get per day?
              </option>
              {Array.from({length:13},(_,item) => (
                <option value={item+1} key={'sleepLength'+item}>
                  {item+1}
                </option>
              ))}
            </select>
            <div className='text-red-200'>{errors.sleepLength?.message}</div>
          </div>
          <div>
            <select
              {...register('overallHealth')}
              className='select w-full max-w-[100%]'
              defaultValue=''
            >
              <option value='' disabled>
                Rate your overall Health
              </option>
              {overallHealthOptions.map((healthOpt,i)=> <option key={'overallHealth'+i} value={healthOpt} >
                {healthOpt}
              </option>)}
            
            </select>
            <div className='text-red-200'>{errors.overallHealth?.message}</div>
          </div>
          <div className='flex'>
            <button onClick={onSubmit}
              type='submit'
              className='btn w-full max-w-[100%] flex items-center bg-[#014421] h-[48px] px-5 lg:h-[50px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl'
            >
              Register
            </button>
          </div>
        </form>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
     
    </div>
  );
};

export default RegisterForm;
