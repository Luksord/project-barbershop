// import { useState } from 'react';
// import mob1x1 from '../../../assets/images/slider-img-1_mob@1x.jpg';
// import mob1x2 from '../../../assets/images/slider-img-1_mob@2x.jpg';
// import mob2x1 from '../../../assets/images/slider-img-2_mob@1x.jpg';
// import mob2x2 from '../../../assets/images/slider-img-2_mob@2x.jpg';
// import mob3x1 from '../../../assets/images/slider-img-3_mob@1x.jpg';
// import mob3x2 from '../../../assets/images/slider-img-3_mob@2x.jpg';
// import tab3x1 from '../../../assets/images/slider-img-3_tab@1x.jpg';
// import tab3x2 from '../../../assets/images/slider-img-3_tab@2x.jpg';
// import desk1x1 from '../../../assets/images/slider-img-1_desk@1x.jpg';
// import desk2x1 from '../../../assets/images/slider-img-2_desk@1x.jpg';
// import desk3x1 from '../../../assets/images/slider-img-3_desk@1x.jpg';
// import desk3x2 from '../../../assets/images/slider-img-3_desk@2x.jpg';
// import css from './Slider.module.css';

// interface RatinaSet {
//   '1x': string;
//   '2x'?: string;
// }

// interface BackgroundsProps {
//   mobile: RatinaSet;
//   tablet: RatinaSet;
//   desktop: RatinaSet;
// }

// export const backgrounds: BackgroundsProps[] = [
//   {
//     mobile: { '1x': mob1x1, '2x': mob1x2 },
//     tablet: { '1x': desk1x1 },
//     desktop: { '1x': desk1x1 },
//   },
//   {
//     mobile: { '1x': mob2x1, '2x': mob2x2 },
//     tablet: { '1x': desk2x1 },
//     desktop: { '1x': desk2x1 },
//   },
//   {
//     mobile: { '1x': mob3x1, '2x': mob3x2 },
//     tablet: { '1x': tab3x1, '2x': tab3x2 },
//     desktop: { '1x': desk3x1, '2x': desk3x2 },
//   },
// ];

// export const Slider = () => {
//   const [bgIndex, setBgIndex] = useState(0);

//   return (
//     <div className={css.slidersWrapper}>
//       {[0, 1, 2].map(index => (
//         <div
//           key={index}
//           className={`${css.slider} ${bgIndex === index ? css.active : ''}`}
//           onClick={() => setBgIndex(index)}
//         />
//       ))}
//     </div>
//   );
// };
