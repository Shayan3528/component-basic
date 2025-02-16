export default function Profile ({name, person, size, profession, awards = [], discovered}){
    return(
        <>
        <h2>{name} </h2>
        <img    
            src={person.imageUrl}
            width = {size}
            height = {size}
         />
         <ul>
        <li> <b>Profession:</b>{profession} </li>
         <li><b>Awards:{awards.length} </b> ({awards.join(',')})</li>
         <li><b>Discovered:</b> {discovered}</li>
         
         </ul>
        
        </>
       
    )
}