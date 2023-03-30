interface Country {
    name: string;
    capital: string;
    population: number;
    region: string;
  }
  
  const url: string = 'https://restcountries.com/v2/all';
  
  async function fetchData() {
    try {
      const response = await fetch(url);
      const countries: Country[] = await response.json();
      displayData(countries);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  
  function displayData(data: Country[]) {
    const tableBody = document.getElementById('table-body') as HTMLTableSectionElement;
  
    data.forEach((country: Country) => {
      const row = tableBody.insertRow();
  
      const nameCell = row.insertCell();
      nameCell.innerText = country.name;
  
      const capitalCell = row.insertCell();
      capitalCell.innerText = country.capital;
  
      const populationCell = row.insertCell();
      populationCell.innerText = country.population.toLocaleString();
  
      const regionCell = row.insertCell();
      regionCell.innerText = country.region;
    });
  }
  
  fetchData();