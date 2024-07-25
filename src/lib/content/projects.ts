import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Library Application',
      repo: 'https://github.com/rbsaketh/Library-app',
      img: '/third.png',
      year: 2024,
      tags: ['MongoDB', 'FilePond', 'React', 'CSS', 'Express.js', 'Node.js'],
      description: 'This project utilizes a MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, to create an efficient database for users to track books, authors, and other relevant information. The frontend is developed with React.js and styled with CSS, providing a responsive and user-friendly interface. The backend is built with Express.js, employing Mongoose models to handle data schemas and interactions seamlessly. MongoDB serves as the database, efficiently managing queries and storing user information. This system significantly enhances the ability to organize and access literary data, demonstrating the power and flexibility of full-stack JavaScript development.'
    },
    {
      id: getId(),
      name: 'Hack the Future Application System',
      repo: 'https://github.com/rbsaketh',
      img: '/hack.jpg',
      year: 2024,
      tags: ['MongoDB', 'React', 'CSS', 'Express.js', 'Node.js'],
      description: 'This project involved developing a user-friendly web application for form management and response analysis. Utilizing a full-stack approach, the frontend was built with HTML, CSS, and React.js, while the backend was developed using Node.js. The application integrates advanced form features such as conditional logic, status-based sorting, detailed filtering, and single-response-per-email verification, significantly enhancing user interaction and data integrity.'
    },
    {
      id: getId(),
      name: 'Marketplace System',
      repo: 'https://github.com/rbsaketh',
      img: '/second.png',
      year: 2023,
      tags: ['Java', 'Network IO', 'GUI', 'Database', 'Query'],
      description: 'This project involved developing a real-time concurrent messaging system in Java for a marketplace, featuring a graphical user interface (GUI) for user interaction. The system incorporated network IO and database queries to manage and display messages, ensuring seamless and efficient communication between customers and sellers.'
    },
    {
      id: getId(),
      name: 'NLP for Finance',
      repo: 'https://github.com/rbsaketh',
      img: '/First.png',
      year: 2022,
      tags: ['LSTM', 'Neural Network', 'Pandas', 'BERT', 'PyTorch', 'NLP'],
      description: 'This AI Social Good project, titled Natural Language Processing for Finance, focused on creating a system that uses text sentiment analysis to predict stock values. The project involved data cleansing using Python and Pandas, applying tokenization and stemming to handle unstructured social media data, ensuring high-quality input for LSTM and BERT models. An LSTM neural network was collaboratively designed, and a BERT model was fine-tuned using the PyTorch Hugging Face library, achieving nearly 95% accuracy with BERT and 85% with LSTM for stock value prediction.'
    },    
  ],
};
