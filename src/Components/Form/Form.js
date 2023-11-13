import React, { useState } from 'react'
import classes from './Form.module.css'


const Form = (props) => {

    const [currentSaving, setCurrentSaving] = useState("")
    const [yearlySaving, setYearlySaving] = useState("")
    const [expectedInterest, setExpectedInterest] = useState("")
    const [years, setYears] = useState("")

    
    let userInput = {
        'current-savings': currentSaving,
        'yearly-contribution': yearlySaving,
        'expected-return': expectedInterest,
        'duration': years
    };

    const handleSavingChange = (event) => {
        setCurrentSaving(event.target.value)
    }

    const handleYearlyChange = (event) => {
        setYearlySaving(event.target.value)
    }

    const handleExpectedInterest = (event) => {
        setExpectedInterest(event.target.value)
    }

    const handleYears = (event) => {
        setYears(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        props.onCalculate(userInput)



        console.log(currentSaving, yearlySaving, expectedInterest, years)
    }

    const resetData = () => {
        setCurrentSaving("")
        setYearlySaving("")
        setExpectedInterest("")
        setYears("")
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
       
      // use like this:
      formatter.format();

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={handleSavingChange}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={handleYearlyChange} />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={handleExpectedInterest} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={handleYears}/>
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetData}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Form