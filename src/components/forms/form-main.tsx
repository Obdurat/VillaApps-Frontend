import { useContext } from "react"
import GhRequest from "../../Api"
import TextInput, { txtInputParams } from "./text-input"
import { issuesCtx } from "../../Context/ghIssuesCtx"

interface Props {
  form: {
    owner: string;
    repo: string;
  }
  setForm: React.Dispatch<React.SetStateAction<{owner:string, repo: string}>>;
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormMain(props: Props) {

  const { setIssues } = useContext(issuesCtx)

  const { form, setForm, setFetching } = props

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const formSections: txtInputParams[] = [
    {
      label: "Project Owner Username",
      placeholder: "Type Here",
      controlName: "owner",
      ctrl: onChange
    },
    {
      label: "Repository Name",
      placeholder: "Type Here",
      controlName: "repo",
      ctrl: onChange
    }
  ]

  return (
    <>
      <div className="flex gap-4 justify-center mt-10">
        {formSections.map((sect, idx) => (<TextInput {...sect} key={idx} />))}
      <button className="btn btn-active self-end" onClick={
        () => {GhRequest({...form, setFetching}).then((res) => setIssues(res))}
        }>
          Search Issues
      </button>
      </div>
    </>
  )
}
