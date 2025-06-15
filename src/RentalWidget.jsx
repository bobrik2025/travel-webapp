
import React, { useEffect, useRef } from 'react';

const RentalWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&powered_by=true&border_radius=5&plain=true&color_background=%23F2F8FF&color_button=%2336ba5f&promo_id=5472&campaign_id=57";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="rental-widget" style={{ width: '100%', maxWidth: '420px', margin: '-7px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default RentalWidget;
