import { Reveal } from "./Reveal.jsx";
import { Eyebrow, Heading, Lead } from "../ui/index.js";

/** Shared eyebrow + title + optional intro for each section. */
export function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <Reveal as="div">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal as="div" delay={60}>
        <Heading as="h2" id={id}>
          {title}
        </Heading>
      </Reveal>
      {intro && (
        <Reveal as="div" delay={120}>
          <Lead className="mt-4">{intro}</Lead>
        </Reveal>
      )}
    </div>
  );
}
