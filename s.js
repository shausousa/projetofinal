function pData(data){
    const [dia, mes, ano] = data.split("/");
    return new Date(2018, mes-1, dia).getTime();
}
function signo(){
 let signos = [
    {signo:"Capricórnio", inicio:"22/12/2018", fim:"31/12/2018"},
    {signo:"Capricórnio", inicio:"01/01/2018", fim:"19/01/2018"},
    {signo:"Aquário", inicio:"20/01/2018", fim:"18/02/2018"},
    {signo:"Peixes", inicio:"19/02/2018", fim:"20/03/2018"},
    {signo:"Áries", inicio:"21/03/2018", fim:"19/04/2018"},
    {signo:"Touro", inicio:"20/04/2018", fim:"20/05/2018"},
    {signo:"Gêmeos", inicio:"21/05/2018", fim:"21/06/2018"},
    {signo:"Câncer", inicio:"22/06/2018", fim:"22/07/2018"},
    {signo:"Leão", inicio:"23/07/2018", fim:"22/08/2018"},
    {signo:"Virgem", inicio:"23/08/2018", fim:"22/09/2018"},
    {signo:"Libra", inicio:"23/09/2018", fim:"22/10/2018"},
    {signo:"Escorpião", inicio:"23/10/2018", fim:"21/11/2018"},
    {signo:"Sagitário", inicio:"22/11/2018", fim:"21/12/2018"}]

    let data = document.getElementById("ValorDaData").value;
    for(item in signos){
        if(
            (pData(data) >= pData(signos[item].inicio)) && 
            (pData(data) <= pData(signos[item].fim))
        ){
            console.log(`Você é de ${signos[item].signo}`);
            document.getElementById("Resultado").textContent = `Você é de ${signos[item].signo}`
        }
    }
}