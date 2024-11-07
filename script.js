const characters = {
    en: [
        { 
            name: "Harry Potter", 
            traits: ["Brave", "Loyal", "Selfless", "Determined", "Resilient"], 
            description: "Harry is known for his bravery, loyalty, and strong sense of justice. He is willing to face any danger to protect those he loves and stand up for what is right.", 
            motivation: "Even when things seem impossible, remember that courage and loyalty will see you through. You have the heart of a hero!"
        },
        { 
            name: "Hermione Granger", 
            traits: ["Intelligent", "Hardworking", "Logical", "Compassionate", "Perceptive"], 
            description: "Hermione is incredibly intelligent and values knowledge. She’s hardworking, often thinking through problems logically and finding creative solutions.", 
            motivation: "Never doubt the power of knowledge and hard work. You have the strength to overcome any obstacle with determination and wisdom."
        },
        { 
            name: "Ron Weasley", 
            traits: ["Loyal", "Brave", "Humble", "Supportive", "Good-humored"], 
            description: "Ron is a loyal and supportive friend who values friendship deeply. Though he often underestimates himself, his bravery shines through in difficult times.", 
            motivation: "Loyalty and kindness are among the greatest strengths. Trust yourself, and you’ll find the courage to face any challenge."
        },
        { 
            name: "Luna Lovegood", 
            traits: ["Imaginative", "Kind", "Unique", "Optimistic", "Wise"], 
            description: "Luna is known for her unique perspective and open-mindedness. She’s kind-hearted, imaginative, and unafraid to embrace her individuality.", 
            motivation: "Embrace your uniqueness and stay true to yourself. Your kindness and wisdom make the world a better place."
        },
        { 
            name: "Draco Malfoy", 
            traits: ["Ambitious", "Cunning", "Loyal (to family)", "Conflicted", "Resilient"], 
            description: "Draco is complex, often torn between loyalty to his family and his own beliefs. His ambition and resilience are strong, even in the face of inner conflict.", 
            motivation: "It’s never too late to choose your own path. Use your strength and ambition to find the courage to become who you truly want to be."
        },
        { 
            name: "Neville Longbottom", 
            traits: ["Brave", "Determined", "Loyal", "Kind", "Humble"], 
            description: "Neville’s bravery and determination grow over time. Despite self-doubt, he proves his courage and loyalty, standing up for what’s right.", 
            motivation: "Courage isn’t about being fearless; it’s about facing your fears. Believe in yourself, and you’ll accomplish incredible things."
        },
        { 
            name: "Ginny Weasley", 
            traits: ["Brave", "Independent", "Confident", "Loyal", "Compassionate"], 
            description: "Ginny is fiercely independent and confident, with a strong sense of loyalty and compassion. She’s unafraid to stand up for herself and others.", 
            motivation: "Believe in your strength and independence. You have the courage to achieve anything you set your mind to."
        },
        { 
            name: "Albus Dumbledore", 
            traits: ["Wise", "Compassionate", "Powerful", "Strategic", "Mysterious"], 
            description: "Dumbledore is a powerful and wise wizard with a deep understanding of people and life. He often sees beyond the surface, thinking strategically for the greater good.", 
            motivation: "Wisdom and compassion can change the world. Trust your intuition, and let your insight guide you toward greatness."
        }
    ],
        no: [
            { 
                name: "Harry Potter", 
                traits: ["Modig", "Lojal", "Uselvisk", "Besluttsom", "Utholdende"], 
                description: "Harry er kjent for sitt mot, lojalitet og sterke rettferdighetssans. Han er villig til å møte fare for å beskytte dem han elsker og kjempe for det som er rett.", 
                motivation: "Selv når ting virker umulig, husk at mot og lojalitet vil hjelpe deg gjennom. Du har en helt i hjertet!"
            },
            { 
                name: "Hermione Granger", 
                traits: ["Intelligent", "Hardtarbeidende", "Logisk", "Medfølende", "Persevererende"], 
                description: "Hermione er utrolig intelligent og verdsetter kunnskap. Hun jobber hardt og tenker ofte logisk gjennom problemer og finner kreative løsninger.", 
                motivation: "Aldri tvil på kraften av kunnskap og hardt arbeid. Du har styrken til å overvinne enhver hindring med besluttsomhet og visdom."
            },
            { 
                name: "Ron Weasley", 
                traits: ["Lojal", "Modig", "Beskjeden", "Støttende", "Godhumoristisk"], 
                description: "Ron er en lojal og støttende venn som verdsetter vennskap dypt. Selv om han ofte undervurderer seg selv, skinner hans mot gjennom i vanskelige tider.", 
                motivation: "Lojalitet og vennlighet er blant de største styrkene. Stol på deg selv, og du vil finne motet til å møte enhver utfordring."
            },
            { 
                name: "Luna Lovegood", 
                traits: ["Fantasifull", "Snill", "Uvanlig", "Optimistisk", "Vis"], 
                description: "Luna er kjent for sitt unike perspektiv og åpne sinn. Hun er godhjertet, fantasifull og ikke redd for å omfavne sin individualitet.", 
                motivation: "Omfavn din unikhet og vær tro mot deg selv. Din vennlighet og visdom gjør verden til et bedre sted."
            },
            { 
                name: "Draco Malfoy", 
                traits: ["Ambisiøs", "Listig", "Lojal (mot familien)", "Kongfliktfylt", "Utholdende"], 
                description: "Draco er kompleks, ofte delt mellom lojalitet til familien og sine egne overbevisninger. Hans ambisjon og utholdenhet er sterke, selv i møte med indre konflikt.", 
                motivation: "Det er aldri for sent å velge din egen vei. Bruk styrken og ambisjonen din til å finne motet til å bli den du virkelig ønsker å være."
            },
            { 
                name: "Neville Longbottom", 
                traits: ["Modig", "Besluttsom", "Lojal", "Snill", "Beskjeden"], 
                description: "Nevilles mot og besluttsomhet vokser over tid. Til tross for selv-tvilen, beviser han sitt mot og sin lojalitet ved å stå opp for det som er rett.", 
                motivation: "Mot er ikke å være fryktløs; det handler om å møte frykten din. Tro på deg selv, så vil du oppnå utrolige ting."
            },
            { 
                name: "Ginny Weasley", 
                traits: ["Modig", "Selvstendig", "Selvsikker", "Lojal", "Medfølende"], 
                description: "Ginny er fryktelig uavhengig og selvsikker, med en sterk følelse av lojalitet og medfølelse. Hun er ikke redd for å stå opp for seg selv og andre.", 
                motivation: "Tro på styrken og uavhengigheten din. Du har motet til å oppnå alt du setter deg fore."
            },
            { 
                name: "Albus Dumbledore", 
                traits: ["Vis", "Medfølende", "Mektig", "Strategisk", "Mysterisk"], 
                description: "Dumbledore er en mektig og vis trollmann med en dyp forståelse av mennesker og livet. Han ser ofte utover overflaten, tenker strategisk for det større gode.", 
                motivation: "Visdom og medfølelse kan forandre verden. Stol på din intuisjon, og la innsikten din lede deg mot storhet."
            }
        ]
    };
    

const questions = {
    en: [
        {
            question: "What's your favorite way to spend your free time?",
            answers: [
                { text: "Exploring new places", trait: "Brave" },
                { text: "Reading or studying", trait: "Intelligent" },
                { text: "Spending time with friends", trait: "Loyal" },
                { text: "Helping others", trait: "Compassionate" }
            ]
        },
        {
            question: "How do you handle conflicts?",
            answers: [
                { text: "Stand up for what's right", trait: "Brave" },
                { text: "Try to understand both sides", trait: "Wise" },
                { text: "Look for a peaceful solution", trait: "Kind" },
                { text: "Avoid if possible", trait: "Loyal" }
            ]
        },
        {
            question: "Which quality do you value most in a friend?",
            answers: [
                { text: "Courage", trait: "Brave" },
                { text: "Intelligence", trait: "Intelligent" },
                { text: "Honesty", trait: "Loyal" },
                { text: "Kindness", trait: "Compassionate" }
            ]
        },
        {
            question: "How would you describe your study habits?",
            answers: [
                { text: "Very focused and disciplined", trait: "Hardworking" },
                { text: "I study when needed", trait: "Practical" },
                { text: "I like to explore creatively", trait: "Imaginative" },
                { text: "I study with friends", trait: "Supportive" }
            ]
        },
        {
            question: "Do you prefer working alone or with others?",
            answers: [
                { text: "I prefer to work alone", trait: "Independent" },
                { text: "I like working in groups", trait: "Supportive" },
                { text: "Depends on the task", trait: "Strategic" },
                { text: "As long as I can help others", trait: "Compassionate" }
            ]
        },
        {
            question: "How do you react under pressure?",
            answers: [
                { text: "Stay calm and analyze the situation", trait: "Wise" },
                { text: "Face it head-on", trait: "Brave" },
                { text: "Stay calm and stick with my friends", trait: "Loyal" },
                { text: "Find a clever way out", trait: "Cunning" }
            ]
        },
        {
            question: "What do you do when faced with a difficult decision?",
            answers: [
                { text: "Go with my gut feeling", trait: "Resilient" },
                { text: "Seek advice from others", trait: "Supportive" },
                { text: "Think it through logically", trait: "Intelligent" },
                { text: "Consider the impact on others", trait: "Compassionate" }
            ]
        },
        {
            question: "How do you approach a new and complex task?",
            answers: [
                { text: "Tackle it head-on", trait: "Determined" },
                { text: "Think it through strategically", trait: "Strategic" },
                { text: "Look for creative solutions", trait: "Imaginative" },
                { text: "Do my research first", trait: "Intelligent" }
            ]
        },
        {
            question: "What’s most important to you in life?",
            answers: [
                { text: "Courage", trait: "Brave" },
                { text: "Knowledge", trait: "Intelligent" },
                { text: "Friendship", trait: "Loyal" },
                { text: "Kindness", trait: "Compassionate" }
            ]
        },
        {
            question: "What role do you usually take in a group?",
            answers: [
                { text: "Leader", trait: "Brave" },
                { text: "Supporter", trait: "Loyal" },
                { text: "Strategist", trait: "Wise" },
                { text: "Mediator", trait: "Kind" }
            ]
        },
        {
            question: "How would your friends describe you?",
            answers: [
                { text: "Brave and strong", trait: "Brave" },
                { text: "Kind and caring", trait: "Compassionate" },
                { text: "Creative and unique", trait: "Imaginative" },
                { text: "Smart and reliable", trait: "Intelligent" }
            ]
        },
        {
            question: "How do you react to unfair treatment?",
            answers: [
                { text: "Speak out against it", trait: "Brave" },
                { text: "Try to fix it calmly", trait: "Wise" },
                { text: "Stand by my friends", trait: "Loyal" },
                { text: "Stay positive and move on", trait: "Resilient" }
            ]
        },
        {
            question: "What’s your biggest strength?",
            answers: [
                { text: "Courage", trait: "Brave" },
                { text: "Intelligence", trait: "Intelligent" },
                { text: "Loyalty", trait: "Loyal" },
                { text: "Kindness", trait: "Compassionate" }
            ]
        },
        {
            question: "How do you motivate others?",
            answers: [
                { text: "Encourage them to be brave", trait: "Supportive" },
                { text: "Help them see the positive", trait: "Optimistic" },
                { text: "Show them how to find solutions", trait: "Strategic" },
                { text: "Give them moral support", trait: "Kind" }
            ]
        },
        {
            question: "What do you think makes a hero?",
            answers: [
                { text: "Bravery", trait: "Brave" },
                { text: "Wisdom", trait: "Wise" },
                { text: "Loyalty", trait: "Loyal" },
                { text: "Kindness", trait: "Compassionate" }
            ]
        },
        {
            question: "How do you feel about taking risks?",
            answers: [
                { text: "I take risks if needed", trait: "Brave" },
                { text: "I prefer to avoid them", trait: "Cautious" },
                { text: "Only if it helps others", trait: "Compassionate" },
                { text: "I assess carefully first", trait: "Strategic" }
            ]
        },
        {
            question: "What’s your opinion on rules?",
            answers: [
                { text: "Rules are there for a reason", trait: "Wise" },
                { text: "Rules can be bent", trait: "Cunning" },
                { text: "Rules keep us safe", trait: "Responsible" },
                { text: "Some rules can be challenged", trait: "Independent" }
            ]
        },
        {
            question: "Do you like to stand out or blend in?",
            answers: [
                { text: "I like to stand out", trait: "Confident" },
                { text: "I prefer to blend in", trait: "Humble" },
                { text: "Depends on the situation", trait: "Strategic" },
                { text: "I like to be myself", trait: "Unique" }
            ]
        },
        {
            question: "How would you respond to someone being bullied?",
            answers: [
                { text: "Stand up for them", trait: "Brave" },
                { text: "Report the situation", trait: "Responsible" },
                { text: "Comfort them", trait: "Compassionate" },
                { text: "Help them find a solution", trait: "Strategic" }
            ]
        },
        {
            question: "What’s your approach to learning new things?",
            answers: [
                { text: "Dive right in", trait: "Adventurous" },
                { text: "Plan and study", trait: "Intelligent" },
                { text: "Get support from friends", trait: "Supportive" },
                { text: "Learn creatively", trait: "Imaginative" }
            ]
        },
        {
            question: "How do you handle failure?",
            answers: [
                { text: "Learn from it", trait: "Wise" },
                { text: "Keep going", trait: "Resilient" },
                { text: "Talk to friends about it", trait: "Loyal" },
                { text: "Stay positive", trait: "Optimistic" }
            ]
        },
        {
            question: "How do you keep yourself organized?",
            answers: [
                { text: "With a plan", trait: "Strategic" },
                { text: "With creativity", trait: "Imaginative" },
                { text: "By seeking help from others", trait: "Supportive" },
                { text: "Naturally organized", trait: "Intelligent" }
            ]
        },
        {
            question: "What’s your view on helping others?",
            answers: [
                { text: "It’s very important", trait: "Compassionate" },
                { text: "I always support my friends", trait: "Loyal" },
                { text: "I help when I can", trait: "Responsible" },
                { text: "Helping others helps us all", trait: "Wise" }
            ]
        },
        {
            question: "If you had a magical power, what would it be?",
            answers: [
                { text: "Invisibility", trait: "Cunning" },
                { text: "Flying", trait: "Brave" },
                { text: "Healing", trait: "Compassionate" },
                { text: "Wisdom", trait: "Wise" }
            ]
        }
    ],
    no: [
        {
                    question: "Hvordan liker du å tilbringe fritiden din?",
                    answers: [
                        { text: "Utforske nye steder", trait: "Modig" },
                        { text: "Lese eller studere", trait: "Intelligent" },
                        { text: "Tilbringe tid med venner", trait: "Lojal" },
                        { text: "Hjelpe andre", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan håndterer du konflikter?",
                    answers: [
                        { text: "Stå opp for det som er rett", trait: "Modig" },
                        { text: "Prøve å forstå begge sider", trait: "Vis" },
                        { text: "Se etter en fredelig løsning", trait: "Snill" },
                        { text: "Unngå hvis mulig", trait: "Lojal" }
                    ]
                },
                {
                    question: "Hvilken egenskap verdsetter du mest hos en venn?",
                    answers: [
                        { text: "Mot", trait: "Modig" },
                        { text: "Intelligens", trait: "Intelligent" },
                        { text: "Ærlighet", trait: "Lojal" },
                        { text: "Godhet", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan vil du beskrive dine studievaner?",
                    answers: [
                        { text: "Veldig fokusert og disiplinert", trait: "Hardtarbeidende" },
                        { text: "Jeg studerer når det trengs", trait: "Praktisk" },
                        { text: "Jeg liker å utforske kreativt", trait: "Fantasi" },
                        { text: "Jeg studerer sammen med venner", trait: "Støttende" }
                    ]
                },
                {
                    question: "Foretrekker du å jobbe alene eller med andre?",
                    answers: [
                        { text: "Jeg foretrekker å jobbe alene", trait: "Selvstendig" },
                        { text: "Jeg liker å jobbe i grupper", trait: "Støttende" },
                        { text: "Avhengig av oppgaven", trait: "Strategisk" },
                        { text: "Så lenge jeg kan hjelpe andre", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan reagerer du under press?",
                    answers: [
                        { text: "Forblir rolig og analyserer situasjonen", trait: "Vis" },
                        { text: "Møter det rett på", trait: "Modig" },
                        { text: "Holder meg rolig sammen med vennene mine", trait: "Lojal" },
                        { text: "Finner en smart vei ut", trait: "Lur" }
                    ]
                },
                {
                    question: "Hva gjør du når du står overfor en vanskelig beslutning?",
                    answers: [
                        { text: "Følger magefølelsen", trait: "Utholdende" },
                        { text: "Ber om råd fra andre", trait: "Støttende" },
                        { text: "Tenker gjennom logisk", trait: "Intelligent" },
                        { text: "Vurderer påvirkningen på andre", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan tilnærmer du deg en ny og kompleks oppgave?",
                    answers: [
                        { text: "Tar tak i det rett på", trait: "Besluttsom" },
                        { text: "Tenker strategisk", trait: "Strategisk" },
                        { text: "Leter etter kreative løsninger", trait: "Fantasi" },
                        { text: "Gjennomfører grundig research først", trait: "Intelligent" }
                    ]
                },
                {
                    question: "Hva er det viktigste for deg i livet?",
                    answers: [
                        { text: "Mot", trait: "Modig" },
                        { text: "Kunnskap", trait: "Intelligent" },
                        { text: "Vennskap", trait: "Lojal" },
                        { text: "Godhet", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvilken rolle tar du vanligvis i en gruppe?",
                    answers: [
                        { text: "Leder", trait: "Modig" },
                        { text: "Støttespiller", trait: "Lojal" },
                        { text: "Strateg", trait: "Vis" },
                        { text: "Megler", trait: "Snill" }
                    ]
                },
                {
                    question: "Hvordan ville vennene dine beskrive deg?",
                    answers: [
                        { text: "Modig og sterk", trait: "Modig" },
                        { text: "Snill og omsorgsfull", trait: "Medfølende" },
                        { text: "Kreativ og unik", trait: "Fantasi" },
                        { text: "Smart og pålitelig", trait: "Intelligent" }
                    ]
                },
                {
                    question: "Hvordan reagerer du på urettferdig behandling?",
                    answers: [
                        { text: "Sier fra mot det", trait: "Modig" },
                        { text: "Prøver å ordne det rolig", trait: "Vis" },
                        { text: "Står ved vennenes side", trait: "Lojal" },
                        { text: "Forblir positiv og går videre", trait: "Utholdende" }
                    ]
                },
                {
                    question: "Hva er din største styrke?",
                    answers: [
                        { text: "Mot", trait: "Modig" },
                        { text: "Intelligens", trait: "Intelligent" },
                        { text: "Lojalitet", trait: "Lojal" },
                        { text: "Godhet", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan motiverer du andre?",
                    answers: [
                        { text: "Oppmuntrer dem til å være modige", trait: "Støttende" },
                        { text: "Hjelper dem å se det positive", trait: "Optimistisk" },
                        { text: "Viser dem løsninger", trait: "Strategisk" },
                        { text: "Gir moralsk støtte", trait: "Snill" }
                    ]
                },
                {
                    question: "Hva mener du gjør en helt?",
                    answers: [
                        { text: "Mot", trait: "Modig" },
                        { text: "Visdom", trait: "Vis" },
                        { text: "Lojalitet", trait: "Lojal" },
                        { text: "Godhet", trait: "Medfølende" }
                    ]
                },
                {
                    question: "Hvordan føler du om å ta risiko?",
                    answers: [
                        { text: "Jeg tar risiko hvis det trengs", trait: "Modig" },
                        { text: "Jeg foretrekker å unngå dem", trait: "Forsiktig" },
                        { text: "Bare hvis det hjelper andre", trait: "Medfølende" },
                        { text: "Vurderer nøye først", trait: "Strategisk" }
                    ]
                },
                {
                    question: "Hva er din holdning til regler?",
                    answers: [
                        { text: "Regler er der for en grunn", trait: "Vis" },
                        { text: "Regler kan bøyes", trait: "Lur" },
                        { text: "Regler holder oss trygge", trait: "Ansvarlig" },
                        { text: "Noen regler kan utfordres", trait: "Selvstendig" }
                    ]
                },
                {
                    question: "Liker du å skille deg ut eller blande deg inn?",
                    answers: [
                        { text: "Jeg liker å skille meg ut", trait: "Selvsikker" },
                        { text: "Jeg foretrekker å blande meg inn", trait: "Ydmyk" },
                        { text: "Avhengig av situasjonen", trait: "Strategisk" },
                        { text: "Jeg liker å være meg selv", trait: "Unik" }
                    ]
                },
                {
                    question: "Hvordan ville du reagere på at noen blir mobbet?",
                    answers: [
                        { text: "Står opp for dem", trait: "Modig" },
                        { text: "Rapporterer situasjonen", trait: "Ansvarlig" },
                        { text: "Trøster dem", trait: "Medfølende" },
                        { text: "Hjelper dem å finne en løsning", trait: "Strategisk" }
                    ]
                },
                {
                    question: "Hvordan tilnærmer du deg å lære nye ting?",
                    answers: [
                        { text: "Kaster meg rett ut i det", trait: "Eventyrlysten" },
                        { text: "Planlegger og studerer", trait: "Intelligent" },
                        { text: "Får støtte fra venner", trait: "Støttende" },
                        { text: "Lærer på en kreativ måte", trait: "Fantasi" }
                    ]
                },
                {
                    question: "Hvordan håndterer du nederlag?",
                    answers: [
                        { text: "Lærer av det", trait: "Vis" },
                        { text: "Fortsetter videre", trait: "Utholdende" },
                        { text: "Snakker med venner om det", trait: "Lojal" },
                        { text: "Forblir positiv", trait: "Optimistisk" }
                    ]
                },
                {
                    question: "Hvordan holder du deg organisert?",
                    answers: [
                        { text: "Med en plan", trait: "Strategisk" },
                        { text: "Med kreativitet", trait: "Fantasi" },
                        { text: "Ved å få hjelp fra andre", trait: "Støttende" },
                        { text: "Naturlig organisert", trait: "Intelligent" }
                    ]
                },
                {
                    question: "Hva er ditt syn på å hjelpe andre?",
                    answers: [
                        { text: "Det er veldig viktig", trait: "Medfølende" },
                        { text: "Jeg støtter alltid vennene mine", trait: "Lojal" },
                        { text: "Jeg hjelper når jeg kan", trait: "Ansvarlig" },
                        { text: "Å hjelpe andre hjelper oss alle", trait: "Vis" }
                    ]
                },
                {
                    question: "Hvis du hadde en magisk kraft, hva ville det være?",
                    answers: [
                        { text: "Usynlighet", trait: "Lur" },
                        { text: "Flyging", trait: "Modig" },
                        { text: "Helbredelse", trait: "Medfølende" },
                        { text: "Visdom", trait: "Vis" }
                    ]
                }
            ]        
        };

        

// Use `questions` instead of `allQuestions` for random selection and quiz flow
let selectedQuestions = []; // Holds 12 randomly selected questions
let currentLanguage = 'en';
let answerTally = {}; // Tracks trait counts
let currentQuestionIndex = 0;

// Function to randomly select 12 questions
function selectRandomQuestions() {
    const selected = [];
    const languageQuestions = questions[currentLanguage];
    
    while (selected.length < 12) {
        const randomIndex = Math.floor(Math.random() * languageQuestions.length);
        const question = languageQuestions[randomIndex];
        
        if (!selected.includes(question)) {
            selected.push(question);
        }
    }
    console.log("Selected 12 random questions:", selected);
    return selected;
}

// Switch language function
function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'no' : 'en';
    console.log("Switched language to:", currentLanguage);
    resetQuiz();
}

// Load quiz question
function loadQuiz() {
    console.log("Loading question index:", currentQuestionIndex);
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    
    answersContainer.innerHTML = ""; // Clear previous answers

    const questionData = selectedQuestions[currentQuestionIndex];
    questionContainer.textContent = questionData.question;

    // Create answer buttons
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(answer.trait));
        answersContainer.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(trait) {
    console.log("Selected answer trait:", trait);
    answerTally[trait] = (answerTally[trait] || 0) + 1;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

// Display the result
function showResult() {
    console.log("Final tally:", answerTally);
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    // Hide question and answers
    document.querySelector('.question-container').style.display = 'none';
    document.getElementById('answers').style.display = 'none';

    // Determine the trait with the highest tally
    const highestTrait = Object.keys(answerTally).reduce((a, b) =>
        answerTally[a] > answerTally[b] ? a : b
    );

    // Find characters matching the highest trait
    const matchingCharacters = characters[currentLanguage].filter(char => char.traits.includes(highestTrait));

    // Randomly select one of the matching characters if there are multiple
    const character = matchingCharacters[Math.floor(Math.random() * matchingCharacters.length)];

    if (character) {
        document.getElementById('result-title').textContent = `You are ${character.name}!`;
        document.getElementById('result-description').textContent = character.description;
        document.getElementById('result-motivation').textContent = character.motivation;

        // Optional: If you have an image for each character, set it here
        // document.getElementById('result-image').src = `/images/${character.name.toLowerCase().replace(' ', '_')}.jpg`;
    } else {
        // Fallback in case no character is found (just in case)
        document.getElementById('result-title').textContent = "Character not found";
        document.getElementById('result-description').textContent = "No matching character description available.";
        document.getElementById('result-motivation').textContent = "Try the quiz again to see who you might be!";
    }

    // Display the "Try Again" button
    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = "Try Again";
    tryAgainButton.classList.add('try-again-button');
    tryAgainButton.onclick = resetQuiz;
    resultContainer.appendChild(tryAgainButton);
}


// Reset the quiz
function resetQuiz() {
    answerTally = {};
    currentQuestionIndex = 0;
    selectedQuestions = selectRandomQuestions();

    document.getElementById('result-container').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';
    document.getElementById('answers').style.display = 'block';

    const tryAgainButton = document.querySelector('.try-again-button');
    if (tryAgainButton) tryAgainButton.remove();

    loadQuiz();
}

// Initialize quiz on page load
window.onload = () => {
    selectedQuestions = selectRandomQuestions();
    loadQuiz();

    document.getElementById('flag-en').addEventListener('click', () => {
        if (currentLanguage !== 'en') switchLanguage();
    });
    document.getElementById('flag-no').addEventListener('click', () => {
        if (currentLanguage !== 'no') switchLanguage();
    });
};