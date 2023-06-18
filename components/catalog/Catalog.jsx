import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './catalog.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive'
import { faBrush, faCity, faHouse, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';
const Catalog = ({ meals }) => {

  console.log(meals)
  const [activeCategory, setActiveCategory] = useState('wszystkie')
  const [filteredMeals, setFilteredMeals] = useState([])

  useEffect(() => {
     const filterMeals = () => {
      setFilteredMeals(() => {
        if(activeCategory){
          if(activeCategory === 'wszystkie'){
            return meals
          }
          return [...meals].filter((meal) => meal.category === activeCategory)
        }
      })
     }
     activeCategory && filterMeals()
  }, [activeCategory])


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          {/* <h3>Co Cię interesuje?</h3> */}
          <h1>Wybierz spośród kategorii sprzątania</h1>
        </div>
        <div className={classes.categories}>
          <span  onClick={() => setActiveCategory('wszystkie')} className={`${classes.category} ${activeCategory === 'wszystkie' ? classes.active : ''}`}>
            Wszystkie
          </span>
          {/* <span onClick={() => setActiveCategory('dom')} className={`${classes.category} ${activeCategory === 'dom' ? classes.active : ''}`}>
            Sprzątanie domu
          </span> */}
          <span onClick={() => setActiveCategory('mieszkanie')} className={`${classes.category} ${activeCategory === 'mieszkanie' ? classes.active : ''}`}>
            Mieszkanie
          </span>
          <span onClick={() => setActiveCategory('biuro')} className={`${classes.category} ${activeCategory === 'biuro' ? classes.active : ''}`}>
            Biuro
          </span>
          <span onClick={() => setActiveCategory('remont')} className={`${classes.category} ${activeCategory === 'remont' ? classes.active : ''}`}>
            Remont
          </span>
          <span onClick={() => setActiveCategory('wynajem')} className={`${classes.category} ${activeCategory === 'wynajem' ? classes.active : ''}`}>
            Wynajem
          </span>
          <span onClick={() => setActiveCategory('dodatkowe')} className={`${classes.category} ${activeCategory === 'dodatkowe' ? classes.active : ''}`}>
            Dodatkowe
          </span>
        </div>
        {
          filteredMeals?.length > 0
          ? <div className={classes.meals}>
             {filteredMeals?.map((meal) => (
              <Link href={`/meal/${meal?._id}`} key={meal?._id} className={classes.meal}>
                <div className={classes.imgContainer}>
                  <Image src={meal?.image} width='250' height='250' />
                </div>
                <div className={classes.mealData}>
                  <h4>{meal?.title}</h4>
                  <span>{meal?.price} zł</span>
                </div>
              </Link>
             ))}
          </div>
          : <h2 className={classes.noMeal}>Brak usług {activeCategory} na stanie</h2>
        }
      </div>
    </div>
  )
}

export default Catalog