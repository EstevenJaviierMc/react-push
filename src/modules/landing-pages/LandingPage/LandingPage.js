import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Push from 'push.js';
import $ from 'jquery';
import io from 'socket.io-client';

const socket = io('ws://holaworld.netlify.com');

const onGranted = (text) => {
    Push.create('Hello Mundo!', {
        body: text,
        icon: '/icon/apple-touch-icon-57x57.png',
        link: 'http://localhost:3000/',
        requireInteraction: true,
        vibrate: [200, 100]

    });
    $('button').css('background', 'green');
}


const onDenied = () => {
    $('button').css('background', 'red');
    alert('debes permitir las notificaciones para estar al dia')
}

const onPush = (text) => {
    Push.Permission.request(onGranted(text), onDenied);
}

const onEmit = (msg) => {
    Push.create('Hello Mundo!', {
        body: msg,
        icon: '/icon/apple-touch-icon-57x57.png',
        link: 'http://localhost:3000/',
        vibrate: [200, 100]

    });
    socket.emit('new-op', msg);
}

const LandingPage = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        socket.on('new-remote-op', (msg) => {
            setText(msg);
            onPush(msg);
        });
    }, [])


    return (
        <section className="jumbotron">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-12">
                        <h1>VIAJA TRANQUILO, VIAJA TURISY</h1>
                        <h4>¿A dónde quieres que te acompañemos</h4>
                        <h4>{text}</h4>
                        <input className="form-control" value={text} onChange={(e) => setText(e.target.value)}></input>
                        <button className="btn btn-primary mb-2" onClick={() => onPush()}>Notification</button>
                        <br />
                        <button className="btn btn-primary" onClick={() => onEmit(text)}>Emitir</button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default LandingPage;