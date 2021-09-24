import React from 'react';

export class Home extends React.Component {
    render() {
        return (
        <main key="main-content" className="main-content">
            <h1>Damita Gomez</h1>
            <section className="main-content">
                <h2>About This Site</h2>
                <p>Hello! My name is Damita Gomez, and welcome to my portfolio site. What you will find here are links to
                my various coding projects and summaries of their content and functionality. I hope to use this website as a personal
                playground for coding activities and trivial research, but it doesn't have a lot to offer at the moment.
                </p>
                <h2>Disclaimer</h2>
                <p>I've built this website myself using React and currently host it using GitHub pages to avoid paying money for a
                    domain, so please enjoy and bear with the technical limitations. If you want to check out how I built this site,
                    check out my GitHub here.
                </p>
            </section>
        </main>
        )
    }
}