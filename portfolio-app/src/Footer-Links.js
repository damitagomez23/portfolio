import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'

export class FooterLinks extends React.Component {
    render() {
        library.add(faEnvelopeSquare);
        return (
        <footer>
            <div id="links" className ="foot-content">
                <a href="mailto:damita.gomez@comcast.net"><FontAwesomeIcon icon="envelope-square" size = "2x" className = "icon"/></a>
            </div>
        </footer>
        )
    }
}