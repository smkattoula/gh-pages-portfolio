import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './profilepic.png';

class Landing extends Component {
    render () {
        return (
            <div style={{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={profilepic}
                        alt="avatar" 
                        className="avatar-img" />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML | CSS | JavaScript | React | Ruby on Rails | AngularJS | NodeJS | Express | MongoDB | SQL</p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://linkedin.com/in/shakerkattoula" rel="noopener noreferrer" target="_blank" > 
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                
                                {/* Github */}
                                <a href="https://github.com/smkattoula" rel="noopener noreferrer" target="_blank" > 
                                <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;