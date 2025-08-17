import { useState } from 'react';
import css from './Header.module.css';
import mob1x1 from '../../assets/images/slider-img-1_mob@1x.jpg';
import mob1x2 from '../../assets/images/slider-img-1_mob@2x.jpg';
import mob2x1 from '../../assets/images/slider-img-2_mob@1x.jpg';
import mob2x2 from '../../assets/images/slider-img-2_mob@2x.jpg';
import mob3x1 from '../../assets/images/slider-img-3_mob@1x.jpg';
import mob3x2 from '../../assets/images/slider-img-3_mob@2x.jpg';
import tab3x1 from '../../assets/images/slider-img-3_tab@1x.jpg';
import tab3x2 from '../../assets/images/slider-img-3_tab@2x.jpg';
import desk1x1 from '../../assets/images/slider-img-1_desk@1x.jpg';
import desk2x1 from '../../assets/images/slider-img-2_desk@1x.jpg';
import desk3x1 from '../../assets/images/slider-img-3_desk@1x.jpg';
import desk3x2 from '../../assets/images/slider-img-3_desk@2x.jpg';
import { Sidebar } from './Sidebar/Sidebar';
import { Nav } from './Nav/Nav';

interface RatinaSet {
  '1x': string;
  '2x'?: string;
}

interface BackgroundsProps {
  mobile: RatinaSet;
  tablet: RatinaSet;
  desktop: RatinaSet;
}

const backgrounds: BackgroundsProps[] = [
  {
    mobile: { '1x': mob1x1, '2x': mob1x2 },
    tablet: { '1x': desk1x1 },
    desktop: { '1x': desk1x1 },
  },
  {
    mobile: { '1x': mob2x1, '2x': mob2x2 },
    tablet: { '1x': desk2x1 },
    desktop: { '1x': desk2x1 },
  },
  {
    mobile: { '1x': mob3x1, '2x': mob3x2 },
    tablet: { '1x': tab3x1, '2x': tab3x2 },
    desktop: { '1x': desk3x1, '2x': desk3x2 },
  },
];

export const Header = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const getBackground = (index: number): string => {
    const screenWidth = window.innerWidth;
    const dpr: '1x' | '2x' = window.devicePixelRatio >= 2 ? '2x' : '1x';
    let type: keyof BackgroundsProps = 'mobile';
    if (screenWidth >= 1600) type = 'desktop';
    else if (screenWidth >= 768) type = 'tablet';
    const bg = backgrounds[index][type];
    return bg[dpr] || bg['1x'];
  };

  return (
    <div className={css.section}>
      <Sidebar />
      <div
        className={css.background}
        style={{ backgroundImage: `url(${getBackground(bgIndex)})` }}
      >
        <Nav />
        <div className={css.container}>
          <div className={css.subtextWrapper}>
            <div className={css.line} />
            <p className={css.subtext}>A hair salon for men in Kyiv</p>
          </div>
          <h1 className={css.title}>BarberShop</h1>
          <div className={css.textWrapper}>
            <p className={css.text}>We are experts in trendy men’s haircuts.</p>
            <p className={css.text}>
              We work quickly, carefully and with style.
            </p>
          </div>
        </div>
        <div className={css.slidersWrapper}>
          {[0, 1, 2].map(index => (
            <div
              key={index}
              className={`${css.slider} ${bgIndex === index ? css.active : ''}`}
              onClick={() => setBgIndex(index)}
            />
          ))}
        </div>
        <div className={css.controlsWrapper}>
          <button
            className={css.controlBtn}
            onClick={() =>
              setBgIndex(
                prev => (prev - 1 + backgrounds.length) % backgrounds.length
              )
            }
          >
            Back
          </button>
          <button
            className={css.controlBtn}
            onClick={() => setBgIndex(prev => (prev + 1) % backgrounds.length)}
          >
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};
