type pictureInfoType = {
  name: string;
  WidthPix: number;
  heightPix: number;
  WidthCM: number;
  heightCM: number;
  format: string;
  film: boolean;
};
type productInfoType = {
  id: string;
  format: string;
  bordLarge_16: number;
  bordLarge_20: number;
  bordLarge_24: number;
  bordLarge_30: number;
  bordLarge_35: number;
  bordLarge_40: number;
  bordLarge_50: number;
  bordLarge_60: number;
  bordLarge_70: number;
  bordLarge_75: number;
  bordLarge_80: number;
  bordLarge_90: number;
};

type productType = {
  name: string;
  framed: boolean;
  desc: string;
  tltr: string;
  spec?: string;
  warning?: string;
  fav?: boolean;
  colorPaper?: boolean;
  blackAndWitePaper?: boolean;
  color?: {
    brown: string;
    black: string;
    oak: string;
    white: string;
  };
  frameSize?: {
    std?: { mm?: number };
    large?: { mm?: number; modifier?: { s?: number; m?: number; l?: number } };
  };
  paper?: paperType;
  passPartoutColor?: {
    white: string;
    black: string;
  };
  passPartoutSize?: passPartoutSizeType;
  glass?: allGlasses;
  border?: {
    0?: {};
    1?: { modifier?: { s?: number; m?: number; l?: number } };
    2?: { modifier?: { s?: number; m?: number; l?: number } };
    3?: { modifier?: { s?: number; m?: number; l?: number } };
    5?: { modifier?: { s?: number; m?: number; l?: number } };
    8?: { modifier?: { s?: number; m?: number; l?: number } };
    12?: { modifier?: { s?: number; m?: number; l?: number } };
    spec: string;
  };
  hanging?: {
    nothing?: {
      desc: string;
      modifier?: { s?: number; m?: number; l?: number };
    };
    hangingElements: { s?: string; m?: string; l?: string };
  };
  glassThickness?: allThickness;
  protection?: allLamination;
};

type allPossibleFrameType = {
  gallery_frame: productType;
  solid_wood_frame_with_passe_partout: productType;
  artbox: productType;
  floater_frame: productType;
  aluminum_dibond: productType;
  fine_art_dibond: productType;
  under_glossy_acrylic_glass: productType;
  under_matte_acrylic_glass: productType;
  fuji_crystal_archive_glossy: productType;
  fuji_crystal_archive_matte: productType;
  hahnemühle_fineart_baryta: productType;
  ilford_glossy_black_and_white_paper: productType;
  ilford_matte_black_and_white_paper: productType;
};

type allThickness = {
  s?: thicknessType;
  m?: thicknessType;
  l?: thicknessType;
};

type thicknessType = {
  mm: number;
  modifier?: { s?: number; m?: number; l?: number };
};

type allLamination = {
  laminationGlossy?: laminationType;
  laminationMatte?: laminationType;
};

type laminationType = {
  name: string;
  modifier?: { s?: number; m?: number; l?: number };
};

type allGlasses = {
  glossy?: glassType;
  matte?: glassType;
  museum?: glassType;
};

type glassType = {
  name: string;
  desc: string;
  modifier?: { s?: number; m?: number; l?: number };
  speModifier?: {
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
  };
};

type passPartoutSizeType = {
  small?: { size: number; modifier?: { s?: number; m?: number; l?: number } };
  std?: { size: number };
  medium?: {
    size: number;
    modifier?: { s?: number; m?: number; l?: number };
  };
  spec?: string;
};

type paperType = {
  glossy?: {
    name: string;
    desc: string;
    colorPaper?: boolean;
  };
  matte?: {
    name: string;
    desc: string;
    colorPaper?: boolean;
  };
  bwMatte?: {
    name: string;
    desc: string;
    blackAndWitePaper?: boolean;
    modifier?: { s?: number; m?: number; l?: number };
  };
  bwGlossy?: {
    name: string;
    desc: string;
    blackAndWitePaper?: boolean;
    modifier?: { s?: number; m?: number; l?: number };
  };
  fineArt?: {
    name: string;
    desc: string;
    fav: boolean;
    colorPaper: boolean;
    blackAndWitePaper: boolean;
    modifier?: { s: 7; m: 19; l: 37 };
  };
};

type specPaperType = {
  name: string;
  desc: string;
  colorPaper?: boolean;
  blackAndWitePaper?: boolean;
  fav?: boolean;
  modifier?: { s?: number; m?: number; l?: number };
};
