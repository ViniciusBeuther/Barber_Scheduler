import React, { useEffect, useState } from 'react'
import { supabase } from '../API/CreateCompany'
import { Input, Typography } from '@material-tailwind/react'

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
                    data.map((arrElement, index) => (
                        <div key={index} className='mb-2 bg-green-400'>
                            <Typography>Empresa: {arrElement.name}</Typography>
                            <Typography>CNPJ: {arrElement.cnpj}</Typography>
                        </div>
                    ))
                
            ) : (<p>Loading....</p>) }
        </>
  )
}

export default Table
