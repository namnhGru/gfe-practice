import { useState, useEffect, createContext } from 'react';
import CookiesBanner from './CookiesBanner';
import CookiesManage from './CookiesManage';

const CookiesConsentContext = createContext(null)

export default function CookiesConsent() {
    const [isShownBanner, setIsShownBanner] = useState(false)
    const [isShownMessage, setIsShownMessage] = useState(false)
    const [cookies, setCookies] = useState({
        essentials: true,
        analytics: true,
        marketing: true
    })
    
    useEffect(() => {
        const hasCookie = localStorage.getItem('cookie-consent')
        !hasCookie && showCookiesBanner() 
    }, [])

    function saveCookies(cookie) {
        localStorage.setItem('cookie-consent', JSON.stringify(cookie))
    }

    function handleDeclineAll() {
        setCookies(prev => {    
            const curr = {
                ...prev,
                essentials: false,
                analytics: false,
                marketing: false
            }
            saveCookies(curr)
            return curr
        })
    }
    function handleAcceptAll() {
        setCookies(prev => {    
            const curr = {
                ...prev,
                essentials: true,
                analytics: true,
                marketing: true
            }
            saveCookies(curr)
            return curr
        })
    }

    function showCookiesManage() {
        setIsShownMessage(true)
    }
    function showCookiesBanner() {
        setIsShownBanner(true)
    }

    return (
        <>
            <CookiesConsentContext.Provider value={{ cookies, setCookies, saveCookies, handleDeclineAll, handleAcceptAll }}>
                {isShownBanner && <CookiesBanner 
                                    showCookiesManage={showCookiesManage} 
                                    showCookiesBanner={showCookiesBanner} />}
                {isShownBanner && isShownMessage && <CookiesManage />}
            </CookiesConsentContext.Provider>
        </>
    )
}


export { CookiesConsentContext }