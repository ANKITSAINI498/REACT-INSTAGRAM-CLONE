import axios from "axios"
import { useState, useEffect } from "react"

function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/profile')
            .then((data) => { setProfile(data.data); console.log() });
    }, [])

    function HandleOnChange(e) {
        console.log(e.target.name);
        console.log(e.target.value);

        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const HandleUpdate = async () => {
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log("updated"))
        .catch((err)=>console.log(err))
    }

    return (
        <div className="m-4">
            {profile ? (
                <div>
                    <img className="profile rounded-circle" src={profile.profileImage} />
                    <h2>{profile.username}</h2>

                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        className="form-control my-4"
                        onChange={HandleOnChange}
                    />

                    <input
                        type="text"
                        name="profileImage"
                        value={profile.profileImage}
                        className="form-control"
                        onChange={HandleOnChange}
                    />

                    <button onClick={HandleUpdate} className="btn btn-primary my-4">Update</button>

                </div>

            ) : (
                <div>
                    Loding Profile....
                </div>
            )

            }
        </div>
    )
}

export default Profile