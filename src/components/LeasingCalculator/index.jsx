import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InputSlider from '../UI/InputSilder'

import { submitData } from '../../store/slice'

import { calculateResults } from '../../utils/helpers'
import * as MM from '../../utils/constants'

import styles from './style'
import Spinner from '../UI/Spinner'

const LeasingCalculator = () => {
   const dispatch = useDispatch()
   const { loading } = useSelector((state) => state.form)
   const [userValues, setUserValues] = useState({
      price: 2000000,
      percent: 13,
      months: 12,
   })
   const [results, setResults] = useState({
      monthlyPayment: '',
      totalPayment: '',
   })

   console.log(results.totalPayment)

   useEffect(() => {
      calculateResults(userValues, setResults)
   }, [])

   const { price, percent, months } = userValues

   const { totalPayment, monthlyPayment } = results

   const handleSubmitValues = (e) => {
      e.preventDefault()
      const data = {
         car_coast: price,
         initial_payment: (percent / 100) * price,
         initial_payment_percent: percent,
         lease_term: months,
         total_sum: totalPayment,
         monthly_payment_from: monthlyPayment,
      }

      console.log('sada')

      console.log(data)

      if (price && percent && months) {
         dispatch(submitData(data))
      }
   }

   const handleRangeChange = (event) => {
      setUserValues({ ...userValues, [event.target.name]: event.target.value })
      calculateResults(userValues, setResults)
   }

   const handleInputChange = (event) => {
      setUserValues({ ...userValues, [event.target.name]: event.target.value })
      calculateResults(userValues, setResults)
   }
   return (
      <div className={styles.calculator__container}>
         <div className={styles.calculator__top__block}>
            <InputSlider
               label="Стоимость автомобиля"
               value={price}
               name="price"
               min={MM.CAR_COAST_MIN_MAX[0]}
               max={MM.CAR_COAST_MIN_MAX[1]}
               values={userValues}
               adornment="₽"
               setValue={setUserValues}
               step={10000}
               handleInputChange={handleInputChange}
               handleRangeChange={handleRangeChange}
            />
            <InputSlider
               label="Первоначальный взнос"
               value={percent}
               name="percent"
               carCoast={price}
               min={MM.INITIAL_PAYMENT_PERCENT_MIN_MAX[0]}
               max={MM.INITIAL_PAYMENT_PERCENT_MIN_MAX[1]}
               values={userValues}
               setValue={setUserValues}
               step={1}
               handleInputChange={handleInputChange}
               handleRangeChange={handleRangeChange}
            />
            <InputSlider
               label="Срок лизинга"
               value={months}
               name="months"
               min={MM.LEASE_TERM_MIN_MAX[0]}
               max={MM.LEASE_TERM_MIN_MAX[1]}
               values={userValues}
               adornment="мес."
               setValue={setUserValues}
               step={1}
               handleInputChange={handleInputChange}
               handleRangeChange={handleRangeChange}
            />
         </div>
         <div className={styles.calculator__bottom__block}>
            <div className={styles.calculator__bottom__block__title}>
               <span>Сумма договора лизинга</span>
               <p>{results.totalPayment.toLocaleString('ru-Ru')} ₽</p>
            </div>
            <div className={styles.calculator__bottom__block__title}>
               <span>Ежемесячный платеж от</span>
               <p>{results.monthlyPayment.toLocaleString('ru-Ru')} ₽</p>
            </div>
            <button className={styles.styled__btn} onClick={handleSubmitValues}>
               {loading ? <Spinner /> : 'Оформить заказ'}
            </button>
         </div>
      </div>
   )
}

export default LeasingCalculator
