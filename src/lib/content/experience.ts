import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "experience",
  experiences: [
    {
      company: 'IpserLab',
      role: 'Software Engineer Intern',
      started: 'August 2024',
      upto: 'present',
      tasks: [
        'Led discussions on system architecture, followed agile methodologies and CI/CD pipelines, and onboarded 100+ users to the waitlist, setting the foundation for the app’s launch.',
        'Implementing RESTful APIs and XML-based product customization, enhancing B2B client engagement and increasing client retention.',
        'Built a scalable community page with TypeScript, React Native, Echo, and CSS, enabling cross-platform iOS/Android compatibility.',
      ],
    },
    {
      company: 'Mingley',
      role: 'Software Engineer Intern',
      started: 'june 2024',
      upto: 'august 2024',
      tasks: [
        'Engineering the frontend development of a customizable eCommerce platform using React.js and Tailwind CSS and cutting payment process time through Stripe integration.',
        'Designed and prototyped user interfaces by creating low to high-fidelity versions of mobile and community pages using Figma, improving the usability and aesthetics of the application        ',
        'Built a scalable community page with TypeScript, React Native, Echo, and CSS, enabling cross-platform iOS/Android compatibility.',
        'Optimized Java modules and Postgres queries, boosting application performance by 20% and supporting 500+ users.',
      ],
    },
    {
      company: 'John Deere',
      role: 'Data Science Researcher',
      started: 'January 2024',
      upto: 'May 2024',
      tasks: [
        'Developed and collaborated on a demand forecasting model with an average of 0.4 NRMSE using Python, optimizing inventory for 100,000+ John Deere part location combinations.',
        'Architected and prototyped 10+ UI/UX components using Figma, enhancing mobile app usability and visual appeal.',
        'Applied time series machine learning models like S-ARIMA and Exponential Smoothing, evaluated NRMSE, RMSE, and ME metrics, and visualized data using NumPy.',
      ],
    },
    {
      company: 'Research Study',
      role: 'AI Researcher',
      started: 'May 2023',
      upto: 'january 2023',
      tasks: [
        'Collaborated and coauthored research with ISEF Regeneron Finalist Shreya Amalapurapu, achieving 90% accuracy in classifying drug-disease pairs using the ComplEX algorithm within the StellarGraph framework.',
        'Processed 1,000+ graph data points from DrugBank and Stanford datasets using Pandas and rdkit, enhancing prediction reliability.',
        'Trained and fine-tuned the model using TensorFlow’s Keras API, Adam optimizer, and Binary Cross Entropy loss, amplifying model robustness by 10% for future biomedical research applications.',
      ],
    },
  ],
};