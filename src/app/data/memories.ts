export interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  tag: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    date: "June 2026",
    title: "Inside the Game",
    description: "Where two avatars bumped into each other and a real spark began.",
    tag: "First Encounter",
  },
  {
    id: 2,
    date: "June 2026",
    title: "Late Night Talks",
    description: "From simple casual messages to talking for hours until sunrise.",
    tag: "Connection",
  },
  {
    id: 3,
    date: "21 June 2026",
    title: "The Confession",
    description: "Shwet took the leap and confessed first. The best risk ever taken.",
    tag: "Milestone",
  },
  {
    id: 4,
    date: "July 2026",
    title: "Falling Deeply",
    description: "Learning every little detail about my adorable, cute 'Angry Bird'.",
    tag: "Love",
  },
];