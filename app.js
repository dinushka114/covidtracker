

class CovidApp{

    fetchCountries(){

        var selectSection = document.getElementById('countries');
        var select = document.createElement('select');
        select.className = 'form-control';
        var countrySection  = document.createElement('div');
        countrySection.className = 'countrySec';
        selectSection.appendChild(countrySection);

        fetch('https://covid19.mathdro.id/api/countries')
        .then(response => response.json())
        .then(
            data => data.countries.map((country)=>{
                var option = document.createElement('option');
                var optionValue = document.createTextNode(country.name);
                option.appendChild(optionValue);
                select.appendChild(option);
                option.addEventListener('click' ,(event)=>{
                    this.fetchCountryData(event.target.value);
                })
            },
            countrySection.appendChild(select),
            // countrySection.appendChild(selectSection)
            )
        );

    }

    fetchCountryData(name){

        var results = document.getElementById('results');

        fetch(`https://covid19.mathdro.id/api/countries/${name}`)
        .then(response => response.json())
        .then(data => {
            var countryData = `<div class='container'>

                <div class='row'>
                    <div class='col-sm-4'><h1>${data.confirmed.value}</h1></div>
                    <div class='col-sm-4'><h1>${data.recovered.value}</h1></div>
                    <div class='col-sm-4'><h1>${data.deaths.value}</h1></div>
                </div>
            
            </div>`
            console.log(data.confirmed.value);
            results.innerHTML = countryData;

        },
        
        
        )
    }


}

const app = new CovidApp();
app.fetchCountries();