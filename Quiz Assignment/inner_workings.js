let questionsSet =[
                [
                "I think I can quickly see and take advantage of new opportunities.",
                "I can work well with a very wide range of people.",
                "Producing ideas is one of my natural assets.",
                "My ability rests in being able to draw people out whenever I detect they have something of value to contribute to group objectives.",
                "My capacity to follow through has much to do with my personal effectiveness.",
                "I am ready to face temporary unpopularity if it leads to worthwhile results in the end.",
                "I am quick to sense what is likely to work in a situation with which I am familiar.",
                "I can offer a reasoned case for alternative courses of action without introducing bias or prejudice."
                ]
                ,
                [
                "I am not at ease unless meetings are well structured and controlled and generally well conducted.",
                "I am inclined to be too generous towards others who have a valid viewpoint that has not been given a proper airing.",
                "I have a tendency to talk a lot once the group gets on to new ideas.",
                "My objective outlook makes it difficult for me to join in readily and enthusiastically with colleagues.",
                "I am sometimes seen as forceful and authoritarian if there is a need to get something done.",
                "I find it difficult to lead from the front, perhaps because I am over-responsive to group atmosphere.",
                "I am apt to get too caught up in ideas that occur to me and so lose track of what is happening.",
                "My colleagues tend to see me as worrying unnecessarily over detail and the possibility that things may go wrong."
                ]
                ,
                [
                "I have an aptitude for influencing people without pressurising them.",
                "My general vigilance prevents careless mistakes and omissions being made.",
                "I am ready to press for action to make sure that the meeting does not waste time or lose sight of the main objective.",
                "I can be counted on to contribute something original.",
                "I am always ready to back a good suggestion in the common interest.",
                "I am keen to look for the latest in new ideas and developments.",
                "I believe that others appreciate my capacity for cool judgement.",
                "I can be relied upon to see that all essential work is organised."
                ]
                ,
                [
                "I have a quiet interest in getting to know colleagues better.",
                "I am not reluctant to challenge the views of others or to hold a minority view myself.",
                "I can usually find a line of argument to refute unsound propositions.",
                "I think I have a talent for making things work once a plan has to be put into operation.",
                "I have a tendency to avoid the obvious and to come out with the unexpected.",
                "I bring a touch of perfectionism to any team job I undertake.",
                "I am ready to make use of contacts outside the group itself.",
                "While I am interested in all views I have no hesitation in making up my mind once a decision has to be made."
                ]
                ,
                [
                "I enjoy analysing situations and weighing up all the possible choices.",
                "I am interested in finding practical solutions to problems.",
                "I like to feel I am fostering good working relationships.",
                "I can have a strong influence on decisions.",
                "I can meet people who may have something new to offer.",
                "I can get people to agree on a necessary course of action.",
                "I feel in my element where I can give a task my full attention.",
                "I like to find a field that stretches my imagination."
                ]
                ,
                [
                "I would feel like retiring to a corner to devise a way out of the impasse before developing a line.",
                "I would be ready to work with the person who showed the most positive approach, however difficult she/he might be.",
                "I would find some way of reducing the size of the task by establishing what different individuals might best contribute.",
                "My natural sense of urgency would help to ensure that we did not fall behind schedule.",
                "I believe I would keep cool and maintain my capacity to think straight.",
                "I would retain a steadiness of purpose in spite of the pressures.",
                "I would be prepared to take a positive lead if I felt the group was making no progress.",
                "I would open up discussions with a view to stimulating new thoughts and getting something moving."
                ]
                ,
                [
                "I am apt to show my impatience with those who are obstructing progress.",
                "Others may criticise me for being too analytical and insufficiently intuitive.",
                "My desire to ensure that work is properly done can hold up proceedings.",
                "I tend to get bored rather easily and rely on one or two stimulating members to spark me off.",
                "I find it difficult to get started unless the goals are clear.",
                "I am sometimes poor at explaining and clarifying complex points that occur to me.",
                "I am conscious of demanding from others the things I cannot do myself.",
                "I hesitate to get my points across when I run up against real opposition."
                ]
            ]
let pointsSet = [
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0]
            ]
let results = [
    ["Shaper",0,"Highly motivated individuals with a lot of nervous energy and a great need for achievement. They like to challenge, lead and push others to action, can be headstrong and emotional in response to disappointment or frustration. They generally make good managers because they generate action and thrive on pressure."],
    ["Plant",0,"Innovators and inventors – can be highly creative. They tend to be introverted and react strongly to criticism and praise, and often enjoy working on their own away from other members of the team. Great for generating new proposals and to solve complex problems."],
    ["Co-ordinator",0,"Mature, trusting, and confident individuals that delegate readily. They have the ability to pull a group together to work towards a shared goal, and stay calm under pressure. They are quick to spot an individual’s talents and use them to pursue group objectives. Co-ordinators are useful to have in charge of a team with their diverse skills and personal characteristics."],
    ["Monitor Evaluator",0,"Serious-minded, prudent individuals. Slow to take decisions, preferring to think things over – usually highly critical thinking ability. They usually make shrewd judgements by taking into account all the factors, and are important when analysing problems and evaluating ideas and suggestions."],
    ["Resource Investigator",0,"Good communicators both with other members of the group and with external organisations. Natural negotiators, adept at exploring new opportunities. Adept at finding out what resources are available and what can be done. Relaxed personalities with strong inquisitive sense and a readiness to see the possibilities of anything new. Very good at finding resources and heading negotiations."],
    ["Implementer",0,"Reliable and hardworking individuals, having a systematic approach to tackling problems. Well organised, enjoy routine and have a practical common-sense and self discipline. Will do what needs to be done whether or not they will enjoy the task."],
    ["Team Worker",0,"Supportive members of the team. Flexible and adaptable to different situations and people. Perceptive and diplomatic individuals, they avoid conflict, make good listeners and enablers, allowing everyone in the group to contribute."],
    ["Completer-Finisher",0,"Have a great capacity for follow-through and attention to detail, and seldom start what they cannot finish. Dislike carelessness. Reluctant to delegate, prefer to tackle tasks themselves. Good at tasks that involve close concentration and a close degree of accuracy."]
            ]
