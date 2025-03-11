export type Speaker = {
  id: string;
  name: string;
  role: string;
  color: string;
  paper?: Paper;
  pronouns?: string;
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
    paper: {
      title: "Prioritising the Performer",
      subtitle: "Shifting Perspectives and Embracing Ego",
      abstract:
        "This paper explores performance for the performer. Performance theory often prioritises the audience’s perspective, in this paper however, I will reveal what happens when the performers experience is at the forefront of the performance creation process. Using my own performance practice as a starting point, by examining the work I created with Gays in Space Theatre Collective – a company that spawned out of the brief “you can choose to do whatever you’d like” and subsequently lead to a beautifully messy, chaotic and hedonistic collaborative performance piece. I will then delve into other types of performance that one could consider as being for the performer, such as community performance from Theatre of the Oppressed, biographical performance, drag and cabaret performance, and performance art. I will also look at examples where the dynamic between audience and performer is deliberately positioned against normative expectations, such as the work of Forced Entertainment, where the performer isn’t just prioritised, but the work actively seeks to bore, annoy or bring discomfort to audiences. By placing affect theory in conversation with theories of narrative, I will investigate what happens when we change our perspective on who performance is for. There is of course some element of self-interest in all performance, including ego, stardom seeking and at its most basic simple enjoyment –  I will argue however, that the process actively embracing this, allows for unique and interesting pathways in audience/performer interaction. ",
    },
  },
  {
    id: "vivian",
    name: "Vivian Ekeh",
    role: "Researcher, sport analyst",
    color: "grass",
    paper: {
      title: "The Different Types of Culture in Nigeria",
      abstract:
        "Nigeria has more than 250 ethnic groups, all of which contribute to its rich heritage (Falola, 2021). Traditions, languages, festivals, religious beliefs, art, and cuisine all influence the country's cultural landscape, and the three main ethnic groups—Hausa-Fulani, Yoruba, and Igbo—each have unique customs that coexist with many minority groups to create a vibrant cultural blend (Ekeh, 2018). The Hausa-Fulani, who are mostly Muslims, are well-known for their traditional clothing and lavish Durbar celebrations (Osaghae & Suberu, 2005). Southwest Yoruba are known for their artistic creations, including as beading and talking drums, and they celebrate cultural festivals like Osun-Osogbo (Adegbite, 2019). Southeast Igbo people have a strong business spirit based on communal values and celebrate masquerade festivals (Nwosu, 2020). Other ethnic groups, such the Tiv, Efik, and Kanuri, also have unique customs that contribute to Nigeria's rich cultural diversity. Nigerian culture is greatly influenced by religion, with Christianity, Islam, and indigenous beliefs affecting many facets of daily life (Udo, 2017). This diversity is reflected in Nigerian food, which is popular and includes delicacies like suya, pounded yam, and Jollof rice. Nigeria's vibrant culture is further demonstrated by the nation's contemporary and traditional music styles, including Afrobeat, Highlife, and Fuji (Ogunbiyi, 2022). Nigeria's identity is still being shaped by globalization and cultural contacts, notwithstanding regional variations. It is crucial to comprehend these various cultural components in order to promote national cohesion and value Nigeria's distinctive legacy.",
    },
  },
  {
    id: "chloe",
    name: "Chloe Gibson",
    role: "Film enthusiast",
    color: "red",
    paper: {
      title: "Nosferatu Returns",
      subtitle:
        "Or how a love of Tim Burton highlights the influence of nostalgia on Horror Films",
      abstract:
        "A shadowed mansion with dark clouds overhead with a title centred in the bottom of the screen, a close up of a woman with a pale face surrounded by near total darkness, or a dimly lit graveyard covered with snow and a singular figure walking towards a tombstone. These scenes from the 2024 Robert Eggers’ film Nosferatu are beautiful, haunting and somewhat familiar, particularly if you have seen Batman Returns (Burton, 1992). Over the last few years there have been many horror films made through a nostalgic lens. Whether it’s through the directors choice to bring back old characters (Halloween (Gordon-Green, 2018)), repetition of previous storylines and plots (Scream (Gillett and Bettinelli-Olpin, 2022)) , or simply through the aesthetic choices that have been made (Nosferatu (Eggers, 2024)). This paper will be focusing on the aesthetic choices that have been made in the recent horror film Nosferatu (Eggers, 2024) that are heavily inspired by Tim Burton. Using the works of Vera Dika (Recycled Culture in Contemporary Art and Film, 2003) and Steve Jones (The Metamodern Slasher Film, 2024), This paper will examine how Robert Eggers nostalgia for Tim Burton’s Batman Returns (1992) has affected his filmmaking choices, how Tim Burton’s own nostalgia for German expressionist films affected Batman Returns (1992) and how this throws a spotlight on the nature of nostalgia’s influence on the film making of horror.",
    },
  },
  {
    id: "annia",
    name: "Annia Harrison",
    role: "Historian, aspiring writer",
    color: "blue",
    paper: {
      title: "Biopics and the Civil Rights Movement",
      subtitle: "Interpreting and Analysing History",
      abstract:
        "History is not isolated to books and scholarly articles. Understanding of the past has been expressed in a multitude of ways by academics and creatives alike. Indeed, a historical topic like the civil rights movement in the United States has inspired a multitude of creative projects and interpretations designed for consumption beyond scholarly circles. This paper analyses and evaluates biographical films regarding the civil rights movement where these films are a source for historical understanding of the era. Additionally, these films are a reflection and insight into the sociopolitical climate of when they were made. Biopics are often the first (and, for many, only) historical interpretations of real-life people and significant events. Decades of community activism and wider history are summarised by screenwriters, edited by producers and condensed into feature length films. Additionally, biopics interpret history not with the detachment of an academic but with a narrative purpose and cultural message of an artist. While the paper cannot encapsulate every cinematic production of the civil rights movement or the decisions made to create these films, it will identify shared themes, narrative devices and messages conveyed in these biopics. A key theme of this research will be how biopics heavily influence our memory and understanding of the civil rights movement. From Malcolm X to Mamie Till-Mobley, this paper will assess how commemoration of individual figures has also impacted how we view and remember a movement built upon mass action and grassroots community activism. The paper will discuss and evaluate these biopics as a historical interpretation and where they are situated within related academic literature.",
    },
  },
  {
    id: "oluwadamilola",
    name: "Oluwadamilola Idowu",
    role: "Historical studies, impact-driven",
    color: "yellow",
    paper: {
      title: "Colonial Legacies and Gender-based Violence",
      subtitle:
        "Enduring Patterns, emerging perspectives and pathways to post-colonial restoration for African women in British diaspora",
      abstract:
        "This work considers the intersection of colonial legacies, gender-based violence and resistance among African women in the British Empire. It offers critical understanding to the historical structural and social factors that shaped African women’s vulnerability and subjugated them to systemic inequality. In this sense, this work aims to identify patterns of oppression and evaluate the perspectives that shaped resistance of such oppressions. It shows how patriarchal and racial hierarchies that shaped the imperial rule among British colonies played critical part in the institutionalization of violence against African women. Additionally, it affirms that this reality continued to shape gender power dynamism that continued to victimize these women even in the postcolonial era. Beyond identifying these patterns, this research evaluates the perspectives of feminist scholars from Africa and the Diaspora who played essential roles in redefining gender power dynamism in the postcolonial era. These perspectives provide historical narratives which foster an intersectional historical approach that addresses race, class and gender equality. It further decolonizes the Eurocentric models of historical feminism which often relegates the experiences of women from the Global South. Beyond identifying the patterns of oppression and perspectives of resistance, this research assesses historical imports to proffer pathways for a postcolonial restorative justice. Discourses around a community-based approach to justice and the intricacies of legal reforms provides backgrounds for both cultural and social transformations that challenge patriarchal norms and promote values that prevent future violence against women.",
    },
  },
  {
    id: "taylor",
    name: "Taylor Jarman",
    role: "Film studies, internet nerd",
    color: "blue",
    pronouns: "they/them",
    paper: {
      title: "Children and Horror Today",
      subtitle: "The New Dominance of the Internet",
      abstract:
        "An examination of contemporary children’s horror media with particular emphasis on the internet as an interface. I will be examining how children’s horror has shifted in a general way in order to provide context but with a focus on the shift from literary published formats in the case of Goosebumps, one of the most prominent examples of children’s horror, to creepypasta like The Slenderman, YouTube videos like The Backrooms and video games like Poppy’s Playtime or most notably Five Nights at Freddy’s. Horror and children have always been a polarising combination among the public and frequent moral panics have proven this. I am not interested in whether this change is or isn’t a positive development, I simply want to approach the intended readings of these media where possible, which may be difficult in the case of community built horrors that we see commonly among creepypasta and YouTube. I believe the moral panic following the tragic ‘Slenderman stabbing’ solidifies the internet as the next locus of horror for children to engage in and that the themes and messaging present within them have shifted. The blend of the nu-goth movement and the lack of regulation and censorship inherent to the internet have resulted in a much more open environment for children to engage with horror and as such, I believe an examination of children’s horror should be taken seriously and be conducted thoroughly.",
    },
  },
  {
    id: "gareth",
    name: "Gareth Matthews",
    role: "Filmmaker",
    color: "yellow",
    paper: {
      title: "Forced Perspective in Cinematography and Set Design",
      abstract:
        "For the presentation I intend on exploring how filmmakers use forced perspective techniques to create optical illusions. Using film theory, cinematic techniques, Gestalt psychology and semiotics, this will all be applied to help gain a deeper insight into – how perspective in film may affect the narrative and viewer experience in cinema, as well as understanding the technical aspects that forced perspective includes, especially when considering how the average person may process the manipulated visuals seen on screen. The techniques are typically used both practically on set and at times in postproduction, an example of this technique can be seen in ‘The Lord of the Rings’ movies, where they have used forced perspective to create an illusion of scale or distance between subjects and other objects. Focusing on the psychological impact of these techniques and how they influence the viewer’s understanding of depth and scale, by deceiving the brain and challenging our perception, which would then align with an analysis of whether or not this encounter with a forced perspective shot, enhances the viewer’s experience or challenges it, as it may feel out of place or ‘unnatural’ and this would all be relevant when considering that the forced perspective shot, enhances world-building and is essential for creating immersion. Finally, this presentation will summarise how forced perspective serves as both a technical and narrative tool, shaping our understanding of space and dimension, and including an analysis of how our brain may respond to this visual information perceived in real-time, breaking down the interpretation of objects being smaller or larger in scale based on the viewers experience.",
      image: {
        citation:
          "The Lord of the Rings: The Fellowship of the Ring. 2001. [Film]. Peter Jackson. dir. New Zealand: WingNut Films.",
      },
    },
  },
  {
    id: "saria",
    name: "Saria Nguyen",
    role: "Unfathomable one of the many",
    color: "orange",
    paper: {
      title:
        "The potential of anime-style fantasy video games in developing historical learning attitude among gamers",
      abstract:
        "The educational potential of games has garnered scholarly attentions for a long time, with researchers such as Rahimi, Baradaran et. al. (2020) and Kolek et. al. (2021) exploring the impact of historical games on attitudes toward history. However, existing scholarship often prioritizes historical video games (Rahimi, Baradaran et. al., 2020; Kolek et. al., 2021; Šisler et. al., 2022), a potentially limited universal appeal. This study argues that the influence of video game extends beyond this specific genre. Notable anime-style fantasy games like Genshin Impact, Arknights and Girl’s Frontline exemplify this trend. Their greater aesthetic and narrative flexibility, compared to historically focused games, broadens appeal while offering an accessible introduction to historical concepts. These games can motivate players to actively research the narrative and world-building. The appearance of dedicated online communities analyzing in-game lore further demonstrates this engagement and stimulates historical curiosity within the fandom. To address this gap, this paper will examine how fantasy video games cultivate historical interest among gamers, specifically investigating their impact on historical learning. Data analyzation from online fan communities on Reddit, Facebook and Instagram, together with existing scholarships, will explore the evolution of historical elements in fantasy video games, correlated with player attitudes to understand how these games influence historical engagement from gamers, including information seeking, discussion and interaction with related contents. Ultimately, by closely analyzing the impact of anime-style fantasy games on gamers’ interest in history, this project will illuminate the often-underestimated potential of video games, beyond the historical genre, as education tools.",
      keywords: [
        "fantasy video game",
        "education potential",
        "learning attitude",
      ],
    },
  },
  {
    id: "bahareh",
    name: "Bahareh Saadatfard",
    role: "Architect, enthusiast of experimental approaches",
    color: "red",
    pronouns: "she/her",
    paper: {
      title: "The affect of materiality and form in urban constructed space",
      subtitle: "The temporal layer of perception in Jahad Metro plaza, Tehran",
      keywords: [
        "metropolis",
        "speed",
        "urban spaces",
        "time perception",
        "architecture",
        "materiality",
        "affect",
        "Jahad Metro plaza",
        "deep mapping",
      ],
      abstract:
        "Metropolises cannot be overlooked, as they have transformed many past aspects of human lived experience in urban environments, or introduced entirely new concepts, fundamentally shaping everyday life in the modern era. One of the most prominent of these concepts is speed. The astonishing acceleration of speed in the past century has compressed time into a flat surface of merely experiencing the present moment at an intensified pace, to the extent that time has lost its continuity and coherence with the past. Modern individuals have lost their sense of self as historical beings, and are threatened by the terror of time (pallasmaa, 2024). The transformation of the concept of speed has consistently challenged the quality of human experience in relation to the surrounding environment, to the extent that the sense of presence in urban spaces has been reduced to a superficial, hurried, and stress-inducing experience. In this context, architecture functions as an intervening medium in the perception of time in a space. The structure of the designed space and the materials are affective in shaping and creating a different level of sensory experience and perception of time, in a way that can evoke a slower and more gradual pace of the past (Hann, 2019).This article aims to revisit an example of urban functionality in the metropolitan area of Tehran, the capital of Iran, to examine the affect of the design and material selection on users’ perception of spatial experience from the perspective of time. The Jahad Metro Plaza project, awarded by the RIBA International Awards for Excellence in 2024, is located in a busy traffic intersection. By employing the deep mapping method, which narrates a section of the layers of urban events occurring around the project at a different pace compared to the internal layers of the project, this paper presents an alternative narrative of the affect materials and design have in creating the experience and perception of time in space, with a rhythm distinct from the urban flow.",
    },
  },
  {
    id: "michal",
    name: "Michal Špitálský",
    role: "Filmmaker, designer",
    color: "grass",
    pronouns: "he/him",
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
