import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import Header from '../../common/header/Header';
import "./Details.css";
import { Link } from 'react-router-dom';


const Details = () => {

  return (
    <div>
      <Header />
      <Link to="/"><button className="back-btn">Back to Home</button></Link>
      <div className="flex-container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" alt="img" />
        </div>
        <div className="middle">
          <h1>Inception</h1>
          <p><span className="sub-head">Genre: </span>Action, Adventure, Sci-Fi</p>
          <p><span className="sub-head">Duration: </span>148</p>
          <p><span className="sub-head">Release date: </span>Fri Jul 16 2010</p>
          <p><span className="sub-head">Rating: </span>8.8</p>
          <p><span className="sub-head">Plot: </span>
          (<a href="https://en.wikipedia.org/wiki/Inception">Wiki Link</a>) 
          A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a C.E.O.
          </p>
           <p><span className="sub-head">Trailer: </span></p>
            
        </div>
        <div className="right">
          <p><span className="sub-head">Rate this movie: </span><br />
          <Rating
            name="customized-empty"
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          /></p>
            
          <p><span className="sub-head">Artists: </span>

            <div className="root">
              <ImageList className="gridList" cols={2}>
                  
                  <ImageListItem style={{margin: 0, height: 250}} key="url">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Leonardo_DiCaprio_visited_Goddard_Saturday_to_discuss_Earth_science_with_Piers_Sellers_%2826105091624%29_cropped.jpg" alt="img" />
                    <ImageListItemBar
                      title="Leonardo DiCaprio"
                    />
                  </ImageListItem>

                  <ImageListItem style={{margin: 0, height: 250}} key="url">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Joseph_Gordon-Levitt_2013.jpg" alt="img" />
                    <ImageListItemBar
                      title="Joseph Gordon-Levitt"
                    />
                  </ImageListItem>
                  
                </ImageList>
              </div>

            </p>
          </div>
        </div>
    </div>
  )
}

export default Details;