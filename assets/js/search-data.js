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
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I teach and opportunities for prospective students.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
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
          section: "News",},{id: "news-i-organized-kth-s-robotics-perception-and-learning-rpl-summer-school-2024-80-participants-in-stockholm-sweden",
          title: 'I organized KTH’s Robotics, Perception and Learning (RPL) Summer School 2024 (80 participants)...',
          description: "",
          section: "News",},{id: "news-our-paper-dexdiffuser-generating-dexterous-grasps-with-diffusion-models-was-published-in-ieee-robotics-and-automation-letters-ra-l-the-method-generates-grasps-for-multi-fingered-robot-hands",
          title: 'Our paper DexDiffuser: Generating Dexterous Grasps with Diffusion Models was published in IEEE...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-at-the-workshop-mastering-robot-manipulation-in-a-world-of-abundant-data-at-the-conference-on-robot-learning-corl-2024-in-munich-germany",
          title: 'I gave an invited talk at the workshop Mastering Robot Manipulation in a...',
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
          section: "News",},{id: "news-i-won-the-outstanding-associate-editor-award-of-iros-2025-the-ieee-rsj-international-conference-on-intelligent-robots-and-systems",
          title: 'I won the “Outstanding Associate Editor Award” of IROS 2025, the IEEE/RSJ International...',
          description: "",
          section: "News",},{id: "news-our-paper-grasping-a-handful-sequential-multi-object-dexterous-grasp-generation-was-published-in-ieee-robotics-and-automation-letters-ra-l-it-generates-grasps-that-let-one-multi-fingered-hand-pick-up-several-objects-one-after-another",
          title: 'Our paper Grasping a Handful: Sequential Multi-Object Dexterous Grasp Generation was published in...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-on-diffusion-based-dexterous-grasping-together-with-danica-kragic-at-the-latin-american-summer-school-on-cognitive-robotics-lacoro-2025-in-rancagua-chile-online",
          title: 'I gave an invited talk on diffusion-based dexterous grasping, together with Danica Kragic,...',
          description: "",
          section: "News",},{id: "news-i-served-as-one-of-the-two-preliminary-examiners-of-kulunu-samarawickrama-s-doctoral-dissertation-at-tampere-university",
          title: 'I served as one of the two Preliminary Examiners of Kulunu Samarawickrama’s doctoral...',
          description: "",
          section: "News",},{id: "news-our-editorial-transfer-learning-in-robotics-from-promises-to-practice-through-the-emerging-role-of-foundation-models-was-published-in-science-robotics-it-introduces-the-journal-s-special-issue-on-transfer-learning-foundation-models-and-emerging-capabilities",
          title: 'Our editorial Transfer learning in robotics: From promises to practice through the emerging...',
          description: "",
          section: "News",},{id: "news-i-was-an-invited-participant-in-the-dexterous-manipulation-roundtable-on-benchmarking-reproducibility-and-standards-at-icra-2026-in-vienna-convening-leading-organizations-in-robot-manipulation-nist-epfl-northwestern-king-s-college-london-shadow-robot",
          title: 'I was an invited participant in the Dexterous Manipulation Roundtable on Benchmarking, Reproducibility,...',
          description: "",
          section: "News",},{id: "news-our-preprint-modex-a-diffusion-policy-for-sequential-multi-object-dexterous-grasping-is-now-on-arxiv-the-policy-keeps-adjusting-the-grasp-to-what-the-robot-sees-so-that-a-multi-fingered-robot-hand-can-pick-up-several-objects-in-a-row",
          title: 'Our preprint MoDex: A Diffusion Policy for Sequential Multi-Object Dexterous Grasping is now...',
          description: "",
          section: "News",},{id: "news-i-served-as-the-opponent-at-the-phd-defence-of-kulunu-samarawickrama-at-tampere-university",
          title: 'I served as the Opponent at the PhD defence of Kulunu Samarawickrama at...',
          description: "",
          section: "News",},{id: "news-i-started-an-industry-contract-research-collaboration-with-mirka-oy-on-robotic-manipulation-the-project-applies-vision-language-action-models-which-map-camera-images-and-written-instructions-to-robot-actions",
          title: 'I started an industry contract-research collaboration with Mirka Oy on robotic manipulation. The...',
          description: "",
          section: "News",},{id: "news-our-preprint-clothatlas-joint-garment-identification-and-state-estimation-under-self-occlusion-is-now-on-arxiv-it-identifies-a-garment-and-estimates-its-full-shape-when-folds-hide-parts-of-it-see-the-project-page-for-videos-and-results",
          title: 'Our preprint ClothAtlas: Joint Garment Identification and State Estimation under Self-Occlusion is now...',
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
