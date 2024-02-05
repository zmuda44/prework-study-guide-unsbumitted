/* const shape = "circle";

const topics = "HTML, CSS, Git, JavaScript";

console.log(topics);

const topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
} */

/* const shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]); 

for(let x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }

const topics = ["HTML", "CSS", "Git", "JavaScript"]

for(let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}

function helloWorld() {
console.log("Hello, world, I am a function!")
}
 */


const topics = ["HTML", "CSS", "Git", "JavaScript"]
const randomTopic = topics[Math.floor(Math.random()*topics.length)];

function listTopics () {
    for(let x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }
}

function selectTopic() {
if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();