import React, { useEffect, useState } from "react"
import { API_URL, API_KEY } from './Config';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'flex',
    height: 700,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {

  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(`${API_URL}news/AAPL?token=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setImages(data) // new
      })
  }, [])

  const [images2, setImages2] = useState([])
  useEffect(() => {
    fetch(`${API_URL}news/IBM?token=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setImages2(data) // new
      })
  }, [])

  const classes = useStyles();

  return (
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((item) => (
          <GridListTile key={item.image} cols={item.cols || 1}>
            
            <a href={item.url}>
            <img src={item.image} alt={item.headline} />
            </a>
          </GridListTile>
        ))}
        {images2.map((item) => (
          <GridListTile key={item.image} cols={item.cols || 1}>
            
            <a href={item.url}>
            <img src={item.image} alt={item.headline} />
            </a>
          </GridListTile>
        ))}
      </GridList>
  
  );
}
