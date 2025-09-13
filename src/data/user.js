const INFO = {
	main: {
		title: "Anuj portfolio",
		name: "Anuj Kumar.",
		email: "anuj98426@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/anuj_ekghara",
		github: "https://github.com/anuj9631",
		linkedin: "https://www.linkedin.com/in/anuj-kumar9631/",
		instagram: "https://instagram.com/anuj_ekghara",
		naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
	},

	homepage: {
		title: "Software Developer with a passion for emerging technologies.",
		description:
			"I am Anuj, Currently pursuing a Master of Computer Applications from the Indian Institute of Technology, Patna. and graduated with a Bachelor of Computer Application from Dr. B. C. Roy Engineering College, Durgapur,  As an eager learner, I constantly strive to improve my skills and stay ahead of the latest trends in the tech field. I am a team player who enjoys collaborating on projects, and I am confident that my strong academic background and enthusiasm for the industry will make me a valuable asset to any team.",
	},

	about: {

		title: "I’m Anuj Kumar, I am from Giridih Jharkhand(India).",
		description:
			"Throughout my career journey, I've able to develop a strong understanding of computer programming languages like C, Java and Python and concepts like RDBMS, OOPs, Data Structures.My skill set encompasses proficiency in Verint development, expertise in web development MERN and AI/ML.I have completed two month internship from Celebal technologies in the data science domain where i gained valueble exposure to how data science used in practice. Also i have completed one month traning from Indian School of Ethical Hacking in the web development domain. ",
	},

	articles: {
		title: "Tech-savvy problem solver, driven to excel in dynamic environments.",
		description:
			"Key Skills:",
	},

	projects: [
			{
			title: "Email-spam-classifier",
			description:
				"Employed Jupyter Notebook and Built Email-spam-classifier using Python libraries.",
				logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://email-spam-classifier-4l9x.onrender.com/",
		},


		{
			title: "Agency-AI",
			description:
				"A modern, responsive platform to showcase services and connect with clients.",
				logo: "https://agencyai-anujdev.vercel.app/assets/logo-CpnJpnzw.svg",
			linkText: "View Project",
			link: "https://agencyai-anujdev.vercel.app/",
		},
    
		{
			title: "QuickGPT – AI-Powered",
			description:
				"QuickGPT – an AI-powered chat application built with GemeininAPI for fast and seamless conversations.",
				logo: "https://quick-gpt-anuj.vercel.app/assets/logo_full_dark-P5eJV603.svg",
			linkText: "View Project",
			link: "https://quick-gpt-anuj.vercel.app/",
		},

		{
			title: "Google-Gemini_Clone",
			description:
				"Built Gemini web app with React.js, integrating Gemini Generative AI.",
			logo: "data:image/png;base64,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",
			linkText: "View Project",
			link: "https://gemini-clone-anuj.vercel.app/",
		},

		{
			title: "Forum-Website-Chatsphere",
			description:
				"Online forum primarily revolves around web development and DBMS.",
			logo: "https://testrigor.com/wp-content/uploads/2023/04/php_logo_square.png",
			linkText: "View Project",
			link: "https://github.com/anuj9631/Forum-website-chatsphere",
		},

		{
			title: "Messenger-Clone",
			description:
				"Built a Full Stack Messenger Clone web  with Nextjs and MongoDB",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
			linkText: "View Project",
			link: "https://github.com/anuj9631/messenger-video",
		},

		// {
		// 	title: "Restaurant-management-system",
		// 	description:
		// 		"Web application using PHP and HTML/CSS and JS as front-end.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com/anuj9631/Restaurant_management_system",
		// },

	],
};

export default INFO;
