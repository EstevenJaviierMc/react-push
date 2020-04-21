import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';
import $ from 'jquery';
import { CountUp } from 'countup.js';

const LandingPage = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const conteo = (end) => {
        const countUp = new CountUp('countup', end);
        countUp.start();
    }

    useEffect(() => {
        conteo(count);
    }, [count])
    const onEmit = async () => {
        try {




            $(document).ready(async function () {
                await Push.config({
                    serviceWorker: '/js/serviceWorker.min.js', // Sets a custom service worker script
                    fallback: function (payload) {
                        alert('aqui')
                    }
                });
                await Push.create("Hello world!", {
                    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, repellendus.",
                    icon: '/icon/apple-touch-icon-57x57.png',
                    requireInteraction: true,
                    vibrate: [200, 100],
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            });
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
                        <h4>¿A dónde quieres que te acompañemos <span id="countup">{count}</span></h4>
                        <h4>{text}</h4>

                        <input type="text" value={count} onChange={e => setCount(e.target.value)} />
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