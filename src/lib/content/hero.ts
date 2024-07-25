import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Saketh Bireddy.',
  tagline: 'I use technology to create a brighter future.',
  description:
    "I'm a passionate software engineer with hands-on experience in developing full-stack applications and AI solutions. My passion lies in leveraging technology to solve complex problems, drive social impact, and create meaningful user experiences.",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
