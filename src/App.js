
import './App.css';
import ButtonPage from './pages/button';
import InputPages from './pages/input';
import { useState , useEffect } from 'react';
import  two_sum  from "./logic/two-sum";
import  pascal  from "./logic/pascal";
import { Container } from '@material-ui/core';

function App() {
    const [inputValue, setInputValue] = useState();
    const [inputValueArray, setInputArrayValue] = useState();
    const [valueTwoSum, setValueTwoSum] = useState([]);
    const [valuePascal, setValuePascal] = useState([]);
    
    const handleChanges = event => {
      setInputValue(event.target.value);
    };

    const handleChangeArrat = event => {
        setInputArrayValue(event.target.value);
      };

    useEffect(()=> {
        setValueTwoSum(two_sum())
        setValuePascal(pascal())
    },[])

    useEffect(() => {
      console.log(inputValue)
    }, [inputValue])

    useEffect(() => {
        console.log(inputValueArray)
      }, [inputValueArray])
  
      return (
    <div className="App">
        <Container maxWidth="sm">
            <h1>Two Sum</h1>
            <p>Diberikan array bilangan bulat nums dan target bilangan bulat, kembalikan indeks dari dua angka sedemikian rupa sehingga mereka menambahkan hingga target.</p>
            {/* <p>{{valueTwoSum}}</p> */}
            <InputPages label = "Masukkan Array"  />
            <InputPages label = "Masukkan Target" />
            <p>{valueTwoSum[0]}</p>
            <p>{valueTwoSum[1]}</p>
            <p>{valueTwoSum[2]}</p>
            <ButtonPage/>

            <div>
                <h1>Pascal</h1>
                <p>Diberi bilangan bulat numRows, kembalikan numRows pertama dari segitiga Pascal.</p>
                {/* <p>{{valueTwoSum}}</p> */}
                <InputPages label = "Masukkan NumRows"  />
                {valuePascal.map((el) => (
                    <p>{el}</p>
                ))}
                <ButtonPage/>
            </div>
        </Container>
    </div>
  );
}

export default App;
