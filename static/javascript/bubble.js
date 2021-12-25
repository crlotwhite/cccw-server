function add_bubble(message, name, time, isSelf) {
    let panel = document.getElementById("chat-panel");
    let container_bubble = document.createElement("div");
    container_bubble.setAttribute("class", "p-4 rounded mt-2 d-flex flex-column row no-gutters");

    let inner_bubble = document.createElement("div");
    inner_bubble.setAttribute("class", "col-md-3" + (isSelf?" offset-md-9":""));

    let chat_bubble = document.createElement("div");
    chat_bubble.setAttribute("class", "chat-bubble" + (isSelf? " chat-bubble--right cb-right" : " chat-bubble--left cb-left"));

    let time_block = document.createElement("small");
    time_block.setAttribute("class", "d-block");
    time_block.innerText = time;

    let name_block = document.createElement("small");
    name_block.setAttribute("class", "d-block");
    name_block.innerText = name;

    let message_p = document.createElement("span");
    message_p.innerText = message;

    // link each DOM Elements
    chat_bubble.appendChild(time_block);
    chat_bubble.appendChild(message_p);
    chat_bubble.appendChild(name_block);
    inner_bubble.appendChild(chat_bubble);
    container_bubble.appendChild(inner_bubble);
    panel.appendChild(container_bubble);

    // auto scroll to bottom
    panel.scrollTo(0, panel.scrollHeight);
}
