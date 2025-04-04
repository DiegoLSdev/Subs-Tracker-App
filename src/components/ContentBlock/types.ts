import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  url: string;
  icon: string;
  title: string;
  content: string | string[];
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
      title: string;
      color?: undefined;
      url: string;

    }
    | {
      title: string;
      color: string;
      url: string;

    }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
