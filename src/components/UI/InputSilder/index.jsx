import { useState } from 'react'

import { percentCalc } from '../../../utils/helpers'

import styles from './style'

const InputSlider = ({
   label,
   min,
   max,
   name,
   step,
   carCoast,
   value,
   adornment,
   values,
   setValue,
   handleInputChange,
   handleRangeChange,
}) => {
   const [blur, setBlur] = useState(false)

   const handleBlur = () => {
      if (value < min) {
         setValue(...values, { [name]: min })
      } else if (value > max) {
         setValue(...values, { [name]: max })
      }
      setBlur(false)
   }

   return (
      <div>
         <div className={styles.label__container}>
            <span>{label}</span>
         </div>
         <div className={styles.input__wrapper}>
            {name === 'percent' ? (
               <div className={styles.input__wrapper__box}>
                  <input
                     type="text"
                     className={styles.input__percent}
                     name={name}
                     readOnly
                     value={parseInt((value / 100) * carCoast).toLocaleString(
                        'ru-Ru'
                     )}
                  />
                  <div
                     className={styles.input__percent__wrapper}
                     style={{
                        background: blur ? '#fff' : '',
                     }}
                  >
                     <input
                        type="number"
                        className={styles.input__percent__default}
                        value={value.toLocaleString('ru-Ru')}
                        name={name}
                        onChange={handleInputChange}
                        min={min}
                        max={max}
                        step={step}
                        onFocus={() => setBlur(!blur)}
                        onBlur={handleBlur}
                     />
                     <span className={styles.input__end__adornment}>%</span>
                  </div>
               </div>
            ) : (
               <div
                  className={styles.input__wrapper__box}
                  style={{
                     background: blur ? '#fff' : '',
                  }}
               >
                  <input
                     type="number"
                     className={styles.input__default}
                     value={value}
                     name={name}
                     onChange={handleInputChange}
                     min={min}
                     max={max}
                     step={step}
                     onFocus={() => setBlur(!blur)}
                     onBlur={handleBlur}
                  />
                  <span className={styles.input__end__adornment}>
                     {adornment}
                  </span>
               </div>
            )}

            <div className={styles.range__input__wrapper}>
               <input
                  type="range"
                  name={name}
                  className={styles.input__range__slider}
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={handleRangeChange}
               />
               <div
                  className={styles.range__progress__bar}
                  style={{
                     width: `${percentCalc(max, min, value)}%`,
                  }}
               />
            </div>
         </div>
      </div>
   )
}

export default InputSlider
