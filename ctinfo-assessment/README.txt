Hello Applicant,

Thank you for your interest in CTInfo! Please read this entire file for all details regarding the coding challenge that we are asking you to submit.

For this assessment, you will be creating a simple web application using React (Typescript) where users will be able to add "blog" entries and also view all entries that have already been added in the Library table view. I have attached a simple style guide (styles.txt) which will provide you with Font, Color, and other details that you will need to complete this project.

In this folder, you will find a design (library-page_design.png) for the table page of this simple application. This will be the main page of this application, please be very attentive to details when coding this page, we would like the completed page to match the design as closely as possible. You will also find another design (library-page-description-modal_design.png) which demonstrates the design for the modal that we would like to see appear when the user clicks the title of a "blog" entry. This modal is very simple and should just display the description of the selected blog. Note that we have provided a file (close-icon.png) for the X icon used in this modal design.

The next part of the assignment is the "New blog" form. For this part, we would like you to use the provided style guide and your own creativity to implement your own form page. When the user clicks "New blog" from the Library page, they should be redirected to a form page where they can fill out all of the information needed to create a new blog entry (look at the POST body below to get a better idea of what fields are required for this form). After the user submits this form, they should be redirected back to the Library page.

The last part of the assignment is to connect both of these pages to the following two APIs. 

Library page GET method:
http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg
Request header - pass your email id as token value (confirm spelling)

New blog POST method:
http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg
Request header - pass your email id as token value (confirm spelling)
Body (use strings for all values to avoid complication) -
{
  "title": "...",
  "launchdate": "...",
  "author": "...",
  "image_link": "...",
  "description": "..."
} 


Instructions for submission:
- Compress complete React project (please do not include the .node_modules folder)
- Upload this compressed folder to a Google Drive and share its public link with CTInfo HR (hrpune@ctinfo.in)


Looking forward to your submission,
Edward Bachoura, Associate Technical Consultant
CT Info Pvt Ltd, Pune   