export default function Photos(props) {
    return (
        <ul>
            {props.photos.map((photo) =>
                <li key={photo.id}>
                    {photo.title}
                </li>
            )}
        </ul>
    )
}

const delay = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, 3000)
    })
}

export async function getStaticProps() {
    await delay();
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json();
    return {
        props: {
            photos: data.splice(0, 50)
        }
    }
}