import {Component} from 'react';
import Header from '../../common/header/Header';
import "./Home.css";
import Grid from './Grid.js';
import Grid1 from './Grid1';



class Home extends Component {
    render() {
        
        return (
            <div>
                <Header />
                <div className="heading2">Upcoming Movies</div>
                <Grid />
                <div className="flex-container">
                    <div className="left"><Grid1 /></div>
                    <div className="right"></div>
                </div>
            </div>
        );
    }
}

export default Home;