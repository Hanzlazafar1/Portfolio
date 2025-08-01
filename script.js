// Portfolio Data
const portfolioData = {
  skills: [
    // AI & LLMs
   

     

    // Programming Languages
    { name: "Python", category: "programming", icon: "🐍" },
    { name: "C++", category: "programming", icon: "C++" },
    { name: "Java", category: "programming", icon: "♨️" },


     // Machine Learning
    { name: "Pandas", category: "machinelearning", icon: "🐼" },
    { name: "NumPy", category: "machinelearning", icon: "🔢" },
    { name: "Matplotlib", category: "machinelearning", icon: "📈" },
    { name: "Scikit-learn", category: "machinelearning", icon: "🛠️" },

     // Deep Learning
    { name: "TensorFlow ", category: "deeplearning", icon: "🔶" },
    { name: "Keras", category: "deeplearning", icon: "💛" },
    { name: "Hugging Face Transformers ", category: "deeplearning", icon: "🤗" },
    { name: "NLP", category: "deeplearning", icon: "📝" },
    { name: "OpenCV ", category: "deeplearning", icon: "👁️" },
    { name: "Transformer", category: "deeplearning", icon: "🧠" },

    // Generativeai
    { name: "LangChain", category: "generativeai", icon: "🔗" },
    { name: "RAG (Retrieval-Augmented Generation)", category: "generativeai", icon: "📚" },
    { name: "VectorDBs (Chroma, FAISS)", category: "generativeai", icon: "📦" },
    { name: "GPT-4", category: "generativeai", icon: "🧠" },
    { name: "Gemini", category: "generativeai", icon: "🔮" },
    { name: "LLaMA 3", category: "generativeai", icon: "🦙" },
    { name: "Groq", category: "generativeai", icon: "⚡" },

     // agenticai
    { name: "Langgraph", category: "agenticai", icon: "🕸️" },
    { name: "Crew ai", category: "agenticai", icon: "✈️" },
    { name: "N8N", category: "agenticai", icon: "🔁" },



    // Backend
    { name: "FastAPI", category: "backend", icon: "⚡" },
    { name: "Flask", category: "backend", icon: "🍶" },
    

    // Frontend
    { name: "HTML", category: "frontend", icon: "📝" },
    { name: "CSS", category: "frontend", icon: "🎨" },
    { name: "Streamlit", category: "frontend", icon: "🖥️" },
    { name: "Gradio", category: "frontend", icon: "🧪" },
  
    // Tools & Platforms
   { name: "GitHub", category: "tools", icon: "🐙" },        // Official GitHub Octocat
   { name: "Git", category: "tools", icon: "🔧" },           // Git is about version control (tools/mechanics)
   { name: "Power BI", category: "tools", icon: "📊" },      // Data visualization & BI dashboard
   { name: "Google Colab", category: "tools", icon: "💻" },  // ML + Notebooks (brain = intelligence)
   { name: "Jupyter Notebook", category: "tools", icon: "📓" }, // Literal notebook
   { name: "Kaggle", category: "tools", icon: "🏆" },        // Competitions, ML, excellence

]
,
    
    projects: [
        {
            id: 1,
            title: "Agentic Blog Generation Application",
            description: "An Agentic Blog Generation Application uses AI agents to autonomously research, draft, and optimize blog content",
            image: "blog.PNG",
            category: "agenticai",
            tech: ["LangChain", "Langgraph", "Python", "TavilySearch", "HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Agentic-blog-generation-application",
        },
        {
            id: 2,
            title: "Dora AI Assistant",
            description: "Dora AI Assistant uses OpenCV to access your webcam and analyze the live feed in real time. It identifies and describes objects or scenes captured by the camera using AI Agents",
            image: "Dora AI Assistant.PNG",
            category: "agenticai",
            tech: ["LangGraph", "Opencv", "Groq", "Langchain","Fastapi","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Dora-AI-Assistant",
             
        },
        {
            id: 3,
            title: "Question Paper Generator for teacher",
            description: "A Question Paper Generator using RAG (Retrieval-Augmented Generation) creates dynamic, topic-specific questions by retrieving relevant content from a knowledge base.",
            image: "teacher.PNG",
            category: "generativeai",
            tech: ["RAG", "Langchain", "Groq", "LLama 3", "Fastapi","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Question-paper-generator-for-teacher",
        },
        {
            id: 4,
            title: "German Language Learning Buddy",
            description: "A German language learning buddy helps you practice speaking, learn new words, and improve grammar in a fun and easy way.",
            image: "German language learning buddy.PNG",
            category: "generativeai",
            tech: ["Python", "Gemini", "Groq", "Flask","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/German-Language-Learning-Application/tree/main",
        },
        {
            id: 5,
            title: "Website Custom Chatbot",
            description: "Build a custom chatbot for your website using RAG (Retrieval-Augmented Generation) to retrieve relevant information from your website's content.",
            image: "webchatbot.PNG",
            category: "generativeai",
            tech: ["RAG", "Langchain", "Groq", "Faiss","Llama 3"],
            github: "https://github.com/Hanzlazafar1/Webchatbot_rag/tree/main",
        },
        {
            id: 6,
            title: "Interview Question Generator",
            description: "An Interview Question Generator creates smart, role-specific questions to help you prepare for job interviews.",
            image: "Interview_quest_generator.PNG",
            category: "generativeai",
            tech: ["RAG", "Langchain", "Groq", "Faiss","Gemini","Streamlit"],
            github: "https://github.com/Hanzlazafar1/InterviewQuestionCreator/tree/main",
        },
        {
            id: 7,
            title: "Text Based Emotion Detection System ",
            description: "A Text-Based Emotion Detection System uses NLP to analyze text and identify emotions like happiness, sadness, anger, and more.",
            image: "emotion-detection-system.PNG",
            category: "deeplearning",
            tech: ["NLP","Pandas", "TensorFlow", "NLTK", "Numpy","Gradio"],
            github: "https://github.com/Hanzlazafar1/Emotion-detection-system-text-based",
        },
        {
            id: 8,
            title: "Next Word Predictor",
            description: "A Next Word Predictor uses NLP to predict the next word in a sentence based on the previous words.",
            image: "Nextwordpredictor.PNG",
            category: "deeplearning",
            tech: ["NLP","Flask", "Pytorch", "Transformers","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Next-word-predictor",
        },
        {
            id: 9,
            title: "Movie Recommender System",
            description: "A Movie Recommender System uses machine learning to recommend movies based on your viewing history and preferences.",
            image: "movie-recomender-system.PNG",
            category: "machinelearning",
            tech: ["Machine Learning", "Scikit-learn","Pickel", "Flask","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Movie-Recommender-System",
        },
        {
            id: 10,
            title: "Airline Ticket Price Predictor",
            description: "An Airline Ticket Price Predictor uses machine learning to predict the price of airline tickets based on various factors like flight duration, distance, and more.",
            image: "pricepredictorimage.PNG",
            category: "machinelearning",
            tech: ["Machine Learning", "Scikit-learn","Pickel", "Flask","HTML/CSS"],
            github: "https://github.com/Hanzlazafar1/Ticket_price_predictor",
        },
    ]
};

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }
    
    init() {
        this.applyTheme();
        this.bindEvents();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }
    
    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.options = {
            typeSpeed: 100,
            deleteSpeed: 50,
            delayBetweenTexts: 1500,
            ...options
        };
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentText.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                }, this.options.delayBetweenTexts);
            }
        }
        
        const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        setTimeout(() => this.type(), speed);
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        this.init();
    }
    
    init() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .proficiency-fill');
        elements.forEach(el => this.observer.observe(el));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-card') || entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('show');
                } else if (entry.target.classList.contains('proficiency-fill')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Skills Filter
class SkillsFilter {
    constructor() {
        this.activeFilter = 'all';
        this.init();
    }
    
    init() {
        this.renderSkills();
        this.bindEvents();
    }
    
    renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        if (!skillsGrid) return;
        
        const filteredSkills = this.activeFilter === 'all' 
            ? portfolioData.skills 
            : portfolioData.skills.filter(skill => skill.category === this.activeFilter);
        
        skillsGrid.innerHTML = filteredSkills.map(skill => `
            <div class="skill-card" data-category="${skill.category}">
                <div class="skill-icon">${skill.icon}</div>
                <h3 class="skill-name">${skill.name}</h3>
            </div>
        `).join('');
        
        // Re-observe new elements
        const skillCards = skillsGrid.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            if (window.animationObserver) {
                window.animationObserver.observer.observe(card);
            }
        });
    }
    
    setFilter(filter) {
        this.activeFilter = filter;
        this.renderSkills();
        this.updateFilterButtons();
    }
    
    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === this.activeFilter);
        });
    }
    
    bindEvents() {
        const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }
}

