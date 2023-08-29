import style from './cards.module.scss'
import Image from 'next/image'
function Card(props){
    return (
        <>
       {props.profiles.map((profile) => (
       
           <div key={profile.id} className={style.profileCard}>
               
                  <Image className={style.profileImage} src="/neeraj.png" alt="profile" width={100} height={100} />
                  <div className={style.profileName}>{profile.name}</div>
                  <div className={style.profileDescription}>{profile.description}</div>
            </div>
      
           ))}
        </>
        )
}
export default Card;