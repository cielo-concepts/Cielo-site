let portfolio = {
  "hbr": {
    "titleImage": {
      "src": "../img/clients/hbr/hbr-title-image.png",
      "label": "Harvard Business Review",
      "subLabel": "2014 Redesign and Development Project"
    },
    "projectTitle": "HBR Redesign and Development",
    "topParagraph": "The Harvard Business Review (HBR) team were looking to adopt new technologies for both the front end and back end that were not only designed to push the capabilities of the product forward, but chosen in close collaboration with business stakeholders with a deep understanding of where the business is heading. HBR's goals are similar to any other magazine/publishing/media company, to grow the business by creating and retaining subscribers and simultaneously meet the changing needs of digital advertising as print revenues potentially decline. As the primary place where more and more people and clients engage with HBR, HBR.org has become the center of the business strategy.",
    "client": {
      "name": "Harvard Business Review",
      "category": "Development",
      "url": "http://hbr.org"
    },
    "images": ["../img/clients/hbr/hbr-home-page.png", "../img/clients/hbr/hbr-store.png", "../img/clients/hbr/hbr-my-library.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>The major goal of this project was to update the hbr.org site with technology, user experience, user interface design that will bring the site into a new toolset and also this technology toolset should be extensible.<br/><br/><strong>How we did it</strong><br/>After <a href=\"http://www.hugeinc.com/\">HUGE</a> created the new design for the site, in collaboration with the internal development team and <a href=\"http://bocoup.com\">Bocoup</a> we implemented Pattern Lab and a new custom JavaScript framework.",
    "paragraph2": "Our goal was to create a modular component based architecture that can fulfill the requirements of the project (extensible technology stack). <a href=\"http://patternlab.io\">Pattern Lab</a> allowed for the translation of the design into code using \"Atomic Design\" principles. The modular development was also extended to the JavaScript layer of the site, allowing for component based development that will make the site ready for future implementation of patterns and libararies like React.",
    "technology": ["Custom JavaScript Framework", "Modular Components", "Pattern Lab", "Sass CSS", "E-Commerce"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/eye-care-small.png",
        "url": "/portfolio/complete-eye-care",
        "label": "Complete Family Eye Care of Texas",
        "subLabel": "Development, Design"
      },
      {
        "image": "../img/projects/perkin-elmer.png",
        "url": "/portfolio/perkin-elmer",
        "label": "Perkin Elmer \"Elements\"",
        "subLabel": "Development, Design"
      }
    ],
    "navigation": {
      "next": {
        "label": "Perkin Elmer \"Elements\"",
        "url": "/portfolio/perkin-elmer"
      }
    }
  },
  "humedica": {
    "titleImage": {
      "src": "../img/parallax.png",
      "label": "Humedica Architecture Migration",
      "subLabel": "Migration from Flex frameowrk to React and Redux"
    },
    "projectTitle": "Humedica Migration",
    "topParagraph": "Optum One Analytics (“Analytics”) is an informatics system for patient care allowing those in the medical field to query a large data set to pinpoint areas of interest through data tables, charting and visualization. <blockquote>Optum One can help you pinpoint opportunities to improve health care before, during and after patients engage the healthcare system. This cloud-based platform uses integrated data to manage patient populations in a value-based world</blockquote>",
    "client": {
      "name": "Humedica / Optum",
      "category": "Development",
      "url": "http://www.humedica.com/"
    },
    "images": ["../img/b-1.png", "../img/b-1.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>Our goals and objectives are to: <ul><li>Modernize the technology stack by moving from a Adobe Flex based application to a modern JavaScript application.</li><li>Improve the development cycle and workflow with the introduction of a new development and technology environment. This presents an opportunity to integrate new tools improve the current workflow.</li><li>Promote continuous development and integration.</li><li>Lay the groundwork for future mobile integration.</li></ul>",
    "paragraph2": "<strong>How we did it</strong><br/>After our initial discovery phase, our recommendation was to rebuild the site in a modular fashion. \"Componentization\" or modular development is the main practice in achieving the goals of this project. Although \"componentization\" is a novel word, it has a meaning in the software development field: Simply put, software \"componentization\" occurs when one breaks down a complex software system down into smaller, easily identifiable pieces that have well-defined interfaces or APIs. To follow this principle, we implemented Pattern Lab for the HTML and CSS and ReactJS and Redux for the JavaScript layer. This approach was applied to an isolated portion of the site as a proof of concept.",
    "technology": ["ReactJS", "Redux (Flux framework)", "Modular Components", "Pattern Lab", "Sass CSS"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/eye-care-small.png",
        "url": "/portfolio/complete-eye-care",
        "label": "Complete Family Eye Care of Texas",
        "subLabel": "Development, Design"
      },
      {
        "image": "../img/projects/perkin-elmer.png",
        "url": "/portfolio/perkin-elmer",
        "label": "Perkin Elmer \"Elements\"",
        "subLabel": "Development, Design"
      }
    ],
    "navigation": {
      "next": {
        "label": "Perkin Elmer \"Elements\"",
        "url": "/portfolio/perkin-elmer"
      }
    }
  },
  "perkin-elmer": {
    "titleImage": {
      "src": "../img/clients/perkin-elmer/perkin-elmer-responsive.png",
      "label": "Perkin Elmer \"Elements\"",
      "subLabel": "Re-Architecture of the UI Stack"
    },
    "projectTitle": "Perkin Elmer \"Elements\" Re-Architecture",
    "topParagraph": "Perkin Elmer \"Elements\" application is a cloud based scientific notebook targeted for lab technicians and scientists in the scientific field, universities, and schools. Our goal was to keep the same exceptional product while re-architecting the underlying technology.",
    "client": {
      "name": "Perkin Elmer",
      "category": "Development, Design",
      "url": "http://elements.perkinElmer.com"
    },
    "images": ["../img/clients/perkin-elmer/perkin-elmer-home.png", "../img/clients/perkin-elmer/perkin-elmer-landing.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>After completing our intial discovery phase, we came under the conclusion that the existing technology stack of JavaScriptMVC (an old JavaScript framework, predecessor to CanJS), several versions of jQuery, and convoluted implementation of third party software was hindering the ability of the product to expand. As a result of this conclusion, we recommended a new technology stack that will help in the extensibility of the product. ",
    "paragraph2": "<strong> How We Did It</strong><br/>After evaluating several JS frameworks, we agreed to use ReactJS along with a Flux implementation pattern. To support our effort, we extracted the design and created a complimentery Pattern Lab site. We also implemented Gulp and a NodeJS server to handle some of the ancillary tasks. All these efforts were completed with proper documentation and guidelines for future developers ot learn and use.",
    "technology": ["ReactJS + Flux", "NodeJS", "Gulp", "Pattern Lab", "Sass CSS"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/eye-care-small.png",
        "url": "/portfolio/complete-eye-care",
        "label": "Complete Family Eye Care of Texas",
        "subLabel": "Development, Design"
      },
      {
        "image": "../img/projects/hbr-org-small.png",
        "url": "/portfolio/hbr",
        "label": "Harvard Business Review Redesign",
        "subLabel": "Development"
      }
    ],
    "navigation": {
      "next": {
        "label": "Complete Eye Care of Texas",
        "url": "/portfolio/complete-eye-care"
      },
      "prev": {
        "label": "Harvard Business Review",
        "url": "/portfolio/hbr"
      }
    }
  },
  "complete-eye-care": {
    "titleImage": {
      "src": "../img/clients/complete-eye-care/complete-eye-care-title-image.png",
      "label": "Complete Eye Care of Texas",
      "subLabel": "Small Business Website"
    },
    "projectTitle": "Website Design and Development",
    "topParagraph": "Complete Eye Care of Texas is a small optometry located in Plano Texas. Our goal was to help this start up build an online presence.",
    "client": {
      "name": "Complete Eye Care of Texas",
      "category": "Development, Design",
      "url": "http://www.completefamilyeyecaretexas.com/"
    },
    "images": ["../img/clients/complete-eye-care/complete-eye-care-home.png", "../img/clients/complete-eye-care/complete-eye-care-about-us.png", "../img/clients/complete-eye-care/complete-eye-care-office-tour.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>This small business needed to get an initial foot hold into the business world. Their commitment to having a solid web presence included creating a website that will include all the relavant information and also integrate with 3rd party software like eye care videos, online forms, and online appointments.",
    "paragraph2": "<strong>How We Did It</strong><br/>Our discovery and design process helped us in putting together a website that is both user friendly and provide a great user experience.<br/><strong>Next Steps</strong><br/>Although our design has been a success, support of modern devices has been lacking. The complimentary mobile site is causing some maintenance issues. The next steps are to create a new responsive site that will suport all devices and also update some of the 3rd party application integrations.",
    "technology": ["Design", "3rd party integration", "Sass CSS"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/hbr-org-small.png",
        "url": "/portfolio/hbr",
        "label": "Harvard Business Review Redesign",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/perkin-elmer.png",
        "url": "/portfolio/perkin-elmer",
        "label": "Perkin Elmer \"Elements\"",
        "subLabel": "Development, Design"
      }
    ],
    "navigation": {
      "next": {
        "label": "Morrison's Auto Rite",
        "url": "/portfolio/morrisons-auto-rite"
      },
      "prev": {
        "label": "Perkin Elmer \"Elements\"",
        "url": "/portfolio/perkin-elmer"
      }
    }
  },
  "morrisons-auto-rite": {
    "titleImage": {
      "src": "../img/clients/morrisons-auto-rite/morrisons-title-image.png",
      "label": "Morrison's Auto Rite",
      "subLabel": "Improvement to existing site"
    },
    "projectTitle": "Morrison's Auto Rite Website",
    "topParagraph": "Morrison's Auto Rite is a small auto repair shop located in Jamaica Plain, Massachusetts. Our task was to bring this company's website into the 21 century and provide a modern and responsive site.",
    "client": {
      "name": "Morrison's Auto Rite",
      "category": "Development, Design",
      "url": "http://morrisonsautorite.com"
    },
    "images": ["../img/clients/morrisons-auto-rite/morrisons-home.png", "../img/clients/morrisons-auto-rite/morrisons-about-us.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>Morrison's Auto Rite needed to extend their business beyond their old and antiquted website. Their goal was also to convey to their customers the variety of services they provide that extend beyond day to day maintenance. They also wanted to convey information regarding the technology that they provide for their customers.",
    "paragraph2": "<strong>How We Did It</strong><br/>We had three goals and objectives that we wanted to accomplish with this project, to create a responsive site, to convey all the relevant information, and to provide the client (MorrisonAuto Rite) with the ability to make small changes. As a result, we choose to implement this site using Wordpress. We customized a wordpress theme to meet the needs of the project.",
    "technology": ["Design", "Wordpress", "Responsive Design"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/eye-care-small.png",
        "url": "/portfolio/complete-eye-care",
        "label": "Complete Family Eye Care of Texas",
        "subLabel": "Development, Design"
      },
      {
        "image": "../img/projects/hbr-org-small.png",
        "url": "/portfolio/hbr",
        "label": "Harvard Business Review Redesign",
        "subLabel": "Development"
      }
    ],
    "navigation": {
      "next": {
        "label": "Academy Sports E-Commerce",
        "url": "/portfolio/academy-sports"
      },
      "prev": {
        "label": "Complete Eye Care of Texas",
        "url": "/portfolio/complete-eye-care"
      }
    }
  },
  "academy-sports": {
    "titleImage": {
      "src": "../img/clients/academy/academy-title-image.png",
      "label": "Academy Sports E-Commerce",
      "subLabel": "Migrating from Brochureware to E-Commerce"
    },
    "projectTitle": "Academy Sports E-Commerce",
    "topParagraph": "Academy Sports is a brick and mortar sporting good company located in the Southwestern region of the United States. Their desire was to create an e-commerce site that will allow them to showcase their catalog of items and to be able to sell these items online.",
    "client": {
      "name": "Academy Sports",
      "category": "Development",
      "url": "http://academy.com"
    },
    "images": ["../img/clients/academy/academy-product-page.png", "../img/clients/academy/academy-checkout-shipping.png", "../img/clients/academy/academy-checkout-shipping-review.png"],
    "paragraph1": "<strong>Problem to Solve</strong><br/>In 201 Academy Sports had a <a href=\"http://searchsoa.techtarget.com/definition/brochureware\" class=\"secondary\" target=\"_blank\">brochureware site</a>. The goal was to create a new e-commerce site. In collaboration with Isobar, and Avnet Services, we were able to provide Academy Sports with a state of the art e-commerce site.",
    "paragraph2": "<strong>How We Did It</strong><br/>The main technology behind this e-commerce platform was WebSpher Commerce Server (WCS). Our goal was to take advantage of all the out-of-the-box technoology that was provided by WCS and also extend them further and create a customized site for the client. We also incorporated with several 3rd party technologies like tax calculation and shipping estimation. We also created customized invoices/receipts using iText to convert the transactions to printable PDFs.",
    "technology": ["E-Commerce", "Development", "User Interface Development"],
    "relatedItems": [
      {
        "image": "../img/projects/academy-small.png",
        "url": "/portfolio/academy-sports",
        "label": "Academy Sports Ecommerce",
        "subLabel": "Development"
      },
      {
        "image": "../img/projects/eye-care-small.png",
        "url": "/portfolio/complete-eye-care",
        "label": "Complete Family Eye Care of Texas",
        "subLabel": "Development, Design"
      },
      {
        "image": "../img/projects/hbr-org-small.png",
        "url": "/portfolio/hbr",
        "label": "Harvard Business Review Redesign",
        "subLabel": "Development"
      }
    ],
    "navigation": {
      "prev": {
        "label": "Morrison's Auto Rite",
        "url": "/portfolio/morrisons-auto-rite"
      }
    }
  },
  "pattern-lab-course": {

  },
  "evaluating-frameworks": {

  }
};

module.exports = portfolio;