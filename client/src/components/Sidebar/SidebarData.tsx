import DashboardIcon from '@material-ui/icons/Dashboard';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import AdjustIcon from '@material-ui/icons/Adjust';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import ContactlessIcon from '@material-ui/icons/Contactless';
import ReorderIcon from '@material-ui/icons/Reorder';
export const sidebarData = [
    {
        title: 'Dashboard.title',
        path: '/dashboard',
        icon: <DashboardIcon fontSize="small"/>,
        iconClosed: <ExpandMoreIcon fontSize="small"/>,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Dashboard.title',
                path: '/dashboard',
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
                path: '/visitors/visitsLog'
            },
            {
                title: 'Visitors.times',
                path: '/visitors/times'
            },
            {
                title: 'Visitors.realtime',
                path: '/visitors/realtime'
            },
            {
                title: 'Visitors.realtimeMap',
                path: '/visitors/realtimeMap'
            },
            {
                title: 'Visitors.locations',
                path: '/visitors/locations'
            },
            {
                title: 'Visitors.Devices',
                path: '/visitors/devices'
            },
            {
                title: 'Visitors.software',
                path: '/visitors/software'
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
                path: '/pages',
            },
            {
                title: 'Behavior.entryPages',
                path: '/entryPages',
            },
            {
                title: 'Behavior.exitPages',
                path: '/exitPages',
            },
            {
                title: 'Behavior.pageTitles',
                path: '/pageTitles',
            },
            {
                title: 'Behavior.downloads',
                path: '/downloads',
            },
            {
                title: 'Behavior.siteSearch',
                path: '/siteSearch',
            },
            {
                title: 'Behavior.performance',
                path: '/performance',
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
                path: '/insights/perTime',
            },
            {
                title: 'Insights.usersLocation',
                path: '/insights/perLocation',
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
                path: '/manageHeatMaps',
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
                path: '/goals/overview',
            },
            {
                title: 'Goals.contractUsage',
                path: '/goals/contractUsage',
            },
            {
                title: 'Goals.manage',
                path: '/goals/manageGoals',
            },

        ]
    },
    {
        title: 'Forms.title',
        path: '/forms',
        icon: <ReorderIcon fontSize="small"/> ,
        iconClosed: <ExpandMoreIcon fontSize="small"/> ,
        iconOpened: <ExpandLessIcon fontSize="small"/> ,
        subMenu: [
            {
                title: 'Forms.overview',
                path: '',
            },
            {
                title: 'Forms.realTime',
                path: '',
            },
            {
                title: 'Forms.manage',
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
                path: '/addUser',
            },
        ]
    },
]