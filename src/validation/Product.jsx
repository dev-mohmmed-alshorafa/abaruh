import * as yup from 'yup';

const ProductValid = yup.object().shape({
  name: yup.string().min(3).required('Enter your name'),
  description: yup.string().min(3).required('Enter your description'),
  price: yup.string().min(1).required('Enter your price'),

});
export default ProductValid;
