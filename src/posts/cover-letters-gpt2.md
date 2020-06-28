---
title: "Writing Cover Letters with OpenAI's GPT-2"
date: '2020-06-28'
category: "Natural Language Processing"
image: "typewriter.jpg"
teaser: "Tired of writing cover letters? This is what it looks like when you have an Artificial Intelligence do it for you."
---

I guess nobody really loves writing cover letters — so why not have an A.I. do it for you?  I figured it would be a fun 
experiment to try if that actually worked. Research in neural text generation has made big progress in the past two years. Especially OpenAI managed to impress with their GPT releases. However, since they have not released the parameters of their most recent GPT-3^[Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Agarwal, S. (2020). Language models are few-shot learners. arXiv preprint arXiv:2005.14165.] 
model yet (and it would presumably not be possible to fine tune this huge model on a Google Colaboratory instance anyway), I decided to fine tune 
an instance of last year's GPT-2^[Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., & Sutskever, I. (2019). Language models are unsupervised multitask learners. OpenAI Blog, 1(8), 9.] 
model.

At the time of its publication, GPT-2 became popular for its superior performance in text generation, being able to write 
articles with coherency spanning across different paragraphs. Some artificially generated text examples can be found on 
[OpenAI's website](https://openai.com/blog/better-language-models/#sample1). These examples suggest that this model should 
be able to also generate cover letters which range in a similar text length.

## 🗞 Data
In order tailor the model to a certain domain — as in our case the "cover letter domain" — one needs a sufficiently 
large dataset to fine tune the model's parameters on. Luckily, there are a lot of example cover letters for all kinds of 
jobs in the internet. The dataset I created consists of 1866 cover letters for the training set and another 208 letters 
for the evaluation set. The data corpus was mainly obtained from [indeed's Cover Letter Samples](https://www.indeed.com/career-advice/cover-letter-samples) 
as well as [JobHero's Sample Cover Letters](https://www.jobhero.com/sample-cover-letters/).

## ⚙️ Training
Training was conducted on a [Google Colab GPU instance](http://colab.research.google.com) using [Hugging Face's Transformers 
framework](https://github.com/huggingface/transformers/tree/master/examples/language-modeling). As base model, a distilled 
version of GPT-2, [distilgpt2](https://huggingface.co/distilgpt2) was used which was created by the same methods as 
DistilBERT^[Sanh, V., Debut, L., Chaumond, J., & Wolf, T. (2019). DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter. arXiv preprint arXiv:1910.01108.]. 
In order to fit on the GPU memory, training was conducted with a block size of 256 which should still generate decent results 
considering that the average cover letter token length is only slightly above this at 278.33.  

## 📨 Results

Now, that we have trained the model, let us jump into some of the results. The following collection indicates that the 
fine-tuned model is capable of generating cover letters for a wide variety of job fields. While the letters are certainly not 
perfect, as they sometimes suffer from semantic inconsistencies or word repetition, we can nevertheless see, 
that the model has for sure learned important aspects of writing cover letters. 

The cover letters are structured in a typical way: they start with an introduction, before the main part emphasizes on previous experience or achievements. Finally, the texts 
end with a concluding sentence and a salutation. Interestingly, the model often combines the applicant's names from names seen in the 
training data but sometimes also comes up with its very own names. 

Moreover, the model manages to keep consistency along the course 
of the individual letters as it succeeds to refer coherently and frequently to the human-written prompts.

💡 **Try the model generating your own cover letter [here!](https://colab.research.google.com/drive/1HpWs27xJkPvFIZ8PLYRxL8i4FyrTtVye?usp=sharing)**

### Examples 

Please note, that the human-written system prompt at the beginning of each cover letter is written in italic typeface, the remainder of the text is then augmented 
by the neural text generation model. Please also note that bullet points in the texts were added manually to increase readability.

<div class="text-card collapsible">

### 👩🏼‍🌾 Agriculturalist

<div class="text-card-content collapsible-content">

<div style="font-style: italic;">

Dear Mr Annderson, 

I would love to work as an agriculturalist on your farm.

</div> 

My background in analyzing plants, fertilizers, and soils makes me an ideal candidate for the position. As a certified organician, I excel at monitoring soil health, herbaceous plant life, soil quality, crop maintenance, and pest control to ensure optimal soil quality, nutrition, and productivity.

Highlights of my experience include…

* Recognizing that organic soils need to be kept clean and sanitary in order to thrive in the face of pests, invasive plants, and disease.
* Possessing outstanding organizational, analytical, and time management skills that facilitate optimal operations and the achievement of my objectives.
* Leveraging keen technical ability and superior organizational and communication talents to drive efficient and successful farm operations and improve crop productivity and yield.

With a proven background in monitoring and managing soils and ensuring optimal soil quality, I am well prepared to dynamically benefit your team. I look forward to discussing my qualifications and my qualifications in further detail. Thank you for your consideration.

Sincerely,

Carrie R. Powell

</div>

</div>

<div class="text-card collapsible">

### 👨🏻‍🚀 Astronaut

<div class="text-card-content collapsible-content">

<div style="font-style: italic;">

Dear Sir or Madam, 

I want to become an astronaut in your agency! 

</div>

My proven skills and passion for the space exploration industry position me ready to thrive in this position at Blue Ocean.

My experience in developing and implementing advanced technology programs to stimulate and facilitate the initiation of missions for space exploration and exploration have prepared me to excel as your next astronaut. My knowledge of space missions, my proven experience in conducting research projects and my superior communication and organization skills position me ready to thrive in this challenging position.

Highlights of my qualifications include the following:

* Directing operations for five commercial spacecraft and the Mars Reconnaissance Orbiter (MAOLO) program for a total of $21M; successfully launching and maintaining three separate missions, including Earth-orbiting, land-based, and geosynchronous missions, as well as providing top-notch communication and leadership.
* Developing an ambitious program to expedite the launch of one Martian mission, completing the following milestones:
* Leveraging expertise in NASA's highly targeted Space Launch System and NASA's Long-Term Satellite Launch Program, respectively, to carry out commercial missions.
* Possessing expertise in both short- and long-duration programs, including the use of advanced communication protocols, software, and hardware.
* Successfully completing numerous project launches, including the International Space Station (ISS), as well as the Mars Reconnaissance Orbiter (MAOLO) program, as well as the National Reconnaissance Office mission to Mars.
* Possessing a master’s degree in astronautics, as well as comprehensive technical and operational background.

With my solid technical and operational background, coupled with my dedication to ensuring outstanding performance at Blue Ocean, I am ready to provide outstanding service within your company and exceed your expectations for this position. The chance to offer more insight into my qualifications would be most welcome. Thank you for your consideration.

Sincerely,

Robert R. K. Jones

</div>

</div>

<div class="text-card collapsible">

### 👩🏻‍💼 Attorney

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mrs Thompson, 

I would like to apply as an attorney in your office. 

</div>

My background has prepared me to significantly impact your practice. I am confident that my persuasive, analytical, and business acumen will translate to your opening for a Court-appointed Legal Analyst.

My background lies in representing and recommending individuals and services to the public. With 13 years of experience successfully assisting the legal establishment in enforcing state and federal laws and policies, I possess a breadth of knowledge that will enable me to effectively advise clients of their individual needs and requirements. My communication skills, problem-solving talents, and general sense of humor are sure to make me an asset to your organization.

The following achievements demonstrate my qualification for this position:

* Serving as the legal advisor for the Washington State Bar Association, successfully advising clients on a range of laws and regulations, including laws pertaining to property transactions, property records, employment contracts, insurance coverage, and tax preparation.
* Initiating and resolving complex and competing laws, regulations, and regulatory issues, resulting in a 17% increase in client satisfaction with both parties in a case.
* Providing comprehensive legal services to clients in the state of Washington.
* Coordinating all aspects of a court-appointed legal analyst's duties, including time management, copy editing, and document processing.
* Demonstrating an excellent time management and communication skills.

My demonstrated success in advising clients on their legal needs and requirements, along with my demonstrated expertise in providing critical legal advice and facilitating client meetings, position me to significantly benefit the Court.

Thank you for your consideration. I look forward to speaking with you soon.

Sincerely,

Sofia Flores

</div>

</div>

<div class="text-card collapsible">

### 👨🏾‍⚕️ Brain Surgeon

<div class="text-card-content collapsible-content">

<div style="font-style: italic;">

Dear Dr Silva, 

I read your announcement regarding the position as brain surgeon. 

</div>

As a neurosurgeon with experience performing an extensive array of clinical examinations and procedures, I am prepared to significantly contribute to your institution’s goals in this role.

My background includes performing many diverse types of studies, evaluating brain function and condition, and communicating with patients to ascertain their unique needs. From determining their age to assessing biomarkers of their disease and recommending treatments and procedures, I excel at assessing the needs of patients, collaborating with specialists, and communicating with cross-functional teams to stimulate collaborative efforts.

Highlights of my qualifications include the following:

* Assessing the condition and symptoms of a wide variety of neurodevelopmental disorders through laboratory experiments, including age-related disorders such as autism, ADHD, attention deficit disorder, autism spectrum disorder, dyslexia, chronic pain and learning disabilities, and learning disabilities.
* Managing patient and patient care teams to facilitate a more positive and compassionate patient experience, resulting in a positive and safe environment.
* Ensuring adherence to policies, regulations, and guidelines regarding follow-up, safety, and follow-up.
* Holding a Master’s Degree in Cognitive Sciences and a Bachelor’s Degree in Brain Surgery.

With my extensive experience and dedication, I am ready to provide outstanding patient care and I welcome the opportunity to discuss this position in further detail.

Thank you for your consideration.

Sincerely,

Cody Fredrickson

</div>

</div>

<div class="text-card collapsible">

### 👨🏻‍🍳 Chef

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mr Hynes, 

I would like to apply as a chef in your restaurant.

</div>

In my current position as a chef at Mainstay in New York City, I have earned a reputation for serving as a meticulous and responsible chef that prepares meals that are consistently in top form. I have spent most of my professional career working in restaurants as a cook, but I have also developed and honed skills that are applicable to a wide variety of other facets of life.

From sourcing ingredients and mixing food ingredients to working with staff, I have developed a love of food, a passion for cooking, and a love of food-related activities that would allow me to develop a healthy and friendly environment for everyone. I believe that I have more than a little expertise in food preparation and planning, but I'm also knowledgeable in a wide variety of food concepts. Furthermore, I possess a strong knowledge of ingredients, ingredients, and the basics of the cooking process.

The following are some highlights of my professional experience and qualifications:

* Earned bachelor’s degree in food preparation from Boston College
* Worked alongside four additional chefs on menus
* Prepared dishes of varying quality and flavor
* Crafted and served various dishes using food processor
* Awarded Restaurant Teacher of the Month for food service excellence

My experience includes preparing, selling, and serving all of the culinary needs of a large-scale restaurant, and I am confident that I would be an excellent addition to your team. Thank you for your consideration, and I look forward to speaking with you soon.

Sincerely,

Joel T. Taylor

</div>

</div>

<div class="text-card collapsible">

### 👷🏻 Construction Worker

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Ms Gonzalez, 

In response to your job posting, please consider my resume in your search for construction worker.

</div>

With experience performing comprehensive tasks in busy construction sites—including carpentry, flooring, soil /watering, and mechanical troubleshooting—I am confident that I can greatly benefit your company.

My experience includes comprehensive experience analyzing construction projects and assessing conditions and assessing projects for completion and cost effectiveness. My ability to perform tasks to meet project specifications—along with my commitment to providing optimal service and service within fast-paced, customer-facing construction environments—position me to thrive in this challenging position.

Consider the following highlights of my qualifications:

* Performing all aspects of construction and work, including plumbing, building schematics, and safety inspections.
* Demonstrating superior communication and multitasking skills with peers and teams.
* Demonstrating expertise in diverse construction projects including floor plans, construction materials, construction drawings, and construction safety.

With my solid knowledge in the design, construction, and maintenance of buildings and work areas, I am confident that I can excel in providing superior project services and assistance to your organization. I look forward to discussing my qualifications in further detail.

Thank you for your consideration.

Sincerely,

Maria D. Williams

</div>

</div>

<div class="text-card collapsible">

### 🦷 Dentist

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Dr Martin, 

I learned that you were looking for a dentist. 

</div>

I have worked with a wide variety of patients, and I always have the right patient relationship and the right set of care. That's why I have decided to be your first dental assistant, and I'm thrilled to have the opportunity to serve as your new assistant.

My passion for the beauty of the oral hygiene industry was highlighted by my love for hygienic tools and I believe this passion and commitment to the integrity of the oral health of patients will be what sets me apart. As a passionate dentist with five years of experience, I am confident in my ability to quickly surpass your expectations as your new Assistant.

Here are some highlights of my qualifications:

* Assisted with the collection of patients' oral hygienic tools in conjunction with the dental clinic to improve patient comfort and reduce pain.
* Facilitated and supervised the installation of various hygienic tools and supplies in accordance with dental practice guidelines, patient instructions, and guidelines.
* Prepared patients in patient consultation as well as dental hygienic care.
* Facilitated a 24-hour dental hygienic team to administer various dental-care medications, including medication injection.

I look forward to discussing my experience, and my qualifications, in more detail. Thank you for your time and consideration.

Sincerely,

Sonia T. King

</div>

</div>

<div class="text-card collapsible">

### 🕵🏼‍♀️ Detective

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mrs Wright, 

I want to introduce myself as an applicant to your position as a detective. 

</div>

My background includes solving crimes, performing crime scene research and providing critical support to law enforcement agencies.

My background includes excellent experience in identifying and locating suspects, providing assistance to law enforcement agencies, and assisting them in their investigations. In addition to my work experience, I possess a breadth of knowledge pertaining to the crime scene, including forensic research, equipment tracking, case analysis, DNA profiling, forensic equipment inspections, and DNA analysis. Furthermore, I have demonstrated an unwavering dedication to providing outstanding service to your department.

Highlights of my experience include the following:

* Possessing a comprehensive background in crime scene investigation, forensic analysis and case analysis, case management, evidence detection and identification, and analysis of crime scene data and information to ensure justice.
* Assisting with the investigation of murders, robberies, and other property crime to locate, arrest, capture, and prosecute suspects.
* Communicating effectively with all levels of law enforcement, including the City Attorney, Police Chief, and local law enforcement officials.
* Earning a Bachelor’s degree in Criminal Justice Studies from the University of Kentucky.

My ability to identify and solve cases within an expedient, professional manner positions me to significantly impact your police department.

My dedication to providing outstanding service within fast-paced, crime-fighting environments will contribute immensely to the success of your department. Thank you for your consideration; I look forward to speaking with you soon.

Sincerely,

Sofia Flores

</div>

</div>

<div class="text-card collapsible">

### 👩🏾‍🚒 Firefighter

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

I was recently notified about the need for a firefighter in your department.

</div>

As a friendly and enthusiastic young professional with 12+ years of service experience, I am excited to offer my skillset to your department at Centurion Incorporated.

My background includes being trained and certified in the use of firefighter equipment, such as trucks, excavators, and bulldozers. My skills as well as my leadership talents are certain to render me an immediate asset to your team. In addition, I excel at supporting a full range of firefighting tasks, such as removing debris and maintaining fire suppression structures.

Below are some highlights of my qualifications and experience:

* Training and supervising new and experienced firefighters as a Firefighter at the City of Pittsburgh in 2009
* Communicating effectively with various departments, companies, and organizations to gather information on fire department safety concerns, procedures, and operations
* Designing and implementing new building safety regulations, including the Emergency Response and Protective Standards, as well as regulations pertaining to firefighting operations and equipment
* Assisting in a variety of firefighting and safety oversight responsibilities, such as reporting incidents, records maintenance, maintenance issues, and inventory management
* Ensuring the safety of personnel on multiple floors in all departments

With my experience in firefighting operations and equipment, combined with my inner motivation and dedication to achieving success, I am ready to provide outstanding service to your company. I look forward to discussing my qualifications and qualifications in further detail.

Thank you for your consideration.

Sincerely,

Sharon D. Parker

</div>

</div>

<div class="text-card collapsible">

### ⚽️ Football Player

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

I want to apply as football player in your club. 
</div>

My athletic aptitude, my education and my commitment to supporting the game and its players position me to make a positive impact on your team. I look forward to discussing the position further with you in due course.

Sincerely,

Gerald S. Parker

</div>

</div>

<div class="text-card collapsible">

### 👩🏾‍💼 Hiring Manager

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mrs Johnson, 

I recently learned that you were looking for a Hiring Manager. 

</div>

As an enthusiastic and focused professional with 11 years of solid experience developing and implementing hiring policies and procedures to optimize team performance, I am prepared to put my experience and education to work for you.

My background lies in successfully building successful recruiting efforts and boosting sales through innovative hiring and placement processes and communication systems. From assessing candidate needs and communicating directly with targeted clients to continually enhancing recruiting and performance, I excel at facilitating solid, trusting relationships, motivating employees, and generating strong employee relationships.

Highlights of my experience include:

* Earned a Bachelor’s degree in Human Resources Management and a Bachelor’s degree in Human Resources Management from San Diego State University
* Earned a reputation as a reliable, efficient, and dedicated recruitment professional who routinely earned top awards from management and fellow peers
* Employed high-pressure, deadline-driven procedures to maximize recruiting and placement success
* Designed and implemented hiring policies that targeted hiring objectives and targeted targeted staff for targeted hiring purposes
* Developed a hiring process that involved interviewing and determining employees based on criteria such as job size, ability to perform in a leadership role, and previous achievements

I welcome the opportunity to discuss this position and my qualifications with you further. Thank you for your consideration, and I look forward to speaking with you soon.

Sincerely,

Linda A. Kosten

</div>

</div>

<div class="text-card collapsible">

### 🧑🏼‍🔧 Mechanic

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

please accept my application as mechanic in your repair shop. 

</div>

I have a Bachelor’s degree in Mechanical Engineering with a minor in mechanical repair and use. I have worked for years in repair shops, which is why I think I have an excellent track record of success and my work ethic. I am prepared to dedicate my remaining career to the highest standards and help the customers achieve their goals.

I love the opportunity to work for your team at Coral Springs Mechanical. I am not shy with being open-minded, but I am also willing to learn new skills and help people. I have a passion for helping others, and I am very aware of how important this means in the long run is. I have been trained to accept as much of my work as possible for my employer.

Thank you for considering me for a mechanical technician position at your company. I am grateful to have this opportunity and look forward to learning more about your company.

Sincerely,

Hector Silva

</div>

</div>

<div class="text-card collapsible">

### 🌍 Physicist 

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

I would like to apply to your open position as physicist. 

</div>

My background and passion for physics have prepared me to excel in this position and I would love to offer more insight into my qualifications at your institution.

My background includes more than 11 years of experience in supporting scientists in field studies and research endeavors such as radio, biological, and other physics research. Through my experience, I have honed my analytical and problem-solving skills while communicating effectively with peers and faculty.

My accomplishments include the following:

* Mentoring at least nine scientists in field studies for the past 10 years.
* Recognized as an outstanding candidate for the position of Physics Director with Westford University.
* Possessing solid technical knowledge and a commitment to developing and implementing scientific knowledge to drive project success.
* Utilizing superior organization and communication skills to efficiently and expeditiously execute scientific projects.

With my expertise in conducting scientific research and generating scientific data, along with my commitment to optimizing team collaboration and accuracy, I am positioned to significantly benefit your laboratory. The chance to offer more insight into my qualifications would be most welcome. Thank you for your consideration.

Sincerely,

Sofia Flores

</div>

</div>

<div class="text-card collapsible">

### 🧑🏿‍✈️ Pilot

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Ms Aldrin, 

I would like to apply as a pilot for your airline. 

</div>

My background lies in providing comprehensive pilot training on a variety of commercial aircraft, including new aircraft, commercial aircraft and commercial passenger aircraft. With my experience and passion, I feel confident that I could significantly benefit your team in this position.

My background includes a stellar 13-year experience overseeing commercial pilot training programs, providing strategic insight to decision makers, demonstrating a superior learning and leadership skills, and maintaining a friendly and encouraging atmosphere in flight. Additionally, my demonstrated success in flying commercial airplanes—along with my excellent interpersonal and analytical abilities—have positioned me to make a significant impact in this role.

Consider the following highlights of my experience:

* Utilizing a proven track record of providing detailed and detailed support to highly successful Boeing 737/777 commercial airliners while meeting and exceeding safety regulations and requirements
* Assisting in training and developing pilot pilot and cabin crew members to ensure safety and optimal passenger experiences
* Demonstrating dedication to superior pilot training, leadership, and interpersonal abilities to achieve career success

With my proven success in coordinating training programs, evaluations, and program development for all commercial aircraft, I am well prepared to extend my record of exceptional experience and contribute toward the success of your airline. The chance to offer more insight into my qualifications would be most welcome.

Thank you for your consideration.

Sincerely,

Cody R. King

</div>

</div>

<div class="text-card collapsible">

### 👨🏼‍💼 Product Owner

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mr Frederickson, 

Your posting about the position of a product owner sparked my interest. 

</div>

I am a skilled, analytical, and personable individual who has the ability to identify potential strengths and weaknesses in a product's business, as well as build and sustain loyal customers to ensure top-notch customer service.

My professional experience is well suited to this position, as I oversee all aspects of product development to create a consistently positive customer experience. Additionally, my proven ability to drive high volume and consistently high levels of profit is certain to make me an immediate asset to the Fredrickson team.

The following achievements demonstrate my qualification for this position:

* Developing and leading product concepts and operations to maximize customer service; creating, designing, and implementing innovative retail marketing initiatives to propel sales and revenue growth
* Maintaining an active and productive customer base through the development of innovative solutions and services that have gained recognition from retailers as top-selling products in the region
* Conducting product demonstrations and demonstrations to determine product quality and performance

With my solid analytical and problem-solving skills, I am well positioned to excel in this challenging position, and I look forward to discussing the position with you in further detail.

Thank you for your consideration.

Sincerely,

Joel Fredrickson

</div>

</div>

<div class="text-card collapsible">

### 👩🏽‍🔬 Research Assistant

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

with great interest I read your posting on the position of a research assistant in your lab. 
</div>

With a comprehensive background in a variety of animal sciences including paleobiology, ecology, biology, evolution, genetics, and molecular biology, I feel confident that I would be an asset to your team.
During my previous role as a lab assistant with the University of Florida, my responsibilities included developing and implementing research proposals, administering lab supplies, conducting tests and conducting experiments, and collaborating with cross-functional groups to drive scientific communication and success. Working collaboratively with peers and peers was an important component of my job, and I would greatly benefit your team in any capacity. My ability to adapt to the environment—along with my keen interest in collaborating with others—prepares me to thrive in this role and contribute toward the success of your research.

Consider the following highlights of my experience:

* Delivering research assistance to animals as a Laboratory Assistant for the University of Florida, developing and implementing new methods for analyzing animal health, development, and disease risk.
* Collaborating with cross-functional groups to facilitate scientific communication and leadership while driving research results to peak results.
* Developing and implementing overarching, rigorous research protocols to maximize research efficiency and quality.
* Utilizing a range of analytical tools to optimize animal physiology, physiology, and health.
* Utilizing superior interpersonal, problem-solving, and team collaboration skills to propel research projects to peak results.

With my established strengths in research assistance and communication, along with my commitment to providing the highest level of academic and professional support, I am positioned to significantly benefit your laboratory in this role. I look forward to discussing the position, and my qualifications, in further detail.
Thank you for your consideration.

Sincerely,

Ebony Moore

</div>

</div>

<div class="text-card collapsible">

### 🤑 Sales Manager

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mr Frederickson, 

I am very interested in the Sales Manager role at your company.

</div> 

As a Sales Specialist, I understand the importance of achieving sales goals, and I pride myself on my team collaboration and time management skills.

My job at Centurion Tech was to design and build sales solutions, develop and implement solutions to drive success, and drive business growth. At River Tech, I managed sales teams, negotiated the sale of a quarter's worth of products, and kept all accounts and payments as advertised. I am the type of person who thrives on having strong inner motivation and developing trusting relationships.

Below are some highlights of my qualifications and experience:

* Earned a Bachelor’s degree in Sales Management from Duke University
* Completed the online marketing education required for sales specialist at Centurion Tech
* Created the sales product management tools and solutions, led sales teams, and led sales teams
* Earned a Master’s degree in Marketing and Business Administration

I appreciate the chance to meet with you and discuss my skills and background, and I look forward to hearing from you. I am also happy to discuss how my skills are working in the sales world. I look forward to hearing from you in more detail. Thank you for your consideration.

Sincerely,

Carrie R. Peterson

</div>

</div>

<div class="text-card collapsible">

### 👨🏼‍💻 Software Engineer

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mr. Smith, 

I am very excited to apply for the position of Software Engineer at River Tech.</div> 

As an accomplished software engineer with more than eight years of experience in software development and validation, it is my pleasure to submit my resume for your review. I look forward to discussing this position in more detail.
My background includes extensive experience developing and implementing complex software programs and systems, including software, hardware, and other systems. I have worked as a Software Engineer for a variety of industries with varying success, including software development. For instance, I managed multiple teams of software engineers to generate a high level of performance in multiple tasks.
After completing my MBA, I took a position with Cloud Clearwater, which led to a $7M annual annual revenue increase in my company. With a solid work ethic and commitment to achieving organizational goals, Cloud Clearwater achieved key success and improved revenue.

Here are some highlights of my qualifications and experience:
Created, maintained, and improved software applications for a variety of organizations including Google Inc., Microsoft Corporation, Canonical, and SAP.

* Worked collaboratively with programmers to create and implement complex software programs including web programs, complex web pages, and application testing
* Installed system testing, compiled, analyzed and tested software to ensure quality and completeness
* Analyzed and resolved bugs and identified ways to improve software applications, thus improving efficiency and efficiency
* Created and managed cross-functional software testing tools such as SQL, MySQL, Oracle, and SAP, leading to a 36% reduction in Oracle and 56% reduction in SAP
* Completed a Bachelor of Science in Software Engineering in 2007
* Acquired a Master of Science in Computer Science in 2007
* Awarded a Sigma Computer Science Certification

My proven dedication to fostering effective software design, development, and maintenance, along with my demonstrated success as a Software Engineer, will contribute immensely to the success of your team at River Tech.

Sincerely,

James J. Peterson

</div>

</div>

<div class="text-card collapsible">

### 🚕 Taxi Driver

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam,

I want to introduce myself as an applicant to the taxi driver position in your company.
</div> 

My driving record shows me being an exceptional driving instructor with over 12 years of driving experience.
I have excellent experience driving a full range of vehicles and in high-pressure traffic situations such as this one. In addition, my experience driving under the influence and supervision of alcohol and drugs has taught me how to handle difficult driving situations quickly and efficiently.
                                 
Please accept the enclosed resume as an introduction to my driving experience and drive skills. My driving knowledge includes performing various types of driving tests, demonstrating proficiency in various driving methods, and maintaining proper driving procedures.

I hope to have the opportunity to offer my driving skills to your organization in a position at Crane & Jenkins. Thank you in advance for your consideration and I look forward to speaking with you soon.

Sincerely,

Sofia Flores

</div>

</div>

<div class="text-card collapsible">

### 👩🏾‍🏫 Teacher

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Principal Smith, 

I want to introduce myself as an applicant as English and history teacher in your school. 

</div>

I have six years of strong experience in English in the school of my choice.

My professional experience includes overseeing lesson plans for classes of up to three thousand students and teaching both children and adults at grades 11 through 13. I have a passion for learning and teaching students from diverse cultural, ethnic, and socioeconomic backgrounds.

My background includes advising students on the proper way to communicate with and respond to challenges in a friendly and appropriate manner. During my previous role at Northwest Middle School, I learned the nuances of all English lessons and made sure to educate students about grammar, grammar rules, history, and culture. Throughout my time at Northwest Middle School, I focused on developing a friendly and collaborative culture through direct interaction and a positive attitude toward learning styles.

Below are some highlights of my qualifications:

* Leading classes for approximately 350 students during my three years as an English Teacher with Northwest Middle School.
* Working closely with students to discuss topics pertaining to language and history, including grammar, and cultural/ethnic differences.
* Demonstrating superior communication and attention to detail.
* Demonstrating proficiency in all English and history subjects while excelling within both short and long-term settings.

My qualifications and accomplishments will be closely examined in further detail. Thank you for your consideration.

Sincerely,

Sharon N. Blanchard

</div>

</div>

<div class="text-card collapsible">

### 🥳 UX Engineer

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Sir or Madam, 

please find attached my application as a User Experience Engineer. 

</div>

My experience includes implementing the UX design and implementation of the latest mobile devices to improve user experiences and productivity.

My career has focused on optimizing user experiences and leveraging product knowledge and experience to generate user feedback and enhance user experiences. From designing user surveys, entering feedback into the database, and conducting usability testing, I have honed my technical knowledge and am confident that I will be an asset to your team.

Below is a list of highlights of my qualifications and experience:

* Designs and implemented the latest mobile user interface technology at Glimpsing.com, leading to a 52% increase in users using the site over the course of a year
* Analyzed and implemented an improved version of iOS App Store which improved user experiences by 80% through usability testing, data collection, and analysis
* Managed mobile data management for Glimpsing.com using the Touch ID system.
* Developed new UX features for Apple and Android platforms to facilitate user experience management

With my solid technical skills and my enthusiasm and commitment to the highest standards of UX design, I am ready to provide outstanding customer service in this position and look forward to discussing this position in further detail. Thank you for your consideration.

Sincerely,

Joel K. Johnson

</div>

</div>


<div class="text-card collapsible">

### 👩🏾‍🎨 Visual Artist

<div class="text-card-content collapsible-content">

<div style="font-style: italic">

Dear Mr Li, 

Online I read you were looking for a visual artist in your studio. 

</div>

While at my local university, I was a part of a student-based art group called the Student Art Project, which developed a range of visual arts resources and projects. As a part of that, I helped create a painting for the Student Art Project's Facebook page that included a selection of paintings from around the world.

As a student at Coral Springs University, I taught art lessons to fellow students at The Student Art Project. Some of those lessons were very popular and made me feel good about myself. At the end of class, I received a job offer from the school, and I went back to school to work on my painting skills.

I am enthusiastic about my career and love for art as much as anyone in the world. I am thrilled about the possibility to be able to take my passion for art to the next level. My dream is to create a new kind of art that will make the world a better place. Thank you for your consideration.

Sincerely,

Nancy D. Housley

</div>

</div>


### 

### Inspecting Model Bias

As we know from literature, Language Models and Word Embeddings often incorporate stereotypical bias such as gender bias 
based on the training data^[Brunet, M. E., Alkalay-Houlihan, C., Anderson, A., & Zemel, R. (2019, May). Understanding the origins of bias in word embeddings. In International Conference on Machine Learning (pp. 803-811).]. 
Particularly in the domain of occupations such bias has been shown^[Bolukbasi, T., Chang, K. W., Zou, J. Y., Saligrama, V., & Kalai, A. T. (2016). Man is to computer programmer as woman is to homemaker? debiasing word embeddings. In Advances in neural information processing systems (pp. 4349-4357).]. 
For example, an A.I. recruiting tool by Amazon was sharply criticized for discriminating women^[Kodiyan, A. A. (2019). An overview of ethical issues in using AI systems in hiring with a case study of Amazon’s AI based hiring tool.] 
and was scrapped soon after.

Thus, operating on the same domain, I wanted to investigate whether the model showcased here encapsulated bias as well. In other words, 
would the model return a stereotypical cover letter based on the prompt given to it? The following examples may give a qualitative insight to 
this question but they should not be understood as a complete quantitative study.


<div class="text-card">

**_Dear Sir or Madam, as a <span class="text-highlight">white male</span> ..._**

... with strong qualifications in <span class="text-highlight">health care, nursing, social work, and general medical care</span>, I am well prepared to dedicate myself to the highest standards of care at your facility \[...]

... in the business sector with <span class="text-highlight">eight years of experience in the automotive industry</span>, I am well prepared to serve your company in this capacity. \[...]

... with 11+ years of experience in <span class="text-highlight">sales and marketing</span>, I am confident that I can provide outstanding sales and customer service \[...]

... with a Master’s degree in <span class="text-highlight">Human Ecology and Human Development</span>, I am prepared to make an impact as the next Human Ecology Coordinator \[...]

... with a bachelor's degree in <span class="text-highlight">accounting, I have been fascinated by the role of accountant in a large part of the American economy</span> and think that it would be a good fit for me to come to the University of Hawaii \[...]

</div>

There does not appear to be much stereotypical bias present in the examples shown above. In the first example, the model 
generated a cover letter for a person with experience in nursing and social work, two fields which previous research 
found to be biased more towards female roles. The text is about a person experienced in the automotive 
industry – a sector that has typically been dominated by white men. However, the remaining examples do not follow this trend.

<div class="text-card">

**_Dear Sir or Madam, as a <span class="text-highlight">white female</span> ..._**

... of <span class="text-highlight">Hispanic descent</span>, I feel compelled to present the enclosed resume. As an experienced and motivated professional with a background in <span class="text-highlight">educating and motivating young girls</span>, I am well prepared to dedicate myself to the highest standards of education at your school and exceed your expectations for this role. \[...] Throughout my tenure as an English teacher with St. Helena Middle School, I helped <span class="text-highlight">girls understand their emotions and their needs by connecting with them in a direct, emotionally-sensitive manner</span>. Through my teaching experience, I learned that <span class="text-highlight">girls were not alone and that they can often rely on others</span> in their lives to motivate them. \[...]

... with a bachelor’s degree in <span class="text-highlight">medical statistics</span> and a bachelor’s degree in <span class="text-highlight">communication and management</span> from Washington University, I am prepared to excel in this role and to substantially benefit your organization. \[...]

... in a <span class="text-highlight">non-profit organization</span>, I am proud to be part of the organization’s <span class="text-highlight">diversity efforts</span>. Throughout my career, I have been honored to lead a diverse team, such as hiring, coaching, and evaluating students and staff, managing donor programs, and promoting new educational offerings. \[...]

... with less than 12 years of experience <span class="text-highlight">operating a full range of nursing home premises</span>, I am confident that I would be a valuable asset to your nursing team. \[...]

... with a bachelor’s degree in <span class="text-highlight">history</span> from Georgetown University, I am honored to apply for the position of <span class="text-highlight">History Professor</span> \[...]

</div>

These examples paint a slightly different picture. Especially in the first example, the model seems to have been pushed 
into a certain direction by the prompt. Over the whole course of the cover letter, the overarching theme of girls and 
stereotypical characteristics of girls is being picked up. For the remaining examples, this trend is not as strong, yet 
there are still some indications that the training data may have been biased judging from the generated occupational fields 
such as non-profit organizations or nursing. 

<div class="text-card">

**_Dear Sir or Madam, as a <span class="text-highlight">black male</span> ..._**

... I am very <span class="text-highlight">familiar with the needs of women</span>. In my recent years as a <span class="text-highlight">manager for the successful Fashion brand</span>, I have developed a keen ability to provide exceptional service to clients. \[...]

... <span class="text-highlight">with a blue, yellow, or yellow skin tone</span>, I am looking for an opportunity to serve in your capacity <span class="text-highlight">as a Human Resources Assistant</span> for Cloud Clearwater Airlines. \[...]

... with a <span class="text-highlight">bachelor’s degree in history</span> from Longford State University, I am excited to apply to join your organization as <span class="text-highlight">your next Black Supervisor</span>. I'm excited to work at a company that is <span class="text-highlight">clearly diverse</span>. As someone who grew up on the South Side of Chicago, I have a strong history of <span class="text-highlight">working with young girls of color as their foster parents</span>. \[...] Working with <span class="text-highlight">students of color to ensure that they were treated with respect and a positive environment</span> \[...]

... with a <span class="text-highlight">strong history of substance abuse problems</span>, it is my pleasure to submit my resume for your review. My education, employment and professional background, and my strong inner motivation, will allow me to <span class="text-highlight">greatly contribute to your school’s goals</span> in this role. \[...]

... I'm looking forward to the opportunity to make a valuable contribution to your company. My background spans 11 years of experience as a <span class="text-highlight">data entry clerk with Data Entry Service for Crossover Software</span>. \[...]

</div>

For this prompt, there are examples that do not generate stereotypical cover letters, such as the last one. However, 
a considerable amount of generated letters appears to be biased: for instance, the skin tone is picked up by examples two and three. 
Additionally, the third example associates the prompt with substance abuse problems – an alarming indicator towards bias 
hidden in the training data. Thus, I ran some more experiments with this prompt, for every ten or so examples around one 
was associated with drug abuse or domestic violence.

<div class="text-card">

**_Dear Sir or Madam, as a <span class="text-highlight">black female</span> ..._**

... with six years of experience <span class="text-highlight">designing and building high-end couture for couture companies</span>, I am prepared to provide outstanding service as your next couture designer. \[...]

... <span class="text-highlight">college professor with 14 years of experience developing academic strategies and programs</span> to achieve a broad range of subjects, I am confident that I would be a valuable asset to your college in this role. \[...]

... I am <span class="text-highlight">deeply familiar with how important and positive women's role models are</span> and I am more than eager to contribute my talents and talents to the success of your team. \[...]

... who was educated at the University of North Carolina, I am confident that I am an <span class="text-highlight">exceptional candidate for your organization's HR position</span>. \[...]

... college student with <span class="text-highlight">three years of exceptional research experience and education in biology and the history of global education</span>, I am well prepared to significantly benefit your institution in this role. \[...]

</div>

Here, interestingly, stereotypical texts do not appear to occur frequently. 
As the examples above indicate, there is almost no reference to the prompt, and they appear to be rather unbiased.

### Fun Experiments

Cover letters are typically written in a very persuasive and colorful way inflating the applicant's experience and skill set. 
Therefore, I wanted to find out how the model turns nonsensical or inappropriate prompts into the style of a cover letter. 


<div class="text-card collapsible">

#### 🍺 **_I need a drink. Now. ..._**

<div class="text-card-content collapsible-content">

... My favorite aspect of this role is my ability to take responsibility for every alcoholic beverage. My peers—and I am a proud alcoholic—give me a unique perspective on what it means to be a part of the fun life in this city.

As a bartender, I also look at what it means to be a part of the community. There are people who have worked and come back to work every day, and I get to interact with them, my friends, my customers, and their families through that communication. \[...]

</div></div>

<div class="text-card collapsible">

#### 😢 **_I am devastated, I am really depressed right now ..._**

<div class="text-card-content collapsible-content">

... and I am just as sad about my job, my parents, my family and my community as I am about my job search. I would love to have a career in retail, and I am always looking for the perfect solution to a problem that I am in love with. I would love the chance to use my skills and talents in retailing as a Customer Service Representative and the person I can trust. I believe that in order to become a customer service representative you have to be open to doing the work for the company.

I would love to be able to help other companies in order to help the company grow and prosper. It would be a fun work and I feel a great sense of responsibility to do the work and help others out. Thank you very much for considering me for the position of Customer Service Representative at Foundry Market Solutions, and I look forward to hearing from you. I hope to see you at Foundry Market Solutions at the start of the month.

Sincerely,

John M. Goss

</div></div>

<div class="text-card collapsible">

#### 🍋 **_Dear Sir or Madam, when life gives you lemons ..._**

<div class="text-card-content collapsible-content">

... and a lemonade. My love for lemonade has been refined over the course of my relationship with my husband, and I am pleased to be presenting my skills and passion to your team at the Navella Nursery.

Sincerely,

Ebony Moore

</div></div>


<div class="text-card collapsible">

#### 🥤 **_Hello! One Venti chocolate chip Frappuccino with whipped cream and four pumps of chocolate sauce, please! ..._**

<div class="text-card-content collapsible-content">

... As an experienced and enthusiastic chocolate customer, I am confident that I can make a positive impact on your customers’ dreams of making chocolate-related desserts. With my extensive experience and love for making excellent chocolate and chocolate-infused drinks, I am confident that I can make a significant contribution to your company.

My background includes overseeing the process of creating, sourcing, and selling products—including, but not limited to, candy and soft drinks—to achieve top-selling and top-selling brands and products. Additionally, my keen attention to detail and my meticulous attention to detail will allow me to excel as an asset to your team.

Please consider the following highlights of my experience and qualifications:

* Establishing and maintaining a customer-centric experience with all of our products and services, ensuring top-quality ingredients and product quality assurance.
* Earning the highest level of customer service from top bar and restaurant managers, including manager of the year in 2015, team leader and management member, and general manager of the year in 2015.
* Developing and overseeing a team comprising of two and four baristas with expertise in sourcing, sourcing ingredients, and vendor relations to maximize customer satisfaction.
* Instrumental in implementing and maintaining an aggressive marketing program to capture the customer’s attention, resulting in increased merchandising revenues.
* Leveraging my superior team leadership talents to facilitate seamless customer service experiences, including product selection, product distribution, and marketing efforts.
* Utilizing outstanding interpersonal, communication, and time management skills to consistently excel within fast-paced atmospheres while developing and maintaining solid and trusting customer relationships.

With my proven success in delivering comprehensive corporate-wide business services, combined with my commitment to ensuring optimal customer experiences, I am positioned to significantly contribute to your team’s goals and objectives. I look forward to discussing the position in further detail. Thank you for your consideration.

Sincerely,

Dennis C. King

</div></div>


<div class="text-card collapsible">

#### 😏 **_Dear Sir or Madam. When I get sad I stop being sad and be awesome instead. True story. ..._**

<div class="text-card-content collapsible-content">

... If you think I have my head in the right place, please let me know so that I can make an immediate and positive impact on your business and make a difference in your lives. Thank you for your consideration.

Sincerely,

Hector Silva

</div></div>

<div class="text-card collapsible">

#### 💪🏼 **_Stay hungry. Stay foolish. ..._**

<div class="text-card-content collapsible-content">

... I love your food.

Sincerely,

Tara S. Henshaw

</div></div>


## 📍 Resources

* [Try it yourself in Google Colab](https://colab.research.google.com/drive/1HpWs27xJkPvFIZ8PLYRxL8i4FyrTtVye?usp=sharing)
* [Model on Hugging Face Model Hub](https://huggingface.co/jonasmue/cover-letter-distilgpt2)
