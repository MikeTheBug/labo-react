import { NavLink } from "react-router-dom"
import style from "./role-champ.module.css"


const RoleChamp = (props) => {
    
    const { championRole } = props
    
    const listRole = [null, "Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"]
    const listRoleFr = ["Tous", "Combattant", "Tank", "Mage", "Assassin", "Tireur", "Support"]
    
    return (
        <div>
            <ul>
                <NavLink to="/" className={style.navChamp}>
                    {listRoleFr.map(
                        (element, indice) => <li key={indice} onClick={() => championRole(listRole[indice])}>{element}</li>
                    )}
                </NavLink>              
            </ul>
        </div>
    )
}

export default RoleChamp