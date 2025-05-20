import css from './Gallery.module.css';
import img1 from '../../assets/images/img-1@1x.jpg';
import img1x2 from '../../assets/images/img-1@2x.jpg';
import img2 from '../../assets/images/img-2@1x.jpg';
import img2x2 from '../../assets/images/img-2@2x.jpg';
import img3 from '../../assets/images/img-3@1x.jpg';
import img3x2 from '../../assets/images/img-3@2x.jpg';
import img4 from '../../assets/images/img-4@1x.jpg';
import img4x2 from '../../assets/images/img-4@2x.jpg';

interface galleryProps {
  img: string;
  img2x: string;
  alt: string;
}

const gallery: galleryProps[] = [
  {
    img: img1,
    img2x: img1x2,
    alt: `black and white photo of a man cutting another man's hair`,
  },
  {
    img: img2,
    img2x: img2x2,
    alt: `black and white photo of a man applying shaving foam to another man's nape`,
  },
  {
    img: img3,
    img2x: img3x2,
    alt: `black and white photo of a man wiping another man's hair head with a towel`,
  },
  {
    img: img4,
    img2x: img4x2,
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
        {gallery.map(({ img, img2x, alt }, index) => (
          <li className={css.barberContainer}>
            <img
              key={index}
              src={img}
              srcSet={`${img} 1x, ${img2x} 2x`}
              alt={alt}
              className={css.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
