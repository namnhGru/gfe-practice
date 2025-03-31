import { useContext } from 'react'
import Modal from './Modal.jsx'
import { CookiesConsentContext } from './CookiesConsent.jsx'

export default function CookiesBanner() {
    const { handleAcceptAll, handleDeclineAll, showCookiesManage } = useContext(CookiesConsentContext)
    const btnStyle = "p-[0.625em] md:px-[1em] font-medium text-[1rem]/[1.5rem] rounded-[4px]"
    
    return (
        <Modal center={false}>
            <div className="flex flex-col w-[100vw] p-[1em] gap-[1.5em] p-[1em] md:py-[1.5em] md:px-[2em] lg:py-[1.5em] lg:px-[7em]">
                <div
                    className="gap-[0.25em]">
                    <h3 className="font-semibold
                    text-[1rem]/[1.5rem]">We use cookies</h3>
                    <div className='font-normal text-[0.875rem]/[1.25rem]'>
                        <span >We use cookies to enhance your browsing experience and improve our website's performance. By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our </span><span><a className="text-indigo-700" href='#'>cookie policy.</a></span> 
                    </div>
                </div>
                <div className="flex flex-col gap-[0.5em] md:flex-row md:justify-between">
                    <div className="flex flex-col gap-[0.5em] md:order-last md:flex-row">
                        <button className={`${btnStyle} text-white bg-indigo-700`} onClick={() => handleAcceptAll()}>Allow cookies</button>
                        <button className={`${btnStyle} text-black bg-white`} onClick={() => showCookiesManage()}>Manage cookies</button>
                    </div>
                    <button className={`${btnStyle} text-white bg-red-600`} onClick={() => handleDeclineAll()}>Decline cookies</button>
                </div>
            </div>
        </Modal>
    )
}


