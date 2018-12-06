

const defaultOptions = {
    bottomTab: {
        fontFamily: fonts.REGULAR,
        fontSize: 10,
        iconColor: 'black',
        selectedIconColor: 'blue',
        labelColor: 'black',
        selectedLabelColor: 'blue',
        backgroundColor: 'white',
    },
    topBar: {
        title: {
            color: 'black',
        },
        visible: false
    }
};

const TAB_1 = {
    id: 'ONE',
    stack: {
        children: [
            {
                component: {
                    name: 'sk.tabs.one',
                }
            }
        ],
        options: {
            bottomTab: {
                text: 'TWO',
                title: 'TWO'
            }
        }
    }
};

const TAB_2 = {
    id: 'TWO',
    stack: {
        children: [
            {
                component: {
                    name: 'sk.tabs.two',
                }
            }
        ],
        options: {
            bottomTab: {
                text: 'ONE',
                title: 'ONE'
            }
        }
    }
};

const bottomTabs = {
    id: 'bottomTabs',
    children: [TAB_1, TAB_2]
};


export default {
    defaultOptions,
    bottomTabs,
    authRoot
};