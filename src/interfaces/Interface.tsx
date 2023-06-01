export interface ListObject {
  id: string;
  list: string[];
  name: string;
  docId: string;
  icon: string;
}
export interface UrlCardProps {
  listData: ListObject;
}
export interface EllipsesIconProps {
  name: string;
  urlList: string[];
  docId: string;
  icon: string;
}
export interface ChangingModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  urlList: string[];
  docId: string;
  icon: string;
}
export type EmojiData = {
  emoji: string;
  names: string[];
  originalUnified: string;
  unified: string;
  group: string;
  subGroup: string;
  skinTone?: string;
};
