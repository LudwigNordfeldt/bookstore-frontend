//import Book from "./book";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const Shelf = (props) => {
  return (
    <ImageList
      className="shelf"
      sx={{ width: 1200, height: props.rows * 500 }}
      cols={5}
    >
      {console.log("BOOKS ARE:", props.books)}
      {console.log("GENRE:", props.genre)}
      {props.books.map((item) => (
        <ImageListItem key={item.key}>
          <ListSubheader component="div">{props.genre}</ListSubheader>
          <a href={`https://openlibrary.org${item.key}`}>
            <img
              src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
              alt=""
              loading="lazy"
            />
          </a>
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
