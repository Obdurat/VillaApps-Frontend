import { useState } from "react"
import FormMain from "./components/forms/form-main"
import { ghIssues, issuesCtx } from "./Context/ghIssuesCtx"
import { TableMain } from "./components/table/table-main"
import Spinner from "./components/spinner"
import Header from "./components/header"

function App() {
  const [issues, setIssues] = useState<ghIssues[]>([])
  const [fetching, setFetching] = useState<boolean>(false)
  const [form, setForm] = useState({
    owner: '',
    repo: ''
  })
  const tableProps = {...form, setFetching}

  return (
    <>
      <issuesCtx.Provider value={{issues, setIssues}}>
        <Header />
        <FormMain form={form} setForm={setForm} setFetching={setFetching} />
        {fetching ? <Spinner /> : <TableMain {...tableProps } />}
      </issuesCtx.Provider>
    </>
  )
}

export default App
