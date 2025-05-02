import React from 'react'
const DataBar = () => {

  function openCreateModal() {
    const createModal = document.getElementById('createModal')

    let isOpen = false;

    if (!isOpen) {
      createModal.show()
      isOpen = true;
    }
  }

  return (
    <div className='flex mb-3 justify-between bg-neutral-300 dark:bg-neutral-900 p-3 rounded'>
      <div className='flex flex-col'>
      <label className='text-xs font-light' htmlFor="search">Find something</label>
      <form>
      <input className='px-2 py-1 border rounded-md' type='text' id='search' name='search' placeholder='Not implemented yet' disabled  />
      <button className='mx-3 px-2 py-1 border rounded-md'>Find</button>
      </form>


      </div>
      <div className='flex'>
      <button className='bg-green-600 px-3 mx-2 rounded hover:scale-115 duration-200' onClick={openCreateModal}>Create</button>
      <button className='bg-neutral-500 px-3 mx-2 rounded hover:scale-115 duration-200'>Filter</button>
      </div>
    </div>
  )
}

export default DataBar