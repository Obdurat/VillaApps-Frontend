import React, { useContext, useState } from "react"
import { ghIssues, issuesCtx } from "../../Context/ghIssuesCtx"
import GhRequest, { removeIssue, scheduleIssues } from "../../Api"
import DateForm from "../datepicker"

export function TableMain(form: {owner:string, repo:string, setFetching: React.Dispatch<React.SetStateAction<boolean>>}, ) {
  const { issues, setIssues } = useContext(issuesCtx)
  const [selectedIssues, setSelectedIssues] = useState<ghIssues[]>([])

  if (!issues || typeof issues === "string") {
    return (<div><h1>No issues found !</h1></div>)
  }  
  
  return (
    <div className="overflow-x-auto mt-10 w-full flex justify-center">
        <button className="btn fixed z-10 right-2 bottom-2 btn-primary" onClick={async () => {await scheduleIssues(selectedIssues, form); await GhRequest({...form}).then((res) => setIssues(res))}}>
          Publish selected
        </button>
      {/* <div className="flex justify-end">
      </div> */}
      <table className="table w-max">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  if (e.currentTarget.checked) {
                  setSelectedIssues(issues); return
                  }
                  setSelectedIssues([])
                  }} />
              </label>
            </th>
            <th>User</th>
            <th>Issue</th>
            <th>State</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr>
            <th>
              <label>
                <input onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                  if (e.currentTarget.checked) {
                    setSelectedIssues([...selectedIssues, issue]);
                    return;
                  }
                  setSelectedIssues(selectedIssues.filter((iss) => iss.id !== issue.id));
                }}
                type="checkbox" className="checkbox" checked={selectedIssues?.includes(issue)} />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={issue.user.avatar_url} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{issue.user.login}</div>
                </div>
              </div>
            </td>
            <td>
              <div className="flex flex-col w-min">
                {issue.title}
                <br/>
                <a href={issue.url} className="badge-ghost badge-sm">{issue.url}</a>
              </div>
            </td>
            <td>{issue.state}</td>
            <th>
              <DateForm issue={issue}/>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs" onClick={() => {
                setIssues(issues.filter(iss => iss.id !== issue.id))
                removeIssue({...form}, issue.id)
              }}>Remove Issue</button>
            </th>
          </tr>
          ))}          
        </tbody>        
      </table>
    </div>
  )
}