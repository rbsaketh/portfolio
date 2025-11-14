import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript, SiTypescript, 
  SiReact, SiPrisma, SiCss3, SiCsharp, SiDotnet, SiPython, 
  SiHtml5, SiPytorch, SiR, SiMongodb, SiSupabase, SiC, SiCplusplus, 
  SiAmazonaws, SiGooglecloud, SiJenkins, SiDocker, SiFirebase, SiPostgresql, SiReacthookform
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaBrain } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: DiJava },
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: SiReacthookform },
      { name: 'CSS', icon: SiCss3 },
      { name: 'C#', icon: SiCsharp },
      { name: '.NET', icon: SiDotnet },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'AWS', icon: SiAmazonaws },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Docker', icon: SiDocker },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  img: '/IMG_3352_Original.jpg',
};
