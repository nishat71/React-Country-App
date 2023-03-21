import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries';
import Search from './Components/Search';


const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  //filter er jnno countries er data gula arekta state e copy kore rakbo


  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
      // console.log(countries);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };


  useEffect(() => {
    fetchData(url);
  }, [])


  const handleRemoveCountry = (name) => {
    // alert(name);
    const filter = filteredCountries.filter((country) => country.name.common !== name);
    setFilteredCountries(filter);
  }


  const handleSearch = (searchValue) => {
    // alert(searchValue);
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value) // amra j value dicchi tar sate jodi countryName same hoy and same name e start hoy
    })
    setFilteredCountries(newCountries);  //cz countries={filteredCountries} countries e filteredCountries display krsi
  };


  return (
    <>
      <section>
        <div className="container">
          <h1>Country App</h1>
          <Search onSearch={handleSearch}></Search>
          {isLoading && <h2>Loading...</h2>}
          {error && <h2>{error.message}</h2>}
          {countries &&
            <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}></Countries> //filteredCountries use krte pari cz er modde initilayy countries er sb data reke dicchi
            // <Countries countries={countries} onRemoveCountry={handleRemoveCountry}></Countries>
          }
        </div>
      </section>
    </>
  );
}

export default App;
//search er modde props patacchi, props er uddesho hocche handleSearch er value patiye deya
// search value k first e lowercase e convert krbo













// useEffect(() => {
//   fetch("https://restcountries.com/v3.1/all")
//   .then((res)=>{
//     if(!res.ok){
//       throw Error("Error occured")
//     }else{
//       return res.json();
//     }
//   })
//   .then((data)=>{
//     setCountries(data);
//     setFilterCountries(data);
//     setLoading(false);
//     setError(null)
//   })
//   .catch((error)=>{
//     setLoading(false)
//     setError(error.message);
//   })
// }, [])







// import { useEffect, useState } from 'react';
// import './App.css';


// const url = "https://restcountries.com/v3.1/all";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [countries, setCountries] = useState([]);


//   const fetchData = async (url) => {
//     setIsLoading(true);

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setCountries(data);
//       setIsLoading(false);
//       setError(null);
//       console.log(countries);
//     } catch (error) {
//       setIsLoading(false);
//       setError(error);
//     }
//   }

//   /* asynchronous er maddome data fetch krbo, async await use krte chaile useEffect er modde  directly parbo na tai akti
//   function create kore tar modde asynchronous functionality add krte parbo */

//   useEffect(() => {
//     fetchData(url); // ekane function er nam diye dibo and shey function er modde fetching er kaj krbo
//   }, [])

//   return (
//     <div className="">
//       App
//     </div>
//   );
// }

// export default App;
