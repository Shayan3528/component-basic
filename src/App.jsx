
function Item({name,ispacked}){
  return(
     ispacked && <li>{name}</li> 
  );
}

export default function App(){
  return(
    <section >
      <ul>
        <Item
        ispacked = {true}
        name = "Space suit"
        > 
        </Item>
        <Item
        ispacked={true}
        name = 'Helmet with a golden leaf'
        />
        <Item
        ispacked={true}
        name=" Photo of Tom"
        />
      </ul>
    </section>

  );
}