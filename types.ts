export interface ClassItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  //image: string;
  instagramURL?:string;
  linkedinURL?:string;
}

export interface Plan {
  id: string;
  name: string;
  features: string[];
  highlight?: boolean;
}

export interface Avaliation {
  id: string;
  title: string;
  description: string;
}