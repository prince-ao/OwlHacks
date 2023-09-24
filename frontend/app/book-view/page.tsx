"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import TextToSpeech from "../components/TextToSpeech";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Playfair, Lora, Mooli, Poppins, Arvo } from "next/font/google";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cog, Check, ChevronsUpDown, Library } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

const playfair = Playfair({ weight: "300", subsets: ["latin"] });
const lora = Lora({ weight: "400", subsets: ["latin"] });
const mooli = Mooli({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "200", subsets: ["latin"] });
const arvo = Arvo({ weight: "400", subsets: ["latin"] });

const fonts = [
  {
    value: "playfair",
    label: "Playfair",
  },
  {
    value: "lora",
    label: "Lora",
  },
  {
    value: "mooli",
    label: "Mooli",
  },
  {
    value: "poppins",
    label: "Poppins",
  },
  {
    value: "arvo",
    label: "Arvo",
  },
];

export default function BookView() {
  const [data, setData] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [fontSize, setFontSize] = useState(33);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("playfair");
  const [valueClass, setValueClass] = useState(playfair.className);
  const [lineSpace, setLineSpace] = useState(1.5);
  const [aiOutput, setAiOutput] = useState("");
  const [quizState, setQuizState] = useState(0);
  const [yetAnotherState, setYetAnotherState] = useState(false);

  const router = useRouter();

  function joinEveryNthLine(inp: string[], n: number) {
    const result: string[] = [];
    let counter = 0;
    let store = "";
    for (let i of inp) {
      if (counter === n) {
        result.push(store);
        store = "";
        counter = 0;
      }
      store += i;
      store += "<br>";
      counter++;
    }
    return result;
  }

  // https://www.wolframalpha.com/api/v1/llm-api?input=10+densest+elemental+metals&appid=JK26AV-5G5GHUW3KL

  function getSelectedText() {
    if (window.getSelection) {
      return window.getSelection()?.toString();
    }
    return "";
  }
  useEffect(() => {
    switch (value) {
      case "playfair":
        setValueClass(playfair.className);
        break;
      case "lora":
        setValueClass(lora.className);
        break;
      case "mooli":
        setValueClass(mooli.className);
        break;
      case "poppins":
        setValueClass(poppins.className);
        break;
      case "arvo":
        setValueClass(arvo.className);
        break;
    }
  }, [value]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/Compilers - Principles, Techniques, and Tools.txt"
      );
      const pdfData = await response.text();
      setData(joinEveryNthLine(pdfData.split("\n"), 20));
    })();
  }, []);
  return (
    <div className="!bg-white min-h-[100vh]">
      <div className="flex items-center border-b-black border-b-2">
        <ArrowLeft
          className="text-black text-3xl w-[50px] h-[50px] hover:cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-black ms-[40%] font-bold text-xl">
          Compilers: Principles, Techniques, & Tools
        </h1>
        <div className="ms-[15%] flex gap-8">
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" size="icon">
                <Library className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              {quizState === 0 ? (
                <>
                  <p className="mb-2">Start Chapter:</p>
                  <Input type="number" min={1} value={1} className="mb-8" />
                  <p className="mb-2">End Chapter:</p>
                  <Input type="number" min={1} value={1} />
                  <Button className="mt-8" onClick={() => setQuizState(1)}>
                    Begin
                  </Button>
                </>
              ) : quizState === 1 ? (
                <>
                  <p>Which of the following is not a phase of a compiler?</p>
                  <RadioGroup
                    defaultValue="option-one"
                    className="mb-8 mt-4 flex flex-col"
                  >
                    <div>
                      <RadioGroupItem
                        value="option-one"
                        id="option-one"
                        className="inline-block"
                      />
                      <Label htmlFor="option-one" className="ms-2">
                        Lexical Analysis
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" className="ms-2">
                        Syntax Analysis
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label htmlFor="option-three" className="ms-2">
                        Semantic Analysis
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="option-four" id="option-four" />
                      <Label htmlFor="option-their" className="ms-2">
                        Debugging
                      </Label>
                    </div>
                    <div className="flex gap-4 items-center">
                      <Button
                        className="mt-8"
                        variant="outline"
                        onClick={() => setQuizState(2)}
                      >
                        Next
                      </Button>
                      <Button
                        className="mt-8"
                        onClick={() => {
                          setYetAnotherState(true);
                          setTimeout(() => {
                            setYetAnotherState(false);
                          }, 2000);
                        }}
                      >
                        Check
                      </Button>
                      {yetAnotherState ? <Check className="" /> : <></>}
                    </div>
                  </RadioGroup>
                </>
              ) : (
                <div>
                  <p>Good Job!</p>
                  <video
                    autoPlay
                    loop
                    style={{ width: "500px", height: "500px" }}
                  >
                    <source src="/mp4.webm" />
                  </video>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>
        <div className="ms-8 flex gap-8">
          <Popover>
            <PopoverTrigger>
              <Button variant="outline" size="icon">
                <Cog className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="mb-8">
                <p className="mb-2">Font Size: </p>
                <Slider
                  value={[fontSize]}
                  onValueChange={(e) => setFontSize(e[0])}
                  max={100}
                  step={1}
                />
              </div>
              <div className="mb-8">
                <p className="mb-2">Choose Font: </p>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? fonts.find((font) => font.value === value)?.label
                        : "Select a font..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search fonts..." />
                      <CommandEmpty>No font found.</CommandEmpty>
                      <CommandGroup>
                        {fonts.map((font) => (
                          <CommandItem
                            key={font.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === font.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {font.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="mb-8">
                <p className="mb-2">Line Space: </p>
                <Slider
                  value={[lineSpace]}
                  onValueChange={(e) => setLineSpace(e[0])}
                  max={10}
                  min={1}
                  step={0.25}
                />
              </div>
            </PopoverContent>
          </Popover>
          <TextToSpeech page={data[page]} />
        </div>
      </div>
      <div
        style={{ fontSize: fontSize, lineHeight: lineSpace }}
        className={
          valueClass +
          " text-black text-center align-middle pt-[5%] min-h-[90vh]"
        }
        onMouseUp={async (e) => {
          const text = getSelectedText();
          if (text != "") {
            setIsOpen(true);
            const response = await fetch(
              `https://api.openai.com/v1/chat/completions`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer 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`,
                },
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [
                    {
                      role: "system",
                      content:
                        "I am currently reading  Compilers: Principles, Techniques, & Tools. Your task is to help with sections in the book. Try to interpret what I send in the best way possible.",
                    },
                    {
                      role: "user",
                      content: text,
                    },
                  ],
                }),
              }
            );
            const responseJson = await response.json();
            console.log(responseJson);

            setAiOutput(responseJson.choices[0].message.content);
          }
        }}
        onSelect={(e) => console.log(window.getSelection())}
        dangerouslySetInnerHTML={{ __html: data[page] }}
      />
      {isOpen && (
        <Card className="w-[350px] absolute right-16 top-28">
          <CardHeader>
            <CardTitle>Bookstack.ai</CardTitle>
          </CardHeader>
          <CardContent>
            {aiOutput === "" ? (
              <div>
                <Image
                  alt="loading"
                  src="/loading.gif"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <p>{aiOutput}</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setIsOpen(false);
                setAiOutput("");
              }}
            >
              Close
            </Button>
          </CardFooter>
        </Card>
      )}
      <div className="flex justify-between items-center">
        <ArrowBigLeft
          className="text-black w-[80px] h-[80px] cursor-pointer"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        />
        <p className="text-black text-xl">
          {page}/{data.length}
        </p>
        <ArrowBigRight
          className="text-black w-[80px] h-[80px] cursor-pointer"
          onClick={() => setPage(page + 1)}
        />
      </div>
    </div>
  );
}
