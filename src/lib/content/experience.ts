import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: 'experience',
  experiences: [
    {
      company: 'Trimble Inc.',
      role: 'Software Engineer Intern',
      started: 'May 2025',
      upto: 'August 2025',
      tasks: [
        'Implemented PostgreSQL database migrations on AWS EC2 via Python, improving CRUD workflows for 50+ GIS analysts.',
        'Built a Jenkins CI/CD pipeline with Docker to clean 120k+ POI records, saving ~20 developer hours per month.',
        'Wrote a Python ETL to extract shapefiles, redesign SQL tables, and auto-generate regional boundary views.',
        'Engineered a SQL monitoring system using AWS CloudWatch, Slack API alerts, and daily Matplotlib graphs, catching 90% of resource spikes 2× faster and lowering cloud expenses by $2,000/year.',
      ],
    },
    {
      company: 'IpserLab LLC',
      role: 'Software Engineer Intern',
      started: 'August 2024',
      upto: 'December 2024',
      tasks: [
        'Decreased e-commerce platform latency 35% by adding 5 RESTful Java APIs, enforcing endpoint validation with Postman, and improving HTTP load distribution on Apache Tomcat.',
        'Doubled concurrent session capacity to 200+ users by profiling Java modules and indexing critical PostgreSQL queries.',
        'Constructed an XML configuration system with React and Stripe payments, resulting in a 10% faster checkout flow.',
      ],
    },
    {
      company: 'Mingley',
      role: 'Software Engineer Intern',
      started: 'June 2024',
      upto: 'August 2024',
      tasks: [
        'Contributed to a social discovery mobile app (iOS/Android), enabling 100+ beta users to connect through proximity.',
        'Refactored the community page into React Native and TypeScript, achieving 1.5× faster transition times.',
        'Integrated a C#/.NET data pipeline to process and store API data in PostgreSQL, cutting system error rates by 20%.',
      ],
    },
    {
      company: 'John Deere (Purdue Data Mine)',
      role: 'Data Science Intern',
      started: 'January 2024',
      upto: 'May 2024',
      tasks: [
        'Developed Python time-series forecasting with SARIMA and Exponential Smoothing (JSON/CSV API support) for 100,000+ part centers, reducing inventory costs by 10%.',
        'Eliminated 90% of unclean data via IQR outlier handling, null removal, and bucketing using Pandas and NumPy.',
        'Cut runtime by 5 minutes with automated model selection driven by seasonality tags using statsmodels and scikit-learn.',
      ],
    },
  ],
};
