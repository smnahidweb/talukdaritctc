export interface CareerPathwayItem {
  id: string;
  title: string;
  iconName: "Briefcase" | "Laptop" | "Code" | "Building" | "Store" | "Home";
}

export const careerPathways: CareerPathwayItem[] = [
  { id: "path-1", title: "Office Jobs", iconName: "Briefcase" },
  { id: "path-2", title: "Freelancing", iconName: "Laptop" },
  { id: "path-3", title: "Web Design", iconName: "Code" },
  { id: "path-4", title: "Digital Work", iconName: "Building" },
  { id: "path-5", title: "Business", iconName: "Store" },
  { id: "path-6", title: "Remote Work", iconName: "Home" },
];
