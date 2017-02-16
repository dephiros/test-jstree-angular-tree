$(function () {
    "use strict";
    var testJsTree = $("#test-tree");
    testJsTree.jstree({
        "core": {
            "data": window.testData,
            "themes": {
                "name": "default-dark",
                "dots": true,
                "icons": true
            }
        },
        "plugins": [
            "checkbox",
            "types",
            "search"
        ],
        "types": {
            "child":  {
                "icon": "icon-child"
            },
            "folder-closed": {
                "icon": "icon-folder-closed"
            },
            "folder-open": {
                "icon": "icon-folder-open"
            }
        }
    });
    testJsTree.on('changed.jstree', function (e, data) {
        console.log(testJsTree.jstree(true).get_selected(true));
        $("#test-tree-result").text(testJsTree.jstree(true).get_selected());
    });

    testJsTree.on('open_node.jstree', function (e, data) {
        data.instance.set_type(data.node, 'folder-open');
        console.log(data.node);
    });

    testJsTree.on('close_node.jstree', function (e, data) {
        data.instance.set_type(data.node, 'folder-closed');
    });

    $("#s").submit(function(e) {
        e.preventDefault();
        testJsTree.jstree(true).search($("#q").val());
    });


});
