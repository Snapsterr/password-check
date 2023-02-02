import { useState } from "react"
import CheckSection from "../components/CheckSection/CheckSection"
import InputField from "../components/InputField/InputField"

import "./Main.scss"

const Main = () => {
  const [value, setValue] = useState<string>("")
  const [passwordFieldType, setPasswordFieldType] = useState<string>("empty")

  const passwordCheck = (str: string) => {
    const digitsRegex = str.match(/(?=.*[0-9])/) ? true : false
    const lettersRegex = str.match(/(?=[A-Za-zА-ЯЁЇІЄҐа-яёїіє])/) ? true : false
    const symbolsRegex = str.match(/(?=.*[^A-Za-zА-ЯЁЇІЄҐа-яёїіє0-9])/)
      ? true
      : false

    const isShortCheck = str.length > 0 && str.length < 8
    const isEasyCheck = digitsRegex || lettersRegex || symbolsRegex
    const isMediumCheck =
      (digitsRegex && lettersRegex) ||
      (digitsRegex && symbolsRegex) ||
      (lettersRegex && symbolsRegex)
    const isStrongCheck = digitsRegex && symbolsRegex && lettersRegex

    if (str.length === 0) return setPasswordFieldType("empty")
    if (isShortCheck) return setPasswordFieldType("short")
    if (isEasyCheck) setPasswordFieldType("easy")
    if (isMediumCheck) setPasswordFieldType("medium")
    if (isStrongCheck) setPasswordFieldType("strong")
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()
    setValue(inputValue)
    passwordCheck(inputValue)
  }

  return (
    <main className="main">
      <h1 className="main__title">Check your password strenght:</h1>
      <InputField
        value={value}
        onChangeHandler={inputHandler}
        tooltipVisibility={passwordFieldType}
      />
      <CheckSection dataValue={passwordFieldType} />
    </main>
  )
}

export default Main
