import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Code, GitBranch, Database, Award, Book, Music, Smartphone, Brain, GraduationCap, Briefcase, Star, CheckCircle, Download } from 'lucide-react';

// Main App component for the portfolio
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-inter text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-lg p-6 md:p-8 lg:p-10 rounded-b-3xl mb-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Profile Picture and Name */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-4 md:mb-0">
            <img
              src="/images/21P31A05C3.jpg" // Placeholder for image, replace with your actual image URL
              alt="SRI RAJA KAKARLAPUDI S.S.N RAJU"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md border-4 border-blue-200 mb-4 md:mb-0 md:mr-6"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/E0F2FE/1E40AF?text=Profile"; }} // Fallback
            />
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-tight">
                SRI RAJA KAKARLAPUDI S.S.N RAJU
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-2">
                Full-Stack Developer | MERN & Java Enthusiast
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-blue-500" />
              <span>7416954864</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-blue-500" />
              <span>survasrk54@gmail.com</span>
            </div>
            <a
              href="https://www.linkedin.com/in/surva-srk" // Replace with actual LinkedIn URL if available
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={20} className="text-blue-500" />
              <span>surva srk</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-blue-500" />
              <span>Rayavaram</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Innovating Solutions, Building Futures
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl animate-fade-in-up delay-100">
            A highly motivated Full-Stack Developer passionate about crafting robust and scalable web applications.
            Eager to leverage MERN and Java expertise to drive impactful projects.
          </p>
          <a
            href="/SRI RAJA _KAKARLAPUDI _SSNRAJU.pdf" // IMPORTANT: Replace with the actual path to your resume PDF
            download="SRI_RAJA_KAKARLAPUDI_SSNRAJU_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg
            hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </section>

        {/* Objective Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Star size={28} className="mr-3 text-yellow-500" />
            Objective
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A highly motivated and adaptable professional with strong technical, leadership, and
            communication skills. Possessing hands-on experience in full-stack development and a solid
            foundation in software engineering principles. Eager to contribute to innovative projects,
            drive business success, and continuously grow in a dynamic and challenging environment.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Code size={28} className="mr-3 text-purple-600" />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />C++</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />Java</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />HTML</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />CSS</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />JavaScript</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />React.js</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />Node.js</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />Express.js</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />MongoDB</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />Spring Boot</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-2 text-green-500" />MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><GitBranch size={18} className="mr-2 text-blue-500" />Git</li>
                <li className="flex items-center"><Database size={18} className="mr-2 text-indigo-500" />SQL</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Non-Technical Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><Brain size={18} className="mr-2 text-orange-500" />Teamwork</li>
                <li className="flex items-center"><Brain size={18} className="mr-2 text-orange-500" />Public Speaking</li>
                <li className="flex items-center"><Brain size={18} className="mr-2 text-orange-500" />Problem Solving</li>
                <li className="flex items-center"><Brain size={18} className="mr-2 text-orange-500" />Quick Learner</li>
                <li className="flex items-center"><Brain size={18} className="mr-2 text-orange-500" />Leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience & Internships Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Briefcase size={28} className="mr-3 text-green-600" />
            Experience & Internships
          </h2>

          {/* Fullstack Intern */}
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Fullstack Intern</h3>
            <p className="text-lg text-gray-600">Technical Hub</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Developed proficiency in the MERN stack by working on real-time projects.</li>
              <li>Collaborated with team members to design, develop, and deploy full-stack applications.</li>
            </ul>
          </div>

          {/* Java Full Stack Internship */}
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Java Full Stack Internship</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Successfully completed a Java Full-Stack internship, gaining hands-on experience in developing web applications.</li>
              <li>Worked with technologies like Java, Spring Boot, MySQL, and React.js.</li>
            </ul>
          </div>
        </section>

        {/* Technical Projects Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Smartphone size={28} className="mr-3 text-pink-600" />
            Technical Projects
          </h2>

          {/* MERN-GPT */}
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">MERN-GPT</h3>
            <p className="text-gray-600 mb-2">Technologies: React.js, MongoDB, Express.js, OpenAI API</p>
            <p className="text-gray-700">
              Developed an AI-powered application using React.js, MongoDB, Express.js, and OpenAI API to
              generate dynamic responses for user queries.
            </p>
            {/* Placeholder for actual project links */}
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-blue-500 hover:underline font-medium hover:text-blue-700 transition-colors duration-300">Live Demo (Link Placeholder)</a>
              <a href="#" className="text-blue-500 hover:underline font-medium hover:text-blue-700 transition-colors duration-300">GitHub (Link Placeholder)</a>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
            <p className="text-gray-600 mb-2">Technologies: HTML, CSS</p>
            <p className="text-gray-700">
              Used HTML and CSS to create a basic webpage with a super attractive nature for Application Brands.
            </p>
            {/* Placeholder for actual project links */}
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-blue-500 hover:underline font-medium hover:text-blue-700 transition-colors duration-300">Live Demo (Link Placeholder)</a>
              <a href="#" className="text-blue-500 hover:underline font-medium hover:text-blue-700 transition-colors duration-300">GitHub (Link Placeholder)</a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <GraduationCap size={28} className="mr-3 text-red-500" />
            Education
          </h2>

          {/* Aditya College Of Engineering & Technology */}
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Aditya College Of Engineering & Technology</h3>
            <p className="text-lg text-gray-600">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-gray-700">2021-2025 | CGPA: 6.93</p>
          </div>

          {/* Aditya Junior College */}
          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Aditya Junior College</h3>
            <p className="text-lg text-gray-600">Intermediate in M.P.C</p>
            <p className="text-gray-700">2019-2021 | CGPA: 8.56</p>
          </div>

          {/* T.A.R Talent School */}
          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">T.A.R Talent School</h3>
            <p className="text-lg text-gray-600">10th Grade</p>
            <p className="text-gray-700">2018-2019 | CGPA: 9.3</p>
          </div>
        </section>

        {/* Achievements & Certifications Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Award size={28} className="mr-3 text-yellow-600" />
            Achievements & Certifications
          </h2>

          <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Competitive Programming: Solved 50+ problems on LeetCode, and 50+ problems on CodeChef.</li>
              <li>Achieved 3 Star Badge On HackerRank in C.</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>IT SPECIALIST in HTML, CSS from Pearson Vue</li>
              <li>IT SPECIALIST in JAVASCRIPT from Pearson Vue</li>
            </ul>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md mb-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center">
            <Book size={28} className="mr-3 text-teal-500" />
            Hobbies
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Playing Cricket</li>
            <li>Reading Books</li>
            <li>Listening Songs</li>
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-700 text-white p-6 text-center rounded-t-3xl mt-8">
        <p>&copy; {new Date().getFullYear()} SRI RAJA KAKARLAPUDI S.S.N RAJU. All rights reserved.</p>
        <p className="mt-2 text-sm">
          "I confirm that the details mentioned above are correct and complete to the best of my knowledge. I am solely responsible for their accuracy."
        </p>
      </footer>
    </div>
  );
}

export default App;
