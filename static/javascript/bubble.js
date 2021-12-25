function add_bubble() {
    let panel = document.getElementById("chat-panel");
    let container_bubble = document.createElement("div");
    container_bubble.setAttribute("class", "p-4 rounded mt-2 d-flex flex-column row no-gutters");

    let inner_bubble = document.createElement("div");
    inner_bubble.setAttribute("class", "col-md-3");

    let chat_bubble = document.createElement("div");
    chat_bubble.setAttribute("class", "chat-bubble chat-bubble--left cb-left");
    chat_bubble.innerText = "Hello World!!!";

    let time_block = document.createElement("small");
    time_block.setAttribute("class", "d-block");
    time_block.innerText = "12.16";

    // link each DOM Elements
    chat_bubble.appendChild(time_block);
    inner_bubble.appendChild(chat_bubble);
    container_bubble.appendChild(inner_bubble);
    panel.appendChild(container_bubble);

    // auto scroll to bottom
    panel.scrollTo(0, panel.scrollHeight);
}

/*
<div class="p-4 rounded mt-2 d-flex flex-column row no-gutters ">
					<div class="col-md-3">
						<div class="chat-bubble chat-bubble--left cb-left">Hello World!
							<small class="d-block">12.15</small>
						</div>
					</div>
				</div>
 */