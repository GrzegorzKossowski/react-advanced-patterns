import React from "react";
import { authors, books } from "./data";
import { IAuthor, IBook } from "../../types";

const AuthorListItem = ({ author }: { author: IAuthor }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, age: {age}
    </p>
  );
};

const BookListItem = ({ book }: { book: IBook }) => {
  const { title, price } = book;

  return (
    <p>
      Title: {title}, price: {price}
    </p>
  );
};

const AuthorListFullItem = ({ author }: { author: IAuthor }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h3>{name}</h3>
      <div>
        age: {age}, country: {country}
        <ul>{books && books.map((book) => <li key={book}>"{book}"</li>)}</ul>
      </div>
    </>
  );
};

/**
 * Shows generic list of elements.
 * @param items array of elements
 * @param sourceKeyName name of an element to use it as key in ItemComponent
 * @param ItemComponent React Component to show single element of items
 * @returns React.ElementType
 */
const RegularList = <T extends { id: number | string }>({
  items,
  sourceKeyName,
  ItemComponent,
}: {
  items: Array<T>;
  sourceKeyName: string;
  ItemComponent: React.ElementType;
}) => {
  return (
    <>
      {items &&
        items.map((item: T) => (
          <ItemComponent key={item.id} {...{ [sourceKeyName]: item }} />
        ))}
    </>
  );
};

const RegularListExample = () => {
  return (
    <>
      <h2>Authors</h2>
      <RegularList<IAuthor>
        items={authors}
        sourceKeyName={"author"}
        ItemComponent={AuthorListItem}
      />
      <hr />
      <h2>Full Authors list</h2>
      <RegularList<IAuthor>
        items={authors}
        sourceKeyName={"author"}
        ItemComponent={AuthorListFullItem}
      />
      <hr />
      <h2>Books</h2>
      <RegularList<IBook>
        items={books}
        sourceKeyName={"book"}
        ItemComponent={BookListItem}
      />
    </>
  );
};

export default RegularListExample;
