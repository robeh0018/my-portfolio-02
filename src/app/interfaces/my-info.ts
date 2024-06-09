import {Skill} from "./skill";

export interface MyInfo {
  name: string;
  shorterName: string;
  DOB: string;
  email: string;
  COB: string;
  currentCountry: string;
  currentCity: string;

  skills: Skill[];

  facebookLink: string;
  linkedinLink: string;
  githubLink: string;
}
