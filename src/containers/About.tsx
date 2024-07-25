'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem2, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
          Hello! I'm Saketh Bireddy, a Computer Science student at Purdue University with a deep passion for technology and its potential to solve real-world problems. My journey in computer science is driven by a commitment to innovation and a desire to make a positive impact on society.

          <br></br><br></br>I'm currently working at a startup called Mingley where I'm working on an innovative social media app.

          <br></br><br></br>Beyond academics, I love to play volleyball and soccer and actively try out new things.
          </p>
          {list && (
            <>
              <div className="flex flex-col items-center mb-1">
                <p className="text-center mb-1 pr-16">{list.title}</p>
              </div>
              <ul className="grid grid-cols-5 gap-x-1 gap-y-4 text-center text-sm pr-10">
                {list.items.map((item) => (
                  <ListItem2 key={getId()} className="flex flex-col items-center">
                    <item.icon className="text-6xl text-white" />
                    <span className="pt-1 mt-1">{item.name}</span>
                  </ListItem2>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
