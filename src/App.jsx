import { Typography } from "@material-tailwind/react"
import Table from "./components/Table"
import NewCompanyForm from "./components/NewCompanyForm"

const App = () => {
  return(
    <>
      <Typography className="">HELLO WORLD</Typography>
      <NewCompanyForm />
      <Table />
    </>
  )
}

export default App