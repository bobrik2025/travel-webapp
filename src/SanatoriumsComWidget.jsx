
import React, { useEffect, useRef } from 'react';

const SanatoriumsComWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://c167.travelpayouts.com/content?currency=RUB&trs=423937&shmarker=638200&powered_by=true&locale=ru&geo_id=&logo=true&title=true&color_bg=%23E0E2E9&color_text=%23333333&color_title=%23808389&color_button=%2348C014&color_button-text=%23FFFFFF&color_button-hover=%235CD627&color_button-text-hover=%23FFFFFF&promo_id=4784";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="sanatoriumscom-widget" style={{ width: '100%', maxWidth: '400px', margin: '40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default SanatoriumsComWidget;
