import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'PantryPro AI',
      repo: 'https://github.com/rbsaketh/management_system',
      img: '/3.png',
      year: 2024,
      tags: ['Next.js', 'React.js', 'Firebase', 'Material UI', 'Llama 3.1 API', 'OpenAI API'],
      description:
        'PantryPro AI is a sophisticated pantry management application developed from June to July 2024. Built with Next.js and React.js for the frontend, and Firebase for the backend, it offers a seamless user experience for managing pantry items with secure login through Firebase Auth. The application is enhanced with AI capabilities using Llama 3.1 and OpenAI APIs to provide intelligent features like image classification and personalized recipe suggestions. These advanced features make PantryPro AI not just a simple inventory tool but a smart assistant in the kitchen, helping users optimize their pantry and meal planning.',
    },
    {
      id: getId(),
      name: 'Memory Card Game',
      repo: 'https://github.com/rbsaketh/Memory_game',
      img: '/2.png',
      year: 2024,
      tags: ['React.js', 'CSS', 'Pokemon API'],
      description:
        'The Memory Card Game is an engaging and interactive web-based game developed using React.js and CSS, with data fetched from the Pokemon API. Players are challenged to match pairs of Pokemon cards, testing their memory and concentration in an enjoyable and visually appealing environment. The game dynamically fetches and displays a wide array of Pokemon, offering a fresh experience with every playthrough. It is a fun and educational project that demonstrates the power of APIs and modern web technologies in creating dynamic and interactive user experiences.',
    },
    {
      id: getId(),
      name: 'Library Application',
      repo: 'https://github.com/rbsaketh/Library-app',
      img: '/third.png',
      year: 2024,
      tags: ['MongoDB', 'FilePond', 'React', 'CSS', 'Express.js', 'Node.js'],
      description:
        'This project utilizes a MERN stack, comprising MongoDB, Express.js, React.js, and Node.js, to create an efficient database for users to track books, authors, and other relevant information. The frontend is developed with React.js and styled with CSS, providing a responsive and user-friendly interface. The backend is built with Express.js, employing Mongoose models to handle data schemas and interactions seamlessly. MongoDB serves as the database, efficiently managing queries and storing user information. This system significantly enhances the ability to organize and access literary data, demonstrating the power and flexibility of full-stack JavaScript development.',
    },
    {
      id: getId(),
      name: 'Hack the Future Application System',
      repo: 'https://github.com/rbsaketh',
      img: '/hack.jpg',
      year: 2024,
      tags: ['MongoDB', 'React', 'CSS', 'Express.js', 'Node.js'],
      description:
        'This project involved developing a user-friendly web application for form management and response analysis. Utilizing a full-stack approach, the frontend was built with HTML, CSS, and React.js, while the backend was developed using Node.js. The application integrates advanced form features such as conditional logic, status-based sorting, detailed filtering, and single-response-per-email verification, significantly enhancing user interaction and data integrity.',
    },
    {
      id: getId(),
      name: 'Marketplace System',
      repo: 'https://github.com/rbsaketh',
      img: '/second.png',
      year: 2023,
      tags: ['Java', 'Network IO', 'GUI', 'Database', 'Query'],
      description:
        'This project involved developing a real-time concurrent messaging system in Java for a marketplace, featuring a graphical user interface (GUI) for user interaction. The system incorporated network IO and database queries to manage and display messages, ensuring seamless and efficient communication between customers and sellers.',
    },
    {
      id: getId(),
      name: 'NLP for Finance',
      repo: 'https://github.com/rbsaketh',
      img: '/First.png',
      year: 2022,
      tags: ['LSTM', 'Neural Network', 'Pandas', 'BERT', 'PyTorch', 'NLP'],
      description:
        'This AI Social Good project, titled Natural Language Processing for Finance, focused on creating a system that uses text sentiment analysis to predict stock values. The project involved data cleansing using Python and Pandas, applying tokenization and stemming to handle unstructured social media data, ensuring high-quality input for LSTM and BERT models. An LSTM neural network was collaboratively designed, and a BERT model was fine-tuned using the PyTorch Hugging Face library, achieving nearly 95% accuracy with BERT and 85% with LSTM for stock value prediction.',
    },

    {
      id: getId(),
      name: 'Huddle Social',
      repo: 'https://github.com/rbsaketh',
      img: '/huddle.png',
      year: 2025,
      tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Firebase'],
      description:
        'Huddle Social is an all-in-one Purdue web app that centralizes student life. Students can browse off-campus housing, receive data-driven schedule ratings, and discover events and communities in one place. The platform grew to 600+ registered users with ~30 daily active users.',
    },
    {
      id: getId(),
      name: 'Simple C Compiler',
      repo: 'https://github.com/rbsaketh',
      img: '/compiler.png',
      year: 2024,
      tags: ['C', 'Lex', 'Yacc', 'x86-64'],
      description:
        'SimpleC Compiler is a compiler for a small C-like language that emits x86-64 assembly. It supports arithmetic expressions, conditionals, loops, function calls, and array operations using a register-based evaluation stack. The compiler successfully generates binaries that run non-trivial programs with recursion and dynamic memory allocation, demonstrating a full pipeline from parsing to code generation.',
    },
    {
      id: getId(),
      name: 'Unix Shell Clone',
      repo: 'https://github.com/rbsaketh',
      img: '/shell.png',
      year: 2025,
      tags: ['C++', 'C', 'Lex', 'Yacc'],
      description:
        'Unix Shell Clone is a bash-style shell implementation with many of the features users expect from a modern terminal. It supports core command execution, tab completion, raw edit mode, pipes, Ctrl-C handling, quoting, subshells, and custom built-ins. The shell also handles wildcard expansion, line editing, and zombie process cleanup, providing a robust interactive environment written from the ground up in C and C++.',
    },
  ],
};
