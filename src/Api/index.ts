import { ghIssues } from "../Context/ghIssuesCtx"

export type requestParams = {owner: string, repo: string, setFetching: React.Dispatch<React.SetStateAction<boolean>>}

export default function GhRequest({owner, repo, setFetching}: requestParams) {
  setFetching(true);
  const URL = `http://localhost:3000/${owner}/${repo}`
  const opts = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const request = fetch(URL, opts).then((res) => {setFetching(false); return res.json()}).catch((err) => {setFetching(false); return `Something went wrong ${err.message}`})
  return request
}

export async function scheduleIssues(issues: ghIssues[], {owner, repo}: {owner: string, repo: string}): Promise<void> {
  const URL = `http://localhost:3000/${owner}/${repo}`
  const opts = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(issues)
  }
  await fetch(URL, opts).then((res) => res.json()).catch((err) => `Something went wrong ${err.message}`)
  return;
}

export async function removeIssue({owner, repo}: {owner: string, repo: string}, issue_id: string) {
  const URL = `http://localhost:3000/${owner}/${repo}/${issue_id}`
  const opts = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }
  await fetch(URL, opts)
  return;
}