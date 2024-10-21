const faqQuestions = [
    {
        question: "What caused the zombie invasion during the French Revolution?",
        answer: "The zombie invasion was triggered by a mysterious virus that was accidentally released from a secret laboratory in Paris, initially intended for biological warfare. The chaos of the revolution and the unrest in the streets created the perfect conditions for the virus to spread rapidly among the population."
    },
    {
        question: "How did the French Revolutionaries respond to the zombie threat?",
        answer: "The revolutionaries initially dismissed the reports of zombies as mere rumors. However, as the attacks grew in frequency and intensity, they organized a militia to combat the undead. They employed guerrilla tactics, using the cover of the revolution to wage war on the zombies while trying to maintain their fight for liberty."
    },
    {
        question: "What were the key events during the zombie invasion?",
        answer: "Some key events included the Siege of the Bastille, where zombies attacked revolutionaries as they stormed the prison, and the infamous 'Night of the Living Guillotine,' where a mass gathering was turned into chaos as zombies overran the crowd. Ultimately, the revolutionaries formed alliances with other factions to combat the zombie threat and restore order."
    }
];

const faqBox = document.getElementById("faq-box");
let faqNum = 1;

faqQuestions.forEach((faq) => {
    const faqDiv = document.createElement("div");
    faqDiv.classList.add("flex");
    faqDiv.classList.add("container");
    faqDiv.id = `faq${faqNum}`;
    
    const questionPara = document.createElement("p");
    questionPara.textContent = faq.question;
    
    const faqBtn = document.createElement("button");
    faqBtn.id = `faq-btn-${faqNum}`;
    faqBtn.classList.add("btn");
    faqBtn.textContent = "+";
    
    const answerDialog = document.createElement("dialog");
    answerDialog.id = `answer${faqNum}`;
    answerDialog.textContent = faq.answer;

    faqDiv.appendChild(questionPara);
    faqDiv.appendChild(faqBtn);
    faqDiv.appendChild(answerDialog);

    faqBox.appendChild(faqDiv);

    faqBtn.addEventListener("click", () => {
        answerDialog.showModal();
    });

    answerDialog.addEventListener("click", () => {
        answerDialog.close()
    })

    faqNum++;
});
