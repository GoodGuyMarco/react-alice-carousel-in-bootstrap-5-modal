import React from 'react';
import AliceCarousel from 'react-alice-carousel';

// CSS
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-alice-carousel/lib/alice-carousel.css';

// Images
import zeroSrc from './images/0.png';
import oneSrc from './images/1.png';
import twoSrc from './images/2.png';
import threeSrc from './images/3.png';

function App() {
  return (
    <>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
          Launch modal
        </button>
      </div>
      <div className="modal" id="modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <AliceCarousel
              items={[
                <img src={zeroSrc} alt="0" className="img-thumbnail" />,
                <img src={oneSrc} alt="1" className="img-thumbnail" />,
                <img src={twoSrc} alt="2" className="img-thumbnail" />,
                <img src={threeSrc} alt="3" className="img-thumbnail" />,
              ]}
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
