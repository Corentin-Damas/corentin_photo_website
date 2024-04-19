import { create } from "zustand";

interface expeditionInfo {
  destinationInfo: expeditionIdBase;
  addDestination: (prod: expeditionIdBase) => void;

}

export const useExpeditionInfo = create<expeditionInfo>()((set) => ({
    destinationInfo: {  country: "",
        min_quantity: 1},
    
    addDestination: (prod: expeditionIdBase) =>
    set(() => ({
        destinationInfo: prod,
    })),

}));
