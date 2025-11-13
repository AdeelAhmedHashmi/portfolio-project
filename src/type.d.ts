export type Data<T extends Record<string, string | [] | object>> = Array<T>;

export interface BioDataResponse {
  personalInfo: PersonalInfo;
  services: Service[];
  about: About;
  skills: Skill[];
  portfolio: Portfolio;
  contactInfo: ContactInfo;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  detailedBio: string;
  profileImage: string;
  location: string;
  experience: string;
  projectsCompleted: string;
  happyClients: string;
  resumeLink: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface About {
  headline: string;
  description: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Portfolio {
  categories: string[];
  projects: Project[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}
