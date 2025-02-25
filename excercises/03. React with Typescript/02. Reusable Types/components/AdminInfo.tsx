import { AdminInfoList } from "../types"

interface AdminProp {
    admin: AdminInfoList
}

const AdminInfo = ({ admin }: AdminProp) => {
    return (
        <div className='bg-slate-200 rounded-xl border-2 p-4 w-60 space-y-1'>
            <h1 className="text-xl font-semibold mb-2 text-center">Admin Information</h1>
            <h2>ID: {admin.id}</h2>
            <h2>Name: {admin.name}</h2>
            <h2>Email: {admin.email}</h2>
            <h2>Role: {admin.role}</h2>
        </div>
    )
}

export default AdminInfo