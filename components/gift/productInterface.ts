export interface allPossileFrames {
    gallery: Gallery;
    woodPass: WoodPass;
    ArtBox: ArtBox;
    floater: Floater;
    dibon: Dibon;
    fineArtDibon: FineArtDibon;
    acrylicGlassGlossy: AcrylicGlassGlossyOrAcrylicGlassMatte;
    acrylicGlassMatte: AcrylicGlassGlossyOrAcrylicGlassMatte;
    simplePrint: SimplePrint;
  }
  export interface Gallery {
    name: string;
    framed: boolean;
    desc: string;
    tltr: string;
    spec: string;
    color: Color;
    frameSize: FrameSize;
    paper: Paper;
    glass: Glass;
    boder: Boder;
  }
  export interface Color {
    brown: string;
    black: string;
    oak: string;
    white: string;
  }
  export interface FrameSize {
    std: StdOrS;
    large: LargeOrMOrL;
  }
  export interface StdOrS {
    mm: number;
  }
  export interface LargeOrMOrL {
    mm: number;
    modifier: Modifier;
  }
  export interface Modifier {
    s: number;
    m: number;
    l: number;
  }
  export interface Paper {
    glossy: GlossyOrMatte;
    bAndW: BAndWOrMatteOrBwMatteOrBwGlossy;
  }
  export interface GlossyOrMatte {
    name: string;
    desc: string;
  }
  export interface BAndWOrMatteOrBwMatteOrBwGlossy {
    name: string;
    desc: string;
    modifier: Modifier;
  }
  export interface Glass {
    glossy: GlossyOrMatte;
    matte: BAndWOrMatteOrBwMatteOrBwGlossy;
  }
  export interface Boder {
    0: noBorder;
    1: borderSize;
    2: borderSize;
    3: borderSize;
    5: borderSize;
    8: borderSize;
    12: borderSize;
    spec: string;
  }
  export interface noBorder {
  }
  export interface borderSize {
    modifier: Modifier;
  }
  export interface WoodPass {
    name: string;
    desc: string;
    tltr: string;
    spec: string;
    framed: boolean;
    color: Color;
    passPartoutColor: PassPartoutColor;
    passPartoutSize: PassPartoutSize;
    paper: Paper1;
    frameSize: FrameSize;
    glass: Glass1;
  }
  export interface PassPartoutColor {
    black: string;
    white: string;
  }
  export interface PassPartoutSize {
    small: Small;
    std: Std;
    medium: Medium;
    spec: string;
  }
  export interface Small {
    size: number;
    modifier: Modifier;
  }
  export interface Std {
    size: number;
  }
  export interface Medium {
    size: number;
    modifier: Modifier1;
  }
  export interface Modifier1 {
    s: number;
    m: number;
  }
  export interface Paper1 {
    matte: GlossyOrMatte;
    glossy: GlossyOrMatte;
    fineArt: FineArt;
    bwMatte: BAndWOrMatteOrBwMatteOrBwGlossy;
    bwGlossy: BAndWOrMatteOrBwMatteOrBwGlossy;
  }
  export interface FineArt {
    name: string;
    desc: string;
    fav: boolean;
    modifier: Modifier;
  }
  export interface Glass1 {
    glossy: GlossyOrMatte;
    matte: BAndWOrMatteOrBwMatteOrBwGlossy;
    museum: Museum;
  }
  export interface Museum {
    name: string;
    desc: string;
    speModifier: SpeModifier;
  }
  export interface SpeModifier {
    16: number;
    20: number;
    24: number;
    30: number;
    35: number;
    40: number;
    50: number;
    60: number;
    70: number;
    75: number;
    80: number;
    90: number;
  }
  export interface ArtBox {
    name: string;
    desc: string;
    tltr: string;
    spec: string;
    framed: boolean;
    color: Color;
    frameSize: FrameSize1;
    paper: Paper;
    glass: Glass;
    boder: Boder;
  }
  export interface FrameSize1 {
    std: StdOrS;
  }
  export interface Floater {
    name: string;
    desc: string;
    tltr: string;
    spec: string;
    framed: boolean;
    paper: Paper2;
    color: Color;
    frameSize: FrameSize;
    glass: Glass;
    boder: Boder;
  }
  export interface Paper2 {
    glossy: GlossyOrMatte;
    matte: GlossyOrMatte;
    bAndW: BAndWOrMatteOrBwMatteOrBwGlossy;
  }
  export interface Dibon {
    name: string;
    framed: boolean;
    desc: string;
    tltr: string;
    paper: Paper2;
    glass: Glass2;
    hanging: Hanging;
    boder: Boder;
  }
  export interface Glass2 {
    matte: GlossyOrMatte;
  }
  export interface Hanging {
    nothing: Nothing;
    hangingElements: HangingElements;
  }
  export interface Nothing {
    desc: string;
    modifier: Modifier;
  }
  export interface HangingElements {
    s: string;
    m: string;
  }
  export interface FineArtDibon {
    name: string;
    framed: boolean;
    desc: string;
    tltr: string;
    warning: string;
    paper: Paper3;
    hanging: Hanging;
    boder: Boder;
  }
  export interface Paper3 {
    fineArt: FineArt1;
  }
  export interface FineArt1 {
    name: string;
    desc: string;
    fav: boolean;
  }
  export interface AcrylicGlassGlossyOrAcrylicGlassMatte {
    name: string;
    framed: boolean;
    desc: string;
    tltr: string;
    paper: Paper;
    glassThickness: GlassThickness;
    hanging: Hanging;
    boder: Boder;
  }
  export interface GlassThickness {
    s: StdOrS;
    m: LargeOrMOrL;
    l: LargeOrMOrL;
  }
  export interface SimplePrint {
    name: string;
    framed: boolean;
    paper: Paper4;
  }
  export interface Paper4 {
    glossy: Glossy;
    matte: Matte;
    fineArt: FineArt2;
    bAndWGlossy: BAndWGlossyOrBAndWMatte;
    bAndWMatte: BAndWGlossyOrBAndWMatte;
  }
  export interface Glossy {
    name: string;
    desc: string;
    tltr: string;
    protection: Protection;
    boder: Boder;
  }
  export interface Protection {
    spec: string;
    modifier: Modifier;
  }
  export interface Matte {
    name: string;
    tltr: string;
    desc: string;
    protection: Protection1;
    boder: Boder;
  }
  export interface Protection1 {
    laminationGlossy: LaminationGlossyOrLaminationMatte;
  }
  export interface LaminationGlossyOrLaminationMatte {
    name: string;
    modifier: Modifier;
  }
  export interface FineArt2 {
    name: string;
    tltr: string;
    desc: string;
    fav: boolean;
    boder: Boder;
  }
  export interface BAndWGlossyOrBAndWMatte {
    name: string;
    desc: string;
    tltr: string;
    protection: Protection2;
    boder: Boder;
  }
  export interface Protection2 {
    laminationGlossy: LaminationGlossyOrLaminationMatte;
    laminationMatte: LaminationGlossyOrLaminationMatte;
  }
  