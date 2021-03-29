const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "res/light.css";
    let darkTheme = "res/style.css";

    let currTheme = link.getAttribute("href");

    if(currTheme === lightTheme)
    {
        currTheme = darkTheme;
    }
    else
    {
        currTheme = lightTheme;
    }

    link.setAttribute("href", currTheme);

}