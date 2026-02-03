import { useState } from "react";
import BarMenu from "../components/BarMenu";
import EditHouses from "../components/EditHouses";
import EditHistories from "../components/EditHistoires";
import EditSettings  from "../components/EditSettings";

interface DashboardProps {
    isLoggedIn: boolean
}
export default function Dashboard({isLoggedIn = false}: DashboardProps) {
    const [menuToShow, setMenuToShow] = useState('');
    return (
        <section>
            <div className="flex flex-col md:flex-row w-11/12 mx-auto">
                <BarMenu setMenuToShow={setMenuToShow}/>
                {menuToShow === 'propiedades' && 
                    <EditHouses isLoggedIn={isLoggedIn}/>
                }
                {menuToShow === 'historias' && 
                    <EditHistories isLoggedIn={isLoggedIn}/>
                }
                {menuToShow === 'ajustes' && 
                    <EditSettings isLoggedIn={isLoggedIn} />
                }
            </div>
        </section>
    )    
}