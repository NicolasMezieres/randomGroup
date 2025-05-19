export type listType = {
  name: string;
  personNbr: number;
  tryNbr: number;
};
export type studentType = {
  name: string;
  gender: string;
  levelFrench: number;
  hasDWWM: boolean;
  levelTech: number;
  profile: string;
  age: number;
};
export type ListProps = {
  name: string,
  gender: string,
  frLevel: number,
  isDWWM: boolean,
  techLevel: number,
  age: number
}
