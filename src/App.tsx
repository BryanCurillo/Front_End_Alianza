
import { SideBarMenu } from './common/SideBar/SideBarMenu';
import { FcBusinessman } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import { FcOvertime } from 'react-icons/fc';
import { FcOpenedFolder } from 'react-icons/fc';
import { FcKindle } from 'react-icons/fc';
import { SideBarMenuCard, SideBarMenuItem } from './interfaces/types';


function App() {
  const items: SideBarMenuItem [] = [
    {
      id: "1",
      label: "Home",
      icon: FcHome,
      url: "/",
    },
    {
      id: "2",
      label: "Perfil",
      icon: FcBusinessman,
      url: "/",
    },
    {
      id: "3",
      label: "Registro",
      icon: FcKindle,
      url: "/",
    },
    {
      id: "4",
      label: "Fichas",
      icon: FcOpenedFolder,
      url: "/",
    },
    {
      id: "5",
      label: "Horarios",
      icon: FcOvertime,
      url: "/",
    },
    
  ];

  const card: SideBarMenuCard = {
    id: 'card001',
    displayName: "Bryan Curillo",
    title: "Administrador",
    photoUrl: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?tf=3840x",
    url: "/"
  }
  return (

    <div>
      <SideBarMenu items={items} card={card} />
    </div>


  )
}

export default App
