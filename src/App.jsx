
import './App.css';
// import Search from "../src/Search";
// import Prac from "../src/Prac"
import Pro from '../src/Pro';
function App() {
  return (
    <div className="App"> 
   
      <header className="App-header">
          {/* <h2>Learning React</h2> */}
          
        {/* <Search/> */}
        {/* <Prac/> */}
        <Pro
          name="Dog"
          url="http://pets-images.dev-apis.com/pets/dog27.jpg"
          head="Hi iam cute dog"
        />
        <Pro
          name="Dog"
          url="http://pets-images.dev-apis.com/pets/dog22.jpg"
          head="Hi iam cute dog"
        />
        <Pro
          name="Dog"
          url="http://pets-images.dev-apis.com/pets/dog31.jpg"
          head="Hi iam cute dog"
        />
        <Pro
          name="Dog"
          url="http://pets-images.dev-apis.com/pets/dog33.jpg"
          head="Hi iam cute dog"
        />
       
        


        
      </header>
    </div>
  );
}

export default App;
