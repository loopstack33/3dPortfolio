import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "UI/UX",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lead Flutter Developer",
      company_name: "USTI Lahore",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2020 - Present",
      points: [
        "Developing and maintaining mobile, web, desktop applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Junior Flutter Developer",
      company_name: "Greenway Products",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Jun 2021",
      points: [
        "Developing and maintaining mobile applications using Flutter and Java.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring mobile compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Jassh Pharma",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2019 - Jan 2020",
      points: [
        "Developing and maintaining mobile applications using Java.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring mobile compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "PHP Developer Intern",
      company_name: "PetSaal Tech",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Mar 2019",
      points: [
        "Developing and learning web applications using HTML, CSS, PHP and mySQL.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a desktop app as beautiful as our product, but Manan proved me wrong.",
      name: "Jeam Chin",
      designation: "CTO",
      company: "Fleetio",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a app developer who truly cares about their clients' success like Manan does.",
      name: "Victoria",
      designation: "CFO",
      company: "Cleaner Network",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      testimonial:
        "After Manan optimized our apps, our traffic increased by 50%. We can't thank them enough!",
      name: "Ablikim",
      designation: "CEO",
      company: "YiwuBazaar",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fleetio",
      description:
        "Desktop-based platform that allows users to search, export to pdf and excel, and manage fleetio api records from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "apis",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/loopstack33/fleetio",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };