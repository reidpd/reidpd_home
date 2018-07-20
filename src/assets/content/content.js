const wave = require('../images/80_percent_wave.png');

const companies = {
  /* model
  key: {
    name: "",
    abbreviation: "",
    location: "",
    link: "",
  },
  */
  osj: {
    name: "Opera San Jose",
    abbreviation: "OSJ",
    location: "San Jose, CA",
    link: "https://www.operasj.org/",
  },
  pocketOpera: {
    name: "Pocket Opera (SF, CA)",
    abbreviation: "Pocket Opera",
    location: "San Francisco, CA",
    link: "http://www.pocketopera.org/",
  },
  santaFeOperaWorkshop: {
    name: "Santa Fe Opera",
    abbreviation: "SFO",
    location: "San Francisco, CA",
    link: "https://www.santafeopera.org/",
  },
  otslWorkshop: {
    name: "Opera Theatre of St. Louis",
    abbreviation: "OTSL",
    location: "San Francisco, CA",
    link: "https://www.opera-stl.org/",
  },
  waffleOpera: {
    name: "Waffle Opera",
    abbreviation: "Waffle",
    location: "San Francisco, CA",
    link: "http://waffleopera.com/",
  },
  castleton: {
    name: "Castleton Artists Training Seminar",
    abbreviation: "Castleton Festival",
    location: "Castleton, VA",
    link: "https://www.castletonfestival.org/training-seminar/castleton-artists-training-seminar/cats-applications-and-auditions/",
  },
  ivai: {
    name: "International Vocal Arts Institute, Montreal",
    abbreviation: "IVAI",
    location: "Montreal, Quebec",
    link: "",
  },
  sfcm: {
    name: "San Francisco Conservatory of Music",
    abbreviation: "SFCM",
    location: "San Francisco, CA",
    link: "https://sfcm.edu/degrees-programs/ensembles/opera-and-musical-theatre",
  },
  msm: {
    name: "Manhattan School of Music",
    abbreviation: "MSM",
    location: "New York, NY",
    link: "http://www.msmnyc.edu/Instruction-Faculty/Academic-Departments/Opera-Studies",
  },
}
const composers = {
  /* model:
  name: {
    first: "",
    last: "",
    full: "",
    wiki: "",
  },*/
  wagner: {
    first: "Richard",
    last: "Wagner",
    wiki: "https://en.wikipedia.org/wiki/Richard_Wagner",
  },
  donizetti: {
    first: "Gaetano",
    last: "Donizetti",
    wiki: "https://en.wikipedia.org/wiki/Gaetano_Donizetti",
  },
  bates: {
    first: "Mason",
    last: "Bates",
    wiki: "https://en.wikipedia.org/wiki/Mason_Bates",
  },
  offenbach: {
    first: "Jacques",
    last: "Offenbach",
    wiki: "https://en.wikipedia.org/wiki/Jacques_Offenbach",
  },
  leoncavallo: {
    first: "Ruggero",
    last: "Leoncavallo",
    wiki: "https://en.wikipedia.org/wiki/Ruggero_Leoncavallo",
  },
  verdi: {
    first: "Giuseppe",
    last: "Verdi",
    wiki: "https://en.wikipedia.org/wiki/Giuseppe_Verdi",
  },
  bizet: {
    first: "Georges",
    last: "Bizet",
    wiki: "https://en.wikipedia.org/wiki/Georges_Bizet",
  },
  puccini: {
    first: "Giacomo",
    last: "Puccini",
    wiki: "https://en.wikipedia.org/wiki/Giacomo_Puccini",
  },
  perla: {
    first: "Jack",
    last: "Perla",
    wiki: "http://jackperla.com/",
  },
  ralls: {
    first: "Justin",
    last: "Ralls",
    wiki: "http://www.justinralls.com/",
  },
  argento: {
    first: "Dominick",
    last: "Argento",
    wiki: "https://en.wikipedia.org/wiki/Dominick_Argento",
  },
  mozart: {
    first: "Wolfgang Amadeus",
    last: "Mozart",
    wiki: "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart",
  },
  adamo: {
    first: "Mark",
    last: "Adamo",
    wiki: "https://en.wikipedia.org/wiki/Mark_Adamo",
  },
  strauss_johann: {
    first: "Johann",
    last: "Strauss II",
    wiki: "https://en.wikipedia.org/wiki/Johann_Strauss_II",
  },
  sondheim: {
    first: "Stephen",
    last: "Sondheim",
    wiki: "https://en.wikipedia.org/wiki/Stephen_Sondheim",
  },
  cavalli: {
    first: "Francesco",
    last: "Cavalli",
    wiki: "https://en.wikipedia.org/wiki/Francesco_Cavalli",
  },
}
const resume_bio = "As a lifelong musician, and lover of maths and language, Reid Delahunt is pursuing web development and coding work with a set of generous skills that crossover lines of critical thinking. Along with a reputation for professional discipline, organizational detail, multi-lingual expertise and a friendly demeanor, Reid has the potential to succeed and become an asset to any company that values job performance and fluency in programming languages.";
const music_bio = "Reid has performed as an operatic musician for the past decade. He has sung with a plethora of houses, including Opera San Jose and Pocket Opera, SF.";

