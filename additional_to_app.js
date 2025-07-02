// Add to app.js
app.run(function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        var route = $route.current;
        if (route && route.title) {
            document.title = route.title;
        }
    });
});
```
