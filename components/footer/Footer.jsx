import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>O aplikacji</h2>
          <p><strong>Aplikacja zaliczeniowa Uniwersytet WSB Merito</strong>
          </p>
          <p><strong>Autorzy:</strong> Magdalena Czajkowska, Szymon Kopalko,</p>
          <p>Bartłomiej Pąśko</p>
        </div>
        <div className={classes.col}>
          <h2>Kontakt</h2>
          <span>telefon + 123 456 789</span>
          <span>YouTube: Cleaning APP</span>
          <span>Instagram: cleaningApp</span>
        </div>
        <div className={classes.col}>
          <h2>Lokalizacja</h2>
          <span>Kontynent: Europa</span>
          <span>Kraj: Polska</span>
          <span>Obecna lokalizacja: Warszawa</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer