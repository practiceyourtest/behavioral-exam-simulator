document.addEventListener('DOMContentLoaded', () => {
    const quizDatabase = {
        "ABA Principles": [
            { question: "Which of the following is an example of negative reinforcement?", answers: [{ text: "A child gets a sticker for cleaning their room.", correct: false }, { text: "A loud alarm stops when a driver fastens their seatbelt.", correct: true }, { text: "A teenager loses phone privileges for breaking curfew.", correct: false }, { text: "A student is praised for getting a good grade.", correct: false }], explanation: "Negative reinforcement occurs when a stimulus (usually aversive) is removed after a behavior, making that behavior more likely to occur in the future. The removal of the loud alarm increases the behavior of fastening the seatbelt." },
            { question: "What defines an 'extinction burst'?", answers: [{ text: "The gradual decrease and disappearance of a behavior.", correct: false }, { text: "A sudden, temporary increase in the frequency and intensity of a behavior when reinforcement is withdrawn.", correct: true }, { text: "The reappearance of a behavior after it has been extinguished.", correct: false }, { text: "A procedure where reinforcement is delivered for not engaging in the target behavior.", correct: false }], explanation: "An extinction burst is a predictable, temporary increase in the problem behavior's frequency, intensity, and variability after the reinforcer that was maintaining it is removed." },
            { question: "A Motivating Operation (MO) primarily alters the...", answers: [{ text: "consequence of a behavior.", correct: false }, { text: "form of a behavior.", correct: false }, { text: "effectiveness of a reinforcer and the frequency of behavior that has been reinforced by it.", correct: true }, { text: "antecedent stimulus that signals reinforcement availability.", correct: false }], explanation: "MOs have two effects: a value-altering effect (making a reinforcer more or less valuable) and a behavior-altering effect (increasing or decreasing the frequency of behavior that accesses that reinforcer)." },
            { question: "Differential Reinforcement of Other Behavior (DRO) involves:", answers: [{ text: "Reinforcing a behavior that is incompatible with the problem behavior.", correct: false }, { text: "Reinforcing gradually lower rates of the problem behavior.", correct: false }, { text: "Reinforcing any behavior except the problem behavior during a specific interval.", correct: true }, { text: "Reinforcing an alternative, appropriate behavior.", correct: false }], explanation: "DRO is a procedure where reinforcement is delivered for the absence of the target problem behavior for a specified period." },
            { question: "What is shaping?", answers: [{ text: "Linking a sequence of behaviors together.", correct: false }, { text: "A procedure of reinforcing successive approximations to a target behavior.", correct: true }, { text: "Using a prompt to elicit a correct response.", correct: false }, { text: "Observing a model and imitating their behavior.", correct: false }], explanation: "Shaping involves reinforcing behaviors that are closer and closer to the final desired behavior until the target behavior is achieved." },
            { question: "A token economy is an example of:", answers: [{ text: "Primary reinforcement.", correct: false }, { text: "A contingency management system.", correct: true }, { text: "An antecedent intervention.", correct: false }, { text: "A punishment procedure.", correct:false }], explanation: "A token economy is a system where participants earn generalized conditioned reinforcers (tokens) for displaying specific target behaviors, which can then be exchanged for backup reinforcers." },
            { question: "The 'Dead Man's Test' is used to determine if something is a behavior. According to this test, which of the following IS a behavior?", answers: [{ text: "Lying on the floor without moving.", correct: false }, { text: "Not talking back to the teacher.", correct: false }, { text: "Raising a hand to ask a question.", correct: true }, { text: "Being quiet.", correct: false }], explanation: "The Dead Man's Test states, 'If a dead man can do it, it ain't behavior.' A dead man can lie still, not talk, and be quiet. A dead man cannot raise a hand. Therefore, raising a hand is a behavior." },
            { question: "What is stimulus discrimination?", answers: [{ text: "Responding in the same way to similar, but not identical, stimuli.", correct: false }, { text: "The process of teaching a learner to respond differently to different stimuli.", correct: true }, { text: "The fading of a behavior when it is no longer reinforced.", correct: false }, { text: "The weakening of a behavior by removing a preferred stimulus.", correct: false }], explanation: "Discrimination is learning to behave differently in the presence of different stimuli. For example, stopping at a red light but not a green one." },
            { question: "Which schedule of reinforcement is most resistant to extinction?", answers: [{ text: "Fixed Ratio (FR)", correct: false }, { text: "Fixed Interval (FI)", correct: false }, { text: "Variable Ratio (VR)", correct: true }, { text: "Continuous Reinforcement (CRF)", correct: false }], explanation: "Variable Ratio schedules, like playing a slot machine, produce high, steady rates of responding and are very resistant to extinction because the reinforcement is unpredictable." },
            { question: "In a 'Task Analysis', a behavior is broken down into:", answers: [{ text: "Its function and consequence.", correct: false }, { text: "Smaller, teachable steps.", correct: true }, { text: "Antecedent, Behavior, Consequence.", correct: false }, { text: "Its topographical and functional properties.", correct: false }], explanation: "A task analysis is the process of breaking a complex skill or series of behaviors into smaller, sequential steps, which is often the first step in teaching a behavioral chain." }
        ],
        "Ethical Considerations": [
            { question: "A BCBA is invited to a client's birthday party. According to the BACB Ethics Code, what is the most appropriate course of action?", answers: [{ text: "Attend the party to build rapport with the family.", correct: false }, { text: "Politely decline to avoid creating a dual relationship.", correct: true }, { text: "Attend but only for a very short period.", correct: false }, { text: "Send a gift but do not attend the party.", correct: false }], explanation: "Attending social events like birthday parties can create a multiple (or dual) relationship, which blurs the lines between professional and personal roles and is prohibited by the Ethics Code to protect all parties from potential harm or exploitation." },
            { question: "What is the primary responsibility of a behavior analyst?", answers: [{ text: "To the agency they work for.", correct: false }, { text: "To the client.", correct: true }, { text: "To the profession of behavior analysis.", correct: false }, { text: "To the insurance company funding services.", correct: false }], explanation: "The BACB Ethics Code is clear that the behavior analyst's primary responsibility is to the individual receiving services (the client)." },
            { question: "When is it acceptable to share a client's identifiable information without consent?", answers: [{ text: "When discussing the case with a colleague for advice.", correct: false }, { text: "When required by law, such as reporting suspected abuse.", correct: true }, { text: "When posting on a professional social media group, without using the client's last name.", correct: false }, { text: "It is never acceptable.", correct: false }], explanation: "Confidentiality is paramount. The only exceptions are when there is a specific legal mandate to disclose information, such as a court order or a duty to report abuse or a threat of harm." },
            { question: "A behavior analyst is asked to work on a skill for which they have not received training. The ethical obligation is to:", answers: [{ text: "Attempt to implement the procedure based on textbook descriptions.", correct: false }, { text: "Decline the case immediately.", correct: false }, { text: "Seek appropriate training and supervision before implementing the procedure.", correct: true }, { text: "Inform the client that the procedure is not effective.", correct: false }], explanation: "Behavior analysts are required to practice within their boundaries of competence. When faced with a new area, they must seek the necessary training, supervision, and consultation to become competent before providing services." },
            { question: "What does the term 'least restrictive' mean in the context of intervention?", answers: [{ text: "The intervention that is easiest to implement.", correct: false }, { text: "The intervention that is most effective, regardless of its nature.", correct: false }, { text: "The intervention that is least intrusive while still being effective.", correct: true }, { text: "The intervention that costs the least amount of money.", correct: false }], explanation: "The principle of 'least restrictive' means that behavior analysts should select interventions that are minimally intrusive to the client's rights and daily life, prioritizing reinforcement-based strategies over punishment-based ones whenever possible." },
            { question: "Before starting services, a behavior analyst must obtain:", answers: [{ text: "A verbal agreement from the client.", correct: false }, { text: "A diagnostic assessment from a doctor.", correct: false }, { text: "Written informed consent from the client or their legal guardian.", correct: true }, { text: "The client's complete educational history.", correct: false }], explanation: "Informed consent is a formal, written agreement that outlines the proposed services, potential risks and benefits, confidentiality limits, and the client’s rights, which must be signed before any assessment or treatment begins." },
            { question: "If a client's family offers a behavior analyst a valuable gift, the analyst should:", answers: [{ text: "Accept it to avoid offending the family.", correct: false }, { text: "Politely decline and explain the professional boundary against accepting gifts.", correct: true }, { text: "Accept it but donate it to the agency.", correct: false }, { text: "Suggest they give a smaller, less valuable gift instead.", correct: false }], explanation: "The Ethics Code prohibits behavior analysts from accepting or giving gifts to clients to prevent dual relationships and potential conflicts of interest." },
            { question: "How should behavior analysts represent their credentials?", answers: [{ text: "By using the highest degree they are currently pursuing.", correct: false }, { text: "Accurately and factually, providing their certification number upon request.", correct: true }, { text: "By using the title 'doctor' if they have a PhD in an unrelated field.", correct: false }, { text: "By only mentioning their certification if a client asks.", correct: false }], explanation: "Ethical conduct requires honesty and accuracy in representing one's qualifications, certifications, and experience." },
            { question: "Data collection and analysis in ABA is an ethical mandate because it:", answers: [{ text: "Is required by all insurance companies for billing.", correct: false }, { text: "Allows for objective decision-making and ensures accountability.", correct:true }, { text: "Makes the therapy look more scientific to parents.", correct: false }, { text: "Is the only way to prove a specific intervention is working.", correct: false }], explanation: "Relying on data is a core ethical principle. It ensures that interventions are chosen and modified based on objective evidence of client progress, rather than subjective opinions, which is crucial for accountability and effective treatment." },
            { question: "A behavior analyst may terminate services with a client when:", answers: [{ text: "The client is not making progress as quickly as expected.", correct: false }, { text: "The client, stakeholders, or the analyst are being harmed by the therapeutic relationship.", correct: true }, { text: "The behavior analyst finds a more interesting case.", correct: false }, { text: "The client's family misses one scheduled appointment.", correct: false }], explanation: "Services can be terminated when goals are met, the client is no longer benefiting, or the service environment becomes unsafe or harmful. Termination must be handled professionally and with care, including pre-termination planning." }
        ],
        "Behavioral Measurement": [
            { question: "An observer records whether a behavior occurred at any point during a 5-minute interval. This is an example of:", answers: [{ text: "Whole Interval Recording", correct: false }, { text: "Partial Interval Recording", correct: true }, { text: "Momentary Time Sampling", correct: false }, { text: "Frequency Recording", correct: false }], explanation: "Partial Interval Recording scores an interval if the behavior occurs at any time within it. It often overestimates the true occurrence of the behavior." },
            { question: "A teacher is measuring how long it takes for a student to begin their work after a direction is given. What are they measuring?", answers: [{ text: "Duration", correct: false }, { text: "Interresponse Time (IRT)", correct: false }, { text: "Latency", correct: true }, { text: "Rate", correct: false }], explanation: "Latency is the measure of time between the onset of a stimulus (the teacher's direction) and the initiation of a response (starting the work)." },
            { question: "Which of the following is a discontinuous measurement procedure?", answers: [{ text: "Frequency", correct: false }, { text: "Duration", correct: false }, { text: "Latency", correct: false }, { text: "Momentary Time Sampling", correct: true }], explanation: "Discontinuous measurement (or time sampling) procedures record a sample of behavior during observation periods, rather than every instance. Momentary Time Sampling, Whole, and Partial Interval Recording are all examples." },
            { question: "What is the primary advantage of using Interobserver Agreement (IOA)?", answers: [{ text: "It ensures the intervention is effective.", correct: false }, { text: "It increases the believability and objectivity of the data.", correct: true }, { text: "It is required for insurance billing.", correct: false }, { text: "It helps build rapport with the client.", correct: false }], explanation: "IOA involves two or more independent observers recording the same behavior. High agreement increases confidence that the data are accurate and objective, and not the result of observer bias." },
            { question: "A behavior definition should be 'objective, clear, and complete'. What does 'objective' mean in this context?", answers: [{ text: "It should be agreed upon by the entire team.", correct: false }, { text: "It should refer only to observable and measurable characteristics of the behavior.", correct: true }, { text: "It should include the presumed function of the behavior.", correct: false }, { text: "It should be written in complex, scientific terms.", correct: false }], explanation: "An objective definition focuses on what the behavior looks and sounds like, avoiding internal states or feelings. For example, 'striking with an open hand' is objective, while 'being angry' is not." },
            { question: "To calculate the rate of a behavior, you need the frequency and...", answers: [{ text: "the duration of the behavior.", correct: false }, { text: "the duration of the observation period.", correct: true }, { text: "the intensity of the behavior.", correct: false }, { text: "the latency of the behavior.", correct: false }], explanation: "Rate is calculated by dividing the total count (frequency) of the behavior by the total time of the observation period (e.g., 10 hits per hour)." },
            { question: "Which measurement system is best for behaviors that occur at very high rates and are difficult to count individually, such as hand-flapping?", answers: [{ text: "Frequency", correct: false }, { text: "Whole Interval Recording", correct: true }, { text: "Latency", correct: false }, { text: "Rate", correct: false }], explanation: "For high-rate behaviors, continuous counting is impractical. Whole Interval Recording, which checks if the behavior occurred throughout an entire interval, is often a more feasible and useful measurement choice." },
            { question: "What is a potential artifact of Partial Interval Recording?", answers: [{ text: "It can underestimate the overall duration of a behavior.", correct: false }, { text: "It can overestimate the overall percentage of time a behavior occurs.", correct: true }, { text: "It requires the observer's undivided attention.", correct: false }, { text: "It is not sensitive to changes in the rate of behavior.", correct: false }], explanation: "Because a behavior only needs to happen for a moment to be scored for an entire interval, Partial Interval Recording often yields data that suggests the behavior happened more than it actually did, thus overestimating its occurrence." },
            { question: "Topography of a behavior refers to:", answers: [{ text: "The reason the behavior occurs.", correct: false }, { text: "How often the behavior occurs.", correct: false }, { text: "What the behavior looks like.", correct: true }, { text: "The effect of the behavior on the environment.", correct: false }], explanation: "Topography describes the physical form or shape of a behavior. For example, the topography of a tantrum might include 'lying on the floor and kicking feet'." },
            { question: "A researcher wants to measure a behavior they want to decrease and uses a measurement system that tends to overestimate the behavior. Which system are they likely using?", answers: [{ text: "Whole Interval Recording", correct: false }, { text: "Partial Interval Recording", correct: true }, { text: "Momentary Time Sampling", correct: false }, { text: "Permanent Product Recording", correct: false }], explanation: "When targeting a behavior for reduction, you want the most conservative data. Since Partial Interval Recording overestimates behavior, it is the most stringent test; if a behavior decreases according to PIR, it has very likely truly decreased." }
        ],
        "ASD Characteristics": [
            { question: "According to the DSM-5, Autism Spectrum Disorder (ASD) is characterized by persistent deficits in which two core domains?", answers: [{ text: "Social communication/interaction and motor skills.", correct: false }, { text: "Social communication/interaction and restricted, repetitive patterns of behavior.", correct: true }, { text: "Language development and intellectual ability.", correct: false }, { text: "Repetitive behaviors and sensory sensitivities.", correct: false }], explanation: "The two primary domains for an ASD diagnosis are (A) persistent deficits in social communication and social interaction, and (B) restricted, repetitive patterns of behavior, interests, or activities." },
            { question: "Echolalia, a common characteristic in some individuals with ASD, refers to:", answers: [{ text: "Difficulty understanding facial expressions.", correct: false }, { text: "The repetition of words or phrases spoken by others.", correct: true }, { text: "An intense interest in a specific topic.", correct: false }, { text: "Difficulty with the back-and-forth flow of conversation.", correct: false }], explanation: "Echolalia is the repetition of vocalizations made by another person. It can be immediate (repeating right away) or delayed (repeating later)." },
            { question: "Which of the following is an example of a deficit in 'social-emotional reciprocity'?", answers: [{ text: "Having an unusually intense interest in trains.", correct: false }, { text: "Flapping hands when excited.", correct: false }, { text: "Difficulty initiating conversation and sharing interests with others.", correct: true }, { text: "Insistence on taking the same route to school every day.", correct: false }], explanation: "Social-emotional reciprocity involves the normal back-and-forth of social interaction. Difficulties can include failing to initiate or respond to social interactions and reduced sharing of interests or emotions." },
            { question: "What does 'stimming', a term often associated with autism, refer to?", answers: [{ text: "Difficulty sleeping through the night.", correct: false }, { text: "Self-stimulatory behavior, such as rocking or hand-flapping.", correct: true }, { text: "A preference for eating a limited variety of foods.", correct: false }, { text: "The ability to focus on one task for a long period.", correct: false }], explanation: "Stimming is short for self-stimulatory behavior, which refers to repetitive body movements or actions (e.g., hand-flapping, rocking, spinning) that are thought to provide sensory input or regulate arousal." },
            { question: "A hyper- or hypo-reactivity to sensory input is a diagnostic criterion for ASD. Which of the following is an example of hyper-reactivity?", answers: [{ text: "An apparent indifference to pain or temperature.", correct: false }, { text: "An extreme negative reaction to specific sounds or textures.", correct: true }, { text: "Excessive smelling or touching of objects.", correct: false }, { text: "A visual fascination with lights or movement.", correct: false }], explanation: "Hyper-reactivity (or hypersensitivity) is an exaggerated response to sensory stimuli. An extreme reaction to the sound of a vacuum cleaner or the texture of certain foods are common examples." },
            { question: "What is 'theory of mind'?", answers: [{ text: "The ability to understand complex scientific principles.", correct: false }, { text: "The ability to understand that others have thoughts, beliefs, and feelings different from one's own.", correct: true }, { text: "The ability to memorize and recall large amounts of information.", correct: false }, { text: "The ability to follow a sequence of instructions.", correct: false }], explanation: "Difficulties with 'theory of mind,' or perspective-taking, are common in ASD and can make it challenging to predict or understand the actions of others, interpret social cues, and engage in reciprocal conversation." },
            { question: "Which of the following best describes a 'pragmatic' language deficit in ASD?", answers: [{ text: "Difficulty pronouncing words correctly.", correct: false }, { text: "Having a limited vocabulary.", correct: false }, { text: "Difficulty using language appropriately in different social contexts.", correct: true }, { text: "Difficulty understanding grammatical rules.", correct: false }], explanation: "Pragmatics refers to the social use of language. Challenges can include knowing what to say, how to say it, and when to say it, such as difficulty with sarcasm, humor, and staying on topic in conversation." },
            { question: "An 'insistence on sameness' in an individual with ASD might manifest as:", answers: [{ text: "Extreme distress at small changes in routine.", correct: true }, { text: "A strong ability to focus on a preferred task.", correct: false }, { text: "A tendency to imitate the actions of others.", correct: false }, { text: "Difficulty making eye contact during conversations.", correct: false }], explanation: "This criterion refers to an inflexible adherence to routines, ritualized patterns of behavior, and significant distress when routines are altered. This could be needing to eat the same meal every day or follow the exact same steps when getting ready." },
            { question: "Difficulties with nonverbal communicative behaviors in ASD often include:", answers: [{ text: "Having a very loud or unusual tone of voice.", correct: false }, { text: "Poorly integrated verbal and nonverbal communication (e.g., mismatched facial expressions and words).", correct: true }, { text: "Using very complex sentence structures.", correct: false }, { text: "Repeating questions that have already been answered.", correct: false }], explanation: "This diagnostic criterion includes challenges with eye contact, body language, gestures, and facial expressions, and coordinating these cues with spoken language." },
            { question: "Which statement about intellectual ability and ASD is most accurate?", answers: [{ text: "All individuals with ASD have an intellectual disability.", correct: false }, { text: "All individuals with ASD have savant-like abilities.", correct: false }, { text: "Intellectual ability in individuals with ASD can range from profound disability to superior levels.", correct: true }, { text: "Intellectual ability is not considered when diagnosing ASD.", correct: false }], explanation: "ASD is a spectrum, and it co-occurs with all levels of intellectual ability. There is no single cognitive profile for autism." }
        ]
    };

    const views = { start: document.getElementById('start-screen'), quiz: document.getElementById('quiz-screen'), results: document.getElementById('results-screen') };
    const categorySelection = document.getElementById('category-selection');
    const quizCategoryTitle = document.getElementById('quiz-category-title');
    const questionCounter = document.getElementById('question-counter');
    const timerEl = document.getElementById('timer');
    const progressBar = document.getElementById('progress-bar');
    const questionTextEl = document.getElementById('question-text');
    const answerOptionsEl = document.getElementById('answer-options');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    const finalScoreEl = document.getElementById('final-score');
    const highScoreEl = document.getElementById('high-score');
    const resultStatusEl = document.getElementById('result-status');
    const reviewContainer = document.getElementById('review-container');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    let currentQuestions = [], currentQuestionIndex = 0, userAnswers = [], score = 0, timer, timeRemaining = 0, currentCategory = '';

    function init() {
        categorySelection.innerHTML = '';
        Object.keys(quizDatabase).forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.textContent = category;
            button.addEventListener('click', () => startQuiz(category));
            categorySelection.appendChild(button);
        });
        showView('start');
    }

    function startQuiz(category) {
        currentCategory = category;
        currentQuestions = quizDatabase[category];
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = Array(currentQuestions.length).fill(null);
        quizCategoryTitle.textContent = category;
        timeRemaining = currentQuestions.length * 60;
        startTimer();
        displayQuestion();
        showView('quiz');
    }

    function displayQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        questionTextEl.textContent = question.question;
        answerOptionsEl.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer.text;
            button.addEventListener('click', () => selectAnswer(index));
            answerOptionsEl.appendChild(button);
        });

        if (userAnswers[currentQuestionIndex] !== null) {
            restoreAnswerState();
        }

        updateProgress();
        updateNavButtons();
    }
    
    function selectAnswer(selectedIndex) {
        if (userAnswers[currentQuestionIndex] !== null) return;

        userAnswers[currentQuestionIndex] = selectedIndex;
        
        const isCorrect = currentQuestions[currentQuestionIndex].answers[selectedIndex].correct;
        if (isCorrect) score++;

        restoreAnswerState();
    }

    function restoreAnswerState() {
        const userAnswerIndex = userAnswers[currentQuestionIndex];
        const correctAnswerIndex = currentQuestions[currentQuestionIndex].answers.findIndex(a => a.correct);

        Array.from(answerOptionsEl.children).forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctAnswerIndex) btn.classList.add('correct');
            if (index === userAnswerIndex && userAnswerIndex !== correctAnswerIndex) btn.classList.add('incorrect');
        });
    }
    
    function updateProgress() {
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
        const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    function updateNavButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        if (currentQuestionIndex === currentQuestions.length - 1) {
            nextBtn.classList.add('hide');
            finishBtn.classList.remove('hide');
        } else {
            nextBtn.classList.remove('hide');
            finishBtn.classList.add('hide');
        }
    }
    
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
            const seconds = (timeRemaining % 60).toString().padStart(2, '0');
            timerEl.textContent = `${minutes}:${seconds}`;
            if (timeRemaining <= 0) finishQuiz();
        }, 1000);
    }

    function finishQuiz() {
        clearInterval(timer);
        showResults();
        showView('results');
    }

    function showResults() {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        finalScoreEl.textContent = `${percentage}%`;

        const highScore = localStorage.getItem(`highScore_${currentCategory}`) || 0;
        if (percentage > highScore) {
            localStorage.setItem(`highScore_${currentCategory}`, percentage);
            highScoreEl.textContent = `${percentage}%`;
        } else {
            highScoreEl.textContent = `${highScore}%`;
        }

        resultStatusEl.textContent = percentage >= 70 ? 'Pass' : 'Fail';
        resultStatusEl.className = percentage >= 70 ? 'pass' : 'fail';

        renderReview();
    }
    
    function renderReview() {
        reviewContainer.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            const userAnswerIndex = userAnswers[index];
            const correctAnswerIndex = question.answers.findIndex(a => a.correct);
            
            let answersHtml = question.answers.map((answer, i) => {
                let className = '';
                if (i === correctAnswerIndex) className = 'correct-answer';
                if (i === userAnswerIndex) className += userAnswerIndex === correctAnswerIndex ? ' user-correct' : ' user-incorrect';
                return `<p class="review-answer ${className}">${answer.text}</p>`;
            }).join('');

            reviewItem.innerHTML = `<p class="review-question">${index + 1}. ${question.question}</p>${answersHtml}<p class="review-explanation"><strong>Explanation:</strong> ${question.explanation}</p>`;
            reviewContainer.appendChild(reviewItem);
        });
    }

    function showView(viewName) {
        Object.values(views).forEach(view => view.classList.remove('active'));
        views[viewName].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => { if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(); } });
    nextBtn.addEventListener('click', () => { if (currentQuestionIndex < currentQuestions.length - 1) { currentQuestionIndex++; displayQuestion(); } });
    finishBtn.addEventListener('click', finishQuiz);
    restartBtn.addEventListener('click', () => startQuiz(currentCategory));
    homeBtn.addEventListener('click', init);

    init();
});