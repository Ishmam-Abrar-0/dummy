// controllers.js
app.controller('HomeController', function($scope) {
    $scope.developer = {
        name: 'John Doe',
        title: 'Full Stack Developer',
        bio: 'Passionate about creating amazing web experiences'
    };
});

app.controller('ProjectsController', function($scope) {
    $scope.projects = [
        {
            title: 'E-commerce Platform',
            description: 'Modern shopping cart with payment integration',
            tech: ['AngularJS', 'Node.js', 'MongoDB'],
            image: 'assets/project1.jpg',
            demo: 'https://demo.com',
            github: 'https://github.com/user/project1'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative project management tool',
            tech: ['React', 'Express', 'PostgreSQL'],
            image: 'assets/project2.jpg',
            demo: 'https://demo2.com',
            github: 'https://github.com/user/project2'
        }
    ];
    
    $scope.filter = '';
    $scope.filteredProjects = $scope.projects;
    
    $scope.filterProjects = function() {
        $scope.filteredProjects = $scope.projects.filter(function(project) {
            return project.title.toLowerCase().includes($scope.filter.toLowerCase()) ||
                   project.tech.some(function(tech) {
                       return tech.toLowerCase().includes($scope.filter.toLowerCase());
                   });
        });
    };
});

app.controller('ContactController', function($scope) {
    $scope.contact = {};
    $scope.submitted = false;
    
    $scope.submitForm = function(form) {
        $scope.submitted = true;
        if (form.$valid) {
            // Simulate form submission
            alert('Message sent successfully!');
            $scope.contact = {};
            $scope.submitted = false;
            form.$setPristine();
        }
    };
});
