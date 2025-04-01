import { createRoot } from 'react-dom/client';
import NavBar from './components/navbar-ecommerce/NavBar';

const root = createRoot(document.getElementById('app'))
root.render(
    <>
        <NavBar />
    </>
  )