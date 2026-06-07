import { useState } from "react";
import {
  Button,
  Badge,
  Card,
  Container,
  Input,
  Display,
  Heading,
  Subheading,
  Title,
  Lead,
  Text,
  Eyebrow,
} from "./ui/index.js";

/**
 * Component gallery — living documentation for the studio starter kit.
 * Reachable at `?gallery` (wired in main.jsx). Each section demonstrates a
 * primitive, its variants, and its states so design + eng share one source.
 */

function Section({ title, description, children }) {
  return (
    <section className="border-t border-white/10 py-16">
      <Subheading>{title}</Subheading>
      {description && <Lead className="mt-3 max-w-2xl">{description}</Lead>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

/** Small labelled cell so each example states what it's showing. */
function Demo({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  );
}

const SWATCHES = [
  ["canvas", "Canvas"],
  ["surface", "Surface"],
  ["surface-2", "Surface 2"],
  ["border", "Border"],
  ["accent", "Accent"],
  ["accent-strong", "Accent strong"],
  ["ink", "Ink"],
  ["ink-muted", "Ink muted"],
  ["ink-faint", "Ink faint"],
];

export function Gallery() {
  const [showError, setShowError] = useState(false);

  return (
    <div className="min-h-screen pb-24">
      <Container size="lg" as="main" className="pt-20">
        <header>
          <Badge dot>Studio starter kit</Badge>
          <Display as="h1" className="mt-6">
            Component gallery
          </Display>
          <Lead className="mt-4 max-w-2xl">
            The reusable primitives every client project starts from. All
            colours, spacing, radii, and type are driven from the tokens in{" "}
            <code className="text-ink">src/index.css</code>. Edit tokens once;
            everything below updates.
          </Lead>
          <div className="mt-6">
            <Button as="a" href="/" variant="secondary" size="sm">
              ← Back to site
            </Button>
          </div>
        </header>

        {/* Tokens / colour */}
        <Section
          title="Colour tokens"
          description="The single source of truth. Each maps to a --color-* CSS variable and a Tailwind utility (bg-accent, text-ink-muted, …)."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SWATCHES.map(([token, name]) => (
              <div key={token} className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-lg border border-white/10"
                  style={{ backgroundColor: `var(--color-${token})` }}
                />
                <div>
                  <div className="text-sm text-ink">{name}</div>
                  <code className="text-xs text-ink-faint">--color-{token}</code>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section
          title="Typography"
          description="A fixed type ramp. Render any level as a different tag with `as` to keep the heading outline correct."
        >
          <div className="flex flex-col gap-5">
            <Eyebrow>Eyebrow — section label</Eyebrow>
            <Display as="p">Display — hero scale</Display>
            <Heading as="p">Heading — page / section</Heading>
            <Subheading as="p">Subheading — sub-section</Subheading>
            <Title as="p">Title — card heading</Title>
            <Lead as="p">
              Lead — the introductory paragraph that sits under a heading and
              sets up the section.
            </Lead>
            <Text>
              Text — default body copy. Comfortable measure, muted ink, relaxed
              line height for long-form reading.
            </Text>
          </div>
        </Section>

        {/* Buttons */}
        <Section
          title="Button"
          description="Variants × sizes. Renders as <button> by default, or `as='a'` for link CTAs."
        >
          <div className="flex flex-col gap-8">
            <Demo label="Variants">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </Demo>
            <Demo label="Sizes">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Demo>
            <Demo label="States">
              <Button disabled>Disabled</Button>
              <Button as="a" href="#buttons">
                As link
              </Button>
            </Demo>
            <Demo label="Full width">
              <div className="w-full max-w-sm">
                <Button fullWidth>Full-width button</Button>
              </div>
            </Demo>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badge" description="Pill label, optionally with the accent status dot.">
          <Demo label="Variants">
            <Badge>Plain</Badge>
            <Badge dot>With dot</Badge>
          </Demo>
        </Section>

        {/* Cards */}
        <Section
          title="Card"
          description="The default content surface. `interactive` adds a hover lift; `padding` and `as` are configurable."
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <Card>
              <Title>Static card</Title>
              <Text className="mt-2">A plain bordered surface for content.</Text>
            </Card>
            <Card interactive>
              <Title>Interactive</Title>
              <Text className="mt-2">Hover me — border and background lift.</Text>
            </Card>
            <Card padding="lg" className="bg-white/[0.05]">
              <Title>Custom</Title>
              <Text className="mt-2">Padding lg + an extra class.</Text>
            </Card>
          </div>
        </Section>

        {/* Inputs */}
        <Section
          title="Input"
          description="Labelled fields with built-in id wiring, hints, and accessible error states (aria-invalid / aria-describedby)."
        >
          <form
            className="grid max-w-xl gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setShowError((v) => !v);
            }}
          >
            <Input label="Name" name="name" placeholder="Jane Doe" autoComplete="name" />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              hint="We'll only use this to reply."
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              error={showError ? "Must be at least 8 characters." : undefined}
            />
            <Input as="textarea" label="Message" name="message" rows={3} placeholder="A few lines…" />
            <Input as="select" label="Budget" name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option>Under £5k</option>
              <option>£5k–£15k</option>
              <option>£15k+</option>
            </Input>
            <Button type="submit" size="sm" className="w-fit">
              Toggle error state
            </Button>
          </form>
        </Section>

        {/* Container / grid */}
        <Section
          title="Container & grid"
          description="Container centres content at a max-width with consistent gutters. Sizes: sm / md / lg / xl."
        >
          <div className="flex flex-col gap-3">
            {["sm", "md", "lg", "xl"].map((s) => (
              <div key={s} className="rounded-lg bg-white/[0.03] py-2">
                <Container size={s}>
                  <div className="rounded-md border border-dashed border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-center text-sm text-ink-muted">
                    Container size="{s}"
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
}
