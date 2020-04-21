import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';

const LandingPage = () => {
    const [estado, setEstado] = useState(false);

    useEffect(() => {
        Push.config({
            serviceWorker: '/push.js/bin/serviceWorker.min.js', // Sets a custom service worker script
            fallback: function (payload) {
                alert('aqui')
            }
        });
    }, [])

    const onPush = () => {
        Push.create("Hello world!", {
            body: 'Hola Mundo!',
            requireInteraction: true,
            vibrate: [200, 100],
            onClick: function () {
                window.focus();
                this.close();
            }
        });
        alert('Ya');
    }



    return (
        <h1>Hello Mundo
            <button onClick={() => onPush()}>Push</button>
        </h1>
    );
}


export default LandingPage;