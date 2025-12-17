import { NodeData } from './types';

export const PORTFOLIO_NODES: NodeData[] = [
  {
    id: 'hero',
    title: 'Start',
    type: 'hero',
    position: { x: 0, y: 0 },
    content: {
      name: "Gisoo Jafari",
      tagline: "Engineering Full-stack AI applications and Intelligent Robots!",
      subTagline: "Software Engineer • LLM Researcher • 2025"
    }
  },
  {
    id: 'research',
    title: 'Research',
    type: 'research',
    position: { x: 500, y: -400 },
    content: [
      {
        title: "Furhat as a Simulated Patient: Exploring LLM-Driven Human-Robot Interaction in Optometry Communication Training",
        venue: "HRI",
        year: "2026",
      },
      {
        title: "Evaluating the implementation and perception of Furhat Robot in Developing Interpersonal Skills",
        venue: "HRI",
        year: "2026",
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    type: 'projects',
    position: { x: -400, y: 450 },
    content: [
      {
        title: "ML Credit fraud Detection System",
        description: "Full-stack ML system to detect credit card fraud using anomaly detection techniques, built with Python, streaming ML pipeline with XGBoost, TabNet, and TabTransformer",
        tags: ["TabNet", "XGBoost", "Python", "TabTransformer"],
        // image: "https://picsum.photos/400/200?random=1"
      },
      // {
      //   title: "Rust-Tensor",
      //   description: "A bare-metal tensor library written in Rust for educational purposes.",
      //   tags: ["Rust", "CUDA", "Math"],
      //   image: "https://picsum.photos/400/200?random=2"
      // },
      // {
      //   title: "Semantic Search Engine",
      //   description: "Vector database implementation from scratch using HNSW index.",
      //   tags: ["C++", "Python", "Docker"],
      //   image: "https://picsum.photos/400/200?random=3"
      // }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'experience',
    position: { x: 600, y: 300 },
    content: [
      {
        role: "Graduate Research Intern",
        company: "Social and Intelligent Robotics Lab, University of Waterloo",
        duration: "Jan 2025-Present",
        description: "Engineering an LLM-powered Furhat Robot for automated optometry communication training by integrating GPT APIs in Kotlin, implementing RAG fine-tuning, and optimizing persona-driven prompt engineering. "
      },
      {
        role: "Full-stack Engineer",
        company: "Criteo",
        duration: "Summer 2025",
        description: "Developed a full-stack, internal diagnostic tool with C#, .NET, Kafka, and Angular, which increased developer efficiency by 40% by reducing debugging time for over 20 engineers."
      },
      {
        role: "Software Engineer Backend Intern",
        company: "Vosyn",
        duration: "Winter 2025",
        description: "Engineered and deployed scalable AI translation using RESTful APIs, Python, FastAI and PostgreSQL for multilingual voice/text services, driving a 15% increase in third-party integrations."
      }         
    ]
  },
  {
    id: 'about',
    title: 'About Me',
    type: 'about',
    position: { x: -550, y: -300 },
    content: {
      bio: "I'm a Master's student fascinated by the intersection of human-robot interaction and artificial intelligence.",
      skills: ["Python", "PyTorch", "C#", ".NET"]
    }
  }
];