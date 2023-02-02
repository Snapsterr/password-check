import "./CheckSection.scss"

interface Props {
  dataValue: string
}

interface IChecks {
  id: number
  value: string
}

const checkingSection: IChecks[] = [
  { id: 0, value: "Easy (field contains only letters, digits or symbols)" },
  {
    id: 1,
    value:
      "Medium (field contains letters/digits, letters/symbols or digits/symbols)",
  },
  { id: 2, value: "Strong (field contains letters, digits and symbols)" },
]

const CheckSection = ({ dataValue }: Props) => {
  return (
    <ul className="check-section">
      {checkingSection.map((el) => (
        <li
          className="check-section__item"
          data-password={dataValue}
          key={el.id}
        >
          {el.value}
        </li>
      ))}
    </ul>
  )
}

export default CheckSection
