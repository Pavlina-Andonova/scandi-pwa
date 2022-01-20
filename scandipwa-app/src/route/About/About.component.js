// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './About.style';

/** @namespace ScandipwaApp/Route/About/Component */
export class AboutComponent extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <div block="About">
                <h1>Don&apos;t Panic</h1>
                <p>
                    Welcome to my website.
                </p>
            </div>
        );
    }
}

export default AboutComponent;
