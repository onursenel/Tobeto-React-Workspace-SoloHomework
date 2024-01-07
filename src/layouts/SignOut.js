import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignOut({signIn}) {
    return (
        <div className="container">
            <button onClick={signIn} className="btn btn-primary my-2 my-sm-0" >Giriş Yap</button>
            <button className="btn btn-success my-2 my-sm-0" style={{ marginLeft: '0.5em' }}>Kayıt Ol</button>
        </div>

    )
}
