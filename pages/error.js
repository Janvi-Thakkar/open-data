import Link from 'next/Link';
import Head from 'next/head';

export default function Error() {
    return (

        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="screen">

                    <form className="data-form">

                        <div className="row center">
                            <div>
                                <h1>🚫</h1>
                                <h1>Entschuldigung, es liegt ein technischer Fehler vor.  Bitte wiederholen Sie die Aktion</h1>
                            </div>

                        </div>

                        <div className="row center ">
                            <Link href='/dashboard'>
                                <a>
                                    <button className="white-btn">
                                        Weiter zum Dashboard
                            </button>
                                </a>
                            </Link>

                            <Link href='/upload'>
                                <a>
                                    <button className="black-btn">
                                        Weitere Daten hochladen
                                    </button>
                                </a>
                            </Link>
                        </div>

                    </form>



                </div>

            </main>


        </div>

    )
}