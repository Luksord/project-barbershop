import css from './Gallery.module.css';
import img1MobileX1 from '../../assets/images/gallery-img-1@1x.jpg';
import img1MobileX2 from '../../assets/images/gallery-img-1@2x.jpg';
import img1TabletX1 from '../../assets/images/gallery-img-1_tab@1x.jpg';
import img1TabletX2 from '../../assets/images/gallery-img-1_tab@2x.jpg';
import img1DesktopX1 from '../../assets/images/gallery-img-1_desk@1x.jpg';
import img1DesktopX2 from '../../assets/images/gallery-img-1_desk@2x.jpg';
import img2MobileX1 from '../../assets/images/gallery-img-2@1x.jpg';
import img2MobileX2 from '../../assets/images/gallery-img-2@2x.jpg';
import img2TabletX1 from '../../assets/images/gallery-img-2_tab@1x.jpg';
import img2TabletX2 from '../../assets/images/gallery-img-2_tab@2x.jpg';
import img2DesktopX1 from '../../assets/images/gallery-img-2_desk@1x.jpg';
import img2DesktopX2 from '../../assets/images/gallery-img-2_desk@2x.jpg';
import img3MobileX1 from '../../assets/images/gallery-img-3@1x.jpg';
import img3MobileX2 from '../../assets/images/gallery-img-3@2x.jpg';
import img3TabletX1 from '../../assets/images/gallery-img-3_tab@1x.jpg';
import img3TabletX2 from '../../assets/images/gallery-img-3_tab@2x.jpg';
import img3DesktopX1 from '../../assets/images/gallery-img-3_desk@1x.jpg';
import img3DesktopX2 from '../../assets/images/gallery-img-3_desk@2x.jpg';
import img4MobileX1 from '../../assets/images/gallery-img-4@1x.jpg';
import img4MobileX2 from '../../assets/images/gallery-img-4@2x.jpg';
import img4TabletX1 from '../../assets/images/gallery-img-4_tab@1x.jpg';
import img4TabletX2 from '../../assets/images/gallery-img-4_tab@2x.jpg';
import img4DesktopX1 from '../../assets/images/gallery-img-4_desk@1x.jpg';
import img4DesktopX2 from '../../assets/images/gallery-img-4_desk@2x.jpg';

interface galleryProps {
  images: {
    mobile: string;
    mobile2x: string;
    tablet: string;
    tablet2x: string;
    desktop: string;
    desktop2x: string;
  };
  alt: string;
}

const gallery: galleryProps[] = [
  {
    images: {
      mobile: img1MobileX1,
      mobile2x: img1MobileX2,
      tablet: img1TabletX1,
      tablet2x: img1TabletX2,
      desktop: img1DesktopX1,
      desktop2x: img1DesktopX2,
    },
    alt: `black and white photo of a man cutting another man's hair`,
  },
  {
    images: {
      mobile: img2MobileX1,
      mobile2x: img2MobileX2,
      tablet: img2TabletX1,
      tablet2x: img2TabletX2,
      desktop: img2DesktopX1,
      desktop2x: img2DesktopX2,
    },
    alt: `black and white photo of a man applying shaving foam to another man's nape`,
  },
  {
    images: {
      mobile: img3MobileX1,
      mobile2x: img3MobileX2,
      tablet: img3TabletX1,
      tablet2x: img3TabletX2,
      desktop: img3DesktopX1,
      desktop2x: img3DesktopX2,
    },
    alt: `black and white photo of a man wiping another man's hair head with a towel`,
  },
  {
    images: {
      mobile: img4MobileX1,
      mobile2x: img4MobileX2,
      tablet: img4TabletX1,
      tablet2x: img4TabletX2,
      desktop: img4DesktopX1,
      desktop2x: img4DesktopX2,
    },
    alt: `black and white closeup photo of a pair of hands stylizing another man's hair`,
  },
];

export const Gallery = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>In Latin, "barba" means "beard"</p>
      </div>
      <ul className={css.galleryList}>
        {gallery.map(({ images, alt }, index) => (
          <li key={index} className={css.barberContainer}>
            <picture>
              <source
                media="(min-width: 1600px)"
                srcSet={`${images.desktop} 1x, ${images.desktop2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${images.tablet} 1x, ${images.tablet2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${images.mobile} 1x, ${images.mobile2x} 2x`}
              />
              <img
                src={images.desktop}
                alt={alt}
                className={css.image}
                loading="lazy"
              />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
};
