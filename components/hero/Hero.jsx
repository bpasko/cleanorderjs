import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'
import womanEating from '../../public/assets/womaneating.jpg'

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>Zapewnimy Ci pełne wsparcie w sprzątaniu! </h2>
          <h5>
            Zajmujemy się kompleksowym sprzątaniem, aby Państwa przestrzeń zawsze błyszczała. <br />Nasza doświadczona i profesjonalna ekipa oferuje szeroki zakres usług sprzątania dla mieszkań, domów, biur i obiektów komercyjnych.<br />

            Nie trać czasu na sprzątanie - powierz to nam! Skontaktuj się z nami już dziś, a my przyjedziemy i odmienimy Twoją przestrzeń na lepsze. Jesteśmy Twoim partnerem w czystości!<br /><br /><br />
          </h5>
          <h1>
          <strong>Aby złożyć zamówienie wybierz interesującą Cię usługę.</strong>
          </h1>
          {/* <div className={classes.buttons}>
            <button className={classes.orderNow}>Złóż zamówienie</button>
            <button className={classes.seeMore}>See More</button>
          </div> */}
          {/* <div className={classes.disclaimer}>
            We close earlier on Monday
          </div> */}
        </div>
        <div className={classes.right}>
          <Image src={womanEating} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero