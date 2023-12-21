import { type Firm } from "@/libs/data/firms"
import { type Selection } from "./libs/data/selections"

export const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
}

export const mapIds = (data: { [key: string]: Firm | Selection }) => {
  const ids = Object.keys(data);
  const paths = ids.map(id => ({ params: { id } }));
  return paths;
}