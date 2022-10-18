import axios from "axios"
import style from "./description.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () => {

    const { championName } = useParams()

    
    const [champion, setChampion] = useState(null)
    
    // const getRole = (role) => {
    //     console.log(role)
    //     let result = ""
    //     for (const elem of role) {
    //         const roleName = elem.tags.map(elem)
    //         result += " " + roleName
    //     }
    //     return result
    // }

    const searchChampionDetails = async () => {
        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/12.19.1/data/fr_FR/champion/${championName}.json`)
        const data = response.data.data[championName]

        console.log(data)

        setChampion({
            id: data.id,
            name : data.name,
            title : data.title,
            image : data.image.full,
            description : data.blurb,
            infos : {
                attack : data.info.attack,
                defense : data.info.defense,
                magic : data.info.magic,
                difficulty : data.info.difficulty
            },
            role : data.tags.join(", ")
        })
    }

    useEffect(() => {
        searchChampionDetails()
    }, [])

    return (
        <div className={style.description}>
            {champion && (
                <>
                    <h1>{champion.name}</h1>
                    <h3>{champion.title}</h3>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_1.jpg`} alt={champion.name}/>
                    <p>{champion.description}</p>
                    <ul>
                        <li>Attaque : {champion.infos.attack}</li>
                        <li>Défense : {champion.infos.defense}</li>
                        <li>Magique : {champion.infos.magic}</li>
                        <li>Difficulté : {champion.infos.difficulty}</li>
                    </ul>
                    <p>Rôle : {champion.role}</p>
                </>
            )}
        </div>
    )
}

export default Description