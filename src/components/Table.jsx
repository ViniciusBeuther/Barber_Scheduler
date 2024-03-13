import React, { useEffect, useState } from 'react'
import { supabase } from '../API/CreateCompany'

const Table = () => {
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){

        let { data } = await supabase
        .from('Company')
        .select(`
            *,
            Schedules (
            *
            )
        `)
                
        setData(data)
    }

    
    return (
        <>
            {data ? (
                data.map((arrElement) => (
                    <>
                        <p>{arrElement.name}</p>
                        <p>{arrElement.cnpj}</p>
                    </>
                ))
            ) : (<p>Loading....</p>) }
        </>
  )
}

export default Table
