export type Speaker = {
  id: string;
  name: string;
  role: string;
  color: string;
  paper?: Paper;
};

export type Paper = {
  title: string;
  subtitle?: string;
  abstract: string;
  keywords?: string[];
  image?: PaperImage;
};

export type PaperImage = {
  citation: string;
};

export const speakers: Speaker[] = [
  {
    id: "kai",
    name: "Kai Davis",
    role: "Artist, performer, clown",
    color: "orange",
  },
  {
    id: "vivian",
    name: "Vivian Ekeh",
    role: "Researcher, sport analyst",
    color: "grass",
  },
  {
    id: "chloe",
    name: "Chloe Gibson",
    role: "Film enthusiast",
    color: "red",
  },
  {
    id: "annia",
    name: "Annia Harrison",
    role: "Historian, aspiring writer",
    color: "blue",
  },
  {
    id: "oluwadamilola",
    name: "Oluwadamilola Idowu",
    role: "Historical studies, impact-driven",
    color: "yellow",
  },
  {
    id: "taylor",
    name: "Taylor Jarman",
    role: "Film studies, internet nerd",
    color: "yellow",
  },
  {
    id: "gareth",
    name: "Gareth Matthews",
    role: "Filmmaker",
    color: "blue",
  },
  {
    id: "saria",
    name: "Saria Nguyen",
    role: "Unfathomable one of the many",
    color: "orange",
  },
  {
    id: "bahareh",
    name: "Bahareh Saadatfard",
    role: "Architect, enthusiast of experimental approaches",
    color: "red",
  },
  {
    id: "michal",
    name: "Michal Špitálský",
    role: "Filmmaker, designer",
    color: "grass",
    paper: {
      title: "Hide your face",
      subtitle:
        "Applying surveillance evasion methods to cyberpunk film worldbuilding",
      abstract:
        "Over the past decade, advancements in information technologies - particularly in machine learning and artificial intelligence - have introduced a new era of surveillance. In response, a counter-movement has emerged, exploring ways to evade detection and preserve anonymity. The cyberpunk genre has long been praised for its almost-prophetic depictions of technological dystopias, often centered around themes of surveillance and oppression. Stemming from punk and hacker subcultures, cyberpunk is critically linked to resistance movements in both physical and digital spaces. However, despite surveillance being a core element of cyberpunk worlds and its recognised role in ‘negotiating the future’, relatively few cyberpunk narratives directly incorporate surveillance impact and even fewer engage with portraying an active resistance. There is yet to be a research into the artistic utilisation of techniques and technological findings in the field of countering artificial intelligence recognition. This paper examines contemporary methods of countering recognition systems - including obfuscation, dazzle makeup, adversarial patches, evasion, and system takeover - to argue for their integration into cyberpunk films through critical worldbuilding. By incorporating real-world surveillance evasion tactics into cyberpunk narratives and visuals, the genre - sometimes criticized for stagnation - can remain relevant and responsive to contemporary issues, while also strengthening its identity. It also highlights examples of already-existing representation and offers new ways to feature the problematics of staying undetected. By strengthening the connection between cyberpunk fiction and reality not only enhances immersion, but also raises awareness of methods to navigate an increasingly cyberpunk-like future.",
      keywords: [
        "cyberpunk",
        "AI",
        "surveillance",
        "film",
        "costume",
        "make-up",
      ],
      image: {
        citation:
          "Source: Harvey, A. 2014. Face to Anti-Face. [Online]. Accessed 6 March 2025. Available from: https://archive.nytimes.com/www.nytimes.com/interactive/2013/12/14/opinion/sunday/20121215_ANTIFACE_OPART.html",
      },
    },
  },
];
