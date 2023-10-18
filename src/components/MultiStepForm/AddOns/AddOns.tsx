import { Checkbox, CheckboxContainer, AddOnsContainer } from '../AddOns/AddOnsStyles';
import { OfferHeader, OfferParagraph, OfferExtra } from '../PlanSelection/PlanSelectionStyles';

import { IAddOn, IFormInput } from '../IFormInput';
import { AddOnsMonthly } from './Data/AddOnsData';
import { useState, useEffect } from 'react';
import { Controller, UseFormSetValue } from 'react-hook-form';

interface AddOnsProps {
  setValue: UseFormSetValue<IFormInput>;
  isYearlyPlan: boolean;
  control: any;
}

const AddOns: React.FC<AddOnsProps> = ({ control, isYearlyPlan, setValue }) => {
  const [activeCheckboxNames, setActiveCheckboxNames] = useState<string[]>([]);
  const [currentAddOns, setCurrentAddOns] = useState<IAddOn[]>(AddOnsMonthly);

  const setNewAddOns: (arg: IAddOn[]) => void = (arg) => {
    setCurrentAddOns(arg);
  };

  const setNewCheckBoxes: (arg: string[]) => void = (arg) => {
    setActiveCheckboxNames(arg);
  };

  useEffect(() => {
    const resetAddOns = AddOnsMonthly.map((addon) => {
      const price = isYearlyPlan ? addon.price * 10 : addon.price;
      return { ...addon, isChosen: false, price };
    });
    setValue('addOns', resetAddOns);
    setNewAddOns(resetAddOns);
  }, [isYearlyPlan]);

  useEffect(() => {
    const chosenCheckboxes = localStorage.getItem('chosenCheckboxes');
    if (chosenCheckboxes) {
      const parsedCheckboxes = JSON.parse(chosenCheckboxes);
      setNewCheckBoxes(parsedCheckboxes);

      const newAddOnsData: IAddOn[] = currentAddOns.map((addOn: IAddOn) => {
        const price: number = isYearlyPlan ? addOn.price * 10 : addOn.price;
        const isChosen: boolean = parsedCheckboxes.includes(addOn.name);
        return {
          ...addOn,
          isChosen: isChosen,
          price: price,
        };
      });

      setNewAddOns(newAddOnsData);
      setValue('addOns', newAddOnsData);
    }
  }, []);

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
                checked={activeCheckboxNames.includes(addOn.name)}
                onChange={(e) => field.onChange(e.target.checked)}
                onClick={() => {
                  setActiveCheckboxNames((prevActiveCheckboxNames) => {
                    const updatedCheckboxNames = prevActiveCheckboxNames.includes(addOn.name)
                      ? prevActiveCheckboxNames.filter((name) => name !== addOn.name)
                      : [...prevActiveCheckboxNames, addOn.name];
                    localStorage.setItem('chosenCheckboxes', JSON.stringify(updatedCheckboxNames));
                    return updatedCheckboxNames;
                  });
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
