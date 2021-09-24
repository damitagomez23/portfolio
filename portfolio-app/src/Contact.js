import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
        <main key="main-content" className="main-content">
            <h1>Contact Me</h1>
            <section className="main-content">
                <h2 id="about-site">Here is how you can contact me</h2>
                <ul>
                    <li>GitHub</li>
                    <li>email</li>
                    <li>LinkedIn</li>
                    <li>Handshake</li>
                </ul>
            </section>
        </main>
        )
    }
}