const content = {
  social_media: [
    {
      title: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/reidpierredelahunt",
    },
    {
      title: "Facebook Profile",
      link: "https://www.facebook.com/reid.pierre.delahunt",
    },
    {
      title: "DuoLingo Stats",
      link: "https://www.duolingo.com/reidpierre",
    },
    {
      title: "Treehouse Profile",
      link: "https://teamtreehouse.com/reiddelahunt",
    },
    {
      title: "CodeWars",
      link: "https://www.codewars.com/users/reidpd",
    },
    {
      title: "CodeFights",
      link: "https://codefights.com/profile/reid_d",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/ReidDelahunt",
    },
  ],
  training: [
    {
      name: "Galvanize Web Development Immersive",
      abbreviation: "Galvanize G42",
      program: "school",
      degree: "Certificate",
      major: "Full Stack Web Development",
      attendance: {
        start: {
          month: "Jan.",
          year: "'17",
        },
        graduated: {
          month: "June",
          year: "'17",
        },
      },
      gpa: null,
      location: "San Francisco, CA",
    },
    {
      name: companies.ivai.name,
      abbreviation: companies.ivai.abbreviation,
      program: "young_artist_program",
      degree: null,
      major: null,
      attendance: {
        start: {
          month: "Aug.",
          year: "'14",
        },
        graduated: {
          month: "Aug.",
          year: "'14",
        },
      },
      gpa: null,
      location: companies.ivai.location,
    },
    {
      name: companies.sfcm.name,
      abbreviation: companies.sfcm.abbreviation,
      program: "school",
      degree: "Masters of Music",
      major: "Vocal Performance",
      attendance: {
        start: {
          month: "Sept.",
          year: "'12",
        },
        graduated: {
          month: "May",
          year: "'14",
        },
      },
      gpa: 3.79,
      location: companies.sfcm.location,
    },
    {
      name: companies.castleton.name,
      abbreviation: companies.castleton.abbreviation,
      program: "young_artist_program",
      degree: null,
      major: null,
      attendance: {
        start: {
          month: "June",
          year: "'13",
        },
        graduated: {
          month: "Aug.",
          year: "'13",
        },
      },
      gpa: null,
      location: companies.castleton.location,
    },
    {
      name: "OperaWorks Emerging Artist Program",
      abbreviation: "OperaWorks",
      program: "young_artist_program",
      degree: null,
      major: null,
      attendance: {
        start: {
          month: "July",
          year: "'12",
        },
        graduated: {
          month: "July",
          year: "'12",
        },
      },
      gpa: null,
      location: "Los Angeles, CA",
    },
    {
      name: companies.msm.name,
      abbreviation: companies.msm.abbreviation,
      program: "school",
      degree: "Bachelors of Music",
      major: "Classical Voice",
      attendance: {
        start: {
          month: "Sept.",
          year: "'08",
        },
        graduated: {
          month: "May",
          year: "'12",
        },
      },
      gpa: 3.6,
      location: companies.msm.location,
    },
  ],
  music_career: {
    music_bio,
    operas: [
      /* model: {
        title: "",
        title_translation: "",
        composer: composers.,
        role: "",
        company: companies.,
        language: "",
        years_performed: [],
        images: [],
        links: {
          opera_wiki: "",
          reviews: [],
        },
      },*/

      {
        title: "Lucrezia Borgia",
        title_translation: "",
        composer: composers.donizetti,
        role: "Petruccio",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2018],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Lucrezia_Borgia_(opera)",
          reviews: [],
        },
      },
      {
        title: "La belle Hélène",
        title_translation: "The beautiful Hellen",
        composer: composers.offenbach,
        role: "Ajax II",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2018],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/La_belle_H%C3%A9l%C3%A8ne",
          reviews: [],
        },
      },
      {
        title: "Der fliegende Holländer",
        title_translation: "The Flying Dutchman",
        composer: composers.wagner,
        role: "Ensemble",
        company: companies.osj,
        language: "German",
        years_performed: [2018],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/The_Flying_Dutchman_(opera)",
          reviews: [],
        },
      },
      {
        title: "Lucia di Lammermoor",
        title_translation: "",
        composer: composers.donizetti,
        role: "Ensemble",
        company: companies.osj,
        language: "Italian",
        years_performed: [2016],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Lucia_di_Lammermoor",
          reviews: [],
        },
      },
      {
        title: "The (R)evolution of Steve Jobs (workshop, '15 & '16)",
        title_translation: "",
        composer: composers.bates,
        role: "Ensemble",
        company: companies.santaFeOperaWorkshop,
        language: "English",
        years_performed: [2015, 2016],
        images: [],
        links: {
          opera_wiki: "https://www.santafeopera.org/operas-and-ticketing/the-revolution-of-steve-jobs",
          reviews: [],
        },
      },
      {
        title: "La vie parisienne",
        title_translation: "The Parisian Life",
        composer: composers.offenbach,
        role: "Bobinet",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2016],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/La_Vie_parisienne_(operetta)",
          reviews: [],
        },
      },
      {
        title: "Pagliacci",
        title_translation: "Clowns",
        composer: composers.leoncavallo,
        role: "Ensemble",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2015, 2016],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Pagliacci",
          reviews: [],
        },
      },
      {
        title: "Un giorno di regno",
        title_translation: "",
        composer: composers.verdi,
        role: "Delmonte, Ensemble",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2016],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Un_giorno_di_regno",
          reviews: [],
        },
      },
      {
        title: "Carmen",
        title_translation: "",
        composer: composers.bizet,
        role: "Ensemble, El Dancaïro (Cover)",
        company: companies.osj,
        language: "French",
        years_performed: [2016],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Carmen",
          reviews: [],
        },
      },
      {
        title: "Tosca",
        title_translation: "",
        composer: composers.puccini,
        role: "Sciarrone, Ensemble",
        company: companies.osj,
        language: "Italian",
        years_performed: [2015],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Tosca",
          reviews: [],
        },
      },
      {
        title: "Shalimar the Clown (workshop)",
        title_translation: "",
        composer: composers.perla,
        role: "Max, Ensemble",
        company: companies.otslWorkshop,
        language: "English",
        years_performed: [2015],
        images: [],
        links: {
          opera_wiki: "https://www.opera-stl.org/season-and-events/productions/shalimar-the-clown",
          reviews: [],
        },
      },
      {
        title: "Les pêcheurs de perles",
        title_translation: "The Pearl Fishers",
        composer: composers.offenbach,
        role: "Ensemble",
        company: companies.pocketOpera,
        language: "English",
        years_performed: [2015],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Les_p%C3%AAcheurs_de_perles",
          reviews: [],
        },
      },
      {
        title: "Gianni Schicchi",
        title_translation: "",
        composer: composers.puccini,
        role: "Betto di Signa",
        company: companies.waffleOpera,
        language: "Italian",
        years_performed: [2015],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Gianni_Schicchi",
          reviews: [],
        },
      },
      {
        title: "Two Yosemites (premiere)",
        title_translation: "",
        composer: composers.ralls,
        role: "Theodore Roosevelt",
        company: companies.sfcm,
        language: "English",
        years_performed: [2014],
        images: [],
        links: {
          opera_wiki: "",
          reviews: [],
        },
      },
      {
        title: "Postcard from Morocco",
        title_translation: "",
        composer: composers.argento,
        role: "Shoe Salesman",
        company: companies.sfcm,
        language: "English",
        years_performed: [2014],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Postcard_from_Morocco",
          reviews: [],
        },
      },
      {
        title: "Le nozze di Figaro",
        title_translation: "The Wedding of Figaro",
        composer: composers.mozart,
        role: "Count Almaviva",
        company: companies.sfcm,
        language: "Italian",
        years_performed: [2012, 2013, 2014],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/The_Marriage_of_Figaro",
          reviews: [],
        },
      },
      {
        title: "La bohème",
        title_translation: "",
        composer: composers.puccini,
        role: "Alcindoro",
        company: companies.sfcm,
        language: "Italian",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/La_boh%C3%A8me",
          reviews: [],
        },
      },
      {
        title: "Falstaff",
        title_translation: "",
        composer: composers.verdi,
        role: "Ensemble",
        company: companies.osj,
        language: "Italian",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Falstaff_(opera)",
          reviews: [],
        },
      },
      {
        title: "Otello",
        title_translation: "",
        composer: composers.verdi,
        role: "Ensemble",
        company: companies.castleton,
        language: "Italian",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Otello",
          reviews: [],
        },
      },
      {
        title: "La fanciulla del West",
        title_translation: "Lady of the West",
        composer: composers.puccini,
        role: "Ensemble, Happy (cover)",
        company: companies.castleton,
        language: "Italian",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/La_fanciulla_del_West",
          reviews: [],
        },
      },
      {
        title: "Little Women",
        title_translation: "",
        composer: composers.adamo,
        role: "Gideon March",
        company: companies.sfcm,
        language: "English",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Little_Women_(opera)",
          reviews: [],
        },
      },
      {
        title: "Die Fledermaus",
        title_translation: "The Bat",
        composer: composers.strauss_johann,
        role: "Dr. Falke, Frank",
        company: companies.sfcm,
        language: "English",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Die_Fledermaus",
          reviews: [],
        },
      },
      {
        title: "Into the Woods",
        title_translation: "",
        composer: composers.sondheim,
        role: "Cinderella's Father",
        company: companies.sfcm,
        language: "English",
        years_performed: [2013],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Into_the_Woods",
          reviews: [],
        },
      },
      {
        title: "La Calisto",
        title_translation: "",
        composer: composers.cavalli,
        role: "Pane",
        company: companies.sfcm,
        language: "Italian",
        years_performed: [2012],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/La_Calisto",
          reviews: [],
        },
      },
      {
        title: "Gianni Schicchi",
        title_translation: "",
        composer: composers.puccini,
        role: "Pinellino",
        company: companies.sfcm,
        language: "Italian",
        years_performed: [2012],
        images: [],
        links: {
          opera_wiki: "https://en.wikipedia.org/wiki/Gianni_Schicchi",
          reviews: [],
        },
      },
    ],
    companies: {
      osj: companies.operaSanJose,
      pocket_opera: companies.pocketOpera,
      waffle_opera: companies.waffleOpera,
    },
    churches: [
      {
        name: "The Cathedral of Christ the Light",
        role: "Music Scholar, Section Leader",
        location: "Oakland, CA",
        director: "Dr. Rudy de Vos",
        link: "https://www.ctlcathedral.org/",
      },
      {
        name: "The Episcopal Church of St. Mary the Virgin",
        role: "Choral Sub",
        location: "San Francisco, CA",
        director: "Eric Choate",
        link: "http://smvsf.org/",
      },
      {
        name: "The Church of the Transfiguration",
        role: "Section Leader (counter-tenor)",
        location: "New York, NY",
        director: "Claudia Dumschat",
        link: "http://www.littlechurch.org/?view=mobile",
      },
    ],
    awards: [
      {
        association: "East Bay Opera League Competition",
        title: "Finalist",
        year: "2015",
      },
      {
        association: "Opera Dept. SFCM",
        title: "Award for Excellence",
        year: "2013, 2014",
      },
      {
        association: "San Francisco Conservatory of Music",
        title: "Scholarship",
        year: "2012-2014",
      },
      {
        association: "Classical Singer University Competition",
        title: "Semi-Finalist",
        year: "2011",
      },
    ],
    people: {
      voice_teachers: [
        {
          name: "Leroy Kromm",
          school: "San Francisco Conservatory of Music",
          link: "https://sfcm.edu/faculty/leroy-kromm",
        },
        {
          name: "Maitland Peters",
          school: "Manhattan School of Music",
          link: "http://www.msmnyc.edu/FacultyProfile?FID=1008173173",
        },
        {
          name: "Joan Caplan",
          school: "Manhattan School of Music",
          link: "http://www.joancaplan.com/",
        },
        {
          name: "Tom Jones",
          school: "Private Studio",
          link: "https://www.linkedin.com/in/tom-jones-b86ba314/",
        },
      ],
      coaches: [
        "Darryl Cooper",
        "Steven Bailey",
        "Jose Melendez",
        "Rebecca Mordo",
        "Lucy Arner",
        "David Rosenmeyer",
        "Shane Schag",
      ],
      directors: [
        "Benjamin Spierman",
        "Brad Dalton",
        "Nicolas Aliaga",
        "Kevin Newbury",
        "Richard Harrell",
        "Heather Matthews",
        "Ann Baltz",
      ],
      conductors: [
        "Ming Luke",
        "Joseph Marcheso",
        "Curt Pajer",
        "Andrew Whitfield",
        "Mark Morash",
        "Nicole Paiement",
        "Donald Pippin",
      ],
    },
  },
  tech_career: {
    resume_bio,
    projects: [
      /* model
      {
        name: "",
        github_repo: "",
        deployed: "",
        comments: "",
        image: "",
        tech_used: ["",etc]
      },
      */
      {
        name: "CodeFights",
        github_repo: "https://github.com/reidpd/codefights",
        deployed: "",
        comments: "",
        image: "",
        tech_used: [""]
      },{
        name: "Mezzo-Radio",
        github_repo: "https://github.com/reidpd/mezzo-radio",
        deployed: "https://mezzo-radio.herokuapp.com/",
        comments: "A web app where the user can simulate playing LP vinyl records on their computer using Spotify's collection of music.",
        image: null,
        tech_used: [],
      },{
        name: "InTuneNation",
        github_repo: "https://github.com/reidpd/InTuneNation",
        deployed: "https://intunenation.herokuapp.com/",
        comments: "Currently under construction, add '/interface' to the end of the URL to see the main interface. This app can be used, when properly functional, to give the user objective feedback about their pitch accuracy when attempting custom musical exercises.",
        image: null,
        tech_used: [],
      },
      {
        name: "CheeSwhiz",
        github_repo: "https://github.com/reidpd/CheeSwhiz",
        deployed: "http://cheeswhiz.herokuapp.com/api-docs/",
        comments: "An API that can be used by any developer to add cheese information to their website.",
        image: null,
        tech_used: [],
      },
      {
        name: "findThatTrail",
        github_repo: "https://github.com/reidpd/findThatTrail",
        deployed: "https://find-that-trail.herokuapp.com/html/index.html",
        comments: "A simple web app that utilizes Google Maps in conjunction with TrailAPI to give the user pinpoints on a map showing where the nearest trailheads are.",
        image: null,
        tech_used: [],
      },
    ],
    skills: {
      soft: [
        "friendly",
        "problem solving",
        "teamwork-oriented mindset",
        "organization",
        "time management",
        "public speaking",
        "stage acting",
      ],
      languages: {
        programming: [
          {
            name: "JavaScript",
            experience: "Expert",
            img_address: "",
          },
          {
            name: "Java",
            experience: "Familiar",
            img_address: "",
          },
          {
            name: "PHP",
            experience: "Familiar",
            img_address: "",
          },
          {
            name: "Python",
            experience: "Rusty",
            img_address: "",
          },
          {
            name: "Ruby",
            experience: "Rusty",
            img_address: "",
          },
        ],
        human: [
          {
            name: "English",
            translated: "English",
            skill: {
              speaking: "",
              writing: "",
              reading: "",
              hearing: "",
            },
          },
          {
            name: "Italian",
            translated: "Italiano",
            skill: {
              speaking: "",
              writing: "",
              reading: "",
              hearing: "",
            },
          },
          {
            name: "French",
            translated: "Français",
            skill: {
              speaking: "",
              writing: "",
              reading: "",
              hearing: "",
            },
          },
          {
            name: "German",
            translated: "Deutsch",
            skill: {
              speaking: "",
              writing: "",
              reading: "",
              hearing: "",
            },
          },
          {
            name: "Spanish",
            translated: "Español",
            skill: {
              speaking: "",
              writing: "",
              reading: "",
              hearing: "",
            },
          },
        ],
      },
      front_end: [
        {
          name: "HTML5",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "CSS3",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "React.js",
          experience: "Expert",
          img_address: "",
        },
        {
          name: "Redux",
          experience: "Expert",
          img_address: "",
        },
        {
          name: "jQuery",
          experience: "Familiar",
          img_address: "",
        },
        {
          name: "Materialize.css",
          experience: "Familiar",
          img_address: "",
        },
        {
          name: "Bootstrap",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "Sass",
          experience: "Familiar",
          img_address: "",
        },
        {
          name: "",
          experience: "",
          img_address: "",
        },
        {
          name: "",
          experience: "",
          img_address: "",
        },
      ],
      back_end: [
        {
          name: "Node.JS",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "PostgreSQL",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "SQL",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "Express.js",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "Knex.js",
          experience: "Experienced",
          img_address: "",
        },
        {
          name: "Swagger",
          experience: "Familiar",
          img_address: "",
        },
      ],
      dev_ops: [
        {
          name: "",
          img_address: "",
        },
      ],
    },
  },
  contact: {
    email: "reidpierredelahunt@gmail.com",
    location: "SF Bay Area, CA",
  },
  images: {
    wave,
  }
};

module.exports = content;
