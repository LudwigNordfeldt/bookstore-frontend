import { Route, Link } from 'react-router-dom';

import Categories from '../pages/categories';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemIcon } from '@mui/material';


export const beautify = (string) => {
    return string[0].toUpperCase().concat(string.slice(1).replaceAll('_', ' '))
}

const CategoriesMini = () => {
    const categories = ["architecture", "music", "fantasy", "humor", "mystery_and_detective_stories",
     "science_fiction", "biology", "chemistry", "mathematics", "physics", "programming",
    "management", "finance", "history"]

    // return(
    //     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //         <List>
    //             {categories.map(el => (
    //                 <ListItem>
    //                     <Link to={`/categories/${el}`}>
    //                         <ListItemButton>
    //                             <ListItemIcon>
    //                                 <BookmarksIcon/>
    //                             </ListItemIcon>
    //                             <ListItemText primary={beautify(el)}></ListItemText>
    //                         </ListItemButton>
    //                     </Link>
    //                     <Route path={`/categories/${el}`} element={<Categories category={el}></Categories>}></Route>
    //                     <Divider />
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // )

    return(
        <Box sx={{bgcolor: 'Background'}} className="cat">
            <List>
                {categories.map(el => (
                    <ListItem>
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