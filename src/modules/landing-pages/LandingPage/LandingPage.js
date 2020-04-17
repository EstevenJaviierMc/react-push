import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';
import $ from 'jquery';

const LandingPage = () => {
    const [text, setText] = useState('');

    useEffect(() => {

    }, [])
    const onEmit = async () => {
        try {

            $(document).ready(function () {
                Push.config({
                    serviceWorker: '/js/serviceWorker.min.js', // Sets a custom service worker script
                    fallback: function (payload) {
                        alert('aqui')
                        Push.create("Hello world!", {
                            body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, repellendus.",
                            icon: '/icon/apple-touch-icon-57x57.png',
                            requireInteraction: true,
                            vibrate: [200, 100],
                            onClick: function () {
                                window.focus();
                                this.close();
                            }
                        });
                    }
                });

                Push.create("Hello world!", {
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