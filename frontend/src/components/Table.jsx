import React from 'react'

const Table = ({ columns, data, options }) => {
  
  function handleOpenDeleteModal(event) {
    console.log(event.target.getAttribute('data-key'))
    document.getElementById('deleteModal__form').children[0].value = event.target.getAttribute('data-key')
    document.getElementById('deleteModal').show()
  }

  function handleOpenUpdateModal(event) {
    console.log(event.target.getAttribute('data-key'))
    document.getElementById('updateModal__form').children[0].value = event.target.getAttribute('data-key')
    document.getElementById('updateModal').show()
  }

  return (
    <div className='overflow-x-visible overflow-y-visible'>
    <table className=''>
      <thead>
        <tr>
          <td className='p-2 px-3 border-b'><input type='checkbox'></input></td>
          {columns.map((column, index) => (
            <th className='p-2 border-b' key={index}>{column}</th>
          ))}
          {(options) ? (<th className='p-2 border-b'>Options</th>) : ('')}
        </tr>
      </thead>

      <tbody>
        {data.map((element, index) => {
          return (
            <tr className='border-b' key={index}>
              <td className='flex justify-center align-items-center my-3'><input className='' type='checkbox'></input></td>
              {Object.values(element).map((val, i) => {
                // Como es un objeto, hay que usar el objeto Object.
                return (
                  <td className='text-center' key={i}>{val}</td>
                )
              })}
              { (options) ? 
              (<td>
                <button className='px-2 mx-1 rounded bg-red-500 hover:scale-105' data-key={element.id} 
                onClick={handleOpenDeleteModal}>
                  DEL</button>
                <button className='px-2 mx-1 rounded bg-blue-500 hover:scale-105' data-key={element.id}
                onClick={handleOpenUpdateModal}>UPD</button>
              </td>) : ('')
              }
            </tr>

          )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default Table
