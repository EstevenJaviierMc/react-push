import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';

const LandingPage = () => {
    const [text, setText] = useState('');

    useEffect(() => {

    }, [])
    const onEmit = async () => {
        try {
            const f = await Push.create('Hello Mundo!', {
                body: text,
                icon: '/icon/apple-touch-icon-57x57.png',
                link: 'http://localhost:3000/',
                requireInteraction: true,
                vibrate: [200, 100],
                onClick: function () {
                    console.log(this);
                }
            });

            const g = f.get();
            console.log(g);

            alert(g.icon);
        } catch (error) {
            alert('error.message');

        }

    }



    return (
        <section className="jumbotron">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1>VIAJA TRANQUILO, VIAJA TURISY</h1>
                        <h4>¿A dónde quieres que te acompañemos</h4>
                        <h4>{text}</h4>
                        <button className="btn btn-primary" onClick={() => {
                            onEmit(text);
                        }}>Emitir</button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default LandingPage;