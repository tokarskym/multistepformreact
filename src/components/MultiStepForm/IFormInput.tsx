export interface IAddOn {
  name: string;
  isChosen: boolean;
  price: number;
}

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  selectedPlan: {
    name: string;
    price: number;
  };
  addOns: IAddOn[];
}
