interface HeaderData {
  fullName: string;
  caption: string;
  location: string;
  email: `${string}@${string}`;
  phone: string;
  linkedinURL: `https://www.linkedin.com/in/${string}`;
}

export const HEADER: HeaderData = {
  fullName: "Jonathon Sonneborn",
  caption: "Software Engineer",
  location: "Ann Arbor, Michigan",
  email: "sonnejm@umich.edu",
  phone: "(269) 601-2900",
  linkedinURL: "https://www.linkedin.com/in/sonnejm",
};

interface EducationRecord {
  institution: string;
  location: string;
  degreeProgram: string;
  endDate: string;
  gpa: string;
  coursework: string;
}

export const EDUCATION: EducationRecord[] = [
  {
    institution: "University of Michigan",
    location: "Ann Arbor, MI",
    degreeProgram: "BSE, Computer Science (Minor in Electrical Engineering)",
    endDate: "Apr. 2024",
    coursework: "Data Structures & Algorithms, Compilers, Computer Architecture, Operating Systems, Web Systems & Security",
    gpa: "",
  },
];

interface WorkRecord {
  business: string;
  location: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  points: string[];
}

export const WORK: WorkRecord[] = [
  {
    business: "TraceAI",
    location: "",
    jobTitle: "Lead Software Engineer",
    startDate: "March 2024",
    endDate: "Present",
    points: [
      "Led the design and development of a cutting-edge computer-robot interface using an interactive REST API, enhancing system responsiveness and control.",
      "Engineered seamless integration with Amazon Web Services (AWS) to ensure scalable, secure, and reliable infrastructure.",
      "Directed the full-stack development of mobile and web applications utilizing React to create versatile and user-friendly interfaces.",
      "Managed multiple high-priority projects under strict NDA, collaborating with cross-functional teams to drive innovation and ensure project confidentiality.",
      "Mentored junior engineers in best practices for software development, code quality, and architectural design.",
      "Optimized development workflows and implemented robust testing strategies to ensure product quality and readiness for future customer deployment."
    ],
  },
  {
    business: "University of Michigan",
    location: "Ann Arbor, MI",
    jobTitle: "Operating Systems Research Internship",
    startDate: "May 2024",
    endDate: "August 2024",
    points: [
      "Modified the Linux kernel to enable the use of automatic fault tolerance and error recovery",
      "Developed LLVM instrumentation to automatically insert critical zones into production code",
    ],
  },
  {
    business: "University of Michigan",
    location: "Ann Arbor, MI",
    jobTitle: "Computer Consultant (Part Time)",
    startDate: "Jan. 2023",
    endDate: "July 2024",
    points: [
      "Offered technical support to thousands in U-M's EECS department through its IT dept",
      "Managed Linux servers, Windows, Linux, macOS desktops, and networking equipment",
    ],
  },
];

interface SkillRecord {
  category: string;
  skills: string[];
}

export const SKILLS: SkillRecord[] = [
  {
    category: "Programming Languages",
    skills: [
      "ARM",
      "Bash",
      "C",
      "C++",
      "HTML5/CSS3",
      "Java",
      "JavaScript",
      "OCaml",
      "Prolog",
      "Python",
      "RISC-V",
      "Rust",
      "Scheme",
      "SQL",
      "System Verilog",
      "TypeScript",
      "x86-64",
    ],
  },
  {
    category: "Frameworks/Technologies",
    skills: [
      "Bun",
      "CI/CD",
      "Docker",
      "Express",
      "Git",
      "GitHub Actions",
      "Google Cloud",
      "Linux",
      "Node.js",
      "Preact",
      "React",
      "REST APIs",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Documentation",
      "Hybrid Productivity",
      "Time Management",
      "Agile Development",
      "Scrum",
    ],
  },
  {
    category: "Concentrations",
    skills: ["Operating Systems", "Computer Architecture","Compilers", "REST APIs", "Networking & Protocols", "Asynchronous Programming", "Event-based Programming"],
  },
];

interface ProjectRecord {
  name: string;
  website: string | null;
  startDate: string;
  endDate: string;
  points: string[];
}

export const PROJECTS: ProjectRecord[] = [
  {
    name: "C Compiler",
    website: null,
    startDate: "June 2024",
    endDate: "Present",
    points: [
      "Developing a C99 compliant C compiler written in C++",
      "Created handwritten lexer and top down recursive descent parser",
      "Useful error handling to catch syntax and semantic errors during the compilation process",
      "Implementing LLVM IR support",
    ],
  },
  {
    name: "Nintendo Entertainment System Emulator",
    website: null,
    startDate: "Jan. 2024",
    endDate: "Present",
    points: [
      "Developed a working 6502 microprocessor emulator with highly accurate cycle timing written in C++",
      "Worked with the SDL2 library to implement graphics",
    ],
  },
  {
    name: "MinePlus Minecraft Server Emulator",
    website: null,
    startDate: "Sep. 2023",
    endDate: "Present",
    points: [
      "Developed a working prototype game server compatible with the Minecraft game client",
      "Written in C++ using efficient asynchronous TCP networking",
    ],
  },
  {
    name: "RISC-V P6 N-Way Superscalar Central Processing Unit",
    website: null,
    startDate: "Oct. 2023",
    endDate: "Dec. 2023",
    points: [
      "Developed a fully synthesizable central processing unit written in System Verilog",
      "Collaborated with a team of 6 people over a semester",
      "Integrated several testbenches to effectively stress the CPU design",
      "Used NCurses library in C++ to develop an interactive, terminal-based visual debugger"
    ],
  },
];
