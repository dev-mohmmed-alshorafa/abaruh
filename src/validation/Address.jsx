import * as yup from 'yup';

const AddressValid = yup.object().shape({
  addressName: yup.string().min(3).required('Enter your addressName'),
  address: yup.string().min(3).required('Enter your addressName'),
  city: yup.string().min(3).required('Enter your addressName'),

});
export default AddressValid;
