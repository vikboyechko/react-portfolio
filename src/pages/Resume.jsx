// This file contains the Resume page component, which displays a downloadable thumbnail of the resume and lists proficiencies, environments, and languages/technologies.

import Header from '../components/Header';

export default function Resume() {
    return (
        <>
            <Header>Resume</Header>
            <section>
                <div className='container pt-5'>
                    <div className='row mx-4'>
                        <div className='col-12 col-md-3'>
                            <a href='./src/assets/media/Vik_Boyechko_Resume.pdf' target='_blank'>
                                <img src='./src/assets/images/vik-resume-thumb.jpg' alt='Resume' className='rounded' />
                            </a>
                            <p className='text-center pt-3'><a href='./src/assets/media/Vik_Boyechko_Resume.pdf' target='_blank'>Download Resume</a></p>
                        </div>

                        <div className='col-12 col-md-8'>
                            <h2 className='mb-4'>Proficiencies</h2>
                            <p>I have years of experience building B2B and B2C products with global development teams</p>
                            <ul className='resume-list'>
                                <li>Product Management</li>
                                <li>Product Owner</li>
                                <li>Roadmapping</li>
                                <li>Marketing and Research</li>
                                <li>Requirement Gathering</li>
                                <li>User Feedback</li>
                                <li>Agile development with Scrum</li>
                                <li>Backlog grooming</li>
                                <li>Wireframing and Prototyping</li>
                                <li>UI/UX Design</li>
                                <li>Content Management</li>
                                <li>SEO</li>
                            </ul>

                            <h2 className='mb-4'>Environments</h2>
                            <p>With over 20 years of experience, I've become proficient in utilizing a wide variety of tools and platforms for collaboration, design, and marketing digital products.</p>
                            <ul className='resume-list'>
                                <li>Azure DevOps</li>
                                <li>Atlassian Suite (JIRA, Trello)</li>
                                <li>Wordpress & WooCommerce</li>
                                <li>ProductBoard, Miro, Basecamp, Monday</li>
                                <li>Figma, Lucidchart</li>
                                <li>Adobe InDesign, Illustrator, Photoshop</li>
                                <li>Drupal, Squarespace, Wix, Joomla</li>
                                <li>Google Analytics, Tags, Search Console</li>
                                <li>Ahrefs, SEMRush, Majestic</li>
                                <li>Microsoft SharePoint, OneDrive, Active Directory</li>
                                <li>Google Sheets, Docs, Forms, Sites</li>
                                <li>Slack, Teams, Zoom, Rock, Hangouts</li>
                            </ul>

                            <h2 className='mb-4'>Languages/Technologies</h2>
                            <p>As a full stack web developer, I love to explore new technologies while building on my experience with the following languages, frameworks, and libraries:</p>
                            <ul className='resume-list'>
                                <li>HTML5</li>
                                <li>CSS3, Flex, Grid</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Git</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>GraphQL</li>
                                <li>RESTful APIs</li>
                                <li>Web APIs</li>
                                <li>ORM</li>
                                <li>MVC</li>
                                <li>JSON</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Handlebars</li>
                                <li>OpenAI API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
