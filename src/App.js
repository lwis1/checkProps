import ProfileComponent from './profile/Component'

function App(){
   const data=["Abidi Wissam","Web Developper","On va à l'école pour développer sa raison, pour réfléchir par soi-même, pour développer une pensée autonome."]
   const[fullName,profession,bio]=data
   const handleName=()=>alert(fullName)
   return(
      <div>
         <ProfileComponent fullName={fullName} profession={profession} bio={bio} handleName={handleName}>
         <img src="./wissem.jpg" width="350" height="350" alt="avatar"/>
         </ProfileComponent>
      </div>
   )
};
export default App;
