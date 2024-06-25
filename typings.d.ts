type productResumeType = {
  img: string;
  imgSize: string;
  totalPrice: number;
  paper?: string | null;
  border: number;
  nameDisplayMethod: string;
  frameSize?: number;
  color?: string;
  passePartoutColor?: string;
  passePartoutSize?: number;
  hanging?: boolean | null;
  glass?: string;
  glassThickness?: number;
  protection?: string;
  quantity: number;
  date: number;
  prodType: string;
  maxSize: number;
};

// type pictureInfoType = {
//   name: string;
//   WidthPix: number;
//   heightPix: number;
//   WidthCM: number;
//   heightCM: number;
//   format: string;
//   film?: boolean;
// };
type picturesNamesTypes = {
  [key: string]: pictureInfoType;
};
type pictureInfoType = {
  name: string;
  width: number;
  height: number;
  widthCm: number;
  heightCm: number;
  format: string;
  form: "horizontal" | "vertical"
};

type productNamesType = {
  [key: string]: productInfoType;
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

type expeditionObjectType = {
  [key: string]: expeditionInfoType;
}

type expeditionInfoType = {
  id: string;
  country: string;
  min_quantity: number;
  tirage_25: number;
  tirage_60: number;
  tirage_100: number;
  tirage_125: number;
  tirage_180: number;
  tirage_220: number;
  delay_tirage: number;
  dibon_25: number;
  dibon_60: number;
  dibon_100: number;
  dibon_125: number;
  dibon_180: number;
  dibon_220: number;
  delay_dibon: number;
  frame_25: number;
  frame_60: number;
  frame_100: number;
  frame_125: number;
  frame_180: number;
  frame_220: number;
  delay_frame: number;
};

type shortExpeditionInfo = {
  id: string;
  country: string;
};

type expeditionIdBase = {
  country: string;
  min_quantity: 1 | 3 | 6;
};

type expeditionResType = {
  tiragePrice: number;
  tirageTime: number;
  mountedPrice: number;
  mountedTime: number;
};

type paramsChoice = {
  dest: string;
  qty?: string;
  tTh?: string;
  mTh?: string;
  ty?: string;
};

type coutryTableType = {
  [key: string]: string;
};

type kCountry = keyof coutryTableType;


interface statues {
  stat: "valid" | "initial" | "invalid" | "loading";
  error: null | string;
}

interface Values {
  name: Datas;
  email: Datas;
  message: Datas;
}
interface Datas {
  data: string;
  state: statues;
}

interface statues {
  stat: "valid" | "initial" | "invalid" | "loading";
  error: null | string;
}
