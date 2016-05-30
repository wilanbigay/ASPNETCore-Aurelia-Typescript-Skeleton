define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging();
        aurelia.start()
            .then(function (a) { return a.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQSxtQkFBMEIsT0FBZ0I7UUFDdEMsT0FBTyxDQUFDLEdBQUc7YUFDTixxQkFBcUIsRUFBRTthQUN2QixrQkFBa0IsRUFBRSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxLQUFLLEVBQUU7YUFDVixJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVBlLGlCQUFTLFlBT3hCLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgICBhdXJlbGlhLnVzZVxyXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICAgICAgICBcclxuICAgICAgICBhdXJlbGlhLnN0YXJ0KClcclxuICAgICAgICAgICAgLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
