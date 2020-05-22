import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from './profilepic.png'

class Contact extends Component {
    render () {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Shaker Kattoula</h2>
                        <img
                        src={profilepic}
                        alt="avatar"
                        style={{height: '250px', borderRadius: '10px'}} 
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Software Developer from San Diego with a strong passion for problem-solving and engineering creative solutions using code. Reflective communicator and collaborative team member. Backed with 5+ years of professional customer service and operations management.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true" />
                                    (760) 458-3923
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                                    smkattoula@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                   linkedin.com/in/shakerkattoula
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
