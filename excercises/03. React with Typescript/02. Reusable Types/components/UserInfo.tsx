import { Info } from '../types'

interface UserProp {
    user: Info
}

const UserInfo = ({ user: {id, name, email} }: UserProp) => {
    return (
        <div className='bg-slate-200 rounded-xl border-2 p-4 w-60 space-y-1'>
            <h1 className="text-xl font-semibold mb-3 text-center">User Information</h1>
            <h2>ID: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    )
}

export default UserInfo