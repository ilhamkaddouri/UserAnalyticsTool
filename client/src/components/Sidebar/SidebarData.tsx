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
        title: 'Dashboard.title',
        path: '/',
        icon: <DashboardIcon fontSize="small"/>,
        iconClosed: <ExpandMoreIcon fontSize="small"/>,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Dashboard.title',
                path: '/',
            }
        ]
    },
    {
        title: 'Visitors.title',
        path: '/visitors',
        icon: <RemoveRedEyeIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Visitors.overView',
                path: '/visitors'
            },
            {
                title: 'Visitors.visitsLog',
                path: ''
            },
            {
                title: 'Visitors.realtime',
                path: ''
            },
            {
                title: 'Visitors.realtimeMap',
                path: ''
            },
            {
                title: 'Visitors.locations',
                path: ''
            },
            {
                title: 'Visitors.Devices',
                path: ''
            },
            {
                title: 'Visitors.software',
                path: ''
            },
            {
                title: 'Visitors.times',
                path: ''
            },

        ]
    },
    {
        title: 'Behavior.title',
        path: '/behavior',
        icon: <NotificationsIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/>,
        subMenu: [
            {
                title: 'Behavior.pages',
                path: '',
            },
            {
                title: 'Behavior.entryPages',
                path: '',
            },
            {
                title: 'Behavior.exitPages',
                path: '',
            },
            {
                title: 'Behavior.pageTitles',
                path: '',
            },
            {
                title: 'Behavior.downloads',
                path: '',
            },
            {
                title: 'Behavior.siteSearch',
                path: '',
            },
            {
                title: 'Behavior.userFlow',
                path: '',
            },

        ]
    },
    {
        title: 'Insights.title',
        path: '/insights',
        icon: <ContactlessIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Insights.visitsPerTime',
                path: '',
            },
            {
                title: 'Insights.usersLocation',
                path: '',
            },
        ]
    },
    {
        title: 'HeatMaps.title',
        path: '/heatMaps',
        icon: <InvertColorsIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'HeatMaps.mange',
                path: '',
            },
        ]
    },
    {
        title: 'Goals.title',
        path: '/goals',
        icon: <AdjustIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Goals.overview',
                path: '',
            },
            {
                title: 'Goals.contractUsage',
                path: '',
            },
            {
                title: 'Goals.manage',
                path: '',
            },

        ]
    },
    {
        title: 'Users.title',
        path: '/users',
        icon: <WebAssetIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Users.manage',
                path: '',
            },
        ]
    },
]