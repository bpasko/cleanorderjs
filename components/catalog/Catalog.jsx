import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './catalog.module.css'

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
          <h5>Co Cię interesuje?</h5>
          <h2>Wybierz spośród kategorii sprzątania</h2>
        </div>
        <div className={classes.categories}>
          <span onClick={() => setActiveCategory('wszystkie')} className={`${classes.category} ${activeCategory === 'wszystkie' ? classes.active : ''}`}>
            Wszystkie
          </span>
          <span onClick={() => setActiveCategory('sprzątanie domu')} className={`${classes.category} ${activeCategory === 'sprzątanie domu' ? classes.active : ''}`}>
            Sprzątanie domu
          </span>
          <span onClick={() => setActiveCategory('sprzątanie mieszkania')} className={`${classes.category} ${activeCategory === 'sprzątanie mieszkania' ? classes.active : ''}`}>
            Sprzątanie mieszkania
          </span>
          <span onClick={() => setActiveCategory('sprzątanie biura')} className={`${classes.category} ${activeCategory === 'sprzątanie biura' ? classes.active : ''}`}>
            Sprzątanie biura
          </span>
          <span onClick={() => setActiveCategory('sprzątanie po remoncie')} className={`${classes.category} ${activeCategory === 'sprzątanie po remoncie' ? classes.active : ''}`}>
            Sprzątanie po remoncie
          </span>
          <span onClick={() => setActiveCategory('sprzątanie po wynajmie')} className={`${classes.category} ${activeCategory === 'sprzątanie po wynajmie' ? classes.active : ''}`}>
            Sprzątanie po wynajmie
          </span>
          <span onClick={() => setActiveCategory('sprzątanie samochodu')} className={`${classes.category} ${activeCategory === 'sprzątanie samochodu' ? classes.active : ''}`}>
            Sprzątanie samochodu
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
                  <span>${meal?.price}</span>
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