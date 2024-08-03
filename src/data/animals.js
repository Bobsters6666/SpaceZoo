const animals = [
  {
    name: "Kiwi",
    photoUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV8yNV9hZXN0aGV0aWNfcGhvdG9ncmFwaHlfb2ZfYV9raXdpX2JpcmRfYWVzdGhldF8xYWIwNjQ5Ny04Y2I0LTRlYTMtOTdmNS0wZTBlYzFkYTZmZWRfMS5qcGc.jpg",
    description:
      "The kiwi is a flightless bird native to New Zealand, known for its long beak and nocturnal habits.",
    funFact:
      "Kiwis lay the largest eggs in relation to their body size of any bird species in the world.",
    rarity: "Rare",
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
    rarity: "Epic",
    stats: {
      health: 70,
      attack: 40,
    },
  },
  {
    name: "Tuatara",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Henry_at_Invercargill.jpg",
    description:
      "The tuatara is a reptile endemic to New Zealand, often referred to as a 'living fossil' due to its ancient lineage.",
    funFact:
      "Tuatara have a third 'parietal eye' on the top of their head, which is sensitive to light.",
    rarity: "Legendary",
    stats: {
      health: 80,
      attack: 20,
    },
  },
  {
    name: "Yellow-eyed Penguin",
    photoUrl:
      "https://nzbirdsonline.org.nz/sites/all/files/1200119Yellow-eyed%20Penguin-0554_0.jpg",
    description:
      "The yellow-eyed penguin is a penguin species native to New Zealand, known for its distinctive yellow eyes.",
    funFact:
      "Yellow-eyed penguins are one of the rarest penguin species in the world.",
    rarity: "Rare",
    stats: {
      health: 60,
      attack: 25,
    },
  },
  {
    name: "New Zealand Fur Seal",
    photoUrl:
      "https://images.nzgeo.com/1970/01/54_Seals_03-865x1300.jpg",
    description:
      "The New Zealand fur seal is a species of fur seal found along the coasts of New Zealand and southern Australia.",
    funFact:
      "Fur seals can dive deeper and longer than any other fur seal species, reaching depths of over 200 meters.",
    rarity: "Uncommon",
    stats: {
      health: 65,
      attack: 35,
    },
  },
  {
    name: "Fantail",
    photoUrl:
      "https://media.istockphoto.com/id/1490522946/photo/grey-fantail.jpg?s=612x612&w=0&k=20&c=9H5SkWzF2Tip9z7ITEPWGWNxl0z6ihDESHafnSDsNVM=",
    description:
      "The fantail is a small insectivorous bird native to New Zealand, known for its distinctive fan-shaped tail.",
    funFact:
      "Fantails are known for their friendly and inquisitive nature, often approaching humans.",
    rarity: "Common",
    stats: {
      health: 40,
      attack: 20,
    },
  },
  {
    name: "Weta",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgn4m2h5l6RG3b959CRa7faw7aQzvmfvKJA&s",
    description:
      "Weta are large insects native to New Zealand, known for their large size and heavy build.",
    funFact: "Some species of weta can weigh more than a sparrow.",
    rarity: "Epic",
    stats: {
      health: 55,
      attack: 50,
    },
  },
  {
    name: "Kākāpō",
    photoUrl:
      "https://i.redd.it/c2a8ter5xzb61.jpg",
    description:
      "The kākāpō is a large, nocturnal, flightless parrot endemic to New Zealand.",
    funFact:
      "Kākāpōs are the world's heaviest parrots and have a unique booming call.",
    rarity: "Legendary",
    stats: {
      health: 90,
      attack: 15,
    },
  },
  {
    name: "New Zealand Falcon",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/NZ_Falcon_-_Karearea_02.JPG/800px-NZ_Falcon_-_Karearea_02.JPG",
    description:
      "The New Zealand falcon, or kārearea, is a bird of prey endemic to New Zealand.",
    funFact:
      "New Zealand falcons are the only remaining species of falcon in the country.",
    rarity: "Rare",
    stats: {
      health: 60,
      attack: 70,
    },
  },
  {
    name: "Hector's Dolphin",
    photoUrl:
      "https://st4.depositphotos.com/19085394/38114/i/450/depositphotos_381146424-stock-photo-hector-dolphin-banks-peninsula-new.jpg",
    description:
      "Hector's dolphin is the smallest and rarest dolphin species, found only in New Zealand waters.",
    funFact:
      "Hector's dolphins can be identified by their distinctive rounded dorsal fin.",
    rarity: "Epic",
    stats: {
      health: 75,
      attack: 40,
    },
  },
  {
    name: "Morepork",
    photoUrl:
      "https://media.istockphoto.com/id/1021526612/photo/new-zealand-ruru.jpg?s=612x612&w=0&k=20&c=M7YMjWSFQ_Tut0c26Q405ARfOPpojpSs4dAXt1lEXLY=",
    description: "The morepork, or ruru, is a small owl native to New Zealand.",
    funFact: "Moreporks are named for their distinctive 'more-pork' call.",
    rarity: "Uncommon",
    stats: {
      health: 50,
      attack: 30,
    },
  },
  {
    name: "Tūī",
    photoUrl:
      "https://media.istockphoto.com/id/1221976479/photo/close-up-of-a-new-zealand-tui-bird.jpg?s=612x612&w=0&k=20&c=mEWtxwSGBvtSovImK6asfdPzR7n3RmG_uhUcKvZYU4o=",
    description:
      "The tūī is a bird native to New Zealand known for its iridescent plumage and unique song.",
    funFact:
      "Tūīs are excellent mimics and can imitate human speech and other bird calls.",
    rarity: "Common",
    stats: {
      health: 45,
      attack: 25,
    },
  },
  {
    name: "Blue Duck",
    photoUrl:
      "https://nzbirdsonline.org.nz/sites/all/files/120084Blue%20Duck%20%28Profile%29.jpg",
    description:
      "The blue duck, or whio, is a river specialist found only in New Zealand.",
    funFact:
      "Blue ducks have special adaptations for living in fast-flowing rivers, including large webbed feet.",
    rarity: "Rare",
    stats: {
      health: 65,
      attack: 30,
    },
  },
  {
    name: "Kākā",
    photoUrl:
      "https://nzbirdsonline.org.nz/sites/all/files/1200469Kaka4.jpg",
    description:
      "The kākā is a forest parrot endemic to New Zealand, known for its sociable nature.",
    funFact:
      "Kākās are known to peel bark off trees to feed on the sap underneath.",
    rarity: "Uncommon",
    stats: {
      health: 55,
      attack: 35,
    },
  },
  {
    name: "North Island Robin",
    photoUrl:
      "https://nzbirdsonline.org.nz/sites/all/files/470574Petroica-australis_4318.jpg",
    description:
      "The North Island robin is a small bird native to the North Island of New Zealand.",
    funFact:
      "These robins are known for their curious nature and will often approach humans.",
    rarity: "Common",
    stats: {
      health: 40,
      attack: 20,
    },
  },
];


export default animals;