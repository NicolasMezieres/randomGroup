export type RegisterProps = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export type LoginProps = {
  email: string;
  password: string;
};

export type ModalProps = {
  nbGroups: number,
  name: string,
  isDWWM: boolean,
  age: boolean,
  skill: boolean
}