# Office Attendance Tracker 🚶‍♀️‍➡️🏢

Code & Documentation for SE Summative One: **Office Attendance Tracker**. Created by: Isa Iman Zia

<details closed><summary>1. Introduction 🏫</summary>

## Overview

**Office Attendance Tracker** is a web-based application that is lightweight and intended to simplify the administration of employee attendance.  HTML, CSS, and JavaScript are implemented to construct the application.  The application enables users to sign in and out, view attendance history, and generate reports from a clean, responsive interface.

This app is ideal for: 

* **Department for Education (DfE) Colleagues** who require a rapid and effortless method to monitor their attendance records and record their working hours.
* **Senior Civil Servants (SCSs)** who are responsible for monitoring the attendance of their employees and ensuring that they are fulfilling their attendance goals.
* **Developers** seeking a front-end attendance solution that can be customised. 

## Key Features 🔑

* Real-time check-in/check-out functionality
* Daily and monthly attendance summaries
* Exportable data (CSV support)
* Fully responsive design for desktop

</details>

<details closed><summary>2. User Guide 👥</summary>

## Getting Started

### Accessing the App

Access the Office Attendance Tracker through your web browser.  No installation is necessary; simply access the URL provided or view the index.html file locally.Access the Office Attendance Tracker through your web browser.  No installation is necessary; simply access the URL provided or view the ![html](index.html) file locally.

### System Requirements

* A contemporary web browser, such as Chrome, Edge, Firefox, or Safari
* Internet connection is required for online hosting

### First-time Setup



## How to use the App




</details>

<details closed><summary>3. Developer Guide 🧑‍💻</summary>


</details>

<details closed><summary>4. Feature Documentation 🔍 </summary>


</details>

<details closed><summary>5. Software Design 🎨 </summary>

## Design Principles

I was required to consider the application of deliberate design principles before creating the software designs. This will guarantee that the app is accessible and usable for all users within the DfE.  I have taken into account the following main principles:

**Clarity** was the initial principle that I examined.  This is the point at which I needed to guarantee that the user interface was both intuitive and aesthetically pleasing.  Additionally, I was required to guarantee that the office attendance rates of my users could be calculated and recorded through the use of distinct labels, buttons, and icons.

**Consistency** was the second principle that I evaluated.  This is the point at which I was required to adhere to common UI patterns, such as placing buttons at the bottom, and to maintain a consistent layout, typefaces, and colours across all pages.

**Accessibility** is the third design principle that I would prioritise.  This is the point at which I was required to guarantee that the keyboard navigation functioned properly and that the colour contrast between the text and the background was sufficient.  I was able to identify two colleagues in the department who had accessibility requirements and the corresponding colour scheme and font style to assist in addressing their needs.  I will elaborate on this later.

## User Personas & Empathy Maps

**User personas** are detailed, fictional representations of the target users of my application.  They will assist me in comprehending the demands, behaviours, objectives, and pain points of my users in order to guarantee that my application is tailored to their specific requirements. They are crucial because they will assist me in designing with empathy, concentrating on the actual requirements of the user rather than making assumptions.  I will be able to create an intuitive user experience by customising the interface and interactions to specific user categories, which will assist me in prioritising features and enhancing the UX.

Two distinct categories of users have been considered through the use of user personas: one who is a SCS and another who is a typical DfE colleague.  The user personas have been used to identify the specific accessibility requirements and pain points of both colleagues.

![User Personas SCS](assets/SCS.png)

![User_Persona_DfE](assets/dfe_colleague.png)

The design process will be facilitated by the creation of two empathy maps that pertain to both colleagues.  An **empathy map** is a collaborative visualisation tool that is employed to express the thoughts, emotions, words, and actions of a user in relation to the Office Attendance Tracker product.  This will facilitate the development of a more profound shared comprehension of their users among myself and my team.

![Empaythy Map SCS](assets/scs_empathy_map.png)

![Empathy Map DfE](assets/dfe_empathy_map.png)

## UI Mockups


## Design Rationale

</details>

<details closed><summary>6. Project Planning📝</summary>

## Methodology

I utilised the Agile methodology to facilitate the development process.  This method of software development is iterative and adaptable, with a focus on the rapid incremental delivery of functional software, customer feedback, and collaboration.  Agile has enabled me to divide the project into smaller, more manageable units known as sprints, rather than planning the entire project in advance.  This will enable me to perpetually enhance the current tracker through the sprint cycles.

This is how I applied Agile to my workflow: 

* **Iterative Development-** The attendance tracker was constructed in incremental stages, with each feature (such as data cards, export, and target box) being added and enhanced in response to user feedback.

* **Continuous Improvement-** I conducted routine evaluations of the strategies that were effective and those that could be improved, implementing modifications as I worked.

* **Task Tracking-** I separated my work into manageable tasks (tickets), monitored my progress, and prioritised the most critical tasks by utilising GitHub issues and labels.  I will elaborate on this matter in the structure section.

## Structure

![Kanban Board P1](assets/kanban_p1.png)

***Figure x**: The Project Kanban board as it is presented in GitHub Projects.  This enabled me to coordinate the tickets (GitHub) across each stage of the development process.*

I have utilised a Kanban board through GitHub Projects and have compiled a list of all available assignments for Sprint 1.1.  This facilitated the visual organisation and management of all my responsibilities during the software development lifecycle.  The board was organised into the following columns: **Backlog**, **Ready**, **In progress**, **In review**, **Developed**, **Testing**, and **Completed**.  GitHub issues were used to represent each task, feature, and bug, which were relocated across these columns as my work progressed.

The kanban has helped by providing: 

* **Visual Clarity-** This has enabled me and my team to evaluate the priorities and obtain a real-time, comprehensive understanding of the project's status.
* **Colloboration-** This has facilitated improved communication and coordination among my team members, as I am able to observe the projects we are all working on.
* **Continuous Delivery-** This has facilitated the iterative, Agile approach that was previously mentioned by enabling the addition and prioritisation of new tasks at any given moment.

I worked on this project in sprints, which are a brief, predetermined period of time in agile project management. This is where I was able to devise a specific set of tasks and features that are planned, developed, and reviewed. The sprint has enabled me to focus on the manageable set of tasks required to develop the office attendance tracker, thereby reducing overwhelm and enhancing productivity. Additionally, I will have the opportunity to evaluate the successes and failures of each iteration, thereby enhancing the quality of my product and process over time.

I sequentially developed the features through branches throughout the development process. They were utilised to isolate features and were distinct development paths within a Git repository. This enabled me to guarantee that the new features or problem fixes were developed in their own branch, thereby maintaining the stability of the main code base. I ensured that my pull request was designated to the appropriate ticket by adhering to the general naming conventions for the branches. For example, the title of each feature that was created was "feature/feature-name," and the title of each defect issue was "bug/bug-fix-name." This facilitated code reviews with my team and ensured improved organisation of my developments.

I then conducted a sprint review, which is a meeting that takes place at the conclusion of each sprint in Agile development. During this meeting, I was able to showcase my developed product, collect feedback from stakeholders, and discuss what went well and what could be improved. I was able to compile my stakeholder feedback from the meeting and convert it into technical requirements, which were subsequently incorporated into the Backlog.  The Product Lead will review the tickets in the Backlog to ascertain the potential work for the next sprint, taking into account priorities and urgency.

## Ticket Labels

![Ticket Labels](assets/ticket_labels.png)

***Figure x**: This displays the labels that were employed to organise the tickets.*

</details>

<details closed><summary>7. Development Process 🔧 </summary>

### Coding Journey

An interactive and structured coding journey was pursued in the development of the Office Attendance tracker:

* **Initial Setup -** The project commenced with the establishment of the fundamental HTML structure, which ensured semantic markup to promote clarity and accessibility.
* **Feature Driven Development -** Each feature (including the selection of office days, attendance calculation, and CSV export) was developed incrementally.  In order to facilitate focused development and seamless integration, features were implemented in distinct branches.
* **Styling and Responsiveness -** A clear, accessible, and responsive interface was generated through the utilisation of CSS.  Flexbox was implemented to control the layout, and colour selections were implemented to enhance accessibility and clarity.
* **Interactive Functionality -** JavaScript was developed to manage dynamic updates, including the calculation of attendance percentages, the real-time updating of data cards, and the management of the on/off target status.
* **Accessibility and User Experience -** Accessibility was prioritised by employing appropriate labels and colour contrast throughout the journey. In order to enhance the interface and interactions, user feedback will be implemented.
* **Testing and Refinement -** User Acceptance Testing (UAT) is one of the various modes of testing that the application will undergo.  Github issues will be employed to monitor and resolve bugs, and the existing application will be enhanced in accordance with the results of the testing.
* **Version Control and Colloboration -** Git and Github were employed to facilitate collaborative development and code revision through the use of branches and pull requests for version control.

### Models Followed

The initiative adheres to a separation of concerns model:

* **HTML** for structure
* **CSS** for presentation
* **JavaScript** for behaviour

The UI logic is loosely based on the Model-View-Controller (MVC) pattern:

* **Model:** Data (e.g. selected days, attendance percentage)
* **View:** The interface is rendered using HTML and CSS.
* **Controller:** User input is processed by JavaScript functions that update the view.

</details>

<details closed><summary>8. Testing 🧪 </summary>


</details>

<details closed><summary>9. Future Developments 🔭 </summary>


</details>
 

<details closed><summary>10. Evaluation 📊 </summary>


</details>









