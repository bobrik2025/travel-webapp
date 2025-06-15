
import React, { useEffect, useRef } from 'react';

const SletayRuWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c166.travelpayouts.com/content?currency=RUB&trs=423937&shmarker=638200&departCityId=832&arrivalCountryId=119&theme=light&extended=false&powered_by=true&promo_id=5034";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default SletayRuWidget;
