import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'endless-runner-dda',
    title: '2D Endless Runner with Dynamic Difficulty',
    shortDescription:
      'Developed a 2D endless runner game implementing threshold-based DDA for thesis research. Conducted statistical playtesting and published findings in J-PTIIK.',
    tags: ['Unity', 'C#', 'Research'],
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkREghh9FgZanaQQ2Bcvx_O_UyOEuh_NrCRjx7Vcl8ueh7-sY5STiF_9nhAMKzAgMtcCylPOcxOo62Y419jZ3um4PPqaAvDJ97BYolJOlfvJ0cR_zLwmqxbMJJ5zP0q3pP9T9UVqlYT1HzNsN5tnA9N7mTZPTvaoXzdQ8fJWxCcz4_MzAka-8L3sADp2JoJDWC_xn_Rzhj2b5Ympc83s53XaA-JUXGYqJR1zSgD0ccHLPil0FeeEJ1dObSaJKe7lGZOE3CB2XQzzDR',
    githubUrl: 'https://github.com/Rizqihafidz',
    type: 'game',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkREghh9FgZanaQQ2Bcvx_O_UyOEuh_NrCRjx7Vcl8ueh7-sY5STiF_9nhAMKzAgMtcCylPOcxOo62Y419jZ3um4PPqaAvDJ97BYolJOlfvJ0cR_zLwmqxbMJJ5zP0q3pP9T9UVqlYT1HzNsN5tnA9N7mTZPTvaoXzdQ8fJWxCcz4_MzAka-8L3sADp2JoJDWC_xn_Rzhj2b5Ympc83s53XaA-JUXGYqJR1zSgD0ccHLPil0FeeEJ1dObSaJKe7lGZOE3CB2XQzzDR',
    badge: 'Thesis Research',
    fullDescription: [
      'This 2D endless runner game was developed as part of my undergraduate thesis at Brawijaya University. The research focused on implementing and evaluating a threshold-based Dynamic Difficulty Adjustment (DDA) system to improve player experience and engagement.',
      'The game dynamically adjusts its difficulty parameters — such as obstacle speed, spawn rate, and gap distance — based on real-time analysis of player performance metrics. By monitoring variables like score progression, death frequency, and reaction times, the DDA system creates a personalized difficulty curve for each player.',
      'The project included comprehensive playtesting sessions using statistical methods to validate the effectiveness of the DDA implementation. Results and findings were published in the Journal of Information Technology Development and Computer Science (J-PTIIK) of Brawijaya University.',
    ],
    metadata: {
      year: 'Mar 2025 - Jan 2026',
      role: 'Solo Developer & Researcher',
      platform: 'PC (Unity)',
      status: 'Published',
      statusColor: 'green',
    },
    gallery: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvQFsBoYJWsAuYbhx8C9oa7UMnRwKgz2I6odDsoGzEOnn8kNXyv4XAKf5xoY-8hvBqxrzanq4azXQwNzzDPpAjAR0Gj0OgfECh6HosvLk0PNKeMjsyjVDOntWUILnxkhwJOvULM6p4XYo7skcrytx_klvL1-2Uqnu061_xDP0xHrQ4-xJehrJAiHJnxckwgIyAlULprMlUuypMnrg1rp2xFK7ZyYvlANhe8L1MlNheP8awQyaJ2lLdhgEcN3LZwoWgNTt1SwzZqudO',
        caption: 'Game UI & Difficulty Adjustment Interface',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnc7T7ULAlJNAQoxrNmUNn0Xq7xAfJQhTHSzcCi3WKEIOqmNJiq73QDYu00WXKOoiAtXLEf_0Ws4cppRHJtBvQExXbj3-5FpuMDDVqO4DN-IAl8gILFkoWA80EUXuGnJtySK_xYtd8Nva1EFNKysCIcRZTdvd4hS5lZ_YWQxuytfu0k0iA_XBwBqnIwZN1v-BPAIYWjVbuvuvmKm2P5O4O7F3gFDoGbCcCCF2fZi0iRCHBiCILbvmqAZSflSQ-U1esodsWiu8o47Cw',
        caption: 'Player Performance Tracking System',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeyjSSkyt2VaENK-rIUfmUbTd_kajoUApGCcXXyFo1EYUtmwQwjfn2VSHpCrSOZxfqute1KeS1QudmP__6-NHw_j3KrW3fih32w38tbh-G9qNH-Yr3beFvkjh_csvlpTCpViOeb16RzO04LSLalpqe--AUIB0yO-_na0Pa0sSeVqGa3eMBU3TW1xehExFXEpf_K_gwI_xjrk1WtaZ1I6ZwDbOdXtWBt4492dvqVqlqt7P1OSiCi9GfdmMHFe1uDLRhEVSTVssgmVCU',
        caption: 'Statistical Analysis & Results Dashboard',
      },
    ],
    mechanics: [
      {
        icon: 'speed',
        title: 'Dynamic Difficulty Adjustment',
        description:
          'Threshold-based system that adjusts game parameters in real-time based on player performance metrics such as score, deaths, and reaction times.',
        tech: 'Custom C# DDA Framework in Unity',
        color: 'primary',
      },
      {
        icon: 'analytics',
        title: 'Statistical Playtesting',
        description:
          'Comprehensive playtesting methodology using statistical methods to validate DDA effectiveness and measure player engagement improvement.',
        tech: 'Statistical Analysis & Data Collection',
        color: 'accent',
      },
    ],
    techStack: ['Unity Engine', 'C#', 'Dynamic Difficulty Adjustment', 'Statistical Analysis', 'Game Design'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rizqihafidz', icon: 'code', isPrimary: true },
      { label: 'J-PTIIK Publication', url: '#', icon: 'article', isPrimary: false },
    ],
    highlights: [
      'Designed and implemented threshold-based Dynamic Difficulty Adjustment algorithm',
      'Conducted literature studies on previous DDA research',
      'Developed complete 2D endless runner game with core mechanics and gameplay loop',
      'Performed statistical playtesting with real users',
      'Published thesis in J-PTIIK journal of Brawijaya University',
    ],
  },
  {
    slug: 'cbat-studio',
    title: 'Game Design for CBat Studio',
    shortDescription:
      'Created comprehensive Game Design Documents for multiple game concepts. Designed technical scene specifications and managed weekly development meetings.',
    tags: ['Notion', 'Game Design'],
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpOH2eynMsrgFUsWUbtb1Hau8ViTeamBrIrWAuTnZaxuBT6rlV9yfdeLLFNZAl3xYuM89ss6VqvqiGjFDoU62MW_uopzsvgih34fACtO-DNcfQCKG2tspmluUblUiwgJ21suVMJyguA_2UaEKCIjKEryJRucpOgYqgOtH2GReeReKgKi9isL_yxoxBLU090WyV-t82RzQ5cMMMsp2pXw6JbQEEBAhjwyCZ88CU4RA-clpubLxfrJ9qCk4ugbQY8qsif5ee9OPwk4eq',
    type: 'game',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpOH2eynMsrgFUsWUbtb1Hau8ViTeamBrIrWAuTnZaxuBT6rlV9yfdeLLFNZAl3xYuM89ss6VqvqiGjFDoU62MW_uopzsvgih34fACtO-DNcfQCKG2tspmluUblUiwgJ21suVMJyguA_2UaEKCIjKEryJRucpOgYqgOtH2GReeReKgKi9isL_yxoxBLU090WyV-t82RzQ5cMMMsp2pXw6JbQEEBAhjwyCZ88CU4RA-clpubLxfrJ9qCk4ugbQY8qsif5ee9OPwk4eq',
    badge: 'Game Design',
    fullDescription: [
      'As a Game Designer at CBat Studio, I was responsible for creating comprehensive Game Design Documents (GDDs) for multiple game concepts. This role required deep research into game mechanics, player psychology, and market analysis to develop viable game ideas.',
      'Each game concept was developed from initial research through to detailed technical specifications. The GDDs covered everything from core gameplay loops and storyline narratives to detailed scene-by-scene technical breakdowns that enabled other team members to understand and implement the designs effectively.',
      'I utilized tools like Notion for collaborative documentation, Google Docs for narrative writing, and Microsoft Excel for data-driven design elements such as progression systems and balance sheets. Weekly meetings ensured alignment across all development divisions.',
    ],
    metadata: {
      year: 'Dec 2023 - Oct 2024',
      role: 'Game Designer',
      platform: 'Documentation & Design',
      status: 'Completed',
      statusColor: 'blue',
    },
    gallery: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvQFsBoYJWsAuYbhx8C9oa7UMnRwKgz2I6odDsoGzEOnn8kNXyv4XAKf5xoY-8hvBqxrzanq4azXQwNzzDPpAjAR0Gj0OgfECh6HosvLk0PNKeMjsyjVDOntWUILnxkhwJOvULM6p4XYo7skcrytx_klvL1-2Uqnu061_xDP0xHrQ4-xJehrJAiHJnxckwgIyAlULprMlUuypMnrg1rp2xFK7ZyYvlANhe8L1MlNheP8awQyaJ2lLdhgEcN3LZwoWgNTt1SwzZqudO',
        caption: 'Game Design Document Structure',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnc7T7ULAlJNAQoxrNmUNn0Xq7xAfJQhTHSzcCi3WKEIOqmNJiq73QDYu00WXKOoiAtXLEf_0Ws4cppRHJtBvQExXbj3-5FpuMDDVqO4DN-IAl8gILFkoWA80EUXuGnJtySK_xYtd8Nva1EFNKysCIcRZTdvd4hS5lZ_YWQxuytfu0k0iA_XBwBqnIwZN1v-BPAIYWjVbuvuvmKm2P5O4O7F3gFDoGbCcCCF2fZi0iRCHBiCILbvmqAZSflSQ-U1esodsWiu8o47Cw',
        caption: 'Technical Scene Specifications',
      },
    ],
    mechanics: [
      {
        icon: 'description',
        title: 'Comprehensive Game Design Documents',
        description:
          'Created detailed GDDs covering core mechanics, storyline narratives, and gameplay loops using Notion, Google Docs, and Microsoft Excel.',
        tech: 'Notion / Google Docs / Excel',
        color: 'primary',
      },
      {
        icon: 'engineering',
        title: 'Technical Scene Design',
        description:
          'Designed detailed technical specifications for each game scene, ensuring cross-division clarity and implementation feasibility.',
        tech: 'Technical Writing & Communication',
        color: 'accent',
      },
    ],
    techStack: ['Notion', 'Google Docs', 'Microsoft Excel', 'Game Design', 'Technical Writing', 'Project Management'],
    links: [],
    highlights: [
      'Researched and developed multiple game concepts from scratch',
      'Created comprehensive Game Design Documents using Notion and Google Docs',
      'Designed detailed technical scene specifications for implementation teams',
      'Managed weekly progress meetings across development divisions',
      'Ensured cross-division understanding of game design specifications',
    ],
  },
  {
    slug: 'voidwalker-hoverclock',
    title: 'Voidwalker & Hoverclock',
    shortDescription:
      'Designed and developed game mechanics for two game jam entries at Raion Hackjam. Created GDDs and implemented core gameplay in Unity.',
    tags: ['Unity', 'C#', 'Game Jam'],
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0V6jszZERq0gSmIrHPhkW2AXdeqJrdQsAUsLmOJq0ulbheP7AK370qqjq-ooIjgRY8UmVmoT1uKTOIiVnKQL3j1la1t5DUxI2qxhyMbe_t3j0x-6GC_PPX_9cWGU1cS0Pd87hFXcQJfI7oMpYwqAbQwS8l-PwpaNiQLrNc8JVxTtgeWwebLaFxVOEpvWPRqTgBnP62ID9t18bljhcW07vLlBszpwHpqT75nGEzfHK_plZvfP8SGdef1Q3I8Usg0OWsc0uLuJ1Met',
    githubUrl: 'https://github.com/Rizqihafidz',
    type: 'game',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0V6jszZERq0gSmIrHPhkW2AXdeqJrdQsAUsLmOJq0ulbheP7AK370qqjq-ooIjgRY8UmVmoT1uKTOIiVnKQL3j1la1t5DUxI2qxhyMbe_t3j0x-6GC_PPX_9cWGU1cS0Pd87hFXcQJfI7oMpYwqAbQwS8l-PwpaNiQLrNc8JVxTtgeWwebLaFxVOEpvWPRqTgBnP62ID9t18bljhcW07vLlBszpwHpqT75nGEzfHK_plZvfP8SGdef1Q3I8Usg0OWsc0uLuJ1Met',
    badge: 'Game Jam',
    fullDescription: [
      'These two game projects were created during Raion Hackjam events — internal game jams organized by the Raion Community at Brawijaya University. Each jam challenged participants to design, develop, and present a complete game within a limited timeframe.',
      '"Voidwalker" was developed during Raion Hackjam 2021. I was responsible for designing the game mechanics, creating the Game Design Document, presenting the concept to judges, and implementing several core mechanics using Unity and C#.',
      '"Hoverclock" was the result of Raion Hackjam 2022, where I again took on the game designer role. I designed the mechanics, created the GDD, and implemented gameplay systems in Unity, working under tight time constraints typical of game jam environments.',
    ],
    metadata: {
      year: 'Apr 2021 - Jan 2023',
      role: 'Game Designer & Developer',
      platform: 'PC (Unity)',
      status: 'Completed',
      statusColor: 'green',
    },
    gallery: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvQFsBoYJWsAuYbhx8C9oa7UMnRwKgz2I6odDsoGzEOnn8kNXyv4XAKf5xoY-8hvBqxrzanq4azXQwNzzDPpAjAR0Gj0OgfECh6HosvLk0PNKeMjsyjVDOntWUILnxkhwJOvULM6p4XYo7skcrytx_klvL1-2Uqnu061_xDP0xHrQ4-xJehrJAiHJnxckwgIyAlULprMlUuypMnrg1rp2xFK7ZyYvlANhe8L1MlNheP8awQyaJ2lLdhgEcN3LZwoWgNTt1SwzZqudO',
        caption: 'Voidwalker - Game Mechanics Overview',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnc7T7ULAlJNAQoxrNmUNn0Xq7xAfJQhTHSzcCi3WKEIOqmNJiq73QDYu00WXKOoiAtXLEf_0Ws4cppRHJtBvQExXbj3-5FpuMDDVqO4DN-IAl8gILFkoWA80EUXuGnJtySK_xYtd8Nva1EFNKysCIcRZTdvd4hS5lZ_YWQxuytfu0k0iA_XBwBqnIwZN1v-BPAIYWjVbuvuvmKm2P5O4O7F3gFDoGbCcCCF2fZi0iRCHBiCILbvmqAZSflSQ-U1esodsWiu8o47Cw',
        caption: 'Hoverclock - Gameplay Design',
      },
    ],
    mechanics: [
      {
        icon: 'sports_esports',
        title: 'Rapid Game Prototyping',
        description:
          'Designed and implemented core gameplay systems under game jam time constraints, from concept to playable prototype within days.',
        tech: 'Unity / C# / Rapid Prototyping',
        color: 'primary',
      },
      {
        icon: 'draw',
        title: 'Game Design Documentation',
        description:
          'Created comprehensive Game Design Documents under pressure, clearly communicating mechanics and vision to team members and judges.',
        tech: 'GDD / Presentation Skills',
        color: 'accent',
      },
    ],
    techStack: ['Unity Engine', 'C#', 'Game Jam', 'Rapid Prototyping', 'Game Design Document', 'Team Collaboration'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rizqihafidz', icon: 'code', isPrimary: true },
    ],
    highlights: [
      'Participated in Raion Hackjam 2021 — created "Voidwalker"',
      'Participated in Raion Hackjam 2022 — created "Hoverclock"',
      'Designed game mechanics and created GDDs for both projects',
      'Implemented core gameplay mechanics in Unity and C#',
      'Presented game concepts to judges panel',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
