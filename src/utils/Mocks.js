export const MenuItems = [
    {
        linkTo: '/profile',
        iconName: 'fa-user',
        itemName: 'Introduction'
    },
    {
        linkTo: '/social-networks',
        iconName: 'fa-cubes',
        itemName: 'Networks'
    },
    {
        linkTo: '/work-at',
        iconName: 'fa-suitcase',
        itemName: 'Experiences'
    },
];

export const SocialCards = [
    {
        linkTo: 'https://join.skype.com/invite/oGe3FQicm2Vb',
        icon: 'fa fa-skype fa-lg',
        title: 'Skype',
    },
    {
        linkTo: 'https://www.linkedin.com/in/do-nguyen-895991136/',
        icon: 'fa fa-linkedin-square fa-lg',
        title: 'Linkedin',
    },
    {
        linkTo: 'https://github.com/vandobkdn',
        icon: 'fa fa-github-square fa-lg',
        title: 'Github',
    },
    {
        linkTo: 'https://www.facebook.com/nguyen.vdpro.1294',
        icon: 'fa fa-facebook-square fa-lg',
        title: 'Facebook',
    }
];

export const Companies = [
    {
        id: 'fpt',
        linkTo: '/fpt',
        icon: 'fa fa-building fa-2x',
        companyName: 'FPT Software',
        schedule: 'Feb 2017 - Apr 2018',
        projectDescription: "Tracking and sync data from client to server automatically",
        teamSize: '20+',
        responsibilities: [
            "Maintaining for the existing application",
            "Working with customer via mail to clarify and collect requirements",
            "Developing the new functional for the application",
            "Reporting daily with direct manager and customer",
            "Working in water-fall model",
        ],
        technologies: ["C#",  "SVN"],
        tools: "Visual studio"
    },
    {
        id: 'tma',
        linkTo: '/tma',
        icon: 'fa fa-building fa-2x',
        companyName: 'TMA Solution',
        schedule: 'July 2018 - Nov 2020',
        projectDescription: "Developing a finance and insurance website",
        teamSize: '20+',
        responsibilities: [
            "Join daily meeting with customer verbally",
            "Developing the new functional for the application",
            "Working with customer to clarify the requirements via mail or face-time",
            "Supporting and collaborating with team member",
            "Working in scrum model",
        ],
        technologies: ["Java, Spring/Spring Boot",  "Git", "Ember, ReactJs"],
        tools: "JDE (IntelliJ, Visual code)"
    }
];

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export const UserInfo = {
    username: 'vandobkdn',
    name: 'Van Do',
    surname: 'Nguyen',
    birthday: '12/12/1994',
    age: calculate_age(new Date(1994, 12, 12)),
    phone: '(+84) 978 590 516',
    email: 'vandobkdn@gmail.com',
    address: 'GoVap District, Ho Chi Minh City',
    major: 'Software Engineer',
    studiedAt: 'DaNang University of Science and Technology',
    workAs: 'Software Developer',
    description: 'Hi guys, my name is Do Nguyen. I am a developer as well as a Freelancer.' +
        ' I had graduated from DaNang University of Science and Technology since 2018 with the major in Software engineering.' +
        ' I got more than 3 years experience as a software developer and switched to be a Freelancer from the December of 2020.' +
        ' I work on Java project and java frameworks such as Hibernate, Spring Boot.' +
        ' Also, I worked on JavaScript and ReactJs more than two years, hence, I can work with frond-end and back-end.' +
        ' Moreover, I’m a careful and hard-working person. I eager to learn new things and willing to work in team.' +
        ' I easily adapt to with new working environment and take initiative in work.'
}

