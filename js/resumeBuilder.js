// Display biographical information
var bio = {
    "name": "Jeffery Slebioda",
    "role": "Web Developer",
    "contacts": {
        "mobile": "716-444-8078",
        "email": "JSleb1@yahoo.com",
        "github": "JSleb1",
        "location": "Lancaster, NY",
    },
    "welcomeMessage": "I'm currently seeking employment in a web development role \
                            that will allow me to put my current skills to good use, while \
                            also challenging me and allowing me to expand my knowledge of various \
                            technologies.",
    "skills": ["HTML5", "CSS3/BootStrap", "JavaScript/JQuery", "Version-Control/GIT", "Communication", "Problem Solving"],
    "biopic": "images/selfie2.jpg"
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName, formattedRole);

    $(".role").append(downloadPDF);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };
};

bio.display();

// Display education history

var education = {
    "schools": [{
        "name": "University at Buffalo",
        "location": "Williamsville, NY",
        "degree": "BA",
        "majors": ["Psychology"],
        "dates": "Dec., 2016",
        "url": "https://www.buffalo.edu"
    }, {
        "name": "Erie Community College",
        "location": "Williamsville, NY",
        "degree": "Certificate",
        "majors": ["Geographic Information Systems Specialist"],
        "dates": "May, 2013",
        "url": "https://www.ecc.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer: ",
        "dates": "Dec., 2016",
        "url": "https://www.Udacity.com"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {

        $("#education").append(HTMLschoolStart);
        var SchoolNameURL = HTMLschoolName.replace("#", education.schools[i].url);
        var formattedSchool = SchoolNameURL.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDegreeEntry = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedDegreeEntry);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajors);
    }
};

education.display();


education.display = function() {
    $('.education-entry:last').append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {

        var onlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url);
        var formattedOnlineTitle = onlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDegree = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineDegree);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var onlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url);
        var formattedOnlineURL = onlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

// Display project information

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "Dec. 2016",
        "description": "A portfolio website built using responsive/mobile design.",
        "images": ["images/portfolio.png"],
        "url": "https://jsleb1.github.io/portfolio",
        "source": "https://github.com/jsleb1/portfolio"
    }, {
        "title": "Arcade Game",
        "dates": "Dec. 2016",
        "description": "A Frogger style arcade game built using Javascript/HTML/CSS.",
        "images": ["images/arcade.png"],
        "url": "https://jsleb1.github.io/ArcadeGame",
        "source": "https://github.com/jsleb1/ArcadeGame"
    }, {
        "title": "Simple Meme Maker",
        "dates": "Dec. 2016",
        "description": "So, you want to make Memes?",
        "images": ["images/memes.png"],
        "url": "https://jsleb1.github.io/Meme-Maker",
        "source": "https://github.com/jsleb1/Meme-Maker"
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projectSection").append(HTMLprojectStart);

        var projectTitleURL = HTMLprojectTitle.replace("#", projects.projects[i].url);
        var formattedTitle = projectTitleURL.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedTitleDates = formattedTitle + formattedDates;
        $(".project-entry:last").append(formattedTitleDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }

        var formattedSource = HTMLprojectSource.replace("#", projects.projects[i].source);
        $(".project-entry:last").append(formattedSource);
    }
};

projects.display();

// Display previous work history

var work = {
    "jobs": [{
            "employer": "Mercantile Adjustment Bureau",
            "title": "Customer Service Agent",
            "location": "Williamsville, NY",
            "dates": "Jan., 2013 - Oct., 2015",
            "description": "I worked to assist customers with a variety \
                        of problems and account services, including order processing \
                        and tracking, financial disputes and collections, as well as \
                        general inquiries through e-mail and telephone communications.",
        },

        {
            "employer": "Creditors Interchange",
            "title": "Account Resolution Specialist",
            "location": "Buffalo, NY",
            "dates": "Jan., 2012 - Jan., 2013",
            "description": "I worked to assist clients in finding suitable financial resolutions \
                        to deliquent accounts."
        },

        {
            "employer": "MJ Peterson Real Estate",
            "title": "Licensed Real Estate Salesperson",
            "location": "Lancaster, NY",
            "dates": "Mar., 2006 - Mar., 2010",
            "description": "I worked directly with clients and other professionals as a fiduciary agent \
                         regarding the rental, buying, and selling of properties.  I was involved \
                         in all aspects of the business including interviewing clients, market research, \
                         negotiation, and the preparation of necessary documents."
        },

        {
            "employer": "Boda's General Merchandising",
            "title": "Owner/Operator",
            "location": "Lancaster, NY",
            "dates": "May, 2004 - Jan, 2012",
            "description": "As the owner I was responsible for all aspects of the day to day operations including \
                        the design and development of websites, sales, B2B networking, event management, accounts payable/receivable, inventory management, \
                        and other administrative duties."
        }
    ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// Map showing previous work locations
$("#mapDiv").append(googleMap);
