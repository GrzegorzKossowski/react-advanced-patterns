export interface IAuthor {
    id: string;
    name: string;
    age: number;
    country: string;
    books: string[];
  }
  
  export interface IBook {
    id: string;
    name: string;
    pages: number;
    title: string;
    price: number;
  }

  export type IList = {
    items: Array<IAuthor | IBook>;
    sourceName: string;
    ItemComponent: React.ElementType;
  };