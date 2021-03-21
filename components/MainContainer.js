import Head from 'next/head'
import A from '../components/A'

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
        <Head>
            <meta keywords={`nextJs, react, JavaScript` + keywords}></meta>
            <title>{title}</title>
        </Head>
        <nav className="navbar">
                <ul className="collection">
                    <li className="item">
                        <A href="/" text="Главная" />
                    </li>
                    <li className="item">
                        <A href="/users" text="Пользователи" />
                    </li>
                </ul>
        </nav>
        <div>
            {children}
        </div>
        <style jsx>
                {`
                .navbar {
                    background: blue;
                    padding: 15px;
                }
                .collection {
                    display: flex;
                }
                .item {
                    list-style: none;
                    margin-right: 10px;
                }
                .item:last-child {
                    margin-right: unset;
                }

                `}
            </style>
        </>
    )
}

export default MainContainer