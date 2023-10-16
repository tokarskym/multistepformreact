import { Control, UseFormSetValue, Controller } from 'react-hook-form';
import { useState } from 'react';

import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { IFormInput } from '../IFormInput';
import { monthlyPricingPlans } from './Data/PricingPlansData';

import { SelectPlanButton, PlanSelectionContainer, MonthlyYearlyContainer, OfferParagraph, OfferHeader, OfferExtra } from '../PlanSelection/PlanSelectionStyles';

interface PlanSelectionProps {
  setValue: UseFormSetValue<IFormInput>;
  control: Control<IFormInput>;
  setYearlyPlan: () => void;
  isYearlyPlan: boolean;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ control, setValue, setYearlyPlan, isYearlyPlan }) => {
  const [activeButtonId, setActiveButtonId] = useState<number | null>(null);

  const yearlyPricingPlans = monthlyPricingPlans.map((plan) => ({
    ...plan,
    price: plan.price * 10,
  }));

  const handlePlanSwitch = () => {
    setYearlyPlan();
    setActiveButtonId(null);
    setValue('selectedPlan', { name: '', price: 0 });
  };

  const currentPlans = isYearlyPlan ? yearlyPricingPlans : monthlyPricingPlans;

  return (
    <>
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
                }}
              >
                {' '}
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
    </>
  );
};

export default PlanSelection;