let qlist = null;
let qnumber = 0;
let r=[];
function startQuiz(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("questionarea").style.display = "block";
    var t = document.getElementById("questionarea")
    qlist = document.createElement("ol");
    for( let i = 0; i < 8; i++){
        qlist.innerHTML += ("\n<li id=listitem"+i+">" + questionsSet[qnumber][i] 
        + "</li><input type='number' id='a"+i+"' name='a"+ i +"' min='0' max='10' value='0' ><br>")
    }
    t.appendChild(qlist);
}
function sumPoints(){
    for (let i = 0; i < 8; i++){
        console.log(i)
        pointsSet[qnumber][i] = Number(document.getElementById("a"+i).value)
    }
    if (pointsSet[qnumber].reduce(function(a,b){return a+b}) != 10){
        for (let i = 0; i < 8; i++){
            pointsSet[qnumber][i] = 0;
            document.getElementById("a"+i).value = 0;
        }
        alert("Please review the allocation of points and ensure it equals to 10.")
        return false
    }
}
function nextQuestion(){
    if (sumPoints() !== false){
        qnumber += 1;
        document.getElementById("quizheading").innerHTML = "PART " + Number(qnumber+1)
        for(let i = 0; i < 8; i++){
            document.getElementById("listitem"+i).innerHTML = questionsSet[qnumber][i]
            document.getElementById("a"+i).value = 0
        }
        if (qnumber == 6){
            document.getElementById("nextbutton").style.display = "none"
            document.getElementById("divbutton").innerHTML += 
            '<input type="button" id="nextbutton" value="Show Results"class="btn btn-success text-center" onclick="resultsTime()" ></input>'
        }
    }
}
function calculateResults(){
    sumPoints();
    results[5][1] += (pointsSet[0][6]+pointsSet[1][0]+pointsSet[2][7]+pointsSet[3][3]+pointsSet[4][1]+pointsSet[5][5]+pointsSet[6][4]);
    results[2][1] += (pointsSet[0][3]+pointsSet[1][1]+pointsSet[2][0]+pointsSet[3][7]+pointsSet[4][5]+pointsSet[5][2]+pointsSet[6][6]);
    results[0][1] += (pointsSet[0][5]+pointsSet[1][4]+pointsSet[2][2]+pointsSet[3][1]+pointsSet[4][3]+pointsSet[5][6]+pointsSet[6][0]);
    results[1][1] += (pointsSet[0][2]+pointsSet[1][6]+pointsSet[2][3]+pointsSet[3][4]+pointsSet[4][7]+pointsSet[5][0]+pointsSet[6][5]);
    results[4][1] += (pointsSet[0][0]+pointsSet[1][2]+pointsSet[2][5]+pointsSet[3][6]+pointsSet[4][4]+pointsSet[5][7]+pointsSet[6][3]);
    results[3][1] += (pointsSet[0][7]+pointsSet[1][3]+pointsSet[2][6]+pointsSet[3][2]+pointsSet[4][0]+pointsSet[5][4]+pointsSet[6][1]);
    results[6][1] += (pointsSet[0][1]+pointsSet[1][5]+pointsSet[2][4]+pointsSet[3][0]+pointsSet[4][2]+pointsSet[5][1]+pointsSet[6][7]);
    results[7][1] += (pointsSet[0][4]+pointsSet[1][7]+pointsSet[2][1]+pointsSet[3][5]+pointsSet[4][6]+pointsSet[5][3]+pointsSet[6][2]);
}
function resultsTime(){
    calculateResults();
    document.getElementById("questionarea").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
    for (let i=1; i<9;i++){
        document.getElementById("cell"+i).innerHTML += "<h5>"+results[i-1][0]+"</h5>";
        document.getElementById("cell"+i+i).innerHTML += "<h5>"+results[i-1][1]+" Points<h5>";
        document.getElementById("cell"+i+i).style.width = "100px";
        document.getElementById("cell"+i+i+i).innerHTML += "<p>"+results[i-1][2]+"</p>";
        r.push(results[i-1][1]);
    }
    for (let i=1; i<9;i++){
        if (results[i-1][1] == r[0]){
            document.getElementById("resultshead").textContent = "Your strongest team role is that of a "+ results[i-1][0]+". ";
            if(r[0] == r[1]){
                document.getElementById("resultshead").textContent = "Looks like you have a tie between two team roles.";
            }
        }
        if (results[i-1][1] == r[1]){
            document.getElementById("resultshead2").textContent = "You are also a good "+ results[i-1][0]+". ";
            if(r[0] == r[1]){
                document.getElementById("resultshead2").textContent = "Please review your scores below for more details.";
            }
        }
        if (results[i-1][1] == r[7]){
            document.getElementById("resultshead3").textContent = "Your weakest team role is that of a " + results[i-1][0].toLowerCase() + ". You could improve in this area."
        }
    }
}
