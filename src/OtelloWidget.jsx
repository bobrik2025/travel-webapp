
import React, { useEffect, useRef } from 'react';

const OtelloWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&powered_by=true&color_button=%23FF8E01&color_icons=%23FF8E01&color_focused=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&border_radius=3&plain=true&no_labels=&promo_id=8566&campaign_id=589";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="otello-widget" style={{ width: '100%', maxWidth: '400px', margin: '50px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default OtelloWidget;
