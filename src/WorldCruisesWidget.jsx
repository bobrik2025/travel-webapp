
import React, { useEffect, useRef } from 'react';

const WorldCruisesWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?trs=423937&shmarker=638200&locale=ru&powered_by=true&border_radius=5&plain=true&color_background=%23ffffff&color_button=%230181ff&promo_id=5919&campaign_id=182";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="world-cruises-widget" style={{ width: '100%', maxWidth: '400px', margin: '40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default WorldCruisesWidget;
