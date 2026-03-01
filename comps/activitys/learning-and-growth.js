"use client";

import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";
import { SiClaude } from "react-icons/si";

export default function LearningAndGrowth() {
  const learninggrowth = [
    {
      id: 1,
      title:
        "01. Figma AI – Accelerated Design Workflow & Strategic Time Optimization",
      description: [
        "With 5–6 years of hands-on experience in Figma (and earlier years working extensively in Photoshop), I have witnessed the shift from manual-heavy workflows to AI-assisted design acceleration.",
        "Before AI integration, early-stage layout structuring and component exploration required significant manual effort. With Figma AI, I can now rapidly generate structural variations, explore layout directions, and validate concepts in a fraction of the time.",
        "This time efficiency allows me to redirect focus toward higher-value tasks — refining user experience, improving interface clarity, and enhancing interaction smoothness rather than spending excessive time on repetitive setup work.",
        "Integrating AI into my workflow has not only improved speed but also strengthened strategic thinking, enabling faster iteration cycles while maintaining strong UX principles. As AI capabilities evolve, I see even greater opportunities to optimize design workflows and elevate product quality.",
      ],
    },

    {
      id: 2,
      title:
        "02. ChatGPT – Strategic Research, Problem-Solving & Workflow Acceleration",
      description: [
        "From a UI/UX perspective, ChatGPT has significantly enhanced my research synthesis, idea validation, and structured thinking process. It allows me to transform scattered insights into organized user flows, refined microcopy, and clear UX documentation within minutes.",
        "In situations where clients do not provide finalized content, I can quickly generate structured placeholder copy aligned with user intent and brand tone. This eliminates dependency delays and keeps the design process moving without waiting for external inputs.",
        "ChatGPT also supports rapid problem-solving — whether refining UX decisions, validating interaction logic, or exploring alternative solutions to complex user challenges. It acts as a thinking partner during early discovery phases.",
        "From a development standpoint, it helps me troubleshoot frontend issues, refine code snippets, and resolve implementation errors independently. This reduces back-and-forth with developers and accelerates design-to-development alignment.",
        "By integrating ChatGPT into my workflow, I’ve improved efficiency, reduced bottlenecks, and strengthened cross-functional collaboration — allowing more time to focus on user experience quality and strategic product refinement.",
      ],
    },
    {
      id: 3,
      title: "03. Claude.ai – Research Depth & Rapid Frontend Prototyping",
      description: [
        "I use Claude.ai for long-form research synthesis, complex requirement breakdowns, and structured UX documentation. Its contextual depth helps refine problem statements, user journeys, and strategic decisions during early discovery phases.",
        "Beyond research, Claude.ai also supports rapid frontend UI prototyping in HTML and CSS. In scenarios where clients require quick demos — especially for small-scale or content-driven projects — I leverage it to generate structured UI foundations that can be immediately refined and customized.",
        "This approach allows me to present working interface demos within hours, gather feedback quickly, and iterate efficiently without waiting for full design-to-development cycles. It ensures speed without compromising clarity, usability, or visual structure.",
        "By integrating AI-assisted frontend acceleration into my workflow, I reduce turnaround time, maintain project momentum, and deliver fast yet structured solutions aligned with client expectations.",
      ],
    },
    {
      id: 4,
      title:
        "04. Adobe Photoshop (AI-Enhanced Workflow) – Visual Precision & Rapid Editing",
      description: [
        "With over 8 years of experience starting my design journey in Photoshop, I use it extensively for advanced image editing, compositing, and graphic asset creation.",
        "Leveraging Photoshop’s AI capabilities such as generative fill and intelligent selection tools, I accelerate visual production while maintaining high-quality output for web and app interfaces.",
      ],
    },
    {
      id: 5,
      title: "05. Notion AI – Knowledge & Documentation Optimization",
      description: [
        "Notion AI enhances documentation clarity by organizing research notes, stakeholder inputs, and project briefs.",
        "This improves cross-team collaboration and ensures design decisions remain traceable and structured.",
      ],
    },
    {
      id: 6,
      title: "06. GitHub Copilot – Frontend Efficiency",
      description: [
        "While implementing UI, GitHub Copilot assists in accelerating repetitive code tasks in HTML, CSS, and JavaScript.",
        "This allows faster prototyping and tighter design-development alignment.",
      ],
    },
    {
      id: 7,
      title: "07. Midjourney – Visual Exploration & Concept Ideation",
      description: [
        "For early visual ideation and conceptual mood exploration, I experiment with AI-generated visuals.",
        "This helps expand creative direction before refining final UI systems.",
      ],
    },
    {
      id: 8,
      title: "08. Relume – Structured Web Architecture",
      description: [
        "Relume helps accelerate sitemap generation and structured content mapping.",
        "I use it as a starting framework, refining the structure to align with business objectives and usability standards.",
      ],
    },
  ];
  return (
    <div className="w-full space-y-6">
      {learninggrowth.map((item) => (
        <div className="space-y-4 last:border-0 border-b border-solid border-gray-200 pb-6 last:pb-0">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 flex items-center space-x-3">
            <span>{item.title}</span>
          </h3>
          <ul className="text-base sm:text-lg leading-relaxed font-normal list-disc pl-6">
            {Array.isArray(item.description) ? (
              item.description.map((para, index) => (
                <li key={index} className="text-gray-600 mb-1">
                  {para}
                </li>
              ))
            ) : (
              <li className="text-gray-600">{item.description}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
