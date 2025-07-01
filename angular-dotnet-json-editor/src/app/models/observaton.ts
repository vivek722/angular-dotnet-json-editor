import { DataItem } from "./dataItem";

export interface Observation {
  id: number;
  name: string;
  datas: DataItem[];
}