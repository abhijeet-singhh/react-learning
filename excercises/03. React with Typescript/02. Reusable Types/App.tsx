import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import { Info, AdminInfoList } from './types'

function App() {

  const user: Info = {
    id: 1,
    name: 'Abhi',
    email: 'abhi@email.com',
  }

  const admin: AdminInfoList = {
    id: 7,
    name: 'Abhijeet',
    email: 'abhijeet@email.com',
    role: 'admin',
    key: '137',
  }

  return (
    <div className="min-h-screen flex justify-center items-center gap-8 bg-zinc-100">
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
}

export default App;