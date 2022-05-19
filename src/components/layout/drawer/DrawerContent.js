import Image from 'next/image';
import { Box, List, ListItemIcon, ListItemText, ListItemButton, Toolbar, Divider, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonIcon from '@mui/icons-material/Person';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';;
import { v4 as uuid } from 'uuid';
import demoIcon from 'assets/demo-icon.webp';

const dummyPages = [
    {
        title: 'サービスホーム',
        path: '/'
    },
    {
        title: '登録',
        path: '/signup'
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
        path: '/teacher-search',
        icon: <SearchRoundedIcon />
    },
    {
        title: '講師のプロフィール',
        path: '/teacher-profile/teacher-id',
        icon: <PersonIcon />
    },
    {
        title: '授業部屋',
        path: '/classroom',
        // icon: <FontAwesomeIcon icon="fa-solid fa-chalkboard-user" />
    },
    {
        title: 'Playground',
        path: '/playground',
        icon: <SmartToyRoundedIcon />
    },
];

const DrawerContent = () => {

    return (
        <>
            <Toolbar>
                <Box sx={{ m: '0 auto' }}>
                    <Image src={demoIcon} alt='logo' width={40} height={40} />
                </Box>
            </Toolbar>
            <Divider />
            <List>
                {dummyPages.map(page => {
                    return (
                        <ListItemButton component='a' key={uuid()} href={page.path}>
                            <ListItemIcon>
                                {page.icon ? page.icon : <InboxIcon />}
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