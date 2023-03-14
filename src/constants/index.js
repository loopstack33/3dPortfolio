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
    threejs,
    fleetio,
    uic,
    uts,
    yiwu,
    track,
    reflection,
    deens,
    github,
    appstore,
    playstore,
    snaptube,
    cinehub,
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
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "ui/ux",
          color: "green-text-gradient",
        },
      ],
      image: fleetio,
      link:github,
      source_code_link: "https://github.com/loopstack33/fleetio",
    },
    {
      name: "Deens Cheese",
      description:
        "Deen's cheese store manangement and team handling and reports app. It allows user to manage all store data and keep the management updated. Only accessible by authorized users.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "ui/ux",
           color: "green-text-gradient",
        },
      ],
      link:playstore,
      image: deens,
      source_code_link: "https://play.google.com/store/apps/details?id=com.deens.cheese.deens_cheese",
    },
    {
      name: "CineHub",
      description:
        "CineHub is an android streaming app for movies, for movies, tv-shows and anime. It has instant search get results fast, fetch from local storage, notification for audio, getx state management.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "getX",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      link:github,
      image: cinehub,
      source_code_link: "https://github.com/loopstack33/collaborate",
    },
    {
      name: "SnapTube",
      description:
        "SnapTube is a youtube video downloader app with converting options like mp3, mp4, 3gp. I has search by name or paste link to search any video, no ads, beautiful UI, instant results and getx state management. Quick response for your favorite videos.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "getX",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      link:github,
      image: snaptube,
      source_code_link: "https://github.com/loopstack33/snapTube",
    },
     {
      name: "myUIC",
      description:
        "The App provides a fully integrated mobile solution for travel insurance, Health Insurance, and Motor Insurance. The client can get a quotation for various types of Motor Insurance like a comprehensive car insurance policy, third-party coverage etc.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
           {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: uic,
      link:playstore,
      source_code_link: "https://play.google.com/store/apps/details?id=com.theunitedinsurance.myuic",
    },
     {
      name: "myUTS",
      description:
        "You can track your vehicles on this App if you have an active account on http://webtrack.unitedtracker.com Or you can obtain your user name and password of your registered vehicle on United Track by calling on +92 42 111 000 320",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "getX",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: uts,
      link:playstore,
      source_code_link: "https://play.google.com/store/apps/details?id=com.uts.utstrackingapp",
    },
     {
      name: "Yiwubazaar",
      description:
        "Yiwubazaar.com is the B2B e-commerce marketplace connecting entire world with Yiwu Small commodity market. Yiwubazaar.com app offers free access to all the buyers around the world to explore Yiwu market through our app and fulfill all their sourcing requirement.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: yiwu,
      link:playstore,
      source_code_link: "https://play.google.com/store/apps/details?id=com.yiwuteam.yiwubaazarapp",
    },
    {
      name: "Track Fleetio",
      description:
        "Track Fleetio is an app where you can track your vehicles which are registered in the organization. if you have an active account then you can track Or you can obtain your user name and password of your registered vehicle on Track Fleeio Office. It has beautiful UI/UX and very fast.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      image: track,
      link:github,
      source_code_link: "",
    },
    {
      name: "Reflection",
      description:
        "Reflection allows you to reflect upon and track various facets of your life to make sure you live a more balanced and intentional life. Evaluate life across various categories such as work, money, relationships, play, health, mind, learning and more. Identify core Strengths and Weaknesses in each category.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "icloud",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
      ],
      link:appstore,
      image: reflection,
      source_code_link: "https://apps.apple.com/us/app/reflection-life-management/id6444506507",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };