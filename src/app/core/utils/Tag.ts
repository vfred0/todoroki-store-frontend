export interface Tag {
  typeTag: TypeTag;
  description: string;
  pathIcon: string;
  isClickable: boolean;
}

export enum Size {
  S = 'S',
  XS = 'XS',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum TypeTag {
  Size = 'c-tag--size',
  Price = 'c-tag--price',
  Likes = 'c-tag--likes',
}
