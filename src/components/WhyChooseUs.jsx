import "../styles/WhyChooseUs.css";

const reasons = [
	{
		icon: "●",
		title: "Expert Faculty Mentors",
		description:
			"Certified teachers with deep subject expertise, continuous upskilling, and a focus on individual student growth.",
	},
	{
		icon: "■",
		title: "Proven Board Results",
		description:
			"Consistent 95%+ success rate with toppers across grades, backed by data-driven teaching and targeted remediation.",
	},
	{
		icon: "▲",
		title: "Discipline With Values",
		description:
			"Structured mentorship that builds integrity, respect, and responsibility alongside academic excellence.",
	},
	{
		icon: "◆",
		title: "Future-Ready Facilities",
		description:
			"STEM labs, digital classrooms, rich library resources, and sports arenas that encourage practical learning.",
	},
	{
		icon: "▩",
		title: "Personalized Guidance",
		description:
			"Small-group support, counseling, and career guidance to help every learner chart a confident path forward.",
	},
	{
		icon: "✦",
		title: "Holistic Exposure",
		description:
			"Clubs, cultural events, sports, and community programs that nurture well-rounded, socially aware citizens.",
	},
];

function WhyChooseUs() {
	return (
		<section className="why-choose-section">
			<div className="why-choose-header">
				<h2>Why Choose Us?</h2>
				<p className="why-choose-subtitle">
					Excellence in academics, character, and future-ready skills
				</p>
			</div>

			<div className="why-choose-grid">
				{reasons.map((reason, i) => (
					<div key={i} className="why-card">
						<div className="why-icon">{reason.icon}</div>
						<h3>{reason.title}</h3>
						<p>{reason.description}</p>
						<div className="why-card-accent"></div>
					</div>
				))}
			</div>

			<div className="why-choose-highlight">
				<p>
					At Arya English High School & Junior College, we deliver rigorous academics,
					values-driven guidance, and vibrant co-curricular experiences so every student
					can discover strengths, build confidence, and step forward with purpose.
				</p>
			</div>
		</section>
	);
}
export default WhyChooseUs;
