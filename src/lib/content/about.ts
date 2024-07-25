import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiReact, SiPrisma, SiCss3 } from 'react-icons/si';
import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Express.js', icon: SiExpress },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'CSS Animations', icon: SiCss3 },
    ],
  },
  img: '/IMG_3352_Original.jpg',
};
