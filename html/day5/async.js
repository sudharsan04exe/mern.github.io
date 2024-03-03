async function fetchData() {
    const response = await fetch();
    const data = await response.json();
    return data;
}

async function displayData(){
    try{
        const data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.error('Error:', error);
    }
}