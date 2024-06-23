document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const resizeHandle = document.getElementById('resize-handle');
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    // const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const chatList = document.getElementById('chat-list');
    const chatArea = document.getElementById('chat-area');
    // const toggleIcon = toggleSidebarButton.querySelector('i');

    let isResizing = false;

    resizeHandle.addEventListener('mousedown', function(e) {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;

        const newWidth = e.clientX;
        if (newWidth > 100 && newWidth < window.innerWidth - 100) {
            sidebar.style.width = newWidth + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = 'default';
        }
    });

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            appendMessage('user', message);
            messageInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                appendMessage('bot', 'This is a bot response.');
            }, 1000);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        contentElement.textContent = message;

        messageElement.appendChild(contentElement);
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function addChatToList(dayName, [...chatTitle]) {
        const chatItem = document.createElement('div');
        chatItem.innerHTML = `<span class='each-chat-label'>${dayName}</span>`
        chatItem.classList.add('previous-chat-style');
        for(let i = 0; i < chatTitle.length; i++){
            chatItem.innerHTML += `
            <div class="each-chat-wrapper" data=${chatTitle[i].link}>
                <div>
                    <p>${chatTitle[i].chat}</p>
                    <i class="material-icons chat-more-option">more_vert</i>
                </div>
                <ul class="prev-chat-menu prev-chat-menu-hide">
                    <li>Menu One</li>
                    <li>Menu Two</li>
                </ul>
            </div>
            `;
        }
        
        chatList.appendChild(chatItem);
    }


    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('yesterday',[{chat:'Chat 1', link: 'https://www.linkedin.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);
    addChatToList('today',[{chat:'Chat 1', link: 'https://www.google.com/'}, {chat:'Chat 2', link: 'https://www.linkedin.com/'}]);





    const prevChatMenu = document.querySelectorAll('.chat-more-option');
    const eachChat = document.querySelectorAll('.each-chat-wrapper');

    // prevChatMenu.forEach(eachMenu => {
    //     eachMenu.addEventListener("click", function(e){
    //         e.stopPropagation()
    //         const parentNode = this.parentElement.parentElement;
    //         parentNode.querySelector('.prev-chat-menu').classList.toggle("prev-chat-menu-hide")
            
    //     })
    // })

    document.addEventListener("click", function(event) {
        // Hide all menus when clicking anywhere else on the document
        document.querySelectorAll('.prev-chat-menu').forEach(menu => {
            menu.classList.add('prev-chat-menu-hide');
        });
    });
    
    prevChatMenu.forEach(eachMenu => {
        eachMenu.addEventListener("click", function(e) {
            e.stopPropagation();
            const parentNode = this.parentElement.parentElement;
            const currentMenu = parentNode.querySelector('.prev-chat-menu');
    
            // Close all other menus
            document.querySelectorAll('.prev-chat-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('prev-chat-menu-hide');
                }
            });
            document.querySelector('.sidebar-bottom-menu').classList.add('prev-chat-menu-hide')
    
            // Toggle the current menu
            currentMenu.classList.toggle('prev-chat-menu-hide');
        });
    });

    
    eachChat.forEach(chat => {
        chat.addEventListener("click", function(){
            window.location.href = chat.getAttribute('data')
        })
    })



    const showingMenuButton = document.querySelector('.logo-option .left-side-option div');
    const showMenuList = document.querySelector('.logo-option .left-side-option ul');

    showingMenuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        showMenuList.classList.toggle('block-display');
    })

    // Hide the menu when clicking outside of it
document.addEventListener("click", (event) => {
    if (!showingMenuButton.contains(event.target) && !showMenuList.contains(event.target)) {
        showMenuList.classList.remove('block-display');
    }
});


    const sidebarBottomMenuIcon = document.querySelectorAll('.sidebar-bottom-menu-option');


    document.addEventListener("click", function(event) {
        // Hide all menus when clicking anywhere else on the document
        document.querySelectorAll('.sidebar-bottom-menu').forEach(menu => {
            menu.classList.add('prev-chat-menu-hide');
        });
    });
    
    sidebarBottomMenuIcon.forEach(eachMenu => {
        eachMenu.addEventListener("click", function(e) {
            e.stopPropagation();
            const parentNode = this.parentElement;
            const currentMenu = parentNode.querySelector('ul');
    
            // Close all other menus
            document.querySelectorAll('.prev-chat-menu').forEach(menu => {
                if (menu !== currentMenu) {
                    menu.classList.add('prev-chat-menu-hide');
                }
            });
    
            // Toggle the current menu
            currentMenu.classList.toggle('prev-chat-menu-hide');
        });
    });

});




