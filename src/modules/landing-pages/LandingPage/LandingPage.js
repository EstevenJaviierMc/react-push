import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';

const LandingPage = () => {
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

    return (
        <div>
            <h1>Hello Mundo</h1>
            <button onClick={() => onPush()}>Push</button>
        </div>
    );
}


export default LandingPage;