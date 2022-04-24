import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ImageList } from '@material-ui/core';
// import GridList from '@material-ui/core/GridList';
import { ImageListItem } from '@material-ui/core';
// import GridListTile from '@material-ui/core/GridListTile';
import { ImageListItemBar } from '@material-ui/core';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import MoviesData from '../../common/moviesData.js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
//   gridList: {
//     height: '350',
//   },
});

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ImageList className={classes.gridList} cols={4}>
        {MoviesData.map(tile => (
          <ImageListItem style={{margin: 16, height: 350, minWidth: 200}} key={tile.poster_url}>
            <img src={tile.poster_url} alt={tile.title} />
            <ImageListItemBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);