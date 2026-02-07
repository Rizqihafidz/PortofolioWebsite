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
    badge: 'Game Development',
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
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeyjSSkyt2VaENK-rIUfmUbTd_kajoUApGCcXXyFo1EYUtmwQwjfn2VSHpCrSOZxfqute1KeS1QudmP__6-NHw_j3KrW3fih32w38tbh-G9qNH-Yr3beFvkjh_csvlpTCpViOeb16RzO04LSLalpqe--AUIB0yO-_na0Pa0sSeVqGa3eMBU3TW1xehExFXEpf_K_gwI_xjrk1WtaZ1I6ZwDbOdXtWBt4492dvqVqlqt7P1OSiCi9GfdmMHFe1uDLRhEVSTVssgmVCU',
        caption: 'Statistical Analysis & Results Dashboard',
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
      { label: 'Play Game', url: 'https://rizqhfdz.itch.io/endless-runner-dda-research', icon: 'gamepad', isPrimary: true },
      { label: 'GitHub Repository', url: 'https://github.com/Rizqihafidz/DDAGameResearch', icon: 'code', isPrimary: false },
      { label: 'Publication', url: 'https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/15807', icon: 'article', isPrimary: false },
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
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    shortDescription:
      'Merancang dan mengembangkan website portfolio personal menggunakan Next.js 16, React 19, dan Tailwind CSS dengan fitur dark mode, responsive design, dan dynamic routing.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    cardImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0V6jszZERq0gSmIrHPhkW2AXdeqJrdQsAUsLmOJq0ulbheP7AK370qqjq-ooIjgRY8UmVmoT1uKTOIiVnKQL3j1la1t5DUxI2qxhyMbe_t3j0x-6GC_PPX_9cWGU1cS0Pd87hFXcQJfI7oMpYwqAbQwS8l-PwpaNiQLrNc8JVxTtgeWwebLaFxVOEpvWPRqTgBnP62ID9t18bljhcW07vLlBszpwHpqT75nGEzfHK_plZvfP8SGdef1Q3I8Usg0OWsc0uLuJ1Met',
    githubUrl: 'https://github.com/Rizqihafidz',
    type: 'web',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0V6jszZERq0gSmIrHPhkW2AXdeqJrdQsAUsLmOJq0ulbheP7AK370qqjq-ooIjgRY8UmVmoT1uKTOIiVnKQL3j1la1t5DUxI2qxhyMbe_t3j0x-6GC_PPX_9cWGU1cS0Pd87hFXcQJfI7oMpYwqAbQwS8l-PwpaNiQLrNc8JVxTtgeWwebLaFxVOEpvWPRqTgBnP62ID9t18bljhcW07vLlBszpwHpqT75nGEzfHK_plZvfP8SGdef1Q3I8Usg0OWsc0uLuJ1Met',
    badge: 'Web Development',
    fullDescription: [
      'Website portfolio personal yang dibangun menggunakan Next.js 16 dengan App Router dan React 19. Dirancang untuk menampilkan proyek, skill, dan pengalaman di bidang game development dan web development secara profesional.',
      'Mengimplementasikan desain modern dengan glassmorphism UI, dark/light mode toggle yang persisten via localStorage, dan fully responsive layout menggunakan Tailwind CSS. Setiap halaman proyek di-generate secara statis untuk performa optimal.',
      'Fitur utama meliputi dynamic routing untuk halaman detail proyek, optimasi gambar melalui Next.js Image component, SEO metadata dengan Open Graph, dan arsitektur komponen yang modular dan type-safe dengan TypeScript.',
    ],
    metadata: {
      year: '2025',
      role: 'Full-Stack Developer',
      platform: 'Web (Next.js)',
      status: 'In Development',
      statusColor: 'yellow',
    },
    gallery: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvQFsBoYJWsAuYbhx8C9oa7UMnRwKgz2I6odDsoGzEOnn8kNXyv4XAKf5xoY-8hvBqxrzanq4azXQwNzzDPpAjAR0Gj0OgfECh6HosvLk0PNKeMjsyjVDOntWUILnxkhwJOvULM6p4XYo7skcrytx_klvL1-2Uqnu061_xDP0xHrQ4-xJehrJAiHJnxckwgIyAlULprMlUuypMnrg1rp2xFK7ZyYvlANhe8L1MlNheP8awQyaJ2lLdhgEcN3LZwoWgNTt1SwzZqudO',
        caption: 'Homepage — Hero & About Section',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnc7T7ULAlJNAQoxrNmUNn0Xq7xAfJQhTHSzcCi3WKEIOqmNJiq73QDYu00WXKOoiAtXLEf_0Ws4cppRHJtBvQExXbj3-5FpuMDDVqO4DN-IAl8gILFkoWA80EUXuGnJtySK_xYtd8Nva1EFNKysCIcRZTdvd4hS5lZ_YWQxuytfu0k0iA_XBwBqnIwZN1v-BPAIYWjVbuvuvmKm2P5O4O7F3gFDoGbCcCCF2fZi0iRCHBiCILbvmqAZSflSQ-U1esodsWiu8o47Cw',
        caption: 'Project Detail Page — Dynamic Routing',
      },
    ],
    mechanics: [
      {
        icon: 'dark_mode',
        title: 'Responsive Design & Dark Mode',
        description:
          'Implementasi desain responsif mobile-first dengan Tailwind CSS dan fitur dark/light mode menggunakan React Context API dengan localStorage persistence.',
        tech: 'Tailwind CSS / React Context / localStorage',
        color: 'primary',
      },
      {
        icon: 'rocket_launch',
        title: 'Static Generation & SEO',
        description:
          'Memanfaatkan Static Site Generation (SSG) dengan generateStaticParams dan generateMetadata untuk performa optimal dan SEO yang baik di setiap halaman.',
        tech: 'Next.js App Router / SSG / Open Graph',
        color: 'accent',
      },
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostCSS', 'Vercel'],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Rizqihafidz', icon: 'code', isPrimary: true },
    ],
    highlights: [
      'Dibangun dengan Next.js 16 dan React 19 menggunakan App Router',
      'Implementasi dark/light mode dengan React Context dan localStorage',
      'Desain responsif mobile-first dengan Tailwind CSS dan glassmorphism UI',
      'Static site generation untuk performa dan SEO optimal',
      'Arsitektur komponen modular dan type-safe dengan TypeScript',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
