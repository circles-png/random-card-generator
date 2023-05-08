import { useState } from "react"

enum CardGenerationState { idle, generating, generated }
const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ")
}
const App = () => {
  const [cardGenerationState, setCardGenerationState] = useState(CardGenerationState.idle)
  return (
    <>
      <div className="bg-casino h-full p-4">
        <div className="text-center p-4 text-xl w-3/4 mx-auto flex flex-col gap-4 backdrop-blur-xl rounded-xl border-gray-300/20 border h-full bg-black/50 text-gray-300">
          <h1 className="font-semibold text-4xl">
            Random Card Generator
          </h1>
          <p>
            This card generator will randomly pick any card from a standard 54 card deck, with four suits: <b className="font-semibold">spades, hearts, diamonds, and clubs</b>. Each suit has 13 cards: <b className="font-semibold">Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King.</b> There are also two Jokers: <b className="font-semibold">red and black</b>.
          </p>
          <button
            className="border p-4 px-8 rounded-xl mx-auto border-gray-300/20 bg-white/10 shadow-2xl shadow-black/60 hover:bg-gray-300/70 transition hover:text-gray-700 hover:scale-110 font-semibold ease-in-out"
            onClick={() => {
              setTimeout(() => { setCardGenerationState(cardGenerationState) }, 5000)
            }}
          >
            Generate Card
          </button>
          <img
            src="card.png"
            alt="Card"
            className={classNames(
              "w-1/3 mx-auto bg-black/50 rounded-xl border-white/10 p-2 border mt-8 transition ease-in-out duration-700",
              cardGenerationState ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>
    </>
  )
}

export default App
