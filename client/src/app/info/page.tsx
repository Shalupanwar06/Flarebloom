import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  InfoIcon,
  AlertCircle,
  BookOpen,
  Stethoscope,
  Heart,
  Lightbulb,
  Users,
} from "lucide-react";
import Balancer from "react-wrap-balancer";

export default function PsoriasisGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Psoriasis: An In-Depth Guide
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A comprehensive resource for understanding, managing, and living
              with psoriasis
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                What is Psoriasis?
              </h2>
              <p className="text-muted-foreground">
                <strong>Psoriasis</strong> is a chronic autoimmune skin
                condition that causes
                <strong> raised, inflamed patches</strong> on the skin covered
                with silvery scales. It affects roughly <strong>2–4%</strong> of
                people worldwide and often follows a pattern of flare-ups and
                remissions.
              </p>
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Important to know</AlertTitle>
                <AlertDescription>
                  <Balancer>
                    Psoriasis is not contagious, but it can significantly impact
                    a person's quality of life.
                  </Balancer>
                </AlertDescription>
              </Alert>
              <p>
                It is an <strong>immune-mediated disease</strong> in which the
                body's immune system triggers skin cells to multiply too
                quickly, leading to thick, scaly skin lesions. The exact cause
                is not fully understood, but a combination of
                <strong> genetic predisposition</strong> and{" "}
                <strong>environmental triggers</strong> is known to play a role.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Illustration of psoriasis on skin"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <Tabs defaultValue="types" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="impact">Daily Impact</TabsTrigger>
            <TabsTrigger value="treatment">Treatment</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="space-y-6">
            <h3 className="text-2xl font-bold mt-6">Types of Psoriasis</h3>
            <p>
              Psoriasis comes in several forms, each with distinct
              characteristics:
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Plaque Psoriasis</CardTitle>
                  <CardDescription>The most common type</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Causes raised, red patches of skin covered by silvery-white
                    scales. Typically appears on the scalp, elbows, knees, or
                    lower back in a symmetrical pattern.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guttate Psoriasis</CardTitle>
                  <CardDescription>
                    Often develops in children or young adults
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Appears as many small, red "drop-like" spots on the skin.
                    Can be triggered by a streptococcal throat infection (strep
                    throat).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inverse Psoriasis</CardTitle>
                  <CardDescription>Affects body folds</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Forms smooth, shiny areas of red, inflamed skin in body
                    folds (such as under the arms, under the breasts, or in the
                    groin).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pustular Psoriasis</CardTitle>
                  <CardDescription>Can develop quickly</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Characterized by pus-filled bumps (pustules) surrounded by
                    red skin. Can be localized or cover most of the body in rare
                    cases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Erythrodermic Psoriasis</CardTitle>
                  <CardDescription>Rare but severe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Can cover nearly the entire body with a red, peeling rash.
                    Skin appears burned over large areas. Can be
                    life-threatening.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-6">
            <h3 className="text-2xl font-bold mt-6">Common Symptoms</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p>
                  Regardless of type, psoriasis symptoms result from rapid skin
                  cell buildup and inflammation:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    Patches of thick, red skin with overlying silvery-white
                    scales
                  </li>
                  <li>Itching, burning, or soreness</li>
                  <li>Dry, cracked skin that may bleed</li>
                  <li>Thickened or pitted nails (if nails are affected)</li>
                  <li>
                    Swollen and stiff joints (if psoriatic arthritis develops)
                  </li>
                </ul>

                <Alert className="mt-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Up to 30% of people with psoriasis develop psoriatic
                    arthritis, an inflammatory joint condition.
                  </AlertDescription>
                </Alert>
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Common psoriasis symptoms"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4">Diagnosis</h4>
              <p>
                Diagnosing psoriasis usually involves a physical examination of
                the skin, scalp, and nails by a healthcare provider. A
                dermatologist can often recognize psoriasis by its appearance
                and distribution of lesions. In unclear cases, a skin biopsy may
                be done to confirm the diagnosis and rule out other disorders.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <h3 className="text-2xl font-bold mt-6">Impact on Daily Life</h3>
            <p>
              Psoriasis is more than just a skin rash – it can have far-reaching
              effects on daily living. The visibility and chronic nature of the
              disease mean it can affect physical comfort, emotional well-being,
              social interactions, and even finances.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="physical">
                <AccordionTrigger>
                  Physical Effects and Discomfort
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    During active psoriasis flares, the physical discomfort can
                    be significant. Lesions often itch intensely or feel
                    painful, which can interfere with concentration and sleep.
                    Skin in affected areas may crack and bleed, causing soreness
                    and risking infection.
                  </p>
                  <p className="mt-2">
                    Tasks like showering or getting dressed can become
                    challenging if plaques cover sensitive areas. When psoriatic
                    arthritis accompanies psoriasis, individuals may also cope
                    with joint pain and stiffness, limiting their mobility or
                    ability to perform daily tasks.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="psychological">
                <AccordionTrigger>
                  Psychological and Emotional Toll
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Living with psoriasis can take a heavy psychological toll.
                    Because the lesions are often visible, many people
                    experience feelings of self-consciousness, embarrassment, or
                    shame about their skin.
                  </p>
                  <p className="mt-2">
                    Psoriasis has been linked to higher rates of mental health
                    conditions such as anxiety and depression, due both to the
                    stress of managing a chronic illness and to social stigma.
                    In fact, depression is reported in up to 25% of patients
                    with psoriasis.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social">
                <AccordionTrigger>Social Challenges</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Because of visible skin patches, people with psoriasis may
                    face stigma and misunderstanding. Many observers mistakenly
                    believe psoriasis lesions are due to poor hygiene or are
                    contagious, causing them to keep distance, stare, or even
                    make hurtful comments.
                  </p>
                  <p className="mt-2">
                    This ignorance can lead to avoidance of social activities
                    like swimming, sports, or wearing clothes that reveal the
                    skin. Individuals might feel uncomfortable dating or forming
                    new relationships, fearing rejection due to their condition.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="economic">
                <AccordionTrigger>Economic Burden</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Managing psoriasis can be financially costly for patients
                    and society. There is no cure, so long-term treatment and
                    care are required, adding up in cost.
                  </p>
                  <p className="mt-2">
                    For moderate to severe psoriasis, biologic drugs have become
                    a standard treatment – but these medications are extremely
                    expensive, often costing tens of thousands of dollars per
                    year.
                  </p>
                  <p className="mt-2">
                    Beyond direct medical costs, psoriasis can also impact work
                    life and income. During severe flares or due to ongoing
                    symptoms, people might need to take sick leave or even avoid
                    certain careers.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="treatment" className="space-y-6">
            <h3 className="text-2xl font-bold mt-6">Treatment Options</h3>
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Important to know</AlertTitle>
              <AlertDescription>
                While there is currently no cure for psoriasis, there are many
                treatment options available to manage symptoms and induce
                remission of the skin lesions.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5" />
                    Conventional Medical Treatments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <strong>Topical treatments:</strong> Creams, ointments,
                      foams, or shampoos (corticosteroids, vitamin D analogues,
                      retinoids, coal tar, salicylic acid)
                    </li>
                    <li>
                      <strong>Phototherapy:</strong> Controlled exposure to
                      specific wavelengths of ultraviolet light
                    </li>
                    <li>
                      <strong>Systemic medications:</strong> Methotrexate,
                      cyclosporine, oral retinoids
                    </li>
                    <li>
                      <strong>Biologic therapies:</strong> Target specific parts
                      of the immune system (TNF-alpha, IL-17, IL-23 inhibitors)
                    </li>
                    <li>
                      <strong>Newer oral medications:</strong> PDE4 inhibitors,
                      TYK2 inhibitors
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Emerging Research and New Therapies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Research into psoriasis is very active, with new treatments
                    continually being studied:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      Small-molecule oral drugs that precisely target immune
                      signals
                    </li>
                    <li>
                      New biologic medications targeting multiple inflammatory
                      proteins
                    </li>
                    <li>Topical Janus kinase (JAK) inhibitors</li>
                    <li>
                      Personalized medicine approaches based on genetic or
                      immune profiling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Alternative and Holistic Approaches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <strong>Diet and nutrition:</strong> Mediterranean diet,
                      anti-inflammatory foods, weight management
                    </li>
                    <li>
                      <strong>Supplements:</strong> Omega-3 fatty acids, vitamin
                      D, turmeric (curcumin), probiotics
                    </li>
                    <li>
                      <strong>Stress management:</strong> Meditation, yoga,
                      deep-breathing exercises, tai chi
                    </li>
                    <li>
                      <strong>Other approaches:</strong> Balneotherapy
                      (therapeutic bathing), botanical skincare products
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lifestyle Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <strong>Skincare:</strong> Keep skin well-moisturized, use
                      mild cleansers, avoid harsh products
                    </li>
                    <li>
                      <strong>Identify triggers:</strong> Stress, smoking,
                      alcohol, weather changes, medications
                    </li>
                    <li>
                      <strong>Healthy habits:</strong> Regular exercise,
                      adequate sleep, balanced diet
                    </li>
                    <li>
                      <strong>Sunlight:</strong> Controlled exposure to natural
                      sunlight (avoiding sunburn)
                    </li>
                    <li>
                      <strong>Clothing:</strong> Wear comfortable, soft fabrics
                      that don't irritate skin
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <h3 className="text-2xl font-bold mt-6">Support and Resources</h3>
            <p>
              Living with psoriasis can be challenging, but support is
              available. Education and community can make a big difference in
              coping with this condition.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Patient Advocacy Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect with organizations dedicated to helping people with
                    psoriasis:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>National Psoriasis Foundation (NPF)</li>
                    <li>
                      International Federation of Psoriasis Associations (IFPA)
                    </li>
                    <li>Local support groups and online communities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coping Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    <li>Educate yourself about psoriasis</li>
                    <li>Develop a consistent skincare routine</li>
                    <li>Use itch and pain management techniques</li>
                    <li>Set realistic expectations and goals</li>
                    <li>Communicate openly with loved ones</li>
                    <li>Protect your mental health</li>
                    <li>Seek financial assistance if needed</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Stay Informed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Keep up with the latest developments in psoriasis research:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>Follow reputable medical websites</li>
                    <li>Join patient forums and discussion groups</li>
                    <li>Attend webinars and patient conferences</li>
                    <li>Ask your dermatologist about new treatments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="contagious">
              <AccordionTrigger>Is psoriasis contagious?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No, psoriasis is not contagious. You cannot "catch" psoriasis
                  from someone who has it. It is an autoimmune condition caused
                  by genetic and environmental factors.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cure">
              <AccordionTrigger>
                Is there a cure for psoriasis?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Currently, there is no cure for psoriasis. However, there are
                  many effective treatments that can help manage symptoms and
                  even achieve complete clearance of skin lesions for periods of
                  time.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="diet">
              <AccordionTrigger>Can diet affect psoriasis?</AccordionTrigger>
              <AccordionContent>
                <p>
                  While no specific diet cures psoriasis, some dietary changes
                  may help reduce inflammation and improve symptoms. Weight loss
                  (if overweight) has been shown to improve psoriasis. Some
                  people report benefits from following anti-inflammatory diets
                  like the Mediterranean diet or identifying and eliminating
                  food sensitivities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="children">
              <AccordionTrigger>Can children get psoriasis?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, psoriasis can affect people of all ages, including
                  children and infants. About one-third of psoriasis cases begin
                  in childhood. Guttate psoriasis is particularly common in
                  children and young adults, often triggered by strep throat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pregnancy">
              <AccordionTrigger>
                How does pregnancy affect psoriasis?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Pregnancy affects psoriasis differently for each woman. About
                  40-60% of women experience improvement during pregnancy, while
                  about 10-20% worsen. After childbirth, many women experience a
                  flare. It's important to work with both a dermatologist and
                  obstetrician to manage psoriasis during pregnancy, as some
                  treatments are not safe for use during pregnancy.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            This information is for educational purposes only and is not
            intended as medical advice. Always consult with a healthcare
            provider for diagnosis and treatment of psoriasis.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 9, 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
