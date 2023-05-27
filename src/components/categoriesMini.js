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

const CategoriesMini = (props) => (
        <Box>
            <List>
                {props.categories.map((item, index) => (
                    <ListItem sx={{height:'5vh'}} key={index}>
                        <ListItemButton sx={{height:'5vh'}} component={Link} to={`/categories/${item.link}`}>
                            <ListItemIcon>
                                <BookmarksIcon/>
                            </ListItemIcon>
                            <ListItemText primary={item.label}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
)

export default CategoriesMini