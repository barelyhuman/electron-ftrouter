(function(){

    const APIURL = "http://localhost:3000/api"

    fetch(APIURL+'/status')
    .then(r=>r.json())
    .then((data)=>{

        const statusContainer = document.getElementById('status');
        statusContainer.innerHTML = "Status: "+data.status;


    })
    .catch(err=>{
        console.log(err);
    });


})()