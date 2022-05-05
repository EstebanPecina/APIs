const getResidents = () => {   // Setting up function to get residents
    axios.get('https://swapi.dev/api/planets/2/') //Making an axios request that gets the information about the planet Alderaan
        .then(res => {   // Inside the callback passed to the .then loop over the residents array returned on the results. It's full of URLs
            const {residents} = res.data

            residents.forEach(url => { //In the loop, make another get request for each URL in the array.
                axios.get(url)
                .then(res => { //You’ll have another .then that has its own callback.
                    console.log(res.data)

                    let person = document.createElement('h2') //inside which you should create an h2 element 
                    person.textContent = res.data.name // whose content is the name of the resident that you just requested. Append the h2 to your HTML document.
                    
                    document.querySelector('#button1').appendChild(person)
                })
            });
        })
}


document.getElementById('button1').addEventListener('click', getResidents)