export default function SuggestionItem({ user }) {

    if (!user) return null; // safety check

    return (
        <div className="suggestion-item">

            <img
                src={user.profileImage}
                alt={user.username}
            />

            <p>
                {user.username} {user.verified && "✔"}
            </p>

        </div>
    );
}