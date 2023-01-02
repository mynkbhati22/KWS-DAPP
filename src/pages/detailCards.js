/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/self-closing-comp */
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import './detailcard.css';

const useStylesBase = makeStyles({
  root: {
    color: 'blue',
  },
  hover: {
    color: 'red',
  },
});

export default function DetailCards() {
  return (
    <>
      <div className="options">
        <div
          className="option active"
          style={{ background: 'url(http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)' }}
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
          className="option"
          style={{ background: 'url(http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)' }}
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
          className="option"
          style={{ background: 'url(http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)' }}
        >
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
          className="option"
          style={{ background: 'url(http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)' }}
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
          className="option"
          style={{ background: 'url(http://localhost:3000/static/media/defidev.efb2508ca579496586f4.jpeg)' }}
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
