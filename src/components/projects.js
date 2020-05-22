import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props); 
        this.state = { activeTab: 0 };
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://pngimg.com/uploads/treasure_chest/treasure_chest_PNG60.png) center / cover'}}></CardTitle>
                    <CardText>A fun treasure hunt game built using only HTML, CSS, and JavaScript!</CardText>
                    <CardActions className= "button-text" border>
                        <Button colored href="https://github.com/smkattoula/treasure-hunt-game" target="_blank">Github</Button>
                        <Button colored href="https://treasure-hunt-game-beach-theme.herokuapp.com/" target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTd0-RvEI12MaS6Athes3f3ttRj-0bWHKj6GXelWHzAV6VmumGU&usqp=CAU) center / cover'}}></CardTitle>
                    <CardText>A full-stack web application designed to keep track of your grocery items and give you food recipes to make based on the ingredients you own! Implements CRUD funtionality, RESTful API's, and Devise User Authentication. Developed by a team of 4 ,including myself, utilizing React on Rails. Currently in Alpha phase. </CardText> 
                    <CardActions className= "button-text" border>
                        <Button colored href="https://github.com/Cult-of-Code/Pantry_App" target="_blank">Github</Button>
                        <Button colored href="https://pantry-application.herokuapp.com/" target="_blank">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://libreshot.com/wp-content/uploads/2017/07/apartment-house-exterior-design.jpg) center / cover'}}></CardTitle>
                    <CardText>Full-Stack Web Application Coming Soon!</CardText>
                    <CardActions className= "button-text" border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (<div><h1>Project Coming Soon!</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (<div><h1>Project Currently in Progress (May 2020)!</h1></div>
            )
        } 
    }

    render () {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Ruby on Rails</Tab>
                    <Tab>MEAN Stack</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Project;