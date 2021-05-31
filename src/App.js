import './App.css';
import BackgroundHero from './images/chain.png';
import BackgroundContact from './images/contact.png';

import { Animated } from 'react-animated-css';


import React, { useState, useEffect } from 'react';


function Project(props) {
    return (
        <Animated animationIn="fadeInLeft">
            <div className="w-90pc">
                <img className="mb-5" src={props.image} alt={props.name} />
                <a href={props.link}>
                    <h3>{props.name}</h3>
                </a>
                <p>{props.desc}</p>
                <div className="mt-5">
                    {props.technologies.map((tech, i) => <small key={i + props.name} className="bg-accent p-2 white mr-3 mb-3 inline-block">{tech}</small>)}
                </div>
            </div>
        </Animated>
    );
}

function BlogPost(props) {
    return (
        <div className="flex flex-wrap items-center bg-light-gray p-5 mb-5">
            <figure className="w-100pc md-w-25pc md-mr-5">
                <a href={props.link}>
                    <img src={props.image} alt={props.name} />
                </a>
            </figure>

            <h3 className="w-auto md-w-60pc">
                <a href={props.link}>
                    {props.name}
                </a>
            </h3>
        </div>
    )
}

function Blog(props) {

    const [posts, setPosts] = useState([]);

    const [firstPost, setFirstPost] = useState([]);

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=andersonjoseph')
            .then(response => response.json())
            .then(data => {
                setFirstPost(data.shift());
                setPosts(data.splice(0, 4));
            }
            );
    }, []);


    return (
        <div className="flex flex-wrap justify-between">

            <div className="w-100pc md-w-40pc mb-5 md-mb-0">
                <div className="bg-light-gray p-5">
                    <a href={firstPost.url}>
                        <img className="mb-5" src={firstPost.cover_image} alt={firstPost.title} />
                    </a>
                    <h3 className="fs-l1">
                        <a href={firstPost.url}>{firstPost.title}</a>
                    </h3>
                </div>
            </div>

            <div className="w-100pc md-w-40pc">
                {posts.map((post, i) => <BlogPost key={post + i} name={post.title} image={post.cover_image} link={post.url} />)}
            </div>

        </div>

    )

}

