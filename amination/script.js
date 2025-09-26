// // Rotating banner messages
// const messages = [
//     "👋 Need a Software Developer? Let’s work together!",
//     "🚀 I build scalable, modern web solutions.",
//     "💡 Helping businesses grow with technology.",
//     "🌍 Available for global companies & small businesses."
// ];

// let index = 0;
// const bannerText = document.getElementById("bannerText");

// setInterval(() => {
//     index = (index + 1) % messages.length;
//     bannerText.textContent = messages[index];
// }, 6000);



// setInterval(() => {
//     const banner = document.getElementById('welcomeBanner');
//     const messages = [
//         "👋 Need a Software Developer? Let’s work together!",
//         "🚀 I build scalable, modern web solutions.",
//         "💡 Helping businesses grow with technology.",
//         "🌍 Available for global companies & small businesses."]
//     let index = 0;
//     const bannerText = document.getElementById("bannertext")
//     index = (index + 1) % messages.length;
//     bannerText.textContent = messages[index]


//     banner.style.animation = 'none';
//     banner.offsetHeight; // trigger reflow
//     banner.style.animation = 'slideIn 1s ease-out, fadeOut 1s ease-in 8s forwards';
// }, 6000);

  const banner = document.getElementById('welcomeBanner');
  const bannerText = document.getElementById("bannertext");

  const messages = [
    "👋 Need a Software Developer? Let’s work together!",
    "🚀 I build scalable, modern web solutions.",
    "💡 Helping businesses grow with technology.",
    "🌍 Available for global companies & small businesses."
  ];

  let index = 0; // keep it outside

  setInterval(() => {
    // Update text
    bannerText.textContent = messages[index];

    // Move to next message
    index = (index + 1) % messages.length;

    // Re-trigger animation
    banner.style.animation = 'none';
    banner.offsetHeight; // trigger reflow
    banner.style.animation = 'slideIn 1s ease-out, fadeOut 1s ease-in 5s forwards';
  }, 6000);

