const employees = [
  {
    id: 1,
    firstName: "Ahmed",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design.",
        taskDate: "2024-11-25",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the issue with user login failure.",
        taskDate: "2024-11-20",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document the API endpoints for the project.",
        taskDate: "2024-11-27",
        category: "Documentation",
      },
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Faizan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,    
        completed: false,
        failed: false,
        taskTitle: "Develop Dashboard",
        taskDescription: "Create a user dashboard with analytics.",
        taskDate: "2024-11-28",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve query performance and indexing.",
        taskDate: "2024-11-15",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate Payment Gateway",
        taskDescription: "Set up a payment gateway for transactions.",
        taskDate: "2024-11-18",
        category: "Integration",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Arshad",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Plan",
        taskDescription: "Draft a marketing strategy for the new product.",
        taskDate: "2024-12-01",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct User Testing",
        taskDescription: "Organize and run usability testing sessions.",
        taskDate: "2024-11-10",
        category: "Testing",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Imran",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search Feature",
        taskDescription: "Develop a dynamic search functionality.",
        taskDate: "2024-11-30",
        category: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up CI/CD Pipeline",
        taskDescription: "Automate deployment using a CI/CD pipeline.",
        taskDate: "2024-11-19",
        category: "DevOps",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Salman",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Privacy Policy",
        taskDescription: "Revise the privacy policy for compliance.",
        taskDate: "2024-11-29",
        category: "Legal",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Enhance UI/UX",
        taskDescription: "Redesign the interface for better usability.",
        taskDate: "2024-11-15",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Add Multi-language Support",
        taskDescription: "Enable the platform to support multiple languages.",
        taskDate: "2024-11-20",
        category: "Localization",
      },
    ],
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Zaid",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocatStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // console.log(employees,admin)
  return { employees, admin };
};
