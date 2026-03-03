import { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { isSmallScreen } from '../utils/device'

import Page from '../components/layout/Page'
import DesktopView from '../views/Desktop'
import MobileView from '../views/Mobile'

export default function Index() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Check both react-device-detect and window width 
  const isMobileDevice = isMobile || windowWidth < 768
  
  return (
    <>
      

      <Page>
        {isMobileDevice || isSmallScreen ? <MobileView /> : <DesktopView />}
      </Page>
    </>
  )
}

