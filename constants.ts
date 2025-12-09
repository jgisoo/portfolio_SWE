import { NodeData } from './types';

export const PORTFOLIO_NODES: NodeData[] = [
  {
    id: 'hero',
    title: 'Start',
    type: 'hero',
    position: { x: 0, y: 0 },
    content: {
      name: "Alex Chen",
      tagline: "Building the bridge between Systems & Intelligence.",
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
        title: "Efficient Attention Mechanisms for Long Contexts",
        venue: "NeurIPS 2024 (Workshop)",
        year: "2024",
        abstract: "Proposing a new sparse attention pattern that reduces memory complexity to O(n log n) with minimal degradation on recall tasks."
      },
      {
        title: "Quantizing Vision Transformers without Retraining",
        venue: "CVPR 2024 (Under Review)",
        year: "2024",
        abstract: "A post-training quantization method utilizing outlier suppression for ViT architectures."
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
        title: "AgentGrid",
        description: "A spatial canvas for multi-agent collaboration visualization.",
        tags: ["React", "WebSockets", "Python", "LangChain"],
        image: "https://picsum.photos/400/200?random=1"
      },
      {
        title: "Rust-Tensor",
        description: "A bare-metal tensor library written in Rust for educational purposes.",
        tags: ["Rust", "CUDA", "Math"],
        image: "https://picsum.photos/400/200?random=2"
      },
      {
        title: "Semantic Search Engine",
        description: "Vector database implementation from scratch using HNSW index.",
        tags: ["C++", "Python", "Docker"],
        image: "https://picsum.photos/400/200?random=3"
      }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'experience',
    position: { x: 600, y: 300 },
    content: [
      {
        role: "Research Intern",
        company: "DeepMind (Simulated)",
        duration: "Summer 2024",
        description: "Investigated scaling laws for mixture-of-experts models. Implemented custom JAX kernels."
      },
      {
        role: "Senior Frontend Engineer",
        company: "Vercel (Simulated)",
        duration: "2021 - 2023",
        description: "Led the migration to Next.js 13 App Router for the core dashboard. Improved LCP by 40%."
      }
    ]
  },
  {
    id: 'about',
    title: 'About Me',
    type: 'about',
    position: { x: -550, y: -300 },
    content: {
      bio: "I'm a Master's student fascinated by the intersection of distributed systems and artificial intelligence. When I'm not debugging CUDA kernels or centering divs, I'm likely hiking or brewing espresso.",
      skills: ["TypeScript", "React", "Python", "PyTorch", "Rust", "Docker", "Kubernetes", "GCP/AWS"]
    }
  }
];