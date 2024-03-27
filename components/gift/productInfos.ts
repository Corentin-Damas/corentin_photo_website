export const possileFrames = {
  gallery: {
    name: "Gallery Frame",
    framed: true,
    desc: "Classic elegant wooden frame. Available with real wood veener and visible grain.",
    tltr: "Classic elegant wooden frame.",
    spec: " Width: 20mm or 40mm, Depth: 30mm",
    color: {
      brown: "Alder brown",
      black: "Black oak",
      oak: "Natural oak",
      white: "Maple white",
    },
    frameSize: {
      std: { mm: 20 },
      large: { mm: 40, modifier: { s: 20, m: 30, l: 40 } },
    },
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        blackAndWitePaper: true,
        modifier: { s: 7, m: 15, l: 30 },
      },
    },
    glass: {
      glossy: {
        name: "Acrylic glass 2mm, glossy",
        desc: "Classic presentation with a layer of acrylic glass on top of the picture",
      },
      matte: {
        name: "Acrylic glass 2mm, matte",
        desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
        modifier: { s: 13, m: 20, l: 40 },
      },
    },
    border: {
      0: {},
      1: { modifier: { s: 8, m: 15, l: 15 } },
      2: { modifier: { s: 15, m: 30, l: 30 } },
      3: { modifier: { s: 20, m: 42, l: 45 } },
      5: { modifier: { s: 35, m: 60, l: 76 } },
      8: { modifier: { s: 65, m: 116, l: 136 } },
      12: { modifier: { s: 97, m: 177, l: 188 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },

  woodPass: {
    name: "Solid Wood Frame With Passe-Partout",
    desc: "Classic elegant wooden frame with a passepartout that add an additional frame for your picture. The distance between the glass and the picture surface is increased and a depth effect is created, which draws even more attention to the picture. ",
    tltr: "Classic elegant wooden frame with a passepartout.",
    spec: " Width: 20mm or 40mm, Depth: 30mm",
    framed: true,
    color: {
      brown: "Alder brown",
      black: "Black oak",
      oak: "Natural oak",
      white: "Maple white",
    },
    passPartoutColor: {
      white: "white",
      black: "black",
    },
    passPartoutSize: {
      small: { size: 3, modifier: { s: -24, m: -18, l: -25 } },
      std: { size: 9 },
      medium: { size: 15, modifier: { s: 26, m: 22 } },
      spec: "Border is in cm, max is 120 x 90",
    },
    paper: {
      matte: {
        name: "Fuji Crystal Archive, matte",
        desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        colorPaper: true,
      },
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },

      fineArt: {
        name: "Hahnemühle FineArt Baryta",
        desc: "Glossy surface, High contrast range and color depth, Greater detail and definition, Excellent archival properties",
        fav: true,
        colorPaper: true,
        blackAndWitePaper: true,
        modifier: { s: 7, m: 19, l: 37 },
      },
      bwMatte: {
        name: "ilford B/W paper, matte",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
        modifier: { s: 6, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
      bwGlossy: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        modifier: { s: 6, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    frameSize: {
      std: { mm: 20 },
      large: { mm: 40, modifier: { s: 22, m: 40, l: 50 } },
    },
    glass: {
      glossy: {
        name: "Glossy float glass",
        desc: "Classic presentation with a layer of acrylic glass on top of the picture",
      },
      matte: {
        name: "Matte float glass",
        desc: "Matte surface reduces reflections and are suitable for rooms with strong light",
        modifier: { s: 7, m: 12, l: 15 },
      },
      museum: {
        name: "Museum glass",
        desc: "Anti-reflective, protection from UV",
        speModifier: {
          16: 5,
          20: 8,
          24: 10,
          30: 18,
          35: 33,
          40: 40,
          50: 66,
          60: 85,
          70: 118,
          75: 125,
          80: 152,
          90: 168,
        },
      },
    },
  },

  artBox: {
    name: "Artbox",
    desc: "The wooden ArtBox frames the photo simply when viewed head-on. Seen from the side, the depth of 35mm give a new original depth to the photo.",
    tltr: "The wooden ArtBox simply and elegantly frames the picture.",
    spec: " Width: 4mm, Depth: 35mm",
    framed: true,
    color: {
      brown: "Alder brown",
      black: "Black oak",
      oak: "Natural oak",
      white: "Maple white",
    },
    frameSize: {
      std: { mm: 4 },
    },
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
        modifier: { s: 7, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    glass: {
      glossy: {
        name: "Acrylic glass 2mm, glossy",
        desc: "Classic presentation with a layer of acrylic glass on top of the picture",
      },
      matte: {
        name: "Acrylic glass 2mm, matte",
        desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
        modifier: { s: 13, m: 20, l: 40 },
      },
    },
    border: {
      0: {},
      1: { modifier: { s: 0, m: 15, l: 15 } },
      2: { modifier: { s: 15, m: 30, l: 30 } },
      3: { modifier: { s: 20, m: 42, l: 45 } },
      5: { modifier: { s: 35, m: 60, l: 76 } },
      8: { modifier: { s: 60, m: 90, l: 130 } },
      12: { modifier: { s: 97, m: 150, l: 180 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },

  floater: {
    name: "Floater Frame",
    desc: "Classic floater frame made of wood. Your motif seems to float due to the gap wetween the motif and the frame.",
    tltr: "Classic floater frame made of wood.",
    spec: " Width: 15mm or 31mm, Depth: 31mm, Shadow gap 7mm",
    framed: true,
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      matte: {
        name: "Fuji Crystal Archive, matte",
        desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
        modifier: { s: 7, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    color: {
      brown: "Alder brown",
      black: "Black oak",
      oak: "Natural oak",
      white: "Maple white",
    },
    frameSize: {
      std: { mm: 15 },
      large: { mm: 31, modifier: { s: 22, m: 44, l: 60 } },
    },
    glass: {
      glossy: {
        name: "Acrylic glass 2mm, glossy",
        desc: "Classic presentation with a layer of acrylic glass on top of the picture",
      },
      matte: {
        name: "Acrylic glass 2mm, matte",
        desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
        modifier: { s: 13, m: 20, l: 40 },
      },
    },
    // border: {
    //   0: {},
    //   1: { modifier: { s: 9, m: 15, l: 15 } },
    //   2: { modifier: { s: 18, m: 30, l: 30 } },
    //   3: { modifier: { s: 30, m: 45, l: 48 } },
    //   5: { modifier: { s: 60, m: 70, l: 80 } },
    //   8: { modifier: { s: 90, m: 100, l: 125 } },
    //   12: { modifier: { s: 124, m: 144, l: 180 } },
    //   spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    // },
  },

  dibon: {
    name: "Aluminum Dibond",
    framed: false,
    desc: "This a way to present the fine art prints in a clean and pure way. Long-lasting with a UV protective laminate",
    tltr: "Present the prints in a clean and pure way",
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      matte: {
        name: "Fuji Crystal Archive, matte",
        desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        modifier: { s: 7, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    glass: {
      matte: {
        name: "Matte Lamination",
        desc: "Matte surface reduces reflections and are suitable for rooms with strong light",
      },
    },
    hanging: {
      nothing: {
        desc: "no hanging elements",
        modifier: { s: -4, m: -20, l: -40 },
      },
      hangingElements: { s: "hook", m: "aluminiums rails" },
    },
    border: {
      0: {},
      1: { modifier: { s: 3, m: 8, l: 10 } },
      2: { modifier: { s: 5, m: 15, l: 20 } },
      3: { modifier: { s: 9, m: 20, l: 25 } },
      5: { modifier: { s: 18, m: 40, l: 45 } },
      8: { modifier: { s: 35, m: 60, l: 85 } },
      12: { modifier: { s: 57, m: 92, l: 105 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },

  fineArtDibon: {
    name: "Fine Art Dibond",
    framed: false,
    desc: "This a way to present the fine art prints in a clean and pure way, Just the print on the wall an nothing else. Constituted of four layers, the print, two aluminium layers to keep the presentation flat and clean and the core, a Black polythylene core. No frame, No glass. ",
    tltr: "Present the prints in a clean and pure way with a more refined paper",
    warning:
      "Please be aware that the paper surface is unsealed. This allows the fine art print to unfold its full effect. Please treat the surface with the utmost care accordingly.",
    paper: {
      fineArt: {
        name: "Hahnemühle FineArt Baryta",
        desc: "Glossy surface, High contrast range and color depth, Greater detail and definition, Excellent archival properties",
        fav: true,
        colorPaper: true,
        blackAndWitePaper: true,
      },
    },
    hanging: {
      nothing: {
        desc: "no hanging elements",
        modifier: { s: -4, m: -25, l: -45 },
      },
      hangingElements: { s: "hook", m: "aluminiums rails" },
    },
    border: {
      0: {},
      1: { modifier: { s: 3, m: 10, l: 15 } },
      2: { modifier: { s: 12, m: 20, l: 25 } },
      3: { modifier: { s: 18, m: 27, l: 35 } },
      5: { modifier: { s: 27, m: 50, l: 60 } },
      8: { modifier: { s: 45, m: 80, l: 115 } },
      12: { modifier: { s: 76, m: 120, l: 145 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },

  acrylicGlassGlossy: {
    name: "Under glossy acrylic glass",
    framed: false,

    desc: "The photo is set behind a protective glossy acrylic glass with a solid aluminium dibond backing. Acrylic glass is light, shatterproof and resistant to temperature fluctuations.",
    tltr: "The photo is set behind a protective glossy acrylic glass",
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        modifier: { s: 7, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    glassThickness: {
      s: { mm: 2 },
      m: { mm: 4, modifier: { s: 3, m: 10, l: 20 } },
      l: { mm: 6, modifier: { s: 5, m: 25, l: 55 } },
    },
    hanging: {
      nothing: {
        desc: "no hanging elements",
        modifier: { s: -4, m: -25, l: -45 },
      },
      hangingElements: { s: "hook", m: "aluminiums rails" },
    },
    border: {
      0: {},
      1: { modifier: { s: 3, m: 13, l: 15 } },
      2: { modifier: { s: 13, m: 27, l: 28 } },
      3: { modifier: { s: 22, m: 40, l: 40 } },
      5: { modifier: { s: 40, m: 52, l: 70 } },
      8: { modifier: { s: 62, m: 80, l: 120 } },
      12: { modifier: { s: 90, m: 130, l: 160 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },

  acrylicGlassMatte: {
    name: "Under matte acrylic glass",
    framed: false,
    tltr: "The photo is set behind a protective matte acrylic glass",

    desc: "The photo is set behind a protective glossy acrylic glass with a solid aluminium dibond backing. Acrylic glass is light, shatterproof and resistant to temperature fluctuations. The matte glass reduce reflexions and glare.",
    paper: {
      glossy: {
        name: "Fuji Crystal Archive, glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        colorPaper: true,
      },
      bAndW: {
        name: "ilford B/W paper, glossy",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        modifier: { s: 7, m: 15, l: 30 },
        blackAndWitePaper: true,
      },
    },
    glassThickness: {
      s: { mm: 2 },
      m: { mm: 4, modifier: { s: 3, m: 10, l: 20 } },
      l: { mm: 6, modifier: { s: 5, m: 25, l: 55 } },
    },
    hanging: {
      nothing: {
        desc: "no hanging elements",
        modifier: { s: -4, m: -25, l: -45 },
      },
      hangingElements: { s: "hook", m: "aluminiums rails" },
    },
    border: {
      0: {},
      1: { modifier: { s: 7, m: 17, l: 20 } },
      2: { modifier: { s: 17, m: 33, l: 40 } },
      3: { modifier: { s: 30, m: 50, l: 55 } },
      5: { modifier: { s: 50, m: 60, l: 83 } },
      8: { modifier: { s: 78, m: 88, l: 140 } },
      12: { modifier: { s: 107, m: 150, l: 195 } },
      spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
    },
  },
  simplePrint: {
    name: "Simple print",
    framed: false,
    paper: {
      glossy: {
        name: "Fuji crystal archive glossy",
        desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        tltr: "Standard quality colored glossy paper",
        colorPaper: true,
        protection: {
          laminationGlossy: {
            name: "Protective glossy lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
        },
        border: {
          0: {},
          1: { modifier: { s: 1, m: 2, l: 3 } },
          2: { modifier: { s: 1, m: 3, l: 4 } },
          3: { modifier: { s: 1, m: 5, l: 7 } },
          5: { modifier: { s: 3, m: 7, l: 10 } },
          8: { modifier: { s: 3, m: 12, l: 15 } },
          12: { modifier: { s: 5, m: 18, l: 25 } },
          spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
        },
      },
      matte: {
        name: "Fuji Crystal Archive matte",
        tltr: "Standard quality colored matte paper",
        desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        colorPaper: true,
        protection: {
          laminationGlossy: {
            name: "Protective glossy lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
        },
        border: {
          0: {},
          1: { modifier: { s: 1, m: 2, l: 3 } },
          2: { modifier: { s: 1, m: 3, l: 4 } },
          3: { modifier: { s: 1, m: 5, l: 7 } },
          5: { modifier: { s: 3, m: 7, l: 10 } },
          8: { modifier: { s: 3, m: 12, l: 15 } },
          12: { modifier: { s: 5, m: 18, l: 25 } },
          spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
        },
      },
      fineArt: {
        name: "Hahnemühle FineArt Baryta",
        tltr: "Premimum quality colored paper, my favorite",
        desc: "Glossy surface, High contrast range and color depth, Greater detail and definition, Excellent archival properties",
        colorPaper: true,
        blackAndWitePaper: true,
        fav: true,
        border: {
          0: {},
          1: { modifier: { s: 1, m: 2, l: 5 } },
          2: { modifier: { s: 2, m: 5, l: 7 } },
          3: { modifier: { s: 4, m: 7, l: 12 } },
          5: { modifier: { s: 6, m: 12, l: 20 } },
          8: { modifier: { s: 8, m: 22, l: 32 } },
          12: { modifier: { s: 16, m: 36, l: 52 } },
          spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
        },
      },
      bAndWGlossy: {
        name: "ilford glossy black and white paper",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
        tltr: "Standard quality glossy paper for black and white",
        blackAndWitePaper: true,
        protection: {
          laminationGlossy: {
            name: "Protective glossy lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
          laminationMatte: {
            name: "Protective Matte lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
        },
        border: {
          0: {},
          1: { modifier: { s: 1, m: 2, l: 5 } },
          2: { modifier: { s: 1, m: 4, l: 6 } },
          3: { modifier: { s: 2, m: 7, l: 12 } },
          5: { modifier: { s: 5, m: 12, l: 20 } },
          8: { modifier: { s: 8, m: 20, l: 32 } },
          12: { modifier: { s: 12, m: 25, l: 50 } },
          spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
        },
      },
      bAndWMatte: {
        name: "ilford matte black and white paper",
        tltr: "Standard quality matte paper for black and white",
        desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and with softer contrasts",
        blackAndWitePaper: true,
        protection: {
          laminationGlossy: {
            name: "Protective glossy lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
          laminationMatte: {
            name: "Protective Matte lamination",
            modifier: { s: 1, m: 4, l: 8 },
          },
        },
        border: {
          0: {},
          1: { modifier: { s: 1, m: 2, l: 5 } },
          2: { modifier: { s: 1, m: 4, l: 6 } },
          3: { modifier: { s: 2, m: 7, l: 12 } },
          5: { modifier: { s: 5, m: 12, l: 20 } },
          8: { modifier: { s: 8, m: 20, l: 32 } },
          12: { modifier: { s: 12, m: 25, l: 50 } },
          spec: "Border is in cm, dosn't change the size of the image, it influence only the paper size",
        },
      },
    },
  },
};
