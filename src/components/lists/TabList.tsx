'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem } from '@/components';

import { useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const { role, company, started, upto, tasks } =
    experiences[activeExperience];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*140px)`, // Adjusted for larger button size
        }
      : {
          top: `calc(${activeExperience}*3rem)`, // Adjusted for larger button size
        };

  return (
    <div className="flex flex-col sm:flex-row text-base md:text-lg gap-8 md:gap-12 min-h-[300px]">
      {/* Sidebar */}
      <div className="font-mono text-sm sm:text-base relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[220px]">
        {experiences.map(({ company }, i) => (
          <button
            key={getId()}
            className={`h-12 min-w-[140px] sm:w-auto sm:px-6 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeExperience ? 'text-accent' : ''
            }`}
            onClick={() => setActiveExperience(i)}
          >
            {company}
          </button>
        ))}
        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[140px] sm:w-0.5 sm:h-12 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      <div key={getId()} className="p-2 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-medium capitalize text-dark-2">
            {role}{' '} @{company}
          </h3>
          <p className="font-mono text-sm capitalize">
            <>
              {started} - {upto}
            </>
          </p>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <ListItem key={getId()}>{task}</ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabList;
