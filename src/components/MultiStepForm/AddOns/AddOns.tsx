import { Checkbox, CheckboxContainer, AddOnsContainer } from '../AddOns/AddOnsStyles';
import { OfferHeader, OfferParagraph, OfferExtra } from '../PlanSelection/PlanSelectionStyles';

import { AddOnsMonthly } from './Data/AddOnsData';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

interface AddOnsProps {
  isYearlyPlan: boolean;
  control: any;
}

const AddOns: React.FC<AddOnsProps> = ({ control, isYearlyPlan }) => {
    const [activeCheckboxNames, setActiveCheckboxNames] = useState<string[]>([]);
    
  const AddOnsYearly = AddOnsMonthly.map((addOn) => ({
    ...addOn,
    price: addOn.price * 10,
  }));

  const currentAddOns = isYearlyPlan ? AddOnsYearly : AddOnsMonthly;



  return (
    <>
      {currentAddOns.map((addOn, index) => (
        <CheckboxContainer
          key={addOn.name}
          style={{
            backgroundColor: activeCheckboxNames.includes(addOn.name) ? '#F8F9FF' : 'transparent',
            borderColor: activeCheckboxNames.includes(addOn.name) ? '#483EFF' : '#D6D9E6',
          }}
        >
          <Controller
            name={`addOns[${index}].isChosen`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                {...field}
                type="checkbox"
                onChange={(e) => field.onChange(e.target.checked)}
                onClick={() => {
                  if (activeCheckboxNames.includes(addOn.name)) {
                    setActiveCheckboxNames(activeCheckboxNames.filter((name) => name !== addOn.name));
                  } else {
                    setActiveCheckboxNames([...activeCheckboxNames, addOn.name]);
                  }
                }}
              />
            )}
          />

          <Controller name={`addOns[${index}].name`} control={control} defaultValue={addOn.name} render={({ field }) => <input {...field} type="hidden" />} />
          <Controller name={`addOns[${index}].price`} control={control} defaultValue={addOn.price} render={({ field }) => <input {...field} type="hidden" />} />
          <AddOnsContainer>
            <div>
              <OfferHeader>{`${addOn.name}`}</OfferHeader>
              <OfferParagraph fontSize="12px">{`${addOn.description}`}</OfferParagraph>
            </div>
            <OfferExtra>
              +${`${addOn.price}`}/{isYearlyPlan ? 'yr' : 'mo'}{' '}
            </OfferExtra>
          </AddOnsContainer>
        </CheckboxContainer>
      ))}
    </>
  );
};

export default AddOns;
