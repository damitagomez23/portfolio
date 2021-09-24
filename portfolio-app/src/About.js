import React from 'react';

export class About extends React.Component {
    render() {
        return (
        <main key="main-content" className="main-content">
            <h1>About Me</h1>
            <section className="main-content">
                <h2>Let me introduce myself again</h2>
                <p>👋 Hi, I’m Damita Gomez. I’m a recent grad from the University of Washington (UW) with a degree in Informatics (Data Science)
                </p>
                <p>If you want to learn more about me and my other interests, click here to find a hidden webpage where I will info dump
                    about subjects you never asked to learn about.
                </p>
            </section>
        </main>
        )
    }
}