import { createContext } from "react";
//import { Value } from "../components/datepicker";

export type ghIssues = {
  id: string,
  url: string,
  title: string,
  user: {
    avatar_url: string,
    login: string,
  },
  state: string,
  scheduled_to?: string,
}

export type issuesCtx = {
  issues: ghIssues[],
  setIssues: React.Dispatch<React.SetStateAction<ghIssues[]>>,
}

export const issuesCtx = createContext<issuesCtx>({ issues: [], setIssues: () => null })