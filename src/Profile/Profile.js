import react from "react"; 
const Profile = props => {
    console.log(props)
    return (
        <div>
        <h1> {props.Fullname} {props.Bio} {props.profession} </h1>
        {props.children}
        </div>
    )
}
export default Profile