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


export {
    bottomTabs
};