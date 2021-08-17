export interface LinkData {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
}

export type updateOrderOfCardsType = (
  sourceId: number,
  newIndex: number,
  newGridId: number
) => void;

export type storeCurrentCardsType = () => void;