const animals = [
  {
    name: "Kiwi",
    photoUrl:
      "https://c4.wallpaperflare.com/wallpaper/102/652/1023/animal-kiwi-bird-wallpaper-preview.jpg",
    description:
      "The kiwi is a flightless bird native to New Zealand, known for its long beak and nocturnal habits.",
    funFact:
      "Kiwis lay the largest eggs in relation to their body size of any bird species in the world.",
    rarity: "rare",
    stats: {
      health: 50,
      attack: 30,
    },
  },
  {
    name: "Kea",
    photoUrl:
      "https://wallpaper.forfun.com/fetch/43/439412f7e3cb976f7a29362fad06838f.jpeg",
    description:
      "The kea is a large parrot species native to the South Island of New Zealand, known for its intelligence and curiosity.",
    funFact: "Keas are known to use tools and solve complex puzzles.",
    rarity: "epic",
    stats: {
      health: 70,
      attack: 40,
    },
  },
  {
    name: "Tuatara",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tuatara.jpg",
    description:
      "The tuatara is a reptile endemic to New Zealand, often referred to as a 'living fossil' due to its ancient lineage.",
    funFact:
      "Tuatara have a third 'parietal eye' on the top of their head, which is sensitive to light.",
    rarity: "legendary",
    stats: {
      health: 80,
      attack: 20,
    },
  },
  {
    name: "Yellow-eyed Penguin",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Yellow-eyed_Penguin_Caterina_Pond.jpg",
    description:
      "The yellow-eyed penguin is a penguin species native to New Zealand, known for its distinctive yellow eyes.",
    funFact:
      "Yellow-eyed penguins are one of the rarest penguin species in the world.",
    rarity: "rare",
    stats: {
      health: 60,
      attack: 25,
    },
  },
  {
    name: "New Zealand Fur Seal",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Arctocephalus_forsteri_-_Kaikoura_Coast.jpg",
    description:
      "The New Zealand fur seal is a species of fur seal found along the coasts of New Zealand and southern Australia.",
    funFact:
      "Fur seals can dive deeper and longer than any other fur seal species, reaching depths of over 200 meters.",
    rarity: "uncommon",
    stats: {
      health: 65,
      attack: 35,
    },
  },
  {
    name: "Fantail",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Piwakawaka.jpg",
    description:
      "The fantail is a small insectivorous bird native to New Zealand, known for its distinctive fan-shaped tail.",
    funFact:
      "Fantails are known for their friendly and inquisitive nature, often approaching humans.",
    rarity: "common",
    stats: {
      health: 40,
      attack: 20,
    },
  },
  {
    name: "Weta",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Weta_Cave.jpg",
    description:
      "Weta are large insects native to New Zealand, known for their large size and heavy build.",
    funFact: "Some species of weta can weigh more than a sparrow.",
    rarity: "epic",
    stats: {
      health: 55,
      attack: 50,
    },
  },
  {
    name: "Kākāpō",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Strigops_habroptilus.jpg",
    description:
      "The kākāpō is a large, nocturnal, flightless parrot endemic to New Zealand.",
    funFact:
      "Kākāpōs are the world's heaviest parrots and have a unique booming call.",
    rarity: "legendary",
    stats: {
      health: 90,
      attack: 15,
    },
  },
  {
    name: "New Zealand Falcon",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/New_Zealand_falcon.jpg",
    description:
      "The New Zealand falcon, or kārearea, is a bird of prey endemic to New Zealand.",
    funFact:
      "New Zealand falcons are the only remaining species of falcon in the country.",
    rarity: "rare",
    stats: {
      health: 60,
      attack: 70,
    },
  },
  {
    name: "Hector's Dolphin",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/HectorsDolphin.jpg",
    description:
      "Hector's dolphin is the smallest and rarest dolphin species, found only in New Zealand waters.",
    funFact:
      "Hector's dolphins can be identified by their distinctive rounded dorsal fin.",
    rarity: "epic",
    stats: {
      health: 75,
      attack: 40,
    },
  },
  {
    name: "Morepork",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Ruru_-_nz_morepork.jpg",
    description: "The morepork, or ruru, is a small owl native to New Zealand.",
    funFact: "Moreporks are named for their distinctive 'more-pork' call.",
    rarity: "uncommon",
    stats: {
      health: 50,
      attack: 30,
    },
  },
  {
    name: "Tūī",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Tui_%28bird%29.JPG",
    description:
      "The tūī is a bird native to New Zealand known for its iridescent plumage and unique song.",
    funFact:
      "Tūīs are excellent mimics and can imitate human speech and other bird calls.",
    rarity: "common",
    stats: {
      health: 45,
      attack: 25,
    },
  },
  {
    name: "Blue Duck",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Hymenolaimus_malacorhynchos_-Blue_Duck_-NZ.jpg",
    description:
      "The blue duck, or whio, is a river specialist found only in New Zealand.",
    funFact:
      "Blue ducks have special adaptations for living in fast-flowing rivers, including large webbed feet.",
    rarity: "rare",
    stats: {
      health: 65,
      attack: 30,
    },
  },
  {
    name: "Kākā",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Kaka_%28Nestor_meridionalis%29_-feeding_on_a_tree-8.jpg",
    description:
      "The kākā is a forest parrot endemic to New Zealand, known for its sociable nature.",
    funFact:
      "Kākās are known to peel bark off trees to feed on the sap underneath.",
    rarity: "uncommon",
    stats: {
      health: 55,
      attack: 35,
    },
  },
  {
    name: "North Island Robin",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/North_Island_robin_%28Petroica_longipes%29.JPG",
    description:
      "The North Island robin is a small bird native to the North Island of New Zealand.",
    funFact:
      "These robins are known for their curious nature and will often approach humans.",
    rarity: "common",
    stats: {
      health: 40,
      attack: 20,
    },
  },
];


export default animals;