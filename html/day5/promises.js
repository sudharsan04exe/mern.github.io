function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data=0/0;
            reject(data);
    },2000);
    });
}
fetchData()
.then(data =>{
    console.log('success:', data);
})
.catch(error =>{
    console.error('Error:', error);
});