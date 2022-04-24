import {Component} from 'react';
import Header from '../../common/header/Header';
import "./Home.css";
import Grid from './Grid.js';
import Grid1 from './Grid1';
import FilterCard from './Filter.js'
import { Link } from 'react-router-dom';

// import Details from '../details/Details.js';



class Home extends Component {

    render() {        
        return (
            <div>
                {/* Header of the page */}
                <Header />

                {/* Upcoming movies tag */}
                <div className="heading2">
                    Upcoming Movies
                </div>

                {/* Single line grid with Horizontal scroll bar */}
                <Grid />

                <div className="flex-container">

                    {/* Grid having Released movie cards */}
                    <div className="left">
                        <div>
                            <Link to="/details">
                                <Grid1 />
                            </Link>
                            
                        </div>
                    </div>

                    <div className="right">
                        <div>
                            <FilterCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;