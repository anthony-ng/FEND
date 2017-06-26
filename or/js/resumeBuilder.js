// Creating Objects
var bio = {
    name: 'Anthony',
    role: 'Software Engineer',
    contacts: {
        mobile: '(859)462-0836',
        email: 'thomsonng123@gmail.com',
        github: 'https://github.com/anthony-ng',
        twitter: '',
        location: 'Palo Alto, CA'
    },
    welcomeMessage: 'Welcome Everyone!',
    skills: ['JavaScript', 'HTML5', 'CSS3'],
    biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/0ae/32e/01e0b06.jpg',
    display: function() {
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(formattedHeaderRole);

        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $('#header').prepend(formattedHeaderName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $('#topContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $('#topContacts').append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $('#topContacts').append(formattedTwitter);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $('#topContacts').append(formattedGithub);

        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        $('#topContacts').append(formattedBlog);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(formattedLocation);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $('#header').append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(formattedWelcomeMsg);

        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkills);
        });
    }
};

var education = {
    schools: [{
        name: 'UC Berkeley',
        location: 'Berkeley, CA',
        degree: 'Bachelor of Arts',
        majors: ['Statistics'],
        dates: 'Aug 2008 - May 2013',
        url: 'https://berkeley.edu'
    }],
    onlineCourses: [{
        title: 'Front-End Nanodegree',
        school: 'Udacity',
        dates: 'Jun 2017 - ',
        url: 'https://udacity.com'
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry").append(formattedSchoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry").append(formattedSchoolLocation);

            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry").append(formattedSchoolMajor);
            })
        });

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnineSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedOnineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineURL);
        })
    }
};

var work = {
    jobs: [{
        employer: 'MongoDB, Inc.',
        title: 'Technical Services Tools Engineer',
        location: 'Palo Alto, CA',
        dates: 'Feb 2017 - ',
        description: 'Technical Services Tools'
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            $(".work-entry").append(formattedWorkEmployer);

            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry").append(formattedWorkTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry").append(formattedWorkDates);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry").append(formattedWorkLocation);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry").append(formattedWorkDescription);
        })
    }
};

var projects = {
    projects: [{
        title: 'Online Resume',
        dates: 'Jun 2017 - ',
        description: 'an interactive online resume',
        images: ['http://i.imgur.com/pWU1Xbl.png']
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry").append(formattedProjectDates);

            var formattedProjectDesciption = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry").append(formattedProjectDesciption);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry").append(formattedProjectImage);
            })
        });
    }
};

// DOM Manipulation
bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(internationalizeButton);
