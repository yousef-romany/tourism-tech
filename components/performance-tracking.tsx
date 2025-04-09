"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function PerformanceTracking() {
  useEffect(() => {
    // Initialize dataLayer for Google Tag Manager
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", "G-MEASUREMENT_ID") // Replace with your actual Google Analytics ID
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`} />

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID'); // Replace with your actual Facebook Pixel ID
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}
