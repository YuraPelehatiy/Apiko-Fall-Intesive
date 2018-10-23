import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import s from './About.module.css'
import ScrollToTop from '../../scroll/ScrollToTop';

const About = ({ match }) => (
    <ScrollToTop>
        <div className={s.About}>
            <div className={s.sidebar}>
                <ul>
                    Sidebar
                    <li>
                        <Link to={`${match.url}`}>About</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/instruction`}>Instruction</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/sidebar-example-page`}>Sidebar example page</Link>
                    </li>
                </ul>
            </div>
            <div className = {s.page}>
                <Switch>
                    <Route exact path = {`${match.path}/`} render = {() => (
                            <div>
                                <h2>About this Todo</h2>
                                <p>It is simple Todo List created by React</p>
                            </div>
                    )}/>
                    <Route path = {`${match.path}/instruction`} render = {() => (
                        <div>
                            <h2>Instruction</h2>
                            <p>Some instruction</p>
                        </div>
                    )}/>
                    <Route path = {`${match.path}/sidebar-example-page`} render = {() => (
                        <div>
                            <h2>Sidebar example page</h2>
                            <p>Example</p>
                        </div>
                    )}/>
                </Switch>
                
            </div>
        </div>
    </ScrollToTop>
);

export default About;