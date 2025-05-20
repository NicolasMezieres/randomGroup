export type listType = {
  name: string;
  personNbr: number;
  tryNbr: number;
};

export type listProps = {
  listItems: listType[]
}

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
  name: string;
  gender: string;
  frLevel: number;
  isDWWM: boolean;
  techLevel: number;
  age: number;
};

export type RegisterProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type ModalProps = {
  nbGroups: number;
  name: string;
  isDWWM: boolean;
  age: boolean;
  skill: boolean;
  students: studentType[];
};
