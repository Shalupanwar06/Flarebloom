"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export default function AssessmentForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [geography, setGeography] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [skinColor, setSkinColor] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [otherArea, setOtherArea] = useState("");

  const affectedAreasList = [
    "Scalp",
    "Face",
    "Neck",
    "Elbows",
    "Knees",
    "Hands",
    "Feet",
    "Back",
    "Chest",
    "Stomach",
    "Arms",
    "Legs",
    "Nails",
  ];

  const skinTones = [
    {
      value: "skin-1",
      gradient: "bg-[radial-gradient(circle,#f8e0d6,#e6c7b5)]",
    },
    {
      value: "skin-2",
      gradient: "bg-[radial-gradient(circle,#f7e6cd,#e5cfae)]",
    },
    {
      value: "skin-3",
      gradient: "bg-[radial-gradient(circle,#f5dcb8,#dbb98f)]",
    },
    {
      value: "skin-4",
      gradient: "bg-[radial-gradient(circle,#d5b894,#b8926d)]",
    },
    {
      value: "skin-5",
      gradient: "bg-[radial-gradient(circle,#b28a64,#9b7048)]",
    },
    {
      value: "skin-6",
      gradient: "bg-[radial-gradient(circle,#906945,#765339)]",
    },
    {
      value: "skin-7",
      gradient: "bg-[radial-gradient(circle,#734c34,#5d4037)]",
    },
    {
      value: "skin-8",
      gradient: "bg-[radial-gradient(circle,#5a382a,#4e342e)]",
    },
    {
      value: "skin-9",
      gradient: "bg-[radial-gradient(circle,#422a1f,#3e2723)]",
    },
    {
      value: "skin-10",
      gradient: "bg-[radial-gradient(circle,#241815,#191714)]",
    },
  ];

  const handleCheckboxChange = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="rounded-full bg-primary/10 p-4 mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Assessment Submitted!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for submitting your assessment. We'll analyze your image
            and provide feedback shortly.
          </p>
          <Button
            onClick={() => {
              setImagePreview(null);
              setLocation("");
              setArea("");
              setAge("");
              setIsSuccess(false);
            }}
          >
            Submit Another Assessment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="image-upload">Upload an image</Label>
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              {imagePreview ? (
                <div className="relative w-full max-w-md">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    className="rounded-lg max-h-64 mx-auto object-contain"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagePreview(null);
                      const input = document.getElementById(
                        "image-upload"
                      ) as HTMLInputElement;
                      if (input) input.value = "";
                    }}
                  >
                    Change
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Drag and drop an image, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, WEBP (max 5MB)
                  </p>
                </>
              )}
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Which skin tone best represents you?</Label>

            <div className="flex justify-between gap-2">
              {skinTones.map((tone) => (
                <button
                  key={tone.value}
                  type="button"
                  className={`relative w-full h-14 rounded-md border transition ${
                    tone.gradient
                  } ${
                    skinColor === tone.value
                      ? "ring-2 ring-primary"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSkinColor(tone.value)}
                >
                  {skinColor === tone.value && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white drop-shadow-md" />
                    </span>
                  )}
                  <span className="sr-only">{tone.value}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="geography">
              Which country are you currently in?
            </Label>
            <Input
              value={geography}
              id="geography"
              placeholder="Please enter your country. e.g., USA, Peru, India"
              onChange={(e) => setGeography(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">
              What area of the body is shown in the image?
            </Label>

            <RadioGroup
              value={location}
              onValueChange={setLocation}
              className="flex space-y-1"
              id="location"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="skin" id="skin" />
                <Label htmlFor="skin" className="font-normal">
                  Skin
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scalp" id="scalp" />
                <Label htmlFor="scalp" className="font-normal">
                  Scalp
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nail" id="nail" />
                <Label htmlFor="nail" className="font-normal">
                  Nail
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">
              Are there any other affected areas on your body?
            </Label>

            <div className="grid grid-cols-3 gap-2">
              {affectedAreasList.map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <Checkbox
                    id={area}
                    checked={selectedAreas.includes(area)}
                    onCheckedChange={() => handleCheckboxChange(area)}
                  />
                  <Label htmlFor={area}>{area}</Label>
                </div>
              ))}
              {/* Other input field */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="other"
                  checked={!!otherArea}
                  onCheckedChange={() => setOtherArea(otherArea ? "" : " ")}
                />
                <Label htmlFor="other">Other</Label>
              </div>
              {otherArea && (
                <input
                  type="text"
                  placeholder="Specify other affected areas"
                  value={otherArea}
                  onChange={(e) => setOtherArea(e.target.value)}
                  className="border rounded-md p-2 w-full"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>What's your age?</Label>
            <RadioGroup
              value={age}
              onValueChange={setAge}
              className="flex space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="under-18" id="under-18" />
                <Label htmlFor="under-18" className="font-normal">
                  Under 18
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="18-30" id="18-30" />
                <Label htmlFor="18-30" className="font-normal">
                  18-30
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="31-45" id="31-45" />
                <Label htmlFor="31-45" className="font-normal">
                  31-45
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="46-60" id="46-60" />
                <Label htmlFor="46-60" className="font-normal">
                  46-60
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="over-60" id="over-60" />
                <Label htmlFor="over-60" className="font-normal">
                  Over 60
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={
              !imagePreview || !location || !area || !age || isSubmitting
            }
          >
            {isSubmitting ? "Submitting..." : "Submit Assessment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
