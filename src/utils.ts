import { type Firm } from "@/libs/data/firms"
import { type List } from "./libs/data/lists"

export const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
}

export const mapIds = (data: { [key: string]: Firm | List }) => {
  const ids = Object.keys(data);
  const paths = ids.map(id => ({ params: { id } }));
  return paths;
}

export const getPathnameItems = (pathname: string) => {
  let cleanedPathname = pathname.replace(/\/+$/, "");
  let segments = cleanedPathname.split("/");
  let breadcrumbItems: { title: string; url: string }[] = [];
  segments.forEach((segment, index) => {
    let url = segments.slice(0, index + 1).join("/");
    breadcrumbItems.push({ title: segment, url: url });
  });
  breadcrumbItems[0].title = "Inicio"
  breadcrumbItems[0].url = '/'
  return breadcrumbItems
}

export const decodeHtmlEntity = (str: string) => {
 return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
 });
}

export const replaceHyphensWithSpaces = (str: string) => {
    return str.replace(/-/g, ' ');
}

export const shuffleArray = (array: any[]) => {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}