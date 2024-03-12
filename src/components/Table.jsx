import React, { useEffect, useState } from 'react'
import { supabase } from '../API/CreateCompany'

const Table = () => {
    const [companies, setCompanies] = useState([])
    console.log(companies)

    useEffect(() => {
        fetchCompany()
    }, [])

    async function fetchCompany(){
        const { data } = await supabase
        .from('Company')
        .select('*')
        setCompanies(data)
    }

  return (
    <div>
      
    </div>
  )
}

export default Table
