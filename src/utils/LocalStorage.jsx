localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "ali@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a responsive landing page UI.",
        taskDate: "2026-05-25",
        taskCategory: "Design",
      },
       {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-19",
        taskCategory: "Database",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issues.",
        taskDate: "2026-05-20",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy project on Netlify.",
        taskDate: "2026-05-18",
        taskCategory: "Deployment",
      },
    ],
  },

  {
    id: 2,
    firstName: "Ahmed",
    email: "ahmed@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create login page with Tailwind CSS.",
        taskDate: "2026-05-24",
        taskCategory: "Frontend",
      },
       {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-19",
        taskCategory: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-05-21",
        taskCategory: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode feature.",
        taskDate: "2026-05-26",
        taskCategory: "UI/UX",
      },
    ],
  },

  {
    id: 3,
    firstName: "Usman",
    email: "usman@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-19",
        taskCategory: "Database",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode feature.",
        taskDate: "2026-05-19",
        taskCategory: "UI/UX",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task Dashboard",
        taskDescription: "Build employee dashboard UI.",
        taskDate: "2026-05-27",
        taskCategory: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate Stripe payment system.",
        taskDate: "2026-05-22",
        taskCategory: "Backend",
      },
    ],
  },

  {
    id: 4,
    firstName: "Salman",
    email: "salman@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Portfolio",
        taskDescription: "Develop personal portfolio website.",
        taskDate: "2026-05-28",
        taskCategory: "Portfolio",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix React routing issues.",
        taskDate: "2026-05-17",
        taskCategory: "Debugging",
      },
       {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-19",
        taskCategory: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Animation Effects",
        taskDescription: "Add hover animations using Tailwind.",
        taskDate: "2026-05-29",
        taskCategory: "UI/UX",
      },
    ],
  },

  {
    id: 5,
    firstName: "Hamza",
    email: "hamza@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Authentication",
        taskDescription: "Implement Firebase authentication.",
        taskDate: "2026-05-16",
        taskCategory: "Security",
      },
       {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database.",
        taskDate: "2026-05-19",
        taskCategory: "Database",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDescription: "Design admin dashboard.",
        taskDate: "2026-05-30",
        taskCategory: "Admin",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy backend server on Render.",
        taskDate: "2026-05-23",
        taskCategory: "Deployment",
      },
    ],
  },
];

  const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem( 'employees', JSON.stringify(employees));
    localStorage.setItem( 'admin', JSON.stringify(admin));



}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));  
    
    return{employees, admin};

    
}
