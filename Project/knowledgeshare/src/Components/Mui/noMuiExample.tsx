export function NoMuiExample() {
  return (
    <div className='flex flex-col justify-center items-center border-1 border-blue-500 p-2 w-full gap-2'>
      <h1 className='text-4xl'>No MUI</h1>
      <div className='flex gap-2'>
      <button className='bg-blue-500 text-white p-2 rounded-md'>Button 1</button>
      <button className='bg-blue-500 text-white p-2 rounded-md'>Button 2</button>
      </div>
      <input type="text" placeholder="Name" className='border-1 border-blue-500 p-2 rounded-md' />
    </div>
  )
}