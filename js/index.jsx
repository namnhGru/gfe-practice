import { createRoot } from 'react-dom/client';
import Button from './components/Button';
import Modal from './components/Modal';
import Option from './components/Option';

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
                    <Button className="text-white bg-indigo-700">Allow cookies</Button>
                    <Button className="text-black bg-white">Manage cookies</Button>
                </div>
                <Button className="text-white bg-red-600">Decline cookies</Button>
            </div>
        </dialog>
        <dialog open id="manage-cookie" className="p-[1.5em]">
            <Modal>
                <div className="mb-4">
                    <Option
                        title="Essentials"
                        description="These cookies are essential for the proper functioning of our services and cannot be disabled."
                    ></Option>
                    <Option
                        title="Analytics"
                        description="These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues."
                    ></Option>
                    <Option
                        title="Marketing"
                        description="These cookies allow us to show you advertisements relevant to you through our advertising partners.."
                    ></Option>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <Button className="flex-1 text-white bg-indigo-700">Accept all</Button>
                        <Button className="flex-1 text-black bg-white">Save</Button>
                    </div>
                    <Button className="text-white bg-red-600">Decline All</Button>
                </div>
            </Modal>
        </dialog>
    </>
  )