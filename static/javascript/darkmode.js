function darkmode(dark_css, light_css) {
    let main_css = document.getElementById("main_css")
    if (document.getElementById('switch').checked) {
        main_css.href = dark_css;
    } else {
        main_css.href = light_css;
    }
}