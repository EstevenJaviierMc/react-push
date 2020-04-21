import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';

const LandingPage = () => {
    const [estado, setEstado] = useState(false);

    useEffect(() => {
        Push.config({
            serviceWorker: '/sw.js', // Sets a custom service worker script
            fallback: function (payload) {
                alert('aqui')
            }
        });
    }, []);

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
    }
    const onPush2 = () => {
        Notification.requestPermission(async result => {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification('Vibration Sample', {
                        timeout: 5000,
                        body: 'Buzz! Buzz!',
                        vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: 'vibration-sample',
                        requireInteraction: true,
                    });
                });
            }
        });
    }


    return (
        <h1>Hello Mundo
            <button onClick={() => onPush()}>Push</button>
            <button onClick={() => onPush2()}>Push2</button>
        </h1>
    );
}


export default LandingPage;