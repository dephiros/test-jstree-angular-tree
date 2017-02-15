/**
 * Created by an.nguyen on 2/14/17.
 */
$(function () {
    angular.module('myApp', ['treeControl'])
        .controller('BaseController', [
            function () {
                var vm = this;
                vm.treeOptions = {
                    nodeChildren: "children",
                    dirSelectable: true,
                    injectClasses: {
                        ul: "a1",
                        li: "a2",
                        liSelected: "a7",
                        iExpanded: "a3",
                        iCollapsed: "a4",
                        iLeaf: "a5",
                        label: "a6",
                        labelSelected: "a8"
                    }
                };
                vm.treeData = window.hierarchicalData;
                console.log();
            }
        ]);

    angular.bootstrap(document.body, ['myApp']);
});
