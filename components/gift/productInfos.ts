export const possileFrames = {
    gallery: {
      name: "Gallery Frame",
      desc: "Classic elegant wooden frame. Available with real wood veener and visible grain.",
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
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
          modifier: { s: 7, m: 15, l: 30 },
        },
      },
      glass: {
        glossy: {
          name: "Acrylic glass 2mm, glossy",
          desc: "Classic presentation",
        },
        matte: {
          name: "Acrylic glass 2mm, matte",
          desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
          modifier: { s: 13, m: 20, l: 40 },
        },
      },
      boder: {
        0: {},
        1: { modifier: { s: 8, m: 15, l: 15 } },
        2: { modifier: { s: 15, m: 30, l: 30 } },
        3: { modifier: { s: 20, m: 42, l: 45 } },
        5: { modifier: { s: 35, m: 60, l: 76 } },
        8: { modifier: { s: 65, m: 116, l: 136 } },
        12: { modifier: { s: 97, m: 177, l: 188 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },

    woodPass: {
      name: "Solid Wood Frame With Passe-Partout",
      desc: "Classic elegant wooden frame. Available with real wood veener and visible grain. A passepartout is an additional frame for your picture. The distance between the glass and the picture surface is increased and a depth effect is created, which draws even more attention to the picture. ",
      spec: " Width: 20mm or 40mm, Depth: 30mm",
      color: {
        brown: "Alder brown",
        black: "Black oak",
        oak: "Natural oak",
        white: "Maple white",
      },
      passPartoutColor: {
        black: "black",
        white: "white",
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
        },
        glossy: {
          name: "Fuji Crystal Archive, glossy",
          desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        },

        fineArt: {
          name: "Hahnemühle FineArt Baryta",
          desc: "Glossy surface, High contrast range and color depth, Greater detail and definition, Excellent archival properties",
          fav: true,
          modifier: { s: 7, m: 19, l: 37 },
        },
        bwMatte: {
          name: "ilford B/W papern matte",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
          modifier: { s: 6, m: 15, l: 30 },
        },
        bwGlossy: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
          modifier: { s: 6, m: 15, l: 30 },
        },
      },
      frameSize: {
        std: { mm: 20 },
        large: { mm: 40, modifier: { s: 22, m: 40, l: 50 } },
      },
      glass: {
        glossy: { name: "Glossy float glass", desc: "Classic presentation" },
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

    ArtBox: {
      name: "Artbox",
      desc: "The wooden ArtBox frames the photo simply when viewed head-on. Seen from the side, the depth of 35mm give a new original depth to the photo.",
      spec: " Width: 4mm, Depth: 35mm",
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
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
          modifier: { s: 7, m: 15, l: 30 },
        },
      },
      glass: {
        glossy: {
          name: "Acrylic glass 2mm, glossy",
          desc: "Classic presentation",
        },
        matte: {
          name: "Acrylic glass 2mm, matte",
          desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
          modifier: { s: 13, m: 20, l: 40 },
        },
      },
      boder: {
        0: {},
        1: { modifier: { s: 0, m: 15, l: 15 } },
        2: { modifier: { s: 15, m: 30, l: 30 } },
        3: { modifier: { s: 20, m: 42, l: 45 } },
        5: { modifier: { s: 35, m: 60, l: 76 } },
        8: { modifier: { s: 60, m: 90, l: 130 } },
        12: { modifier: { s: 97, m: 150, l: 180 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },

    floater: {
      name: "Floater Frame",
      desc: "Classic floater fraome made of wood. Your motif seems to float due to the gap wetween the motif and the frame.",
      spec: " Width: 15mm or 31mm, Depth: 31mm, Shadow gap 7mm",
      paper: {
        glossy: {
          name: "Fuji Crystal Archive, glossy",
          desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        },
        matte: {
          name: "Fuji Crystal Archive, matte",
          desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Matte surface that reduce reflexions and subtle silky sheen",
          modifier: { s: 7, m: 15, l: 30 },
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
          desc: "Classic presentation",
        },
        matte: {
          name: "Acrylic glass 2mm, matte",
          desc: "Compared to the classic presentation with glossy glass, the matte glass reflect's less light ",
          modifier: { s: 13, m: 20, l: 40 },
        },
      },
      boder: {
        0: {},
        1: { modifier: { s: 9, m: 15, l: 15 } },
        2: { modifier: { s: 18, m: 30, l: 30 } },
        3: { modifier: { s: 30, m: 45, l: 48 } },
        5: { modifier: { s: 60, m: 70, l: 80 } },
        8: { modifier: { s: 90, m: 100, l: 125 } },
        12: { modifier: { s: 124, m: 144, l: 180 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },

    dibon: {
      name: "Aluminum Dibond",
      desc: "This a way to present the fine art prints in a clean and pure way. Long-lasting with a UV protective laminate",
      paper: {
        glossy: {
          name: "Fuji Crystal Archive, glossy",
          desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        },
        matte: {
          name: "Fuji Crystal Archive, matte",
          desc: "Neutral base tone, matte surface that reduce reflexions and with softer colors",
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
          modifier: { s: 7, m: 15, l: 30 },
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
      boder: {
        0: {},
        1: { modifier: { s: 3, m: 8, l: 10 } },
        2: { modifier: { s: 5, m: 15, l: 20 } },
        3: { modifier: { s: 9, m: 20, l: 25 } },
        5: { modifier: { s: 18, m: 40, l: 45 } },
        8: { modifier: { s: 35, m: 60, l: 85 } },
        12: { modifier: { s: 57, m: 92, l: 105 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },

    fineArtDibon: {
      name: "fine Art Dibond",
      desc: "This a way to present the fine art prints in a clean and pure way, Just the print on the wall an nothing else. Constituted of four layers, the print, two aluminium layers to keep the presentation flat and clean and the core, a Black polythylene core. No frame, No glass. ",
      warning:
        "Please be aware that the paper surface is unsealed. This allows the fine art print to unfold its full effect. Please treat the surface with the utmost care accordingly.",
      paper: {
        fineArt: {
          name: "Hahnemühle FineArt Baryta",
          desc: "Glossy surface, High contrast range and color depth, Greater detail and definition, Excellent archival properties",
          fav: true,
        },
      },
      hanging: {
        nothing: {
          desc: "no hanging elements",
          modifier: { s: -4, m: -25, l: -45 },
        },
        hangingElements: { s: "hook", m: "aluminiums rails" },
      },
      boder: {
        0: {},
        1: { modifier: { s: 3, m: 10, l: 15 } },
        2: { modifier: { s: 12, m: 20, l: 25 } },
        3: { modifier: { s: 18, m: 27, l: 35 } },
        5: { modifier: { s: 27, m: 50, l: 60 } },
        8: { modifier: { s: 45, m: 80, l: 115 } },
        12: { modifier: { s: 76, m: 120, l: 145 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },

    acrylicGlassGlossy: {
      name: "Photo print under glossy acrylic glass",
      desc: "The photo is set behind a protective glossy acrylic glass with a solid aluminium dibond backing. Acrylic glass is light, shatterproof and resistant to temperature fluctuations.",
      paper: {
        glossy: {
          name: "Fuji Crystal Archive, glossy",
          desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
          modifier: { s: 7, m: 15, l: 30 },
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
      boder: {
        0: {},
        1: { modifier: { s: 3, m: 13, l: 15 } },
        2: { modifier: { s: 13, m: 27, l: 28 } },
        3: { modifier: { s: 22, m: 40, l: 40 } },
        5: { modifier: { s: 40, m: 52, l: 70 } },
        8: { modifier: { s: 62, m: 80, l: 120 } },
        12: { modifier: { s: 90, m: 130, l: 160 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },
    
    acrylicGlassMatte: {
      name: "Photo print under matte acrylic glass",
      desc: "The photo is set behind a protective glossy acrylic glass with a solid aluminium dibond backing. Acrylic glass is light, shatterproof and resistant to temperature fluctuations. The matte glass reduce reflexions and glare.",
      paper: {
        glossy: {
          name: "Fuji Crystal Archive, glossy",
          desc: "Neutral base tone, glossy surface that ensure bright colors and high contrasts",
        },
        bAndW: {
          name: "ilford B/W paper, glossy",
          desc: "Pure black-and-white paper that provides rich blacks and bright whites, without color casts. Glossy surface particularly emphasizes the constasts of the motifs",
          modifier: { s: 7, m: 15, l: 30 },
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
      boder: {
        0: {},
        1: { modifier: { s: 7, m: 17, l: 20 } },
        2: { modifier: { s: 17, m: 33, l: 40 } },
        3: { modifier: { s: 30, m: 50, l: 55 } },
        5: { modifier: { s: 50, m: 60, l: 83 } },
        8: { modifier: { s: 78, m: 88, l: 140 } },
        12: { modifier: { s: 107, m: 150, l: 195 } },
        spec: "Border is in cm, dosn't change the size of the image, it influence only on the size of the frame",
      },
    },
}