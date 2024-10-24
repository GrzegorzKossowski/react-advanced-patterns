# React advanced patterns

## composition components

**Composition**

Wykorzystuje kompozycję (has a) do budowy bardziej skomplikowanych komponentów na podstawie bazowego poprzez dodawanie konkretnych właściwości (props).

**Partial**

Wykorzystuje HOC do budowy bardziej skomplikowanych komponentów na podstawie bazowego komponentu poprzez dodawanie dodatkowych właściwości (props + partialProps). Partial umożliwia dodawanie nowych właściwości (decorator pattern)

## Compound components (Card)

Pozwala na tworzenie złożonych komponentów, np. Card, gdzie podkomponenty dodawane są jako metody głównego komponentu.

```jsx
<Card>
  <Card.Header />
  <Card.Body />
  ...
</Card>
```

## container components

Pozwala na przejęcie przez komponent rodzica (nadrzędny) sposobu wykonania zadania (np. ładowania danych), poprzez przekazywanie propsów z poziomiu rodzica, a nie samego komponentu dziecka (wyniesienie zależności).

## controlled flow

Pozwala na swobodne dodawanie kolejnych komponentów procesu składającego się z kroków. Wynosi zarządzanie danymi do rodzica. Np. wypełnianie formularza.

## HOC

Higher Order Components - metody przyjmujące komponenty i dodające im jakieś właściwości (decorator pattern)

## lists components

Pozwala na przekazywanie w propsach zarówno danych, jak i komponentów potomnych tworzących listy dynamiczne. Ponadto pozwala na generyczne wykorzystanie rodzica generującego listę do przyjmowania dowolnych typów propsów.

## modal

Tworzy modal.

## observer component

Tworzy komponent emitujący sygnały (emiter) oraz komponent przyjmujący sygnały (reciever).

## recursive components

Komponenty budujące drzewa na podstawie zagnieżdżonych obiektów danych.

## screen splitter

Dynamiczne rozdzielanie ekranu na sekcje na podstawie przekazanych propsów CSS.

## custom hooks

...
