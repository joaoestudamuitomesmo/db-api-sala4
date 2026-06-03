import s from './card.module.css'

export const Card = (props) => {
    return(
        <div className={s.card}>
            <img src={props.imagem} alt={props.nome} />
            <h2>{props.nome}</h2> 
            <p>Especie : {props.especie}</p>
            <p>Ki : {props.ki}</p>
        </div>
    )
}