import Card from './card';
import style from './cards.module.scss'
export default function CardList(props){
    return (
        <div className={style.profileCardContainer}>
           <Card {...props} />
        </div>
    
    )
}