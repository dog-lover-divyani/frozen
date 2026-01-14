const characterImg = document.getElementById("character");
const messageDiv = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const bgMusic = document.getElementById("bgMusic");

let index = 0;
let musicStarted = false;

// 💬 Messages
const messages = [
    { text: "Hey you, my Frozen paglu ❄️",char : "elsa.png"  },
    { text: "You make even winters feel warm 🥹",char : "anna.png" },
    { text: "Elsa-level cool but soft inside 💙",char : "elsa.png" },
    { text: "Anna energy — pure love & chaos ❤️",char : "anna.png" },
    { text: "Like Kristoff, you’re the kind of awesome everyone can count on 🪓",char : "kristoff.png" },
    { text: "You’ve got Sven’s heart—sweet, silly, and always by my side ❄️🦌",char : "sven.png" },
    { text: "Olaf just wants hugs 🤗",char : "olaf.png"  },
    { text: "Love you endlessly ❄️💙",char : "elsa.png"  }
];

// ▶️ Next button
nextBtn.addEventListener("click", () => {

    // 🎵 Start music on first click
    if (!musicStarted) {
        bgMusic.play().catch(() => {});
        musicStarted = true;
    }

    if (index < messages.length) {
        messageDiv.textContent = messages[index].text;

        // 🖼️ SHOW CHARACTER IMAGE
        characterImg.src = messages[index].char;
        characterImg.style.display = "block";

        // re-trigger animation (optional but nice)
        characterImg.classList.remove("pop");
        void characterImg.offsetWidth;
        characterImg.classList.add("pop");

        index++;
    } else {
        messageDiv.textContent = "❄️ The End ❄️";
        characterImg.style.display = "none";
        nextBtn.style.display = "none";
    }
});



// ❄️ SNOW SYSTEM
const snowContainer = document.createElement("div");
snowContainer.className = "snow";
document.body.appendChild(snowContainer);

function createSnowflake() {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.textContent = "❄️";

    flake.style.left = Math.random() * window.innerWidth + "px";
    flake.style.fontSize = Math.random() * 16 + 12 + "px";
    flake.style.animationDuration = Math.random() * 5 + 4 + "s";

    snowContainer.appendChild(flake);

    setTimeout(() => {
        flake.remove();
    }, 10000);
}

setInterval(createSnowflake, 200);



// 🌬️ FLOATING FROZEN CHARACTERS

