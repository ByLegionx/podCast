
export const getDataAndDate = (minute) => {
    let time;
        if (minute.trackTimeMillis / 1000 >= 3600) {
            const hours = Math.floor(minute.trackTimeMillis / (1000 * 60 * 60));
            const minutes = Math.floor((minute.trackTimeMillis / (1000 * 60)) % 60);
            const seconds = Math.floor((minute.trackTimeMillis / 1000) % 60);
            time = `${hours}:${minutes}:${seconds}`;
        }else if (minute.trackTimeMillis / 1000 >= 60) {
            const minutes = Math.floor(minute.trackTimeMillis / (1000 * 60));
            const seconds = Math.floor((minute.trackTimeMillis / 1000) % 60);
            time = `${minutes}:${seconds}`;
        } 
        else {
            if(minute.trackTimeMillis===undefined){time = "Unknown"}
            else{
                const seconds = Math.floor(minute.trackTimeMillis / 1000);
                time = `${seconds}sec`;
            }
          
        }
          
        const date = new Date(minute.releaseDate)
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear().toString().slice(-2);
        const formattedDate = `${day}/${month}/${year}`;

    return {
        time,
        formattedDate
    }
}
