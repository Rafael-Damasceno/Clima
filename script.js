document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // previne o comportamento padrão

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showWarning('carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9041a63e1d9b241be76ec78de5452c76&units=metric&lang=pt_br`

        let results = await fetch(url);
        let json = await results.json();

        if(json.code === 200){

            showInfo({
                name: json.name,
                country: json.sys.country 

            })

        }else{
            showWarning('Não encontramos esta localização')
        }
    }


})

function showInfo(json){

}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

 