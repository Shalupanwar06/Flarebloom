"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Info,
  Phone,
  Mail,
  Globe,
  MapPin,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface OrganizationContact {
  name: string;
  type: string;
  distance?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
}

export default function ResultsPage() {
  const [expanded, setExpanded] = useState(false);

  // Example data - in a real app this would come from API/database
  // const assessmentResults = {
  //   patientName: "John Doe",
  //   date: "March 9, 2025",
  //   imageUrl: "/placeholder.svg?height=280&width=280",
  //   psoriasisType: "Plaque Psoriasis",
  //   severity: 65, // percentage
  //   severityText: "Moderate",
  //   description:
  //     "Plaque psoriasis is the most common form of psoriasis. It appears as raised, inflamed, red patches covered with a silvery white buildup of dead skin cells. These patches most commonly appear on the scalp, knees, elbows and lower back.",
  //   commonSymptoms: [
  //     "Raised, inflamed, red patches of skin",
  //     "Silvery white scales or plaques on the red patches",
  //     "Dry skin that may crack and bleed",
  //     "Itching and burning sensation",
  //     "Thick, pitted nails",
  //     "Painful, swollen joints",
  //   ],
  //   treatments: [
  //     {
  //       category: "Topical Treatments",
  //       options: [
  //         "Corticosteroids",
  //         "Vitamin D analogues (e.g., calcipotriene)",
  //         "Retinoids (e.g., tazarotene)",
  //         "Calcineurin inhibitors",
  //         "Salicylic acid",
  //         "Coal tar",
  //       ],
  //     },
  //     {
  //       category: "Light Therapy",
  //       options: [
  //         "UVB phototherapy",
  //         "Psoralen plus ultraviolet A (PUVA)",
  //         "Excimer laser",
  //       ],
  //     },
  //     {
  //       category: "Systemic Medications",
  //       options: [
  //         "Methotrexate",
  //         "Cyclosporine",
  //         "Biologics (e.g., adalimumab, etanercept, infliximab)",
  //         "Oral retinoids",
  //         "Apremilast (Otezla)",
  //       ],
  //     },
  //   ],
  //   organizations: [
  //     {
  //       name: "National Psoriasis Foundation",
  //       type: "Support Organization",
  //       website: "www.psoriasis.org",
  //       phone: "800-723-9166",
  //       email: "info@psoriasis.org",
  //     },
  //     {
  //       name: "Memorial Dermatology Center",
  //       type: "Local Specialist",
  //       distance: "2.3 miles",
  //       phone: "555-123-4567",
  //       website: "www.memorialdermatology.org",
  //       address: "123 Medical Center Dr",
  //     },
  //     {
  //       name: "University Medical Research",
  //       type: "Clinical Trial",
  //       distance: "5.7 miles",
  //       email: "trials@universitymedical.edu",
  //       website: "www.universitymedical.edu/trials",
  //       address: "500 University Blvd",
  //     },
  //   ],
  // };

  const assessmentResults = {
    patientName: "",
    isPsoriasis: true, // Based on the description, assuming it's psoriasis
    date: "March 9, 2025",
    // imageUrl: "/placeholder.svg?height=280&width=280", // Replace with actual image URL
    imageUrl: "/psoriasis_sample.jpeg?height=280&width=280", // Replace with actual image URL
    psoriasisType: "Plaque Psoriasis",
    severity: 65, // Estimated severity in percentage
    severityText: "Moderate",
    description:
      "Plaque psoriasis is the most common form of psoriasis. It appears as raised, inflamed, red patches covered with a silvery white buildup of dead skin cells. These patches most commonly appear on the scalp, elbows, and face.",
    affectedAreas: ["Scalp", "Face", "Elbows"],
    skinTone: "Medium 3/10",
    location: "San Francisco, US",
    ageGroup: "31-45",
    commonSymptoms: [
      "Raised, inflamed, red patches of skin",
      "Silvery white scales or plaques on the red patches",
      "Dry skin that may crack and bleed",
      "Itching and burning sensation",
      "Thick, pitted nails",
      "Painful, swollen joints",
    ],
    treatments: [
      {
        category: "Topical Treatments",
        options: [
          "Corticosteroids",
          "Vitamin D analogues (e.g., calcipotriene)",
          "Retinoids (e.g., tazarotene)",
          "Calcineurin inhibitors",
          "Salicylic acid",
          "Coal tar",
        ],
      },
      {
        category: "Light Therapy",
        options: [
          "UVB phototherapy",
          "Psoralen plus ultraviolet A (PUVA)",
          "Excimer laser",
        ],
      },
      {
        category: "Systemic Medications",
        options: [
          "Methotrexate",
          "Cyclosporine",
          "Biologics (e.g., adalimumab, etanercept, infliximab)",
          "Oral retinoids",
          "Apremilast (Otezla)",
        ],
      },
    ],
    organizations: [
      {
        name: "National Psoriasis Foundation",
        type: "Support Organization",
        website: "www.psoriasis.org",
        phone: "800-723-9166",
        email: "info@psoriasis.org",
      },
      {
        name: "San Francisco Dermatology Center",
        type: "Local Specialist",
        distance: "1.8 miles",
        phone: "415-555-7890",
        website: "www.sfdermatology.com",
        address: "200 Market St, San Francisco, CA",
      },
      {
        name: "UCSF Medical Research",
        type: "Clinical Trial",
        distance: "3.2 miles",
        email: "trials@ucsfmedical.edu",
        website: "www.ucsfmedical.edu/trials",
        address: "505 Parnassus Ave, San Francisco, CA",
      },
    ],
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div>
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary">FlareBloom</h1>
            <p className="text-muted-foreground">
              AI-Powered Psoriasis Assessment
            </p>
          </div>

          {/* Patient Info */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Assessment Results</CardTitle>
              <CardDescription>
                {assessmentResults.patientName} • {assessmentResults.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Psoriasis Type:</span>
                    <Badge
                      variant="outline"
                      className="ml-2 bg-primary/10 text-primary"
                    >
                      {assessmentResults.psoriasisType}
                    </Badge>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Severity:</span>
                      <span className="text-foreground font-medium">
                        {assessmentResults.severityText}
                      </span>
                    </div>
                    <Progress
                      value={assessmentResults.severity}
                      className="h-2"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {assessmentResults.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-[280px] w-[280px] rounded-lg overflow-hidden border border-border">
                  <Image
                    src={assessmentResults.imageUrl || "/placeholder.svg"}
                    alt="Uploaded skin image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Analyzed image
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" />
                About {assessmentResults.psoriasisType}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>{assessmentResults.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Common Symptoms:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {assessmentResults.commonSymptoms.map((symptom, index) => (
                      <li key={index} className="text-foreground">
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Options */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Recommended Treatments</CardTitle>
              <CardDescription>
                Treatment options vary based on severity and individual factors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {assessmentResults.treatments.map((treatment, index) => (
                  <AccordionItem key={index} value={`treatment-${index}`}>
                    <AccordionTrigger>{treatment.category}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-1">
                        {treatment.options.map((option, optIdx) => (
                          <li key={optIdx}>{option}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-4 flex items-center p-3 bg-amber-50 dark:bg-amber-950/30 rounded-md">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Always consult with a dermatologist or healthcare provider
                  before starting any treatment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Organizations and Trials */}
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Support & Resources</CardTitle>
              <CardDescription>
                Organizations, specialists, and clinical trials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {(expanded
                  ? assessmentResults.organizations
                  : assessmentResults.organizations.slice(0, 2)
                ).map((org, index) => (
                  <Card
                    key={index}
                    className="border border-border bg-background/50"
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">{org.name}</CardTitle>
                      <div className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                          {org.type}
                        </Badge>
                        {org.distance && (
                          <span className="text-xs text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" /> {org.distance}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="grid grid-cols-1 gap-2">
                        {org.phone && (
                          <div className="flex items-center text-sm">
                            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                            <a
                              href={`tel:${org.phone}`}
                              className="hover:text-primary"
                            >
                              {org.phone}
                            </a>
                          </div>
                        )}
                        {org.email && (
                          <div className="flex items-center text-sm">
                            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                            <a
                              href={`mailto:${org.email}`}
                              className="hover:text-primary"
                            >
                              {org.email}
                            </a>
                          </div>
                        )}
                        {org.website && (
                          <div className="flex items-center text-sm">
                            <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                            <a
                              href={`https://${org.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary flex items-center"
                            >
                              {org.website}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        )}
                        {org.address && (
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{org.address}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {assessmentResults.organizations.length > 2 && (
                <Button
                  variant="ghost"
                  className="w-full mt-4"
                  onClick={toggleExpand}
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" />
                      Show More ({assessmentResults.organizations.length -
                        2}{" "}
                      more)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground mt-8 mb-4">
            <p>
              This assessment is for informational purposes only and does not
              constitute medical advice.
            </p>
            <p>© {new Date().getFullYear()} FlareBloom. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
