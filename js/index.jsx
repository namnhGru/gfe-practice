import { createRoot } from 'react-dom/client';
import Button from './components/Button';

const root = createRoot(document.getElementById('app'))
root.render(
    <>
        <div id="backdrop-background"
        className=""></div>
        <dialog open id="cookie-consent" 
            className="flex flex-col p-4 gap-[1.5em]">
            <div
                className="gap-[0.25em]">
                <h3 className="font-semibold
                text-[16px]/[24px]">We use cookies</h3>
                <div className='font-normal text-[14px]/[20px]'>
                    <span >We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our </span><span><a className="text-indigo-700" href='#'>cookie policy.</a></span> 
                </div>
                 
            </div>
            <div className="flex flex-col gap-[0.5em] md:flex-row md:justify-between">
                <div className="flex flex-col gap-[0.5em] md:order-last md:flex-row">
                    <Button clasName="text-white bg-indigo-700 md:order">Allow cookies</Button>
                    <Button clasName="text-black bg-white">Manage cookies</Button>
                </div>
                <Button clasName="text-white bg-red-600">Decline cookies</Button>
            </div>
        </dialog>
    </>
  )