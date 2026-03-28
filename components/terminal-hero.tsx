"use client"

import { useState, useEffect } from "react"

const commands = [
  { prompt: "$ whoami", output: "thomas.cerdera" },
  { prompt: "$ cat title.txt", output: "Développeur Web confirmé" },
  { prompt: "$ cat location.txt", output: "Toulouse" },
  { prompt: "$ echo $SPECIALIZATION", output: "C#, Typescript, Créativité, Analyse." },
]

export function TerminalHero() {
  const [displayedLines, setDisplayedLines] = useState<{ type: "prompt" | "output"; text: string }[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentLine >= commands.length * 2) {
      setIsTyping(false)
      return
    }

    const isPrompt = currentLine % 2 === 0
    const commandIndex = Math.floor(currentLine / 2)
    const text = isPrompt ? commands[commandIndex].prompt : commands[commandIndex].output

    if (currentChar < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            if (!newLines[currentLine]) {
              newLines[currentLine] = { type: isPrompt ? "prompt" : "output", text: "" }
            }
            newLines[currentLine] = {
              type: isPrompt ? "prompt" : "output",
              text: text.substring(0, currentChar + 1),
            }
            return newLines
          })
          setCurrentChar((prev) => prev + 1)
        },
        isPrompt ? 50 : 15
      )
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(
        () => {
          setCurrentLine((prev) => prev + 1)
          setCurrentChar(0)
        },
        isPrompt ? 300 : 500
      )
      return () => clearTimeout(timeout)
    }
  }, [currentLine, currentChar])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-3xl">
        <div className="rounded-lg border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-sm text-muted-foreground font-mono">mission_control.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="text-muted-foreground mb-4">
              {"// Connexion à la station spatiale la plus proche..."}
            </div>
            <div className="text-terminal mb-6">{"[CONNECTION ETABLIE]"}</div>

            {displayedLines.map((line, index) => (
              <div
                key={index}
                className={`${line.type === "prompt" ? "text-primary" : "text-foreground"} ${
                  line.type === "output" ? "ml-4 mb-4" : "mb-1"
                }`}
              >
                {line.text}
                {index === displayedLines.length - 1 && isTyping && (
                  <span className={`inline-block w-2 h-4 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`} />
                )}
              </div>
            ))}

            {!isTyping && (
              <div className="mt-6 flex items-center text-primary">
                <span>$ </span>
                <span className={`inline-block w-2 h-4 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-lg">
            Scrollez pour découvrir mon parcours et mes compétences
          </p>
          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
