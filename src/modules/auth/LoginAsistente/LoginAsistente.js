import React, { useState } from 'react';
import './LoginAsistente.css';
import Navbar from 'src/core/Components/Navbar/Navbar';

import $ from 'jquery';
import CanvasVideoPlayer from 'public/js/canvas-video-player';

$(document).ready(function () {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    if (isIOS) {
        const canvasVideo = new CanvasVideoPlayer({
            videoSelector: '.iphone',
            canvasSelector: '.canvas',
            timelineSelector: false,
            autoplay: true,
            makeLoop: true,
            pauseOnClick: false,
            audio: false
        });
        console.log(canvasVideo);

    } else {
        $('.video-placeholder').css('display', "block");
        $('.canvas').css('display', 'none');
        $('.bg-video').css('display', 'none');
    }
});

const LoginAsistente = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div>
            <Navbar />
            <div className="bg-color-black"></div>

            <video className="bg-video iphone" muted loop autoPlay preload="auto" src="/videos/login-as-mobil.mov"></video>
            <img src="/images/login-as-pc.jpeg" className="video-placeholder" alt="img-fondo" />

            <canvas className="canvas"></canvas>


            <div className="login-body">
                <div className="text-center mb-3">
                    <h1>Bienvenido/a</h1>
                    <h4><i>Tu estilo de vida y tu trabajo, juntos en un mismo lugar.</i></h4>
                </div>
                <div className="form-group">
                    <label htmlFor="correo" className="d-none d-lg-block">Correo</label>
                    <input type="text" id="correo" className="form-control" placeholder="Correo" />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="d-none d-lg-block">Contraseña</label>
                    <div className="input-group">
                        <input type={showPassword ? 'text' : 'password'} id="password" className="form-control"
                            placeholder="Contraseña" />
                        <div className="input-group-append" onClick={() => { setShowPassword(!showPassword) }}>
                            {showPassword ?
                                <span className="input-group-text">
                                    <i className="fas fa-eye"></i>
                                </span>
                                :
                                <span className="input-group-text">
                                    <i className="fas fa-eye-slash"></i>
                                </span>
                            }


                        </div>
                    </div>
                </div>

                <div className="form-group mb-3 text-center">
                    <button className="btn btn-success btn-block btn-lg mb-2" disabled>Entrar</button>
                    <a className="links" href="/">¿Olvidó su contraseña?</a>
                </div>

                <div className="separador">
                    <div className="separador-border"></div>
                    <div className="separador-circle">o</div>
                    <div className="separador-border"></div>
                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-primary btn-block btn-lg">Ingresa con Facebook</button>
                </div>

                <div className="text-center mb-1">
                    ¿Es nuevo en Turisy?<br />
                    <a className="links" href="/">Registrate aquí</a>
                </div>
            </div>
        </div>
    );
}

export default LoginAsistente;