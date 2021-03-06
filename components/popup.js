import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Popup(props) {
    return (
        <div className="popup-outer relative">

            <div className="popup">
                <div className="top-right" onClick={() => props.openpopup(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.415L12.585 0L7 5.585L1.415 0L0 1.415L5.585 7L0 12.585L1.415 14L7 8.415L12.585 14L14 12.585L8.415 7L14 1.415Z" fill="black" />
                    </svg>
                </div>
                <div className="login-details">
                    <h2 className='pop-h2'>Zurück</h2>
                </div>

                <h4 className='pop-h4'>
                    Sind Sie sicher, dass Sie zurück gehen wollen?<br />Die eingegebenen Daten wurden noch nicht<br />hochgeladen und könnten verloren gehen.
                </h4>
                <div className="full-w center pd0">
                    <Link href="/upload">
                        <a>
                            <button type="button" className="btn-blue marAuto" >
                                Vorgang abbrechen
                            </button>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    )
}
