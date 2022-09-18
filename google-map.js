function initMap(){
    navigator.geolocation.getCurrentPosition((test)=>{
        console.info(test)
    })

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.info(position)
        })
    }else{
        console.info('geolocation not work on this page.')
    }
}