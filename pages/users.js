export default function Photos(props) {
    return (
        <ul>
            {props.users.map((user) =>
                <li key={user.id}>
                    {user.username}
                </li>
            )}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: {
            users: data
        }
    }
}