import React, { useEffect, useState } from 'react'
import { supabase } from '../API/CreateCompany'

const Table = () => {
    const [companies, setCompanies] = useState([])
    console.log(companies)

    useEffect(() => {
        fetchCompany()
    }, [])

    async function fetchCompany(){

        let { data } = await supabase
        .from('Company')
        .select(`
            *,
            Schedules (
            *
            )
        `)
                
        setCompanies(data)
    }

  return (
    <div>
    </div>
  )
}

export default Table
