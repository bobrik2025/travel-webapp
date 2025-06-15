import React, { useEffect, useRef } from 'react';

const BolshayaStranaWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://c169.travelpayouts.com/content?promo_id=4798&shmarker=638200&trs=423937';
    script.async = true;
    script.charset = 'utf-8';
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="bolshaya-strana-container">
      <div ref={widgetRef}></div>
    </div>
  );
};

export default BolshayaStranaWidget;
