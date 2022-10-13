import React from 'react'
import styles from './style/style'

import LeasingCalculator from './components/LeasingCalculator'

const App = () => {
   return (
      <div className={styles.main}>
         <div className={styles.container}>
            <div className={styles.box}>
               <h1 className={styles.title}>
                  Рассчитайте стоимость автомобиля в лизинг
               </h1>
            </div>
            <LeasingCalculator />
         </div>
      </div>
   )
}

export default App
