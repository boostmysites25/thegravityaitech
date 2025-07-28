import React, { useState } from "react";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import faqImg from "../assets/images/faq.webp";

const faqSections = [
  {
    title: "General FAQ",
    faqs: [
      {
        q: "What is an AI-powered technology company, and how can it help my business?",
        a: "The Gravity AI Tech offers AI-powered solutions that automate tasks, analyze data, and deliver insights to help businesses improve efficiency and drive growth.",
      },
      {
        q: "How do AI solutions improve business operations?",
        a: "By leveraging advanced machine learning, natural language processing, and automation, The Gravity AI Tech streamlines workflows, reduces manual effort, and enhances decision-making.",
      },
      {
        q: "Can small businesses benefit from AI?",
        a: "Absolutely—The Gravity AI Tech designs scalable AI tools that fit any business size, enabling startups and SMBs to access automated customer support, predictive analytics, and more.",
      },
      {
        q: "How do you ensure AI projects deliver real value?",
        a: "Through a structured process of discovery, planning, development, and testing, The Gravity AI Tech aligns AI solutions with your goals and measures results to ensure measurable ROI.",
      },
      {
        q: "What types of AI services are available?",
        a: "From custom model development to generative AI, chatbots, and cloud-based AI, The Gravity AI Tech offers a full spectrum of services to meet diverse business needs.",
      },
    ],
  },
  {
    title: "Awareness Stage FAQ",
    faqs: [
      {
        q: "What is artificial intelligence, and how does it work?",
        a: "Artificial intelligence uses algorithms and data to simulate human intelligence, and The Gravity AI Tech implements these systems to automate decision-making and improve efficiency.",
      },
      {
        q: "What types of AI solutions exist for businesses?",
        a: "Businesses can use AI Agents, chatbots, predictive analytics, computer vision, and more, all of which are developed and customized by The Gravity AI Tech.",
      },
      {
        q: "How can generative AI enhance content creation?",
        a: "Generative AI creates text, images, and code automatically, and The Gravity AI Tech builds tailored models to produce high-quality content at scale.",
      },
      {
        q: "What are agentic AI agents, and how do they function?",
        a: "Agentic AI agents autonomously complete tasks and make decisions, and The Gravity AI Tech develops these agents to proactively manage workflows and collaborate with other systems.",
      },
      {
        q: "Why is AI integration important for modern companies?",
        a: "AI integration connects new intelligence capabilities with existing systems to boost productivity and reduce errors, a process expertly handled by The Gravity AI Tech.",
      },
    ],
  },
  {
    title: "Consideration Stage FAQ",
    faqs: [
      {
        q: "How do I choose the right AI solution for my company?",
        a: "By assessing your goals, data readiness, and workflow requirements, and The Gravity AI Tech guides you to the most effective AI approach.",
      },
      {
        q: "What factors should I consider before starting an AI project?",
        a: "You should evaluate data availability, technical infrastructure, and ROI expectations, and The Gravity AI Tech helps you perform this evaluation thoroughly.",
      },
      {
        q: "How do you ensure data security and privacy in AI implementations?",
        a: "We follow best practices in encryption, access control, and compliance, and The Gravity AI Tech implements robust security measures to protect your data.",
      },
      {
        q: "Can existing business systems integrate with new AI technologies?",
        a: "Yes—The Gravity AI Tech specializes in seamless integration of AI capabilities into your current software and workflows.",
      },
      {
        q: "How long does it take to see results from AI solutions?",
        a: "While timelines vary by project, The Gravity AI Tech typically delivers measurable insights and process improvements within a few weeks of deployment.",
      },
    ],
  },
  {
    title: "Decision Stage FAQ",
    faqs: [
      {
        q: "How do I get started with an AI project?",
        a: "You begin with a discovery call to outline objectives and data needs, and The Gravity AI Tech guides you through each step from there.",
      },
      {
        q: "What does your discovery and planning phase involve?",
        a: "We gather requirements, assess data readiness, and draft a roadmap, all coordinated by The Gravity AI Tech to ensure alignment with your goals.",
      },
      {
        q: "What is the typical timeline for AI solution development?",
        a: "Depending on complexity, projects often take four to twelve weeks, and The Gravity AI Tech provides clear milestones throughout the process.",
      },
      {
        q: "How are costs determined for custom AI projects?",
        a: "Costs are based on scope, data complexity, and integration needs, and The Gravity AI Tech provides transparent pricing aligned with your budget.",
      },
      {
        q: "How do you support my business after launching the AI solution?",
        a: "We offer ongoing maintenance, monitoring, and optimization, and The Gravity AI Tech ensures your solution continues to deliver value over time.",
      },
    ],
  },
  {
    title: "Evaluation Tools FAQ",
    faqs: [
      {
        q: "What tools do I need to implement AI automation in my business?",
        a: "Implementing AI automation typically requires data integration tools, machine learning frameworks, and workflow orchestration software to connect intelligent models with your business processes. The Gravity AI Tech provides expert guidance and turnkey solutions to help you select, integrate, and deploy these tools effectively—contact our team to discuss your requirements.",
      },
      {
        q: "How can I tell if an AI-powered chatbot platform is right for my needs?",
        a: "To evaluate an AI-powered chatbot, focus on NLP accuracy, ease of integration with your existing systems, scalability under peak load, and analytics capabilities for tracking performance. The Gravity AI Tech helps businesses run proof-of-concept trials to compare performance metrics and ensure the platform meets your customer engagement goals—reach out to set up a trial.",
      },
      {
        q: "What features should I prioritize when choosing AI software?",
        a: "When choosing AI software, prioritize data security and compliance, scalable architecture, robust API support, customizable models, and real-time analytics dashboards. The Gravity AI Tech builds modular solutions with these key features to ensure reliable, future-proof performance—contact us to see these features in action.",
      },
      {
        q: "Can I integrate custom AI models with my existing systems?",
        a: "Yes—most custom artificial intelligence models can be integrated with existing systems via secure APIs, SDKs, or middleware connectors. The Gravity AI Tech specializes in seamless integration to ensure your new models enhance current workflows without disruption—get in touch to discuss options.",
      },
      {
        q: "How do different AI service providers compare on pricing and scalability?",
        a: "Pricing models vary between usage-based cloud services, subscription plans, and per-project licensing, while scalability and support levels can differ widely among providers. The Gravity AI Tech offers transparent pricing and flexible packages designed to scale with your business needs—view our flexible packages to choose what’s right for you.",
      },
      {
        q: "What’s the typical implementation timeline and support available for AI solutions?",
        a: "Implementation timelines for AI solutions typically range from four to twelve weeks, covering discovery, development, and testing phases, with ongoing monitoring and optimization. The Gravity AI Tech provides clear milestones and dedicated post-launch support so you can track progress and ROI from day one—ask us about our ongoing support packages.",
      },
    ],
  },
  {
    title: "Compare AI Solutions Options",
    faqs: [
      {
        q: "How does a custom AI model compare to an off-the-shelf AI solution?",
        a: "Off-the-shelf AI solutions provide rapid deployment but limited flexibility, while custom artificial intelligence models are tailored to your unique data and workflows for higher accuracy and competitive advantage. The Gravity AI Tech specializes in developing custom models that integrate seamlessly with your systems and align with your business goals.",
      },
      {
        q: "What is the difference between on-premises deployment and cloud-based AI services?",
        a: "On-premises artificial intelligence deployment gives you complete control over data security and compliance, whereas cloud-based AI services offer scalability, cost efficiency, and managed infrastructure. The Gravity AI Tech supports both deployment options and can help you evaluate which best meets your performance, budget, and privacy requirements.",
      },
      {
        q: "How do generative AI tools differ from agentic AI agents in business use?",
        a: "Generative AI and agentic AI agents are both types of artificial intelligence solutions, but they serve different purposes: generative AI creates content, images, or code based on learned patterns, while agentic AI agents autonomously execute tasks and make decisions on your behalf. The Gravity AI Tech builds both types of systems to ensure you pick the right tool for content creation or proactive workflow automation.",
      },
      {
        q: "Which offers better results for customer engagement: AI-powered calling systems or chatbots?",
        a: "AI-powered calling systems deliver natural, multilingual voice interactions that feel like speaking with a human, while chatbots provide instant text-based support around the clock. The Gravity AI Tech can help you compare engagement metrics and pilot both solutions to determine which delivers higher satisfaction and conversion rates for your audience.",
      },
      {
        q: "What factors should I consider when selecting an AI integration service provider?",
        a: "When evaluating artificial intelligence integration service providers, consider their experience with your industry, range of supported technologies (machine learning, NLP, computer vision), security protocols, and post-launch support offerings. The Gravity AI Tech offers end-to-end integration services and transparent project workflows to ensure smooth implementation and long-term success.",
      },
      {
        q: "Is it worth investing in AI strategy consulting rather than managing implementation internally?",
        a: "AI strategy consulting brings deep expertise in opportunity assessment, ROI forecasting, and data readiness analysis that can accelerate project success and reduce costly missteps. The Gravity AI Tech’s consulting services help you build a clear roadmap and governance structure, so your AI initiatives deliver measurable business value from day one.",
      },
    ],
  },
  {
    title: "Activation/Launch FAQ",
    faqs: [
      {
        q: "How long does it typically take to launch an AI solution?",
        a: "Launching an artificial intelligence solution usually spans four to twelve weeks, covering discovery, design, development, testing, and deployment phases. The Gravity AI Tech recommends building in extra time for user training and pilot testing to ensure a smooth go-live.",
      },
      {
        q: "What resources do I need before starting an AI project launch?",
        a: "Before launch, you’ll need clean, well-structured data, access to the necessary computing infrastructure (on-premises or cloud), a cross-functional team for integration and testing, and documentation for users. The Gravity AI Tech can help you assess readiness and secure the right resources.",
      },
      {
        q: "How can I ensure a smooth rollout of my new AI-powered system?",
        a: "A successful rollout hinges on thorough quality assurance, phased user onboarding, clear communication of changes, and real-time performance monitoring. The Gravity AI Tech provides dedicated support and training materials to guide your team through each stage and resolve issues quickly.",
      },
      {
        q: "What common pitfalls should I avoid during AI implementation?",
        a: "Avoid launching without sufficient data validation, neglecting user feedback loops, skipping performance monitoring, and underestimating change management. The Gravity AI Tech helps you preempt these challenges with robust testing protocols and ongoing optimization plans.",
      },
      {
        q: "What metrics should I track immediately after launch?",
        a: "Key metrics include system accuracy, response times, user adoption rates, error rates, and ROI against your business goals. The Gravity AI Tech equips you with dashboards and reporting tools to measure these indicators and drive continuous improvement.",
      },
      {
        q: "Is it possible to phase my AI rollout, and how?",
        a: "Yes—start with a pilot focused on a single use case or department, collect feedback and performance data, then scale gradually to other areas. The Gravity AI Tech designs phased deployment plans that minimize risk and maximize stakeholder buy-in.",
      },
    ],
  },
  {
    title: "Scaling & Growth FAQs",
    faqs: [
      {
        q: "How can I scale my AI-driven operations without sacrificing data quality?",
        a: "Use a modular architecture with automated data validation pipelines and staged deployments to maintain consistency as you grow. The Gravity AI Tech implements data governance frameworks and real-time monitoring to ensure your AI operations expand securely and accurately.",
      },
      {
        q: "What metrics should I track to ensure continued growth with my AI solutions?",
        a: "Focus on key performance indicators such as model accuracy, inference latency, system uptime, user adoption rates, and cost per prediction. The Gravity AI Tech provides customizable dashboards that surface these metrics in real time, helping you make data-driven decisions for sustained growth.",
      },
      {
        q: "When is the right time to expand my AI implementation to additional teams?",
        a: "Once your initial deployment consistently meets target benchmarks—like 95% accuracy and stable response times—and you’ve documented a repeatable rollout process, it’s time to scale. The Gravity AI Tech helps you evaluate readiness and plan phased expansions to minimize risk.",
      },
      {
        q: "How do successful companies maximize long-term value from their AI investments?",
        a: "They prioritize continuous model retraining, integrate user feedback loops, and align AI objectives with broader business goals. The Gravity AI Tech offers ongoing optimization services and best-practice guidance to ensure your AI delivers lasting impact.",
      },
      {
        q: "What are the most common pitfalls when scaling AI-powered systems?",
        a: "Common challenges include unmanaged data drift, insufficient infrastructure to handle peak loads, and lack of change management for end users. The Gravity AI Tech helps you set up alerting systems, scalable cloud architecture, and training programs to avoid these issues.",
      },
      {
        q: "Can I automate more of my workflows as my business grows?",
        a: "Yes—by identifying repeatable tasks and applying agentic AI combined with robotic process automation, you can automate everything from ticket routing to routine decision-making. The Gravity AI Tech designs scalable automation frameworks that evolve alongside your business.",
      },
    ],
  },
  {
    title: "Services FAQ",
    faqs: [
      {
        q: "What services do you offer?",
        a: "We provide a full suite of AI-powered solutions, including AI-powered calling systems, chatbots, generative AI applications, agentic AI agents, custom artificial intelligence model development, AI software development, strategy consulting, integration services, and cloud-based AI platforms. The Gravity AI Tech helps businesses automate tasks, analyze data, and innovate with emerging technologies.",
      },
      {
        q: "How does your service process work?",
        a: "Our proven process begins with discovery and planning to align on goals and data readiness, followed by design and development of tailored solutions. We then conduct thorough testing and quality assurance before launch, and continue with ongoing support and optimization. The Gravity AI Tech maintains transparent communication at every stage to ensure successful outcomes.",
      },
      {
        q: "Can you customize solutions for my specific business needs?",
        a: "Absolutely—our team specializes in building bespoke AI models and software that map to your unique workflows, data sets, and industry requirements. The Gravity AI Tech leverages machine learning, natural language processing, and deep learning to deliver solutions that outperform off-the-shelf alternatives.",
      },
      {
        q: "How long does it typically take to complete an AI project?",
        a: "Timelines vary by complexity, but most AI projects—from initial discovery to production launch—take between four and twelve weeks. This includes time for data preparation, development iterations, pilot testing, and user training. The Gravity AI Tech provides detailed milestones so you can track progress and stay on schedule.",
      },
      {
        q: "What pricing models are available and what value do they deliver?",
        a: "We offer flexible pricing options including fixed-price engagements, time-and-materials contracts, subscription plans, and usage-based cloud services. Each model is designed to align costs with measurable ROI, helping you invest in AI solutions that deliver efficiency gains, cost savings, and revenue growth. The Gravity AI Tech can recommend the best model based on your budget and goals.",
      },
      {
        q: "What outcomes can I expect from your AI solutions?",
        a: "Clients typically see improved operational efficiency, reduced manual workloads, faster decision-making through AI-driven insights, and enhanced customer engagement. With customizable dashboards and analytics, you’ll have real-time visibility into performance metrics. The Gravity AI Tech partners with you to ensure these outcomes translate into sustained business growth.",
      },
    ],
  },
  {
    title: "Training FAQ",
    faqs: [
      {
        q: "How long does the AI training course usually take?",
        a: "Our AI training programs range from half-day introductory workshops to multi-week intensive courses, depending on your team’s needs and the depth of material. The Gravity AI Tech works with you to define a schedule that fits your timelines and ensures participants gain practical skills without disrupting daily operations.",
      },
      {
        q: "What prerequisites do I need before starting AI training?",
        a: "Most courses require basic familiarity with data concepts and programming fundamentals—typically Python experience and understanding of data structures. The Gravity AI Tech provides pre-course materials and optional preparatory sessions to bring all participants up to speed on essential topics.",
      },
      {
        q: "What formats are available for the AI training sessions?",
        a: "Training is offered in live online classrooms, on-site instructor-led workshops, and self-paced e-learning modules. The Gravity AI Tech designs each format to deliver interactive content, hands-on exercises, and real-time feedback, so learners stay engaged and apply concepts immediately.",
      },
      {
        q: "What kind of support can I expect during the training?",
        a: "Participants receive direct access to expert instructors through Q&A sessions, office hours, and dedicated chat channels for troubleshooting. The Gravity AI Tech also provides supplemental resources, sample code repositories, and post-training follow-up calls to reinforce learning and address questions.",
      },
      {
        q: "What skills will my team gain by completing the training?",
        a: "By the end of the program, your team will understand machine learning fundamentals, data preprocessing techniques, model development and evaluation, and deployment best practices. The Gravity AI Tech ensures each learner can build, train, and deploy AI models relevant to your business challenges.",
      },
      {
        q: "How can I apply the training content directly to my business projects?",
        a: "Our courses incorporate real-world case studies and hands-on labs using your own data sets and use cases. The Gravity AI Tech collaborates with you to tailor exercises so that participants leave with concrete prototypes and workflows ready for integration into your existing systems.",
      },
    ],
  },
];

