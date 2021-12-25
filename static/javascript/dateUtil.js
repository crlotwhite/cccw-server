function makeTimeString() {
    let currentDate = new Date();
    // const dateTime = currentDate.getDate() + "/"
    //             + (currentDate.getMonth()+1)  + "/"
    //             + currentDate.getFullYear() + " "
    //             + currentDate.getHours() + ":"
    //             + currentDate.getMinutes();
    const min = currentDate.getMinutes();
    const dateTime = currentDate.getHours() + ":"
                + (min<10? "0" + min.toString() : min);

    return dateTime;
}