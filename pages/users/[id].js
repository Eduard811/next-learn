import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"

export default function({user}) {

    const {query} = useRouter()

    return (
        <MainContainer keywords={"user"} title={user.name}>
            <div>
               <h1>Имя пользователя: {user.name}</h1>
               <h2>Id пользователя: {query.id}</h2>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
      props: {user}, // will be passed to the page component as props
    }
}