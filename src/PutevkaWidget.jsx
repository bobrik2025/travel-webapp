import React, { useEffect } from 'react';

const PutevkaWidget = () => {
  useEffect(() => {
    const wrapper = document.createElement('div');
    wrapper.id = `putevka_wrapper_${Date.now()}`;
    document.getElementById('putevka-script-container').appendChild(wrapper);

    const script = document.createElement('script');
    script.src = "https://c170.travelpayouts.com/content?trs=423937&shmarker=638200&region=23&powered_by=true&promo_id=4847";
    script.async = true;
    script.charset = "utf-8";

    wrapper.appendChild(script);
  }, []);

  return (
    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
      <div id="putevka-script-container"></div>
    </div>
  );
};

export default PutevkaWidget;