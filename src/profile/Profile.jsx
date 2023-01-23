import React from 'react'

function Profile({fullName, bio, profession, image, handleName}) {
  return (
    <form style={{fontSize: "smaller", borderRadius: "10px", lineHeight: "30px", padding: "10px", width: "400px", fontFamily: "Poppins", margin: "0", border: "1px solid grey", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "150px"}} src="https://img.freepik.com/free-vector/gradient-summer-background-videocalls_52683-61337.jpg?w=2000" alt="" />
        <div style={{marginTop: "-50px", marginBottom: "10px", borderRadius: "10px", padding: "5px", border: "1px solid grey", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img style={{borderRadius: "10px", width:"80px", height:"80px", objectFit:"cover"}} src={image} alt="profile-img"/>
        </div>
        <h1 style={{marginTop: "0", marginBottom: "5px"}}>{fullName}</h1>
        <p style={{margin: "0"}}>{bio}</p>
        <p style={{width: "100%", textAlign: "center", margin: "0", marginBottom: "10px", borderBottom: "1px solid grey"}}>{profession}</p>
        <button style={{cursor: "pointer", width: "100%", margin: "0", border: "none", backgroundColor: "#9A1FAD", color: "white", padding: "15px", borderRadius: "8px"}} onClick={() => { alert(`Hello there ${fullName}`)}}>Click me</button>
    </form>
  )
}

export default Profile