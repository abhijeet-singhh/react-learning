import { useEffect } from "react"

const BasicEffect = () => {

  useEffect(() => {
    console.log('useEffect called')
  }, [])

  return (
    <div>
      <h2 className="text-slate-500 font-bold bg-slate-100 rounded-md p-2">My Component</h2>
    </div>
  )
}

export default BasicEffect