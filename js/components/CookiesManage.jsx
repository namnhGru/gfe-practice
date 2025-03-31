import Modal from './Modal.jsx'
import { CookiesConsentContext } from './CookiesConsent.jsx'
import { useContext } from 'react'

export default function CookiesManage() {
    const { cookies, setCookies, saveCookies, handleAcceptAll, handleDeclineAll } = useContext(CookiesConsentContext)
    function handleCookieChange(cookieToChange) {
        setCookies(prev => {
            const curr = {
                ...prev,
                [cookieToChange]: !cookies[cookieToChange]
            }
            return curr
        })
    }
    
    return (
        <Modal>
            <div className="mb-4">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-semibold text-[16px]/[24px]">Essentials</h3>
                        <label htmlFor="essentials-switch"></label>
                        <input type="checkbox" id="essentials-switch" disabled defaultChecked={cookies.essentials}/>
                    </div>
                    <div>
                        <p className="font-normal text-[14px]/[20px]">These cookies are essential for the proper functioning of our services and cannot be disabled.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-semibold text-[16px]/[24px]">Analytics</h3>
                        <label htmlFor="analytics-switch"></label>
                        <input type="checkbox" id="analytics-switch" defaultChecked={cookies.analytics} onClick={() => handleCookieChange("analytics")}/>
                    </div>
                    <div>
                        <p className="font-normal text-[14px]/[20px]">These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-between">
                        <h3 className="font-semibold text-[16px]/[24px]">Marketing</h3>
                        <label htmlFor="marketing-switch"></label>
                        <input type="checkbox" id="marketing-switch" defaultChecked={cookies.marketing} onClick={() => handleCookieChange("marketing")}/>
                    </div>
                    <div>
                        <p className="font-normal text-[14px]/[20px]">These cookies allow us to show you advertisements relevant to you through our advertising partners.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <button className="flex-1 text-white bg-indigo-700" onClick={() => handleAcceptAll()}>Accept all</button>
                    <button className="flex-1 text-black bg-white" onClick={() => saveCookies(cookies)}>Save</button>
                </div>
                <button className="text-white bg-red-600" onClick={() => handleDeclineAll()}>Decline All</button>
            </div>
        </Modal>
    )
}