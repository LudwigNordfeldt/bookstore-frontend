import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const Shelf = (props) => {
  const style = {
    height: (props.rows*15).toString().concat('%')
  }
  return (
    <ImageList
      className="shelf"
      sx={style}
      cols={5}
    >
      <ImageListItem cols={5}>
        <ListSubheader component="div"><h2>{props.genre}</h2></ListSubheader>
      </ImageListItem>
      {props.books.map((item) => (
        <ImageListItem key={item.key} component="div" sx={{display: 'flex', alignContent: 'center'}}>
          <Link to={`/book${item.key}`}>
            <img
              src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
              alt=""
              loading="lazy"
              style={{alignSelf: 'center'}}
            />
          </Link>
          <ImageListItemBar
            title={item.title}
            subtitle={
              item.author_name ? item.author_name[0] : item.authors[0].name
            }
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Shelf;