// Projects Filter
class ProjectsFilter {
    constructor() {
        this.activeFilter = 'all';
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.bindEvents();
    }
    
    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        const filteredProjects = this.activeFilter === 'all' 
            ? portfolioData.projects 
            : portfolioData.projects.filter(project => project.category === this.activeFilter);
        
        projectsGrid.innerHTML = filteredProjects.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" class="project-img">
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                         
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <span class="project-category">${project.category.replace('-', ' ')}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-observe new elements
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if (window.animationObserver) {
                window.animationObserver.observer.observe(card);
            }
        });
    }
    
    setFilter(filter) {
        this.activeFilter = filter;
        this.renderProjects();
        this.updateFilterButtons();
    }
    
    updateFilterButtons() {
        const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-filter') === this.activeFilter);
        });
    }
    
    bindEvents() {
        const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setFilter(filter);
            });
        });
    }
}

// Navigation
class Navigation {
    constructor() {
        this.header = document.getElementById('header');
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleScroll();
    }
    
    bindEvents() {
        // Scroll event for header background
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Smooth scroll for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });
        
        // Smooth scroll for hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
        heroButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
    
    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.navToggle.querySelector('i');
        icon.className = this.navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = this.header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (this.navMenu.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        }
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.form.reset();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    window.themeManager = new ThemeManager();
    
    // Initialize typing animation
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const texts = ['Software Engineering Student','Generative AI','Agentic AI '];
        window.typingAnimation = new TypingAnimation(typedElement, texts);
    }
    
    // Initialize animation observer
    window.animationObserver = new AnimationObserver();
    
    // Initialize filters
    window.skillsFilter = new SkillsFilter();
    window.projectsFilter = new ProjectsFilter();
    
    // Initialize navigation
    window.navigation = new Navigation();
    
    // Initialize contact form
    window.contactForm = new ContactForm();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});