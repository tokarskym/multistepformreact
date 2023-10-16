import { IAddOn } from '../IFormInput';
import { SummaryDiv, TotalDiv, SummaryRow, ChangePlanButton, HorizontalRule, TotalPrice } from './SummaryStyles';
import { OfferHeader, OfferParagraph } from '../PlanSelection/PlanSelectionStyles';

interface SummaryProps {
  watch: (field: string) => any;
  isYearlyPlan: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isYearlyPlan, watch }) => {
  const watchShowAddOns = watch('addOns');
  const watchShowPlan = watch('selectedPlan');
  const planType = isYearlyPlan;

  const sumOfChosenAddOnsPrice = watchShowAddOns.filter((addOn: IAddOn) => addOn.isChosen).reduce((total: number, addOn: IAddOn) => total + addOn.price, 0);

  const totalPrice = sumOfChosenAddOnsPrice + watchShowPlan.price;

  return (
    <>
      <SummaryDiv>
        <SummaryRow>
          <div>
            <OfferHeader fontSize="14px">
              {watchShowPlan.name} {planType ? '(Yearly)' : '(Monthly)'}
            </OfferHeader>
            <ChangePlanButton>Change</ChangePlanButton>
          </div>
          <OfferHeader>
            ${watchShowPlan.price}/{planType ? 'yr' : 'mo'}
          </OfferHeader>
        </SummaryRow>
        <HorizontalRule />
        {watchShowAddOns
          .filter((addOn: IAddOn) => addOn.isChosen)
          .map((addOn: IAddOn, index: number) => (
            <SummaryRow key={index}>
              <OfferParagraph>{addOn.name}</OfferParagraph>
              <OfferParagraph style={{ color: '#022959' }}>
                +${addOn.price}/{planType ? 'yr' : 'mo'}
              </OfferParagraph>
            </SummaryRow>
          ))}
      </SummaryDiv>
      <TotalDiv>
        <OfferParagraph>Total({planType ? 'per year' : 'monthly'})</OfferParagraph>
        <TotalPrice>
          ${totalPrice}/{planType ? 'yr' : 'mo'}
        </TotalPrice>
      </TotalDiv>
    </>
  );
};

export default Summary;
