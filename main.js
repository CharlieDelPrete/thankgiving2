document.getElementById("reveal-fact-btn").addEventListener("click", function() {
    const facts = [
        "Did you know? The first Thanksgiving was celebrated in 1621!",
        "Thanksgiving didn’t become a national holiday until 1863.",
        "About 46 million turkeys are cooked for Thanksgiving every year!",
        "The average person consumes 3,000 calories during Thanksgiving dinner."
    ];
    
   
    const randomIndex = Math.floor(Math.random() * facts.length);
    
 
    let funFactElement = document.getElementById("fun-fact");
    funFactElement.innerText = facts[randomIndex];
    
    if (randomIndex === 0) {
        document.body.style.backgroundColor = "#FFDFB6";  
    } else if (randomIndex === 1) {
        document.body.style.backgroundColor = "#F7C59F";
    } else if (randomIndex === 2) {
        document.body.style.backgroundColor = "#FFB085";
    } else {
        document.body.style.backgroundColor = "#FF7F50";
    }
});


const container = document.getElementById('leaves-container');


const leafImages = [
    'images/leaf1.png', 
    'images/leaf2.png', 
    'images/leaf3.png', 
    'images/leaf4.png'  
];


function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.backgroundImage = `url('${leafImages[Math.floor(Math.random() * leafImages.length)]}')`;

   
    const startX = Math.random() * 100; 
    const rotation = Math.random() * 360; 
    const scale = Math.random() * 0.3 + 0.7;
    const fallDuration = 10; 

    leaf.style.left = `${startX}vw`;
    leaf.style.transform = `rotate(${rotation}deg) scale(${scale})`;

    container.appendChild(leaf);

 
    const endX = startX + (Math.random() * 20 - 10); 
    const endY = 100; 
    const bezierX1 = startX + Math.random() * 40 - 20; 
    const bezierY1 = Math.random() * 40; 
    const bezierX2 = startX + Math.random() * 40 - 20; 
    const bezierY2 = 100; 

    leaf.animate([
        { transform: `translate(0, 0) rotate(${rotation}deg) scale(${scale})` },
        { transform: `translate(${bezierX1}vw, ${bezierY1}vh) rotate(${rotation + 180}deg) scale(${scale})` },
        { transform: `translate(${bezierX2}vw, ${bezierY2}vh) rotate(${rotation + 360}deg) scale(${scale})` },
        { transform: `translate(${endX}vw, ${endY}vh) rotate(${rotation + 540}deg) scale(${scale})` }
    ], {
        duration: fallDuration * 1000,
        easing: 'cubic-bezier(.4, .6, .6, 1)', 
        iterations: 1,
        fill: 'forwards'
    });

   
    setTimeout(() => {
        leaf.remove();
    }, fallDuration * 1000);
}


function generateLeaves() {
    createLeaf();
    setTimeout(generateLeaves, 800); 
}


generateLeaves();
