export type objectValueString = { [key: string]: string };

export type TArrayGeneric<T> = T[];

export type TlinkObject = {
  path: string;
  element: JSX.Element;
  name: string;
}
