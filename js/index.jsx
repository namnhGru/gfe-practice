import { createRoot } from 'react-dom/client';
import ProductDetails from './components/product-details/ProductDetails';

const root = createRoot(document.getElementById('app'))
root.render(
    <>
        <ProductDetails />
    </>
  )