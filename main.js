let button = document.querySelector('button')

button.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets/2').then(res => {
        let resArray = res.data.residents
        for (let i = 0; i < resArray.length; i++) {
            axios.get(resArray[i]).then(res => {
                let something = document.createElement('h2')
                document.querySelector('body').appendChild(something).textContent = res.data.name
            })
        }
    })
})