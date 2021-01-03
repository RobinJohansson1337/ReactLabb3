export default function Photos(props) {
    return (
        <>
            {props.users.map(user =>
                <div>
                    {user.username}
                </div>
            )}
        </>
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