
import './card.css'

interface CardProps{
price : number,
title: string,
image: string
}
export function Card(props : CardProps){

    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p>Valor: </p>
        </div>
    )
}