import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
function SelectNum() {
  const [value, setValue] = useState()
  return (
    <div className="select-num">
      <PhoneInput
        international
        defaultCountry="SA"
        addInternationalOption={false}

        value={value}
        onChange={setValue}
        countries={['SA']}
      />
    </div>
  )
}
export default SelectNum
