import { useEffect, useState } from "react"
import { NinetyRingWithBg } from "react-svg-spinners"

enum CardGenerationState { idle, generating, generated }
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}
const App = () => {
  const [cardGenerationState, setCardGenerationState] = useState(CardGenerationState.idle)
  const [card, setCard] = useState("four-of-diamonds.png")
  useEffect(() => {
    window.addEventListener("keydown", event => {
      if ((event as KeyboardEvent).key === "'") {
        setCard("six-of-spades.png")
      }
    })
    window.addEventListener("keyup", event => {
      if ((event as KeyboardEvent).key === "'") {
        setCard("four-of-diamonds.png")
      }
    })
    return () => {
      window.removeEventListener("onkeydown", event => {
        if ((event as KeyboardEvent).key === "'")
          setCard("six-of-spades.png")
      })
      window.removeEventListener("onkeyup", event => {
        if ((event as KeyboardEvent).key === "'")
          setCard("four-of-diamonds.png")
      })
    }
  }, [])
  return (
    <>
      <div className="bg-casino h-full p-4">
        <div className="text-center p-4 text-xl w-3/4 mx-auto flex flex-col gap-4 backdrop-blur-xl rounded-xl border-gray-300/20 border bg-black/50 text-gray-300">
          <h1 className="font-semibold text-4xl">
            Random Card Generator
          </h1>
          <p>
            This card generator will randomly pick any card from a standard 54 card deck, with four suits: <b className="font-semibold">spades, hearts, diamonds, and clubs</b>. Each suit has 13 cards: <b className="font-semibold">Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King.</b> Additionally, there are two Jokers: <b className="font-semibold">red and black</b>.
          </p>
          <button
            className="border p-4 px-8 rounded-xl mx-auto border-gray-300/20 bg-white/10 shadow-2xl shadow-black/60 hover:bg-gray-300/70 transition hover:text-gray-700 hover:scale-110 font-medium ease-in-out"
            onClick={() => {
              setTimeout(() => { setCardGenerationState(CardGenerationState.generated) }, Math.random() * 2000 + 2000)
              setCardGenerationState(CardGenerationState.generating)
            }}
          >
            {
              cardGenerationState === CardGenerationState.generating
                ?
                <span className="flex gap-2 items-center">
                  <NinetyRingWithBg color="white" />
                  Generating Card...
                </span>
                : 'Generate Card'
            }
          </button>
          <img
            src={card}
            alt="Card"
            className={classNames(
              "w-1/3 mx-auto bg-white/70 rounded-xl border-gray-300/20 p-2 border my-8 transition ease-in-out duration-700",
              cardGenerationState === CardGenerationState.generated ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>
    </>
  )
}

export default App
