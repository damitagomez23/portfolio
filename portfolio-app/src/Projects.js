import React from 'react';

export class Projects extends React.Component {
    render() {
        return (
        <main key="main-content" className="main-content">
            <h1>Projects</h1>
            <section>
                <p className="text">Below, you will find a list of school and personal projects ordered by date starting with the most recent
                and links to where to view them online.</p>
                <p className="text">Note: Mentions of "UW" refer to the University of Washington in Seattle.</p>
                
            </section>
            <section className="main-content">
                <ul>
                    <li>
                        <ul><strong>UW Informatics Capstone - Spring 2021</strong>
                            <li>Title: <em>Wander: A Guide to Exploring Seattle</em></li>
                            <li>A website that allows users to learn more about restaurants in Seattle's International District from
                                the perspective of the business owner and to hear the stories behind their food (i.e., not Yelp).</li>
                            <li>Click <a href="https://ischool.uw.edu/capstone/projects/2021/wander-guide-exploring-seattle" target="_blank">here</a> to
                            view the project summary on the capstone website since the website itself if no longer available due to
                            temporary domain hosting for the course of the project.</li>
                            <li>The project was also featured in a <a href="https://ischool.uw.edu/news/2021/05/informatics-team-serves-chinatown-restaurants-stories" target="_blank">news story</a> by
                            the Information School if you are interested in learning more.</li>
                        </ul>
                    </li>
                    <li>
                        <ul><strong>UW INFO 478 Final Project - Spring 2021</strong>
                            <li>Title: <em>Mental Health Resources Analysis</em></li>
                            <li>This was a group project for my population health informatics class.</li>
                            <li>The purpose of this project was to answer the question <em>What is more effective at preventing suicide:
                                increasing mental health facilities or human resources?</em></li>
                            <li>As a group, we looked at taking data from the World Health Organization and researched mental health from
                                multiple perspectives outside of the data to look for the best ways to answer this question for our
                                analysis.</li>
                            <li>Click <a href="https://phung-phu.shinyapps.io/INFO478-Project-Group4/" target="_blank">here</a> to view the whole project</li>
                        </ul>
                    </li>
                    <li>
                        <ul><strong>UW INFO 478 Health Modelling Practice - Spring 2021</strong>
                            <li>Title: <em>Assignment 3</em> (sorry, this was not a major project, so there's not an official title)</li>
                            <li>This project was for an assignment for my population health informatics class to practice creating
                                ShinyApps and using datasets for topic research.</li>
                            <li>- For the record, I am not an expert in population health and cannot speak to the accuracy of the models.
                                These were my best efforts of prediction based on the data I had and what I was learning at the time.</li>
                            <li>Click <a href="https://dgomez23.shinyapps.io/assignment-3-damitagomez23/" target="_blank">here</a> to
                            view the final product.</li>
                        </ul>
                    </li>
                    <li>
                        <ul><strong>UW INFO 474 Final Project Continuation - Winter 2021</strong>
                            <li>Title: <em>Using Billboard to Data to Look at Changes in Music and Music Consumption Over Time</em></li>
                            <li>This project is my own continuation of a group project I was a part of in school. I am still working on
                                this out of my own interest and curiosity.</li>
                            <li>The original class project can be viewed
                                <a href="https://observablehq.com/@uw-info474/group5-investigating-music-changes-over-time" target="_blank">here</a>.</li>
                            <li>The code for this project is not available in GitHub but can readily be seen in Observable below the
                                project content in code blocks.</li>
                            <li>- Everything was coded using D3, other JavaScript components, and markdown.</li>
                            <li>Click <a href="https://observablehq.com/@damitagomez/music-trends" target="_blank">here</a> to view my
                            portion of the project and what I plan to build off of.</li>
                        </ul>
                    </li>
                    <li>
                        <ul><strong>UW Pokemon Club Website - Winter 2020</strong>
                            <li>Title: <em>UW Pokemon Club</em></li>
                            <li>This was a website that I developed with another student for UW's Pokemon Club.</li>
                            <li>It features club announcements and an interactive calendar that my partner and I constructed.</li>
                            <li>It utilizes a Firebase database in a React app to pull calendar events and register users.</li>
                            <li>The club has fallen apart, but <a href="https://info340d-au18.github.io/project-stluongxd/" target="_blank">the website</a>
                            is still running with a fully functioning calendar! 🥴</li>
                        </ul>
                    </li>
                    <li>
                        <ul><strong>UW INFO 201 Final Project - Winter 2019</strong>
                            <li>Title: <em>Compare Universities</em></li>
                            <li>This project is much older and has not been touched in a while.</li>
                            <li>It was another group project where we built everything in R and used a ShinyApp to launch the final
                                product.</li>
                            <li>The goal was to allow users a way to compare different universities by various attributes such as
                                location, academic interests, or college types.</li>
                            <li>I built the <em>Academic Majors</em> page and all of its interactive features as my main contribution to the
                                project.</li>
                            <li>Click <a href="https://mwood22.shinyapps.io/Info_201_Final_Project/" target="_blank">here</a> to view the 
                            full project.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </main>
        )
    }
}