export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  content?: string;
  author?: string;
  date?: string;
}

export interface Trend {
  title: string;
  author: string;
}

export interface Person {
  name: string;
  following: boolean;
}