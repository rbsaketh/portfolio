import { SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiReact, SiPrisma, SiCss3, SiCsharp, SiMysql, SiDotnet, SiPython, SiHtml5, SiPytorch, SiR, SiMongodb, SiSupabase } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa'; // Using FaBrain for Neural Networks
import { GiArtificialIntelligence } from 'react-icons/gi'; // Using GiArtificialIntelligence for NLP
import { DiJava } from 'react-icons/di'; // Using a different icon set for Java
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
      { name: 'React.js', icon: SiReact },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'CSS Animations', icon: SiCss3 },
      { name: 'C#', icon: SiCsharp },
      { name: 'SQL', icon: SiMysql },
      { name: '.NET', icon: SiDotnet },
      { name: 'Java', icon: DiJava },
      { name: 'Python', icon: SiPython },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'NLP', icon: GiArtificialIntelligence },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Neural Networks', icon: FaBrain },
      { name: 'R', icon: SiR },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  img: '/IMG_3352_Original.jpg',
};
