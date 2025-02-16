import Profile from "./Component/Profile";
import "../src/style.css";

export default function App() {
  return (
    <>
      <div className="mainDiv">
        <h1>Notable Scientiests</h1>
            <section className="sectionDesign">
             
              <Profile
              name= "Maria Sklodowska-Curie"
              person={{
                imageUrl: "./src/Assets/Anna_frank.jpg",
              }}
              size={100}
              profession="physicist and chemist"

              awards= {[
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal',
                'Matteucci Medal'
              ]}

              discovered = 'polonium(chemical element)'
              
              />
            </section>
            <section className="sectionDesign">
              <Profile
              name=  "Katsuko Saruhashi"
              person={{
                  imageUrl: "./src/Assets/Rabindranath_Tagore.jpg"
                }}
                size={100}
                profession='geochemist'
                awards={['(Miyake Prize for geochemistry','Tanaka Prize']}
                discovered='a method for measuring carbon dioxide in seawate'
              />
            </section>
            

      </div>
    </>
  );
}