function App() {
    return (
        <div className="App m-4 md-m-8">
            <div className="flex flex-wrap bg-light-gray" style={{ height: '90vh' }}>
                <div className="w-100pc md-w-50pc p-8">
                    <div className="w-75pc h-100pc flex flex-wrap content-between">
                        <Animated animationIn="fadeInLeft" isVisible={true}>
                            <h1>Anderson Joseph - <br /> Desarrollador Web</h1>
                        </Animated>
                        <Animated animationIn="fadeInUp" isVisible={true}>
                            <p>
                                ¡Hola!👋 Soy un <strong>desarrollador web</strong>, estudiante de último año de <strong>ingeniería de sistemas</strong>. Me enfoco crear <strong>web apps, API's, y plugins.</strong> Sin dejar de lado el diseño y la experiencia de usuario.
                            </p>
                        </Animated>
                    </div>
                </div>

                <div className="w-100pc md-w-50pc" style={{ backgroundImage: "url(" + BackgroundHero + ")", backgroundSize: 'cover'}}>
                </div>

            </div>

            <div className="mt-l5">
                <Animated animationIn="fadeInRight" isVisible={true}>
                    <p className="fs-m4 md-fs-l4 poppins text-center md-text-left">
                        <u>
                            Sitios web a medida📐 - Diseño efectivo de interfaz🖌 - EComerce💰 - Rediseños🎨 - Optimizaciones 🚀 - Y más.
                        </u>
                    </p>
                </Animated>
            </div>

            <div className="mt-l5 mb-8">
                <div className="flex flex-wrap items-center">
                    <h2 className="fs-l1 w-100pc md-w-auto">Proyectos 🖥</h2>
                    <span className="w-100pc md-w-l5 inline-block w-l5 h-1 ml-0 md-mr-5 md-ml-5" style={{ backgroundColor: '#29243B' }}></span>
                    <p><strong>He colaborado, trabajado y ayudado a 40+ empresas a mejorar sus ventas y su presencia en internet</strong></p>
                </div>
            </div>

            <div className="flex flex-wrap justify-between">

                <div className="w-100pc md-w-40pc">
                    <Project
                        name="Ecosoluciones"
                        desc="Ecommerce de productos químicos. Trabajé en el diseño, desarrollo del sitio e integraciones con sus empresas de envío y transporte"
                        technologies={['WordPress', 'Elementor', 'WooCommerce']}
                        image="images/projects/ecosoluciones.png"
                        link="https://www.ecosolucionesquimicas.es"
                    />
                </div>

                <div className="w-100pc md-mt-l5 md-w-40pc">
                    <Project
                        name="Regaloporquesi"
                        desc="Tineda online de regalos. Se trató de un proyecto enfocado a renovar la marca desde 0. La empresa pasaba por un momento de rebranding y buscaban que el diseño nuevo de la web emitiera los mensajes de identidad de la marca"
                        technologies={['WordPress', 'WooCommerce', 'Elementor']}
                        image="images/projects/regalo.png"
                        link="https://regalo.neopruebas.com/nueva-web/"
                    />
                </div>

            </div>

            <div className="flex flex-wrap justify-between">

                <div className="w-100pc md-w-40pc">
                    <Project
                        name="KRT Racing"
                        desc="Ecommerce dedicado a vender piezas y accesorios para automóviles. El proyecto se trató de un rediseño para un web antigua, estaba desarrollada en una plataforma que ya no contaba con soporte. El desafío estuvo en adaptar los plugins antiguos para que funcionasen con WordPress"
                        technologies={['Elementor', 'WooCommerce', 'PHP', 'Desarrollo de Plugins']}
                        image="images/projects/krt.png"
                        link="https://krt-racing.com"
                    />
                </div>

                <div className="w-100pc md-mt-l5 md-w-40pc">
                    <Project
                        name="SanchoFerrer"
                        desc="Una web de contacto y showcase de los proyectos de una arquitecta. El diseño de esta web está muy orientado a los detalles, proporción, simetría y minimalismo. Haciendo referencia a la perfección de los detalles que existen en un buen proyecto arquitectónico"
                        technologies={['WordPress', 'WooCommerce', 'Elementor']}
                        image="images/projects/SanchoFerrer.png"
                        link="https://www.sanchoferrerarquitectura.com"
                    />
                </div>

            </div>

            <div className="mt-l5 mb-8">
                <div className="flex flex-wrap items-center">
                    <h2 className="fs-l1 w-100pc md-w-auto">Blog 📝</h2>
                    <span className="w-100pc md-w-l5 inline-block w-l5 h-1 ml-0 md-mr-5 md-ml-5" style={{ backgroundColor: '#29243B' }}></span>
                    <p><strong>Acumulo +25K Visitas en mis artículos sobre desarrollo web</strong></p>
                </div>
            </div>

            
            <Blog />

            <div className="mt-l5 mb-8">
                <div className="flex flex-wrap items-center">
                    <h2 className="fs-l1 w-100pc md-w-auto">Contáctame 📞</h2>
                    <span className="w-100pc md-w-l5 inline-block w-l5 h-1 ml-0 md-mr-5 md-ml-5" style={{ backgroundColor: '#29243B' }}></span>
                    <p><strong>¡Envíame tu propuesta de proyecto y trabajemos juntos!</strong></p>
                </div>
            </div>

            <div className="flex flex-wrap">

                <div className="w-100pc md-w-50pc" style={{ backgroundImage: "url(" + BackgroundContact + ")", backgroundSize: 'cover' }}>
                </div>

                <div className="w-100pc md-w-50pc bg-light-gray p-8">
                    <a className="md-fs-m2 poppins" href="mailto:andersonjoseph@mailfence.com">✉ andersonjoseph@mailfence.com</a>

                    <form className="mt-5" action="https://formspree.io/f/mvodabwe" method="POST">
                        <div className="mb-5">
                            <label className="fw-bold">Tu Email</label>
                            <input required type="email" name="_replyto" className="block w-100pc p-3" style={{ border: 'solid 2px #29243B' }} />
                        </div>

                        <div className="mb-5">
                            <label className="fw-bold">Mensaje</label>
                            <textarea required name="message" className="block w-100pc p-3 h-l8" style={{ border: 'solid 2px #29243B' }}></textarea>
                        </div>

                        <div className="mb-5 text-center">
                            <button className="bg-primary bw-0 white px-8 py-3 fw-bold fs-s1 w-auto md-w-25pc" type="submit">Enviar</button>
                        </div>

                    </form>
                </div>

            </div>

            <div className="text-center my-5">
                <small>Copyright © 2021 | Anderson Joseph | Todos los derechos reservados | Ilustraciones por: <a href="https://www.karthiksrinivas.in/">Karthik Srinivas</a></small>
            </div>

        </div>
    );
}

export default App;