const FAQ = () => {
  const [open, setOpen] = useState({ section: 0, question: 0 });

  return (
    <div className="pb-10 pt-32 md:pt-40 min-h-screen bg-white">
      <div className="wrapper mx-auto max-w-6xl space-y-10">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <SubHeading heading="FAQ" className="text-gray-800" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-xl">
              Find answers to common questions about AI, our services, and how
              The Gravity AI Tech can help your business grow.
            </p>
            <ArrowButton
              to="/contact-us"
              className="bg-primary text-white border border-primary hover:bg-white hover:text-primary mt-4"
            >
              Have More Questions? Contact Us
            </ArrowButton>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={faqImg}
              alt="FAQ"
              className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm aspect-square object-cover"
            />
          </div>
        </div>
        <div className="space-y-12">
          {faqSections.map((section, sIdx) => (
            <div data-aos="fade-up" key={section.title}>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.faqs.map((faq, qIdx) => {
                  const isOpen =
                    open.section === sIdx && open.question === qIdx;
                  return (
                    <div
                      key={faq.q}
                      className="border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-sm"
                    >
                      <button
                        className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                        onClick={() =>
                          setOpen(
                            isOpen
                              ? { section: -1, question: -1 }
                              : { section: sIdx, question: qIdx }
                          )
                        }
                        aria-expanded={isOpen}
                      >
                        <span className="text-lg font-medium text-gray-800">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-6 h-6 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`px-5 pb-4 text-gray-700 text-base transition-all duration-300 ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden`}
                        style={{
                          transitionProperty: "max-height, opacity",
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
