import DashboardIcon from '@material-ui/icons/Dashboard';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AdjustIcon from '@material-ui/icons/Adjust';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import ContactlessIcon from '@material-ui/icons/Contactless';
export const sidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <DashboardIcon/>,
        iconClosed: <ExpandMoreIcon/>,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Dashboard',
                path: '/',
            }
        ]
    },
    {
        title: 'Visitors',
        path: '/visitors',
        icon: <RemoveRedEyeIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Overview',
                path: '/visitors'
            },
            {
                title: 'Visits log',
                path: ''
            },
            {
                title: 'Real-time',
                path: ''
            },
            {
                title: 'Real-time Map',
                path: ''
            },
            {
                title: 'Locations',
                path: ''
            },
            {
                title: 'Devices',
                path: ''
            },
            {
                title: 'Software',
                path: ''
            },
            {
                title: 'Times',
                path: ''
            },

        ]
    },
    {
        title: 'Behaviour',
        path: '/behavior',
        icon: <NotificationsIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/>,
        subMenu: [
            {
                title: 'Pages',
                path: '',
            },
            {
                title: 'Entry pages',
                path: '',
            },
            {
                title: 'Exit pages',
                path: '',
            },
            {
                title: 'Exit pages',
                path: '',
            },
            {
                title: 'Pages titles',
                path: '',
            },
            {
                title: 'Downloads',
                path: '',
            },
            {
                title: 'Site Search',
                path: '',
            },
            {
                title: 'Users flow',
                path: '',
            },

        ]
    },
    {
        title: 'Insights',
        path: '/insights',
        icon: <ContactlessIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Predict users visits per time',
                path: '',
            },
            {
                title: 'Predict users locations',
                path: '',
            },
        ]
    },
    {
        title: 'HeatMaps',
        path: '/heatMaps',
        icon: <InvertColorsIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Manage HeatMaps',
                path: '',
            },
        ]
    },
    {
        title: 'Goals',
        path: '/goals',
        icon: <AdjustIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Overview',
                path: '',
            },
            {
                title: 'Contracts Usage',
                path: '',
            },
            {
                title: 'Manage Goals',
                path: '',
            },

        ]
    },
    {
        title: 'Users',
        path: '/users',
        icon: <WebAssetIcon/> ,
        iconClosed: <ExpandMoreIcon/> ,
        iconOpened: <ExpandLessIcon/> ,
        subMenu: [
            {
                title: 'Manage Reports',
                path: '',
            },
        ]
    },
]