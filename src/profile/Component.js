import PropTypes from 'prop-types'
function ProfileComponent({fullName,profession,bio,children,handleName}){
    
    return(
        <div style={{position:"relative"}}>
        <p style={{  position: "absolute",top: "0px",left: "0px",}}>{children}</p> 
        <h1 style={{  position: "absolute",top: "0px",left: "360px",textDecoration:"underline"}}>{fullName}</h1>
        <h2 style={{  position: "absolute",top: "80px",left: "360px",}}>{profession}</h2>
        <h4 style={{  position: "absolute",top: "180px",left: "360px",color:"grey"}}>{bio}</h4>
        <button style={{position: "absolute",top: "320px",left: "450px",padding:10,backgroundColor:"green",color:"aqua",border:"none"}} onClick={handleName}> Send </button> 
        </div> 

    )
}
ProfileComponent.defaultProps={
    fullName:"firstName lastName",
    profession:"profession",
    bio:"Bio",
    children:<img src="./avatar.png" width="350" height="350" alt="avatar"/>,
    handleName:()=>alert(ProfileComponent.defaultProps.fullName)
    
}
ProfileComponent.propTypes={
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    handleName:PropTypes.func
}
export default ProfileComponent