import { AdminInfoList } from "../types"

interface AdminProp {
    admin: AdminInfoList
}

const AdminInfo = ({ admin: {id, name, email, role} }: AdminProp) => {
    return (
        <div className='bg-slate-200 rounded-xl border-2 p-4 w-60 space-y-1'>
            <h1 className="text-xl font-semibold mb-2 text-center">Admin Information</h1>
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Role: {role}</h2>
        </div>
    )
}

export default AdminInfo