import { Home } from "lucide-react";
export const personalInfo = {
  name: "Viskar",
  title: "A Full-Stack Developer from India, learning AI & ML",
  description: [
    { text: "Building ", link: null },
    { text: "Grouple", link: "#" },
    { text: " (An advanced LMS with practical solutions)", link: "https://grouple-xi.vercel.app/" },
  ],
  workHistory: [
    { text: "Developed websites for companies with 3-4 years of experience, ", link: null },
  ],
  content: [
    { text: "Working on content about programming on ", link: null },
    { text: "YouTube", link: "https://youtube.com/@viskarcode?feature=shared" },
  ],
  education: [
    { text: "Second-year B.Tech student in Computer Science", link: null },
  ],
  callToAction: "Reach out if you want to collaborate!",
};


export const sideProjects = [
  {
    id: 1,
    name: "Grouple LMS",
    description: "Advanced SaaS LMS with Custom Domains, Affiliates, and more.",
    users: 50,
    tech: "Fullstack",
    active: true,
    link: "https://grouple-xi.vercel.app/",
    githubLink:'',
    images: [

    ],
    fullDescription: "Grouple is a feature-rich SaaS Learning Management System (LMS) that offers multi-vendor support, custom domains, and affiliate marketing capabilities. Built with Next.js, Supabase, Stripe, Clerk, and Uploadcare, it’s designed for scalability and flexibility. With a pricing model that allows users to host one group for $99/month, Grouple offers both free and paid groups. The platform enables users to create and host course modules, making it an excellent choice for educators, trainers, and organizations. The custom-built Clerk sign-in and sign-out system ensures a secure and seamless experience for all users. Additionally, the platform integrates affiliate marketing systems, empowering users to promote and earn revenue from their courses and groups. Key features include a node-based text editor, real-time chat, event calendars, an intuitive dashboard, and performance-optimized search features. The custom UI enhances user experience with visually appealing design elements, while powerful hosting tools provide ample storage for course content with zero-cost video hosting. With a focus on collaboration and real-time interaction, Grouple aims to redefine the way groups and courses are managed and delivered.",
    techStack: ["Next.js", "Supabase", "Stripe", "Clerk", "Uploadcare", "Tailwind CSS"]
  },
  {
    id: 2,
    name: "Evently",
    description: "Event Management Platform for seamless event organization.",
    users: 20,
    tech: "Fullstack",
    active: true,
    link: "https://event-platform-pi-eight.vercel.app/",
    githubLink:'',
    images: [

    ],
    fullDescription: "Evently is a comprehensive event management platform that enables users to organize and manage events effortlessly. Built with Next.js, Supabase, Stripe, and Tailwind CSS, Evently provides a user-friendly interface for event creators and attendees. The platform allows organizers to set up events, sell tickets, and manage guest lists, all within a seamless environment. Evently’s real-time features, including live notifications and chat integration, make event management even easier. The custom dashboard offers insights into ticket sales, attendee numbers, and event statistics. Event creators can customize event pages, create promotional content, and even monetize their events by integrating Stripe for ticket sales. The platform’s scalability ensures that Evently is ideal for both small gatherings and large-scale events. Additionally, with features like email marketing tools and event reminders, Evently provides a one-stop solution for all event needs. Whether it's a concert, seminar, or a wedding, Evently streamlines the process and enhances the experience for both organizers and attendees.",
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"]
  },
  {
    id: 3,
    name: "Notion Clone",
    description: "A SaaS Notion Clone with Realtime Collaboration Features.",
    users: 15,
    tech: "Fullstack",
    active: false,
    link: "",
    githubLink:'https://github.com/viskar07/NotionClone',
    images: [

    ],
    fullDescription: "Notion Clone is a powerful real-time collaborative platform, inspired by Notion, built using Next.js, Supabase, Stripe, and Sockets for real-time interactions. This tool enables teams and individuals to collaborate on documents, manage tasks, and share resources with ease. With features like live cursors, drag-and-drop blocks, and seamless syncing across devices, Notion Clone enhances productivity for users in real time. Whether creating notes, documents, or project timelines, users can easily organize their information with a clean, intuitive interface. Integrated with Stripe, Notion Clone supports subscription models for premium users, giving them access to advanced features such as unlimited storage and additional customization options. Built with scalability in mind, this project uses Drizzle ORM for efficient data management. The platform provides robust user authentication through Clerk and uses Tailwind CSS for responsive design. Notion Clone’s real-time collaboration features make it an excellent tool for teams working on projects, research, and documentation, giving them the flexibility to work simultaneously without conflicts.",
    techStack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS", "Sockets"]
  },
  {
    id: 4,
    name: "Fuzzy Automation Tool",
    description: "Automation Builder for streamlining B2C SaaS workflows.",
    users: 10,
    tech: "Fullstack",
    active: false,
    link: "",
    githubLink:'https://github.com/viskar07/Automation-Workflow-Template',
    images: [

    ],
    fullDescription: "Fuzzy Automation Tool is a powerful SaaS automation builder designed to simplify workflows and automate business processes for B2C services. Using Clerk Authentication, Neon Tech, and Next.js, the platform connects with various third-party services such as Google Drive, Slack, Discord, and Notion to automate tasks and integrate with existing systems. Users can create automated workflows that trigger actions across multiple platforms, such as sending custom notifications, updating documents, or syncing data. The platform includes a drag-and-drop node builder, which allows users to design their workflows visually without needing coding knowledge. With a redesigned, user-friendly interface, users can easily monitor the execution of their automation flows, making it simple to track events and manage subscriptions. Payments are handled via Stripe, offering flexible month-to-month plans based on credits consumed. Features like an infinite canvas, mini map, and light/dark mode ensure that the platform is easy to use and adaptable to any workflow.",
    techStack: ["Next.js", "Stripe", "Tailwind CSS", "Clerk", "Neon Tech", "Bun"]
  },
  {
    id: 5,
    name: "Bewakoof Frontend",
    description: "Replicating Bewakoof's frontend with advanced 3D design.",
    users: 30,
    tech: "Frontend",
    active: true,
    link: "https://bewakoof-lac.vercel.app/",
    githubLink:'',
    images: [

    ],
    fullDescription: "Bewakoof Frontend is a project aimed at replicating the Bewakoof brand’s website using advanced 3D design techniques. Built with Next.js, Three.js, GSAP, and Framer Motion, this project showcases immersive 3D animation effects combined with interactive UI components. By leveraging the power of Three.js and GSAP, Bewakoof Frontend offers a visually appealing experience with fluid animations and interactive elements that replicate the dynamic feel of the Bewakoof website. Using modern web technologies like Next.js and Tailwind CSS, the platform is optimized for both desktop and mobile viewing, ensuring a smooth and responsive experience across devices. The use of Framer Motion enhances the animation capabilities, making the interface more engaging and user-friendly. This project demonstrates cutting-edge web design, combining creative 3D animation with a functional e-commerce experience.",
    techStack: ["Next.js", "Three.js", "GSAP", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: 6,
    name: "Figma AI",
    description: "AI-powered design tool for Figma to automate design processes.",
    users: 18,
    tech: "Frontend",
    active: true,
    link: "https://figma-chi-smoky.vercel.app/",
    githubLink:'',
    images: [

    ],
    fullDescription: "Figma AI is an innovative tool that integrates AI with Figma to automate design processes and enhance the designer's workflow. Built with Next.js, Tailwind CSS, and Aceternity UI, this tool utilizes advanced algorithms to suggest design improvements, automate repetitive tasks, and generate design assets in real time. With the addition of real-time collaboration features, such as live cursors and integrated chat, users can work together seamlessly on the same design project. The platform also leverages machine learning to analyze design patterns and suggest UI/UX improvements, reducing the time spent on manual adjustments. Figma AI integrates with various third-party APIs to pull in design resources and optimize the design process, allowing designers to focus more on creativity and less on repetitive tasks.",
    techStack: ["Next.js", "Tailwind CSS", "Aceternity UI", "AI/ML"]
  },
  {
    id: 7,
    name: "IPhone 15 Clone",
    description: "Website for learning Apple design principles with advanced 3D visuals.",
    users: 25,
    tech: "Frontend",
    active: true,
    link: "https://apple-website-clone-one.vercel.app/",
    githubLink:'',
    images: [

    ],
    fullDescription: "Apple is an interactive platform designed to help users learn Apple design principles through advanced 3D visuals and animations. Built using Next.js, Three.js, and Tailwind CSS, Allple provides a visually engaging environment where users can explore design concepts used by Apple in their products. The site features 3D representations of design elements, interactive components, and immersive animations that explain the nuances of Apple’s design philosophy. With a focus on modern web technologies like GSAP and Aceternity UI, Allple offers an engaging and responsive experience that adapts to users' learning needs. The platform also includes design challenges and tutorials, making it an excellent resource for aspiring designers.",
    techStack: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"]
  },
];

export const openSourceContributions = [
  {
    id: 1,
    name: "AsyncAPI/website",
    description: "Conference archive page, and some design fixes.",
    date: "Dec 2024",
    link: "https://github.com/asyncapi/website",
    icon: "https://avatars.githubusercontent.com/u/18456707?s=200&v=4" // AsyncAPI GitHub Avatar
  },
  {
    id: 2,
    name: "DiceDB/website",
    description: "Improved the Navbar UX, and fixed some broken links.",
    date: "Feb 2024",
    link: "https://github.com/dicedb/website",
    icon: "https://avatars.githubusercontent.com/u/12345678?s=200&v=4" // DiceDB GitHub Avatar (Replace with actual ID)
  },
  {
    id: 3,
    name: "MojaGlobal/flint-ui",
    description: "Some UI fixes when I was getting started",
    date: "Feb 2024",
    link: "https://github.com/mojaglobal/flint-ui",
    icon: "https://avatars.githubusercontent.com/u/23456789?s=200&v=4" // MojaGlobal GitHub Avatar (Replace with actual ID)
  },
  {
    id: 4,
    name: "SindhuGrow Seeds Website",
    description: "First website build for SindhuGrow Seeds.",
    date: "Aug 2023",
    link: "https://sindhugrowseed.com",
    icon: "" ,// SindhuGrow Seeds Favicon
    color: "bg-green-500" // Example color
  },
  {
    id: 5,
    name: "Renucorp",
    description: "Worked on the website development for Renucorp in Maharashtra.",
    date: "Jun 2023",
    link: "https://renucorp.in",
    icon: "",
    color: "bg-blue-400" // Renucorp Favicon
  },
];



export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "Linkedin",
    link: "https://linkedin.com/in/kartik-shirale-0736b4294",
  },
  {
    name: "GitHub",
    icon: "Github",
    link: "https://github.com/viskar07",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    link: "https://twitter.com/Visakr_code",
  },
  {
    name: "Email",
    icon: "Mail",
    link: "mailto:viskar.code@gmail.com?subject=Hello&body=Hey, How can i help you?",
  },
];

export const navigationLinks = [
  {
    name: "Home",
    icon: 'Home',
    link: "/",
  },
  {
    name: "Blog",
    icon: "BookText",
    link: "/blog",
  },
];

export const hackathons = [
  {
    id: 1,
    name: "Re-Imagine Hackathon",
    description: "Redesigned 'Flux' website using Next.js and Spline.",
    date: "September 4-5, 2024",
    achievement: "Top 25 Finalist",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "Organized by Sheryians Coding School in Bhopal, our team, R3 Fusion, reimagined the AI generative website 'Flux,' enhancing its design with Next.js and integrating 3D elements using Spline.",
    techStack: ["Next.js", "Spline", "JavaScript", "CSS"]
  },
  {
    id: 2,
    name: "SuperMind Hackathon",
    description: "Developed a social media data scraper.",
    date: "January 23-25, 2025",
    achievement: "Participation",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "Hosted by Schbang in Mumbai, R3 Fusion built a full-stack social media data scraper, showcasing our expertise in data extraction and analysis.",
    techStack: ["Node.js", "Express", "React", "MongoDB", "Python"]
  },
  {
    id: 3,
    name: "Accathon 2.0",
    description: "Created a GST compliance manager.",
    date: "January 26-27, 2025",
    achievement: "2nd Place",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "At Nirma University's Accathon 2.0, our team developed a GST compliance manager, integrating technical solutions with commerce knowledge to assist businesses in adhering to GST regulations.",
    techStack: ["React", "Node.js", "Express", "MySQL"]
  },
  {
    id: 4,
    name: "HackFusion",
    description: "Built a college management system.",
    date: "February 23-25, 2025",
    achievement: "Top 10 Finalist",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "During HackFusion at SGGS Nanded College, R3 Fusion developed a comprehensive college management system using Next.js, Prisma, and Supabase, streamlining administrative and academic processes.",
    techStack: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"]
  },
  {
    id: 5,
    name: "ADCET Hackathon",
    description: "Developed a decentralized banking project.",
    date: "February 27-28, 2025",
    achievement: "Selected Participant",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "Held at Annasaheb Dange College of Engineering and Technology in Sangli, R3 Fusion was selected to create a project focusing on the decentralization of banking systems, utilizing blockchain technology and Next.js.",
    techStack: ["Blockchain", "Next.js", "Web 3.0", "Ethereum"]
  },
  {
    id: 6,
    name: "Odoo Hackathon",
    description: "Created 'MediTech' for health solutions.",
    date: "March 1-3, 2025",
    achievement: "4th Place",
    team: ["Viskar", "Yash Tiwari", "Ayush Chavda"],
    images: [],
    fullDescription: "At the Odoo Hackathon, R3 Fusion developed 'MediTech,' a platform offering AI-driven health solutions, built using the MERN stack with React and Tailwind CSS.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "AI"]
  }
];

