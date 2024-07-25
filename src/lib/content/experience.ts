import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "experience",
  experiences: [
    {
      company: 'Mingley',
      role: 'Software Engineer Intern',
      started: 'june 2024',
      upto: 'present',
      tasks: [
        'Facilitating discussions on system architecture for mobile and desktop applications, engaging with design, development, and product teams to ensure alignment post-completion of core features and designs',
        'Designed and prototyped user interfaces by creating low to high-fidelity versions of mobile and community pages using Figma, improving the usability and aesthetics of the application        ',
        'Actively developing the community page of the mobile application using React Native for iOS and Android, CSS, React Hooks, and leveraging Echo for compiling and building on Windows OS to ensure cross-platform compatibility and robust performance',
        'Integrating backend services using Supabase and a REST API written in C# and .NET, ensuring seamless connectivity and data flow between the application and server',
      ],
    },
    {
      company: 'John Deere',
      role: 'Undergraduate Researcher and Programmer',
      started: 'January 2024',
      upto: 'May 2024',
      tasks: [
        'Collaborated with a team to use Python for advanced machine learning and time series data analysis, achieving a precise 12-month demand forecasting model with an average NRMSE of 0.4 for John Deere parts per location',
        'Employed advanced data cleansing and exploratory data analysis techniques using Pandas to dissect data, resulting in a significant reduction in inventory discrepancies and costs        ',
        'Leveraged machine learning models like Seasonal Naive, S-ARIMA, and Exponential Smoothing and calculated numerous metrics such as NRMSE, RMSE, and ME using NumPy; data was visualized using matplotlib        ',
      ],
    },
    {
      company: 'Research Study',
      role: 'AI Researcher',
      started: 'june 2022',
      upto: 'january 2023',
      tasks: [
        'Worked with ISEF Regeneron Finalist Shreya Amalapurapu to program drug-disease similarities using graph learning (disease nodes and drug nodes) and Python, leading to a high-accuracy predictive model        ',
        'Employed ComplEX, a link prediction algorithm, to run our node embedding framework: 100 epochs produced the highest binary accuracy (91%) on our validation set',
        'Published the research in the IYRI Computer Science Journal        ',
      ],
    },
  ],
};
