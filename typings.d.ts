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
  germany: string;
  austria: string;
  france: string;
  guernesey: string;
  "honk-kong": string;
  india: string;
  ireland: string;
  italy: string;
  japan: string;
  jersey: string;
  finland: string;
  iceland: string;
  switzerland: string;
  latvia: string;
  liechtenstein: string;
  lithuania: string;
  luxembourg: string;
  malta: string;
  monaco: string;
  netherlands: string;
  norway: string;
  poland: string;
  portugal: string;
  czechia: string;
  romania: string;
  denmark: string;
  greece: string;
  "united-kingdom": string;
  slovakia: string;
  slovenia: string;
  spain: string;
  belgium: string;
  bulgaria: string;
  canada: string;
  "united-states": string;
  korea: string;
  china: string;
  croatia: string;
  estonia: string;
  sweden: string;
};

type kCountry = keyof coutryTableType