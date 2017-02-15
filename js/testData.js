$(function () {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var parentList = [];
    window.testData = [
        {
            id: '0',
            parent: '#',
            text: '0',
            state: {}
        }
    ];
    // for js tree, parent needs to be defined before id can be used
    for (var i = 1; i < 6000; i++) {
        var parent = "" + getRandomIntInclusive(0, Math.min(i - 1, 100));
        parentList.push(parent);
        window.testData.push(
            {
                id          : "" + i, // required
                parent      : parent,// required
                text: "" + i,
                state: {}
            }
        );
    }
    window.testData.forEach(function (node) {
        if (parentList.indexOf(node.id) === -1) {
            node.type = 'child';
        } else {
            node.type = 'folder-closed';
        }
    });

    window.hierarchicalData = translateDataToHierarchical(window.testData[0]);

    function translateDataToHierarchical(root) {
        if (!root) {
            return;
        }
        var newNode = {
            id: root.id,
            text: root.text,
            parent: root.parent
        };
        newNode.children = getChildrenOfParent(root.id).map(function (node) {
            return translateDataToHierarchical(node);
        });
        return newNode;
    }

    function getChildrenOfParent(parentId) {
        var children = [];
        window.testData.forEach(function (node) {
            if (node.parent === parentId) {
                children.push(node);
            }
        });
        return children;
    }
});
