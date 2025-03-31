import { createRoot } from 'react-dom/client';
import CookiesConsent from './components/CookiesConsent';

const root = createRoot(document.getElementById('app'))
root.render(
    <>
        <CookiesConsent />
    </>
  )