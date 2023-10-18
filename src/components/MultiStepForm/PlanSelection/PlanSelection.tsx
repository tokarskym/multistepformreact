import { Control, UseFormSetValue, Controller, FieldErrors } from 'react-hook-form';
import { useState, useEffect } from 'react';

import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { IFormInput } from '../IFormInput';
import { monthlyPricingPlans } from './Data/PricingPlansData';

import { SelectPlanButton, PlanSelectionContainer, MonthlyYearlyContainer, OfferParagraph, OfferHeader, OfferExtra } from '../PlanSelection/PlanSelectionStyles';
import { ErrorsLabel, ErrorContainer } from '../PersonalInformation/PersonalInformationStyles';

interface PlanSelectionProps {
  setValue: UseFormSetValue<IFormInput>;
  control: Control<IFormInput>;
  setYearlyPlan: () => void;
  isYearlyPlan: boolean;
  errors: FieldErrors<IFormInput>;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ control, setValue, setYearlyPlan, isYearlyPlan, errors }) => {
  const [activeButtonId, setActiveButtonId] = useState<number | null>(null);

  const yearlyPricingPlans = monthlyPricingPlans.map((plan) => ({
    ...plan,
    price: plan.price * 10,
  }));

  const currentPlans = isYearlyPlan ? yearlyPricingPlans : monthlyPricingPlans;

  useEffect(() => {
    const buttonId = localStorage.getItem('buttonId');
    if (buttonId) {
      setActiveButtonId(JSON.parse(buttonId));
      const selectedButton: any = currentPlans.find((plan) => plan.id === JSON.parse(buttonId));
      if (selectedButton) {
        setValue('selectedPlan', { name: selectedButton.name, price: selectedButton.price });
      }
    }
  }, []);

  const handlePlanSwitch = () => {
    let monthOrYear = setYearlyPlan();
    setActiveButtonId(null);
    setValue('selectedPlan', { name: '', price: 0 });
    localStorage.setItem('yearlySub', JSON.stringify(monthOrYear));
  };


  return (
    <>
      <ErrorContainer>
        {errors.selectedPlan && <ErrorsLabel style={{ top: '-20px' }}>Pick one of the following plan</ErrorsLabel>}

        <Controller
          name="selectedPlan"
          control={control}
          defaultValue={{ name: '', price: 0 }}
          render={({ field }) => (
            <PlanSelectionContainer>
              {currentPlans.map((plan) => (
                <SelectPlanButton
                  type="button"
                  isActive={activeButtonId === plan.id}
                  key={plan.id}
                  onClick={() => {
                    setValue('selectedPlan', { name: plan.name, price: plan.price });
                    field.onChange({ name: plan.name, price: plan.price });
                    setActiveButtonId(plan.id);
                    localStorage.setItem('buttonId', JSON.stringify(plan.id));
                  }}
                >
                  <img src={plan.img} />
                  <div>
                    <OfferHeader>{plan.name}</OfferHeader>
                    <OfferParagraph>
                      ${plan.price}/{(!isYearlyPlan && 'mo') || (isYearlyPlan && 'yr')}
                    </OfferParagraph>
                    <OfferExtra>{isYearlyPlan && '2 months free'}</OfferExtra>
                  </div>
                </SelectPlanButton>
              ))}
            </PlanSelectionContainer>
          )}
        />
        <MonthlyYearlyContainer>
          <Typography variant="body1" color={isYearlyPlan ? 'textSecondary' : 'textPrimary'}>
            Monthly
          </Typography>

          <Switch
            checked={isYearlyPlan}
            onChange={handlePlanSwitch}
            sx={{
              '& .MuiSwitch-thumb': { width: 12, height: 12, color: 'white' },
              '& .MuiSwitch-switchBase': { padding: 1, margin: 1 },
              '& .MuiSwitch-track': { backgroundColor: '#022959', opacity: 1, width: 38, height: 20, padding: 1, borderRadius: 10, marginRight: -20 },
              '& .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#022959', opacity: 1 },
            }}
          />

          <Typography variant="body1" color={isYearlyPlan ? 'textPrimary' : 'textSecondary'}>
            Yearly
          </Typography>
        </MonthlyYearlyContainer>
      </ErrorContainer>
    </>
  );
};

export default PlanSelection;
