import '../scss/Sorting.scss'

import { useEffect, useState } from 'react'
import axios from 'axios'

import SimpleSelect from './SimpleSelect'


export default function Sorting() {

  const [sorting, setSorting] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/api/sorting`)
      .then((res) => {
        let sortObj = {}
        let sortArr = []
        res.data.forEach(sort => {
          sortObj = {
            id: sort.id_sorting,
            title: sort.sorting_title,
            url: sort.sorting_url
          }
          sortArr.push(sortObj)
        })
        setSorting(sortArr)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(sorting)

  return(
    <div className="Sorting">
      Сортировка
      {sorting.map(sort => (
        <SimpleSelect key={sort.id} title={sort.title} id={sort.id} />
      ))}
    </div>
  )
}