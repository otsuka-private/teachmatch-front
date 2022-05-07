import { List, ListItemIcon, ListItemText, ListItemButton, Toolbar, Divider, Typography } from '@mui/material';
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
    {
        title: '講師のプロフィール',
        path: '/teacher-profile/teacher-id'
    },
    {
        title: '授業部屋',
        path: '/classroom'
    },
];

const DrawerContent = () => {

    return (
        <>
            <Toolbar>
                <Typography variant="body1">Logo?</Typography>
            </Toolbar>
            <Divider />
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