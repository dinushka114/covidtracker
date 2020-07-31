
// fetch("https://covid19.mathdro.id/api/countries").
// then(res => res.json()).
// then(data => console.log(data.countries));
const se = document.querySelector("#sel");
const c_name = document.querySelector("#c_name")
const tbody = document.querySelector("#tbody")
class App{
    // data = 
    
    getData(){
        // let alldata 
        fetch("https://covid19.mathdro.id/api/countries").
        then(res => res.json()).
        then(data => this.logData(data.countries));

        // console.log(alldata);
        // re
    }

    logData(data){
        // console.log(data);
        let countriList = "<option>--select country--</option>"
        data.forEach(countri => {
            // console.log(countri);
            countriList = countriList + "<option value = '"+countri.name+"' >"+countri.name+"</option>";
        });
        se.innerHTML = countriList;

    }

    getCountriStatus(c){
        let countriName = c.value
        // console.log(countriName);
        fetch("https://covid19.mathdro.id/api/countries/"+countriName).then(res => res.json()).
        then(data => this.getCountriStatusAll(countriName,data));

    }

    getCountriStatusAll(name,data){
        c_name.innerHTML = name
        tbody.innerHTML = "<tr><td>"+data.confirmed.value+"</td><td>"+data.recovered.value+"</td><td>"+data.deaths.value+"</td></tr>"

    }
}

let app =  new App()
app.getData();
