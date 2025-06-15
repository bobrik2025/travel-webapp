
import React, { useEffect, useRef } from 'react';

const TravelataWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c18.travelpayouts.com/content?trs=423937&shmarker=638200&countries=0&powered_by=true&promo_id=1492";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="travelata-widget" style={{ width: '100%', maxWidth: '400px', margin: '40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default TravelataWidget;
