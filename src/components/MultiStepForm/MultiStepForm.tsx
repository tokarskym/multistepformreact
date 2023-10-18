import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { formSchema } from './ValidationSchema';

import { FormContainer, FormHeader, FormParagraph } from './MultiStepFormStyles';

import { IFormInput } from './IFormInput';

import PersonalInformation from '../MultiStepForm/PersonalInformation/PersonalInformation';
import PlanSelection from './PlanSelection/PlanSelection';
import AddOns from './AddOns/AddOns';
import Summary from './Summary/Summary';
import Footer from '../Footer/Footer';

interface MultiStepFormProps {
  step: number;
}

export type FieldKeys =
  | 'name'
  | 'email'
  | 'phone'
  | 'selectedPlan'
  | 'addOns'
  | 'selectedPlan.name'
  | 'selectedPlan.price'
  | `addOns.${number}`
  | `addOns.${number}.name`
  | `addOns.${number}.price`
  | `addOns.${number}.isChosen`
  | `addOns.${number}.description`;

const MultiStepForm: React.FC<MultiStepFormProps> = ({ step }) => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<IFormInput>({
    resolver: yupResolver<IFormInput>(formSchema),
  });

  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  const validateForm = async (fields: FieldKeys[]) => {
    const isValid = await trigger(fields);
    return isValid;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const isYearlySub = localStorage.getItem('yearlySub');
    if (isYearlySub) {
      setIsYearlyPlan(JSON.parse(isYearlySub));
    }
  }, []);

  const setYearlyPlan: () => void = () => {
    const updatedIsYearlyPlan = !isYearlyPlan;
    setIsYearlyPlan(updatedIsYearlyPlan);
    return updatedIsYearlyPlan;
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

  const nextStep: () => void = () => {
    switch (step) {
      case 1:
        navigate('/planselection');
        break;
      case 2:
        navigate('/addons');
        break;
      case 3:
        navigate('/summary');
        break;
      default:
        break;
    }
  };

  const previousStep: () => void = () => {
    switch (step) {
      case 2:
        navigate('/personalinformation');
        break;
      case 3:
        navigate('/planselection');
        break;
      case 4:
        navigate('/addons');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <FormContainer>
        <FormHeader>{headerMessage}</FormHeader>
        <FormParagraph>{paragraphMessage}</FormParagraph>
        <form>
          {step === 1 && <PersonalInformation register={register as any} errors={errors} />}
          {step === 2 && <PlanSelection control={control} setValue={setValue} setYearlyPlan={setYearlyPlan} isYearlyPlan={isYearlyPlan} errors={errors} />}
          {step === 3 && <AddOns control={control} setValue={setValue} isYearlyPlan={isYearlyPlan} />}
          {step === 4 && <Summary isYearlyPlan={isYearlyPlan} watch={watch} />}
        </form>
      </FormContainer>
      <Footer step={step} errors={errors} validateForm={validateForm} nextStep={nextStep} previousStep={previousStep} />
    </>
  );
};

export default MultiStepForm;
