import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(5, 'Name is too short. Min. 5 characters. '),
  email: yup.string().required('Email is required').email('Email is invalid. example@host.com'),
  phone: yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
  selectedPlan: yup.object().required('It is required').shape({
    name: yup.string().required(),
    price: yup.number().required().positive(),
  }),
  addOns: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        isChosen: yup.boolean().required(),
        price: yup.number().required().positive(),
        description: yup.string(),
      })
    )
    .nullable()
    .defined(),
});
