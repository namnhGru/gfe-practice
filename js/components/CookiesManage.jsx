import Modal from './Modal.jsx'
import { CookiesConsentContext } from './CookiesConsent.jsx'
import { useContext } from 'react'

export default function CookiesManage() {
    const { cookies, setCookies, saveCookies, handleAcceptAll, handleDeclineAll } = useContext(CookiesConsentContext)
    const btnStyle = "py-[0.625em] flex-1 rounded-[4px]"
    
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
        <Modal center={true}>
            <div className="p-[1.5em] w-[340px] md:w-[458px] lg:w-[384px]">
                <div className="flex flex-col mb-[1.5em] gap-[1.5em]">
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-row justify-between">
                            <h3 className="font-semibold text-[16px]/[24px]">Essentials</h3>
                            <label htmlFor="essentials-switch" className="relative inline-flex items-center cursor-pointer cursor-not-allowed opacity-50">
                                <input type="checkbox" id="essentials-switch" className="sr-only peer" disabled defaultChecked={cookies.essentials}/>
                                <div
                                    className="w-9 h-5 bg-gray-300 peer-checked:bg-gray-500 rounded-full 
                                            peer peer-focus:ring-2 peer-focus:ring-gray-300 
                                            before:absolute before:top-1 before:left-0.5 before:bg-white 
                                            before:w-4 before:h-4 before:rounded-full before:transition-all
                                            peer-checked:before:translate-x-4"
                                ></div>
                            </label>
                        </div>
                        <div>
                            <p className="font-normal text-[14px]/[20px]">These cookies are essential for the proper functioning of our services and cannot be disabled.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-row justify-between">
                            <h3 className="font-semibold text-[16px]/[24px]">Analytics</h3>
                            <label htmlFor="analytics-switch" className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="analytics-switch" className="sr-only peer" defaultChecked={cookies.analytics} onClick={() => handleCookieChange("analytics")}/>
                                <div
                                    className="w-9 h-5 bg-gray-300 peer-checked:bg-indigo-700 rounded-full 
                                            peer peer-focus:ring-2 peer-focus:ring-indigo-300 
                                            before:absolute before:top-1 before:left-0.5 before:bg-white 
                                            before:w-4 before:h-4 before:rounded-full before:transition-all
                                            peer-checked:before:translate-x-4"
                                ></div>
                            </label>
                        </div>
                        <div>
                            <p className="font-normal text-[14px]/[20px]">These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-row justify-between">
                            <h3 className="font-semibold text-[16px]/[24px]">Marketing</h3>
                            <label htmlFor="marketing-switch" className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="marketing-switch" className="sr-only peer" defaultChecked={cookies.marketing} onClick={() => handleCookieChange("marketing")}/>
                                <div
                                    className="w-9 h-5 bg-gray-300 peer-checked:bg-indigo-700 rounded-full 
                                            peer peer-focus:ring-2 peer-focus:ring-indigo-300 
                                            before:absolute before:top-1 before:left-0.5 before:bg-white 
                                            before:w-4 before:h-4 before:rounded-full before:transition-all
                                            peer-checked:before:translate-x-4"
                                ></div>
                            </label>
                        </div>
                        <div>
                            <p className="font-normal text-[14px]/[20px]">These cookies allow us to show you advertisements relevant to you through our advertising partners.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[0.5em]">
                    <div className="flex flex-row gap-[0.5em]">
                        <button className={`${btnStyle} text-white bg-indigo-700`} onClick={() => handleAcceptAll()}>Accept all</button>
                        <button className={`${btnStyle} text-black bg-white`} onClick={() => saveCookies(cookies)}>Save</button>
                    </div>
                    <button className={`${btnStyle} text-white bg-red-600`} onClick={() => handleDeclineAll()}>Decline All</button>
                </div>
            </div>
        </Modal>
    )
}