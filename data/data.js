const projects = [
  {
    id: 1,
    title: "Energy Dashboard",
    description:
      "The app allows the user to authenticate and to visually analyze the electricity and gas consumption behavior of his customers in order to highlight trends and anomalies. Reports can be printed in PDF.",
    tech: "Frontend built with HTML, CSS, Javascript ES6+, React, React Router v6, Custom Hooks, Context API, D3, React-to-Print, GraphQL. Backend built with Strapi v4 (headless CMS).",
    challenges:
      "D3 and React integration. Hourly consumption charts. User authentication functionality. Context API for the state management. GraphQL for the data fetching and integration with Custom Hooks.",
    image:
      "https://res.cloudinary.com/stefano75/image/upload/v1648675551/energy-dashboard_hce1ws.png",
    live: "https://energy-report.netlify.app/",
    github: "https://github.com/StefanoFrontini/energy-dashboard",
  },
  {
    id: 2,
    title: "Business Speed Dating",
    description:
      "The app allows the Business Speed Dating organizers to promote events, manage participant registrations and access a database. Individual participants can register on the site and become members. Access to the site allows community members to download the list of event participants, do research to find other participants by name and / or profession, give reviews to other members, change their profile data",
    tech: "Frontend built with HTML, CSS Grid, Javascript ES6+,   Vue, Gridsome (Static Site Generator), GraphQL, Nodemailer, Algolia, Vuex. Backend built with Strapi v3 (headless CMS), Netlify Serverless Functions, Cloudinary, Heroku.",
    challenges:
      "Database and Mailchimp update based on the information entered in the event participation form. Email notification to organizers. User authentication. GraphQL queries customized based on the authenticated user. Integration with Algolia to search a member by name/profession. State management with Vuex. Development of the review system for members. Serverless functions: integration with MailChimp API, Telegram API and Nodemailer. Strapi schema, integration with Cloudinary, uploading images, deployment on Heroku.",
    image:
      "https://res.cloudinary.com/stefano75/image/upload/v1648675846/business-speed-dating_pm3lea.png",
    live: "https://www.bsdating.com/",
    github: "https://github.com/StefanoFrontini/bsp",
  },
  {
    id: 3,
    title: "Pillole di Energia",
    description:
      "The app allows the customer to promote their energy consultant business and their YouTube channel. The customer can blog, update the charts and collect the email addresses of prospects through the energy and tax check-up functionalities.",
    tech: "Site built with HTML, CSS flexbox, SASS, Javascript ES6+, Vue, Gridsome (Static Site Generator), D3, GraphQL, Markdown, Netlify Serverless Functions, Nodemailer, MJML email framework, FaunaDB",
    challenges:
      "Integration of D3 and Vue. Development of the energy check-up functionality: integration of Netlify Serverless functions, Nodemailer, MJML email framework and FaunaDB. Blog functionality. Working in team with an Art Director",
    image:
      "https://res.cloudinary.com/stefano75/image/upload/v1630578854/logo-pillole_upeiea.png",
    live: "https://www.pilloledienergia.com/",
    github: "https://github.com/StefanoFrontini/pilloledienergia",
  },
];

export default projects;
