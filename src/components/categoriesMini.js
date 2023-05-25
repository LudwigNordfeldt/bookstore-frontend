import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';


export const beautify = (string) => {
    return string[0].toUpperCase().concat(string.slice(1).replaceAll('_', ' '))
}

const CategoriesMini = () => {
    const categories = ["architecture", "music", "fantasy", "humor", "mystery_and_detective_stories",
     "science_fiction", "biology", "chemistry", "mathematics", "physics", "programming",
    "management", "finance", "history"]

    return(
        <Box className="cat">
            <List>
                {categories.map(el => (
                    <ListItem sx={{height:'2%'}}>
                        <ListItemButton component={Link} to={`/categories/${el}`}>
                            <ListItemIcon>
                                <BookmarksIcon/>
                            </ListItemIcon>
                            <ListItemText primary={beautify(el)}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default CategoriesMini