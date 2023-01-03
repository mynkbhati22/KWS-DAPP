import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detailcard.scss';

// $('.option').trigger('click', function () {
//   $('.option').removeClass('active');
//   $(this).addClass('active');
// });

export default function DetailCards() {
  const [active, setActive] = useState(1);
  const [imageone, setImageOne] = useState();
  const [imagetwo, setImageTwo] = useState();
  const [imagethree, setImageThree] = useState();
  const [imagefour, setImageFour] = useState();
  const [imagefive, setImageFive] = useState();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    getPortfolioDeatils();
  }, []);

  const getPortfolioDeatils = () => {
    axios.post(`${window.URL}/api/detail`, { generateslug }).then((res) => {
      console.log('responsingPortfolioDetail', res);
      setImageOne(res.data.portimageone);
      setImageTwo(res.data.portimagetwo);
      setImageThree(res.data.portimagethree);
      setImageFour(res.data.portimagefour);
      setImageFive(res.data.portimagefive);
    });
  };

  const { generateslug } = useParams();
  console.log('showingslug', generateslug);

  return (
    <>
      <div className="options">
        <div
          className={`option ${active === 1 ? 'active' : ''} `}
          style={{ background: 'url(' + imageone + ')' }}
          onClick={() => {
            handleClick();
            setActive(1);
          }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-walking"></i>
            </div>
            <div className="info">
              <div className="main">Blonkisoaz</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className={`option ${active === 2 ? 'active' : ''} `}
          onClick={() => {
            handleClick();
            setActive(2);
          }}
          style={{ background: 'url(' + imagetwo + ')' }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="info">
              <div className="main">Oretemauw</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className={`option ${active === 3 ? 'active' : ''} `}
          style={{ background: 'url(' + imagethree + ')' }}
          onClick={() => {
            handleClick();
            setActive(3);
          }}
        >
          <img src="http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)" alt="" />
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-tree"></i>
            </div>
            <div className="info">
              <div className="main">Iteresuselle</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className={`option ${active === 4 ? 'active' : ''} `}
          onClick={() => {
            handleClick();
            setActive(4);
          }}
          style={{ background: 'url(' + imagefour + ')' }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-tint"></i>
            </div>
            <div className="info">
              <div className="main">Idiefe</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
        <div
          className={`option ${active === 5 ? 'active' : ''} `}
          onClick={() => {
            handleClick();
            setActive(5);
          }}
          style={{ background: 'url(' + imagefive + ')' }}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className="fas fa-sun"></i>
            </div>
            <div className="info">
              <div className="main">Inatethi</div>
              <div className="sub">Omuke trughte a otufta</div>
            </div>
          </div>
        </div>
      </div>

      {/* <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" className="credit">
        Photos from Victor of Valencia on tumblr
      </a> */}
    </>
  );
}
