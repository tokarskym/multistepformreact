import { UseFormRegister } from 'react-hook-form';

import { IFormInput } from '../IFormInput';
import { FormLabel, FormInput } from './PersonalInformationStyles';

interface PersonalInformationProps {
  register: UseFormRegister<IFormInput>;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ register }) => {
  return (
    <>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput {...register('name')} type="text" id="name" placeholder="e.g. Maxim Black" />

      <FormLabel htmlFor="email">Email Adress</FormLabel>
      <FormInput {...register('email')} type="email" id="email" placeholder="e.g. maximblack@gmail.com" />

      <FormLabel htmlFor="phone">Phone Number</FormLabel>
      <FormInput {...register('phone')} type="tel" id="phone" placeholder="e.g. +48 503 025 442" />
    </>
  );
};

export default PersonalInformation;
