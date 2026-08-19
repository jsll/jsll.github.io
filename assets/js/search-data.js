// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-joined-dieter-fox-s-lab-at-the-university-of-washington-seattle-usa-as-a-visiting-doctoral-researcher",
          title: 'I joined Dieter Fox’s lab at the University of Washington, Seattle, USA, as...',
          description: "",
          section: "News",},{id: "news-i-completed-my-ph-d-in-robotics-and-autonomous-systems-at-aalto-university-espoo-finland",
          title: 'I completed my Ph.D. in Robotics and Autonomous Systems at Aalto University, Espoo,...',
          description: "",
          section: "News",},{id: "news-i-started-as-a-postdoctoral-researcher-in-danica-kragic-s-lab-at-the-royal-institute-of-technology-kth-stockholm-sweden",
          title: 'I started as a Postdoctoral Researcher in Danica Kragic’s lab at the Royal...',
          description: "",
          section: "News",},{id: "news-i-received-the-aalto-university-doctoral-thesis-award-given-to-the-top-10-of-doctoral-theses-at-the-school-of-electrical-engineering",
          title: 'I received the Aalto University Doctoral Thesis Award, given to the top 10%...',
          description: "",
          section: "News",},{id: "news-i-organized-the-rpl-summer-school-2024-80-participants-in-stockholm-sweden",
          title: 'I organized the RPL Summer School 2024 (80 participants) in Stockholm, Sweden.',
          description: "",
          section: "News",},{id: "news-our-paper-dexdiffuser-generating-dexterous-grasps-with-diffusion-models-was-published-in-ieee-robotics-and-automation-letters-ra-l",
          title: 'Our paper DexDiffuser: Generating Dexterous Grasps with Diffusion Models was published in IEEE...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-at-the-corl-2024-workshop-on-mastering-robot-manipulation-in-a-world-of-abundant-data-in-munich-germany",
          title: 'I gave an invited talk at the CoRL 2024 Workshop on Mastering Robot...',
          description: "",
          section: "News",},{id: "news-i-served-as-an-associate-editor-for-ieee-iros-2025",
          title: 'I served as an Associate Editor for IEEE IROS 2025.',
          description: "",
          section: "News",},{id: "news-i-started-as-an-assistant-professor-tenure-track-in-robotics-and-machine-learning-at-university-of-turku",
          title: 'I started as an Assistant Professor (tenure track) in Robotics and Machine Learning...',
          description: "",
          section: "News",},{id: "news-i-co-organized-the-workshop-beyond-rigid-worlds-representing-and-interacting-with-non-rigid-objects-at-corl-2025-in-seoul-korea",
          title: 'I co-organized the workshop Beyond Rigid Worlds: Representing and Interacting with Non-Rigid Objects...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-associate-editor-for-icra-2026",
          title: 'I will serve as an Associate Editor for ICRA 2026.',
          description: "",
          section: "News",},{id: "news-i-won-the-2025-ieee-iros-outstanding-associate-editor-award",
          title: 'I won the 2025 IEEE IROS “Outstanding Associate Editor Award”.',
          description: "",
          section: "News",},{id: "news-i-served-as-one-of-the-two-preliminary-examiners-of-kulunu-samarawickrama-s-doctoral-dissertation-at-tampere-university",
          title: 'I served as one of the two Preliminary Examiners of Kulunu Samarawickrama’s doctoral...',
          description: "",
          section: "News",},{id: "news-i-was-an-invited-participant-in-the-dexterous-manipulation-roundtable-on-benchmarking-reproducibility-and-standards-at-icra-2026-in-vienna-convening-leading-organizations-in-robot-manipulation-nist-epfl-northwestern-king-s-college-london-shadow-robot",
          title: 'I was an invited participant in the Dexterous Manipulation Roundtable on Benchmarking, Reproducibility,...',
          description: "",
          section: "News",},{id: "news-i-served-as-the-opponent-at-the-phd-defence-of-kulunu-samarawickrama-at-tampere-university",
          title: 'I served as the Opponent at the PhD defence of Kulunu Samarawickrama at...',
          description: "",
          section: "News",},{id: "news-i-started-an-industry-contract-research-collaboration-with-mirka-oy-on-applying-vision-language-action-models-to-robotic-manipulation",
          title: 'I started an industry contract-research collaboration with Mirka Oy on applying Vision-Language-Action models...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
