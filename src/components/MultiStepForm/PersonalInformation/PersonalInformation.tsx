import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { IFormInput } from '../IFormInput';
import { FormLabel, FormInput, ErrorsLabel, ErrorContainer } from './PersonalInformationStyles';

interface PersonalInformationProps {
  register: UseFormRegister<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ register, errors }) => {
  return (
    <>
      <ErrorContainer>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput {...register('name')} type="text" id="name" placeholder="e.g. Maxim Black" isNotValid={!!errors.name} />
        {errors.name && <ErrorsLabel>{errors.name.message}</ErrorsLabel>}
      </ErrorContainer>

      <ErrorContainer>
        <FormLabel htmlFor="email">Email Adress</FormLabel>
        <FormInput {...register('email')} type="email" id="email" placeholder="e.g. maximblack@gmail.com" isNotValid={!!errors.email} />
        {errors.email && <ErrorsLabel>{errors.email.message}</ErrorsLabel>}
      </ErrorContainer>

      <ErrorContainer>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <FormInput {...register('phone')} type="tel" id="phone" placeholder="e.g. +48 503 025 442" isNotValid={!!errors.phone} />
        {errors.phone && <ErrorsLabel>{errors.phone.message}</ErrorsLabel>}
      </ErrorContainer>
    </>
  );
};

export default PersonalInformation;
