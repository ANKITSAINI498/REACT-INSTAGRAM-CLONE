import { useState, useEffect } from "react"
import api from "./api";

function Profile() {

    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('success');
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        api.get('/profile')
            .then((response) => setProfile(response.data))
            .catch((err) => console.log(err));
    }, [])

    function HandleOnChange(e) {
        setMessage('');

        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const HandleUpdate = async () => {
        setIsUpdating(true);
        setMessage('');

        api.put('/profile', profile)
            .then((response) => {
                setProfile(response.data);
                setMessageType('success');
                setMessage('Profile updated successfully');
            })
            .catch((err) => {
                console.log(err);
                setMessageType('danger');
                setMessage('Profile update failed');
            })
            .finally(() => setIsUpdating(false));
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

                    {message && (
                        <div className={`alert alert-${messageType} my-4`} role="alert">
                            {message}
                        </div>
                    )}

                    <button onClick={HandleUpdate} className="btn btn-primary my-4" disabled={isUpdating}>
                        {isUpdating ? 'Updating...' : 'Update'}
                    </button>

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
