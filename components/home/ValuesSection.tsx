import { Compass, Route, Layers3, Sunrise } from "lucide-react";
import { Container } from "@/components/layout/Container";
/** The .values-section and .values-grid rules in styles/pages/_home.scss handle colours and responsive columns. */
export function ValuesSection() {
  const values = [
    {
      title: "Discover",
      text: "Find better ways to organize and experience everyday life.",
      icon: Compass,
    },
    {
      title: "Plan",
      text: "Turn ideas and goals into clear, manageable plans.",
      icon: Route,
    },
    {
      title: "Organize",
      text: "Keep important information structured and easy to access.",
      icon: Layers3,
    },
    {
      title: "Experience",
      text: "Spend less time managing the details and more time enjoying them.",
      icon: Sunrise,
    },
  ];
  return (
    <section className="section values-section">
      <Container>
        <p className="eyebrow">OUR DIRECTION IS SIMPLE</p>
        <h2>Less friction. More living.</h2>
        <div className="values-grid">
          {values.map(({ title, text, icon: Icon }, index) => (
            <article key={title}>
              <div className="value-top">
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
