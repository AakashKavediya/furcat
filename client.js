let ws;

function connect() {
  ws = new WebSocket("ws://" + window.location.host);
  ws.onmessage = (event) => {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML += `<p>${event.data}</p>`;
  };
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      if (data.message === "User registered successfully") {
        login();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      if (data.message === "Login successful") {
        document.getElementById("auth").style.display = "none";
        document.getElementById("main").style.display = "block";
        connect();
        loadTweets();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function postTweet() {
  const content = document.getElementById("tweet-content").value;
  fetch("/api/tweet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
      document.getElementById("tweet-content").value = "";
      loadTweets();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function loadTweets() {
  fetch("/api/tweets")
    .then((response) => response.json())
    .then((tweets) => {
      const tweetsContainer = document.getElementById("tweets");
      tweetsContainer.innerHTML = "<h2>Recent Tweets</h2>";
      tweets.forEach((tweet) => {
        const tweetElement = document.createElement("div");
        tweetElement.className = "tweet";
        tweetElement.innerHTML = `
                    <span class="username">${tweet.user.username}</span>
                    <span class="timestamp">${new Date(tweet.createdAt).toLocaleString()}</span>
                    <p>${tweet.content}</p>
                `;
        tweetsContainer.appendChild(tweetElement);
      });
    });
}

function sendChatMessage() {
  const chatInput = document.getElementById("chat-input");
  const message = chatInput.value;
  ws.send(message);
  chatInput.value = "";
}

// Load tweets periodically
setInterval(loadTweets, 10000);
