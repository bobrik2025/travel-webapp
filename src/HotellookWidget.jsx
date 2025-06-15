
import React, { useEffect, useRef } from 'react';

const HotellookWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tpwidg.com/content?currency=rub&trs=423937&shmarker=638200&show_hotels=true&powered_by=true&locale=ru&searchUrl=search.hotellook.com&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=3&no_labels=&plain=true&promo_id=7873&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";
    if (widgetRef.current) {
      widgetRef.current.innerHTML = '';
      widgetRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="hotellook-widget" style={{ width: '100%', maxWidth: '400px', margin: '40px auto' }}>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default HotellookWidget;
