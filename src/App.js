import { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import ResultTable from './Components/ResultTable/ResultTable';

function App() {
  const [results, setResults] = useState(null);
  const [initial, setInitial] = useState("");
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    const newYearlyData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setInitial(currentSavings);
    setResults(newYearlyData);
    setYearlyData(newYearlyData);
  };

  useEffect(() => {
    console.log("resultado: ", results);
  }, [results]);

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />

      {!results && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {results && <ResultTable data={yearlyData} initialInvestment={initial} />}
    </div>
  );
}


export default App;
