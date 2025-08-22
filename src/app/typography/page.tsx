import { H1, H2, H3, P } from "@/components/ui/typography";

export default function TypographyTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Typography System Test
          </h1>
          <p className="text-gray-600 mt-2">
            Testing all typography components across different contexts
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* H1 Hero Titles Section */}
        <section className="mb-16">
          <div className="bg-[#1f1f1f] rounded-lg p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                H1 - Hero Titles (Dark Background)
              </h2>
              <H1>
                Open The <span style={{ color: "#8ABF37" }}>Box</span> – Le N°1
                de la location d&apos;espaces professionnels au Togo
              </H1>
              <H1>
                Des espaces <span style={{ color: "#8ABF37" }}>équipés</span> et
                100% opérationnels
              </H1>
              <H1>
                Visite <span style={{ color: "#8ABF37" }}>gratuite</span>, sur
                rendez-vous 7j/7
              </H1>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">H1 Specifications:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Mobile:</strong> text-4xl (36px), leading-[44px],
                tracking-[-2.1px]
              </li>
              <li>
                <strong>Desktop:</strong> text-6xl (60px), leading-[68px],
                tracking-[-2.1px]
              </li>
              <li>
                <strong>Color:</strong> text-white (default), font-semibold
              </li>
              <li>
                <strong>Usage:</strong> Hero sections, main page titles
              </li>
            </ul>
          </div>
        </section>

        {/* H2 Section Titles */}
        <section className="mb-16">
          <div className="bg-white rounded-lg border p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                H2 - Section Titles (Light Background)
              </h2>
              <H2>Des espaces adaptés à chaque usage</H2>
              <H2>Contact & FAQ</H2>
              <H2>Des tarifs transparents et accessibles</H2>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">H2 Specifications:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Mobile:</strong> text-3xl (30px), lineHeight: "26px",
                letterSpacing: "-1.6px"
              </li>
              <li>
                <strong>Desktop:</strong> text-5xl (48px), lineHeight: "40px",
                letterSpacing: "-1.6px"
              </li>
              <li>
                <strong>Color:</strong> text-gray-900, fontWeight: 600
              </li>
              <li>
                <strong>Usage:</strong> Main section headings
              </li>
            </ul>
          </div>
        </section>

        {/* H3 Subsection Titles */}
        <section className="mb-16">
          <div className="bg-white rounded-lg border p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                H3 - Subsection Titles
              </h2>
              <H3>Vous organisez une réunion, une formation, un événement ?</H3>
              <H3>Bureaux privés</H3>
              <H3>Salles de conférence</H3>
              <H3 className="text-blue-600">Custom colored H3</H3>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">H3 Specifications:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Mobile:</strong> text-xl (20px), leading-6 (24px),
                tracking-[-0.5px]
              </li>
              <li>
                <strong>Desktop:</strong> text-2xl (24px), leading-8 (32px),
                tracking-[-0.5px]
              </li>
              <li>
                <strong>Color:</strong> text-gray-900, font-semibold
              </li>
              <li>
                <strong>Usage:</strong> Subsection headings, feature titles
              </li>
            </ul>
          </div>
        </section>

        {/* P Body Text */}
        <section className="mb-16">
          <div className="bg-white rounded-lg border p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                P - Body Text
              </h2>

              <P className="mb-6">
                Besoin d&apos;un bureau privé ou d&apos;une salle pour vos
                événements ? Open The Box (OTB) vous aide à trouver
                l&apos;espace parfait, selon votre activité, vos horaires et
                votre budget.
              </P>

              <P className="mb-6">
                Open The Box (OTB) vous montre toutes les options d&apos;espaces
                disponibles, vous permet de réserver en 3 clics et vous
                accueille dans les meilleures conditions.
              </P>

              <P className="text-center text-blue-600">
                Custom styled paragraph with center alignment and blue color.
              </P>

              <P className="text-xl font-semibold mt-6">
                Larger paragraph with custom font weight override.
              </P>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-2">P Specifications:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <strong>Size:</strong> text-lg (18px)
              </li>
              <li>
                <strong>Line Height:</strong> 30px
              </li>
              <li>
                <strong>Letter Spacing:</strong> -1px
              </li>
              <li>
                <strong>Color:</strong> text-gray-600 (default)
              </li>
              <li>
                <strong>Usage:</strong> Body text, descriptions, content
              </li>
            </ul>
          </div>
        </section>

        {/* Combined Usage Examples */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Combined Usage Examples
            </h2>

            {/* Example 1: Standard Section */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <H2 className="text-center">Nos Services</H2>
              <P className="text-center max-w-3xl mx-auto mb-8">
                Découvrez notre gamme complète de services pour répondre à tous
                vos besoins professionnels.
              </P>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <H3>Location d&apos;espaces</H3>
                  <P>
                    Bureaux, salles de conférence et espaces de réception
                    disponibles à la location pour tous vos événements
                    professionnels.
                  </P>
                </div>
                <div>
                  <H3>Domiciliation</H3>
                  <P>
                    Obtenez une adresse professionnelle prestigieuse pour votre
                    entreprise avec nos services de domiciliation.
                  </P>
                </div>
              </div>
            </div>

            {/* Example 2: Dark Hero-style Section */}
            <div className="bg-[#1f1f1f] rounded-lg p-8">
              <div className="text-center max-w-4xl mx-auto">
                <H1>
                  Transformez votre{" "}
                  <span style={{ color: "#8ABF37" }}>vision</span> en réalité
                </H1>
                <P className="text-xl text-white/90">
                  Avec Open The Box, donnez vie à vos projets professionnels
                  dans un environnement moderne et équipé.
                </P>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Behavior */}
        <section className="mb-16">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Responsive Behavior
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Mobile (&lt; 768px):</h3>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• H1: 36px with 44px line height</li>
                  <li>• H2: 30px with 26px line height</li>
                  <li>• H3: 20px with 24px line height</li>
                  <li>• P: 18px with 30px line height</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Desktop (≥ 768px):</h3>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• H1: 60px with 68px line height</li>
                  <li>• H2: 48px with 40px line height</li>
                  <li>• H3: 24px with 32px line height</li>
                  <li>• P: 18px with 30px line height</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section>
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              How to Use
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-blue-800">Import:</h3>
                <code className="bg-blue-100 px-2 py-1 rounded text-blue-900">
                  import &#123; H1, H2, H3, P &#125; from
                  &quot;@/components/ui/typography&quot;;
                </code>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">Basic Usage:</h3>
                <pre className="bg-blue-100 p-3 rounded text-blue-900 overflow-x-auto">
                  {`<H1>Hero Title</H1>
<H2>Section Title</H2>
<H3>Subsection Title</H3>
<P>Body text content</P>`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">
                  With Custom Classes:
                </h3>
                <pre className="bg-blue-100 p-3 rounded text-blue-900 overflow-x-auto">
                  {`<H2 className="text-center text-blue-600">Custom Section</H2>
<P className="text-xl font-semibold">Large emphasized text</P>`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
