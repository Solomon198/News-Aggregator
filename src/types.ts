import dayjs from "dayjs";

export type ISelectableItem = {
  name: string;
  value: string;
};

export interface ISelectComponent {
  menuItems: ISelectableItem[];
  selected: string;
  onSelected?: (text: string) => void;
}

export interface IFilterProps {
  categoryMenuItems: ISelectableItem[];
  sourceMenuItems: ISelectableItem[];
  categorySelected: string;
  onCategorySelected?: (text: string) => void;
  selectedSource: string;
  onDateSelected?: (value: dayjs.Dayjs) => void;
  onSourceSelected?: (value: string) => void;
}
