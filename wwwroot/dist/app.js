define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia Demo';
            config.map([
                {
                    route: ['', 'home'],
                    name: 'home',
                    moduleId: 'home',
                    nav: true,
                    title: 'Home'
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFnQkEsQ0FBQztRQWJHLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3ZELE1BQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1A7b0JBQ0ksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztvQkFDbkIsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLE1BQU07b0JBQ2hCLEdBQUcsRUFBRSxJQUFJO29CQUNULEtBQUssRUFBRSxNQUFNO2lCQUNoQjthQUNKLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxXQUFHLE1BZ0JmLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuICAgIFxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBEZW1vJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6IFsnJywgJ2hvbWUnXSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnaG9tZScsXHJcbiAgICAgICAgICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hvbWUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
