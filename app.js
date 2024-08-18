const generateRandomAdvice = () => {
  hideImage();

  const advices = [
    "If it ain't broke, don't fix it.",
    "If you have the chance, take it!",
    "If you can't do anything about it, there's no point in worrying about it.",
    "Don't always rely on your comforts.",
    "Don't worry about failures, worry about the chances you miss when you don't even try.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Act as if what you do makes a difference. It does.",
    "Don't worry about failures, worry about the chances you miss when you don't even try.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You are never too old to set another goal or to dream a new dream.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You only live once, but if you do it right, once is enough.",
    "You must be the change you wish to see in the world.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "To handle yourself, use your head; to handle others, use your heart.",
    "Nothing in life is to be feared, it is only to be understood.",
    "Life is what happens when you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "The best revenge is massive success.",
  ];

  const randomIndex = Math.floor(Math.random() * advices.length);
  document.getElementById("advice").textContent = advices[randomIndex];
};

const hideImage = () => {
  document.getElementById("img").style.display = "none";
};
