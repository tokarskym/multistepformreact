import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormContainer, FormHeader, FormParagraph } from './MultiStepFormStyles';

import { IFormInput } from './IFormInput';

import PersonalInformation from '../MultiStepForm/PersonalInformation/PersonalInformation';
import PlanSelection from './PlanSelection/PlanSelection';
import AddOns from './AddOns/AddOns';
import Summary from './Summary/Summary';

interface MultiStepFormProps {
  step: number;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ step }) => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  const setYearlyPlan: () => void = () => {
    setIsYearlyPlan(!isYearlyPlan);
  };

  let headerMessage = '';
  let paragraphMessage = '';

  if (step === 1) {
    (headerMessage = 'Personal info') && (paragraphMessage = 'Please provide your name, email address, and phone number.');
  } else if (step === 2) {
    (headerMessage = 'Select your plan') && (paragraphMessage = 'You have the option of monthly or yearly billing.');
  } else if (step === 3) {
    (headerMessage = 'Pick add-ons') && (paragraphMessage = 'Add-ons help enhance your gaming experience.');
  } else if (step === 4) {
    (headerMessage = 'Finishing up') && (paragraphMessage = 'Double-check everything looks OK before confirming.');
  }

  return (
    <FormContainer>
      <FormHeader>{headerMessage}</FormHeader>
      <FormParagraph>{paragraphMessage}</FormParagraph>
      <form>
        {step === 1 && <PersonalInformation register={register as any} />}
        {step === 2 && <PlanSelection control={control} setValue={setValue} setYearlyPlan={setYearlyPlan} isYearlyPlan={isYearlyPlan} />}
        {step === 3 && <AddOns control={control} isYearlyPlan={isYearlyPlan} />}
        {step === 4 && <Summary isYearlyPlan={isYearlyPlan} watch={watch} />}
      </form>
    </FormContainer>
  );
};

export default MultiStepForm;
