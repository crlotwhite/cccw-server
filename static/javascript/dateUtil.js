function makeTimeString() {
    let currentDate = new Date();
    // const dateTime = currentDate.getDate() + "/"
    //             + (currentDate.getMonth()+1)  + "/"
    //             + currentDate.getFullYear() + " "
    //             + currentDate.getHours() + ":"
    //             + currentDate.getMinutes();

    const dateTime = currentDate.getHours() + ":"
                + currentDate.getMinutes();

    return dateTime;
}