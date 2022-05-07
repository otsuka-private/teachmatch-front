import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { v4 as uuid } from 'uuid';

const dummyPages = [
    {
        title: 'サービスホーム',
        path: '/'
    },
    {
        title: '登録',
        path: '/register'
    },
    {
        title: 'ログイン',
        path: '/login'
    },
    {
        title: '生徒ホーム',
        path: '/student'
    },
    {
        title: '講師ホーム',
        path: '/teacher'
    },
    {
        title: '講師の検索',
        path: '/teacher-search'
    },
];

const DrawerContent = () => {

    return (
        <>
            <List>
                {dummyPages.map(page => {

                    return (
                        <ListItemButton component='a' key={uuid()} href={page.path}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={page.title} />
                        </ListItemButton>
                    )
                })}
            </List>
        </>
    )
}

export default DrawerContent