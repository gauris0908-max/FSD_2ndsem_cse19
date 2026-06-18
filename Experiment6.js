let fontSize = 16;

function changeHeading()
{
    let text = document.getElementById("textInput").value;

    if(text !== "")
    {
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground()
{
    document.body.style.backgroundColor = "#b07b7b";
}

function increaseFont()
{
    fontSize += 2;

    document.getElementById("paragraph").style.fontSize =
        fontSize + "px";
}

function toggleParagraph()
{
    let para = document.getElementById("paragraph");

    if(para.style.display === "none")
    {
        para.style.display = "block";
    }
    else
    {
        para.style.display = "none";
    }
}

function resetPage()
{
    document.getElementById("heading").innerText =
        "Welcome to JavaScript Lab";

    document.getElementById("textInput").value = "";

    document.body.style.backgroundColor = "#f4f4f4";

    document.getElementById("paragraph").style.display = "block";

    fontSize = 16;

    document.getElementById("paragraph").style.fontSize =
        "16px";
}