import "./InputField.scss"

interface Props {
  value: string
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  tooltipVisibility: string
}

const InputField = ({ value, onChangeHandler, tooltipVisibility }: Props) => {
  return (
    <>
      <div className="input">
        <input
          className="input__field"
          value={value}
          type="text"
          name="inputField"
          aria-labelledby="label-input"
          onChange={onChangeHandler}
        />
        <label className="input__label" htmlFor="inputField" id="label-input">
          <div className="input__text">Password</div>
        </label>
      </div>
      <div
        className="input__tooltip"
        style={{
          visibility: tooltipVisibility === "short" ? "visible" : "hidden",
        }}
      >
        *To determine the strength of a password, its length must be at least 8
      </div>
    </>
  )
}

export default InputField
