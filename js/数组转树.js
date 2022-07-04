// 数组的树
let data = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 3 },
    { id: 6, parentId: 3 },
    { id: 7, parentId: 2},
    { id: 8, parentId: 4},
    { id: 9, parentId: 5},
]

// 转换如下
const expectTree = {
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {
                    id: 4, children: [],
                }
            ]
        },
        {
            id: 3,
            children: [
                {
                    id: 5, children: [],
                },
                {
                    id: 6, children: [],
                }
            ]
        },
    ]
}


function getTree(data) {
    const rootNodeData = data.find(item => item.parentId === null);
    if (!rootNodeData) {
        throw new Error('根节点不存在')
    }

    return createNode(rootNodeData.id, data);
}

function createNode(id, data) {
    const childrenNodeData = data.filter(item => item.parentId === id);
    
    const node = {
        id,
        children: childrenNodeData.reduce((result, childNodeData) => {
            result.push(createNode(childNodeData.id, data))
            return result;
        }, [])
    }

    return node;
}

const tree = getTree(data);
console.log(JSON.stringify(tree))