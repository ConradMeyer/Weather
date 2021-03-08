// Un ApiKey es una llave para usar una api de internet, algunas son de pago y otras son gratuitas
// Sirven para limitar el número de peticiones por desarrollador
// Para conseguir un API KEY visita: https://quizapi.io/clientarea/settings/token
const QUESTIONS_API_KEY = "19ZihZYGdDPyC0T42CtpTuhdZighLSzCxaG1q2o0";
const QUIZZ = document.querySelector(".quizz")

/**
 * This function will always return a `Promise` which will resolve to a `JSON` of questions and reject an Error
 *
 * For using this function, you must provide an `API KEY` on line 4 of `/JS/promise.js` for using the function
 * @typedef {object} QuestionData `QuestionData` is a JSON described in https://quizapi.io/docs/1.0/overview
 * @param {number} [maxNumberQuestions=5] maxNumberQuestions How many questions do you like to have, minimum 1
 * @returns {Promise<QuestionData>} A Promise which resolve to QuestionData
 */
function getQuestions(maxNumberQuestions = 5) {
	return new Promise((resolve, reject) => {
		if (!QUESTIONS_API_KEY)
			throw new Error("An API KEY must be provided on /JS/promise.js line 4 for function getQuestions to work");
		else if (maxNumberQuestions < 1)
			throw new Error("maxNumberQuestions must be greater than 0");
		else {
			fetch(`https://quizapi.io/api/v1/questions?apiKey=${QUESTIONS_API_KEY}&category=code&difficulty=Easy&limit=${maxNumberQuestions}&tags=JavaScript`)
			.then(response => response.json())
			.then(questions =>  resolve(questions))
			.catch(error => reject(error));
		}
	});
}

function pintar(el) {
	// console.log(el);
	const caja = document.createElement("div")
	caja.setAttribute("class", "resultado")
	QUIZZ.appendChild(caja)

	const pregunta = document.createElement("div")
	pregunta.setAttribute("class", "pregunta")

	const respuestas = document.createElement("div")
	respuestas.setAttribute("class", "respuestas")

	caja.appendChild(pregunta)
	caja.appendChild(respuestas)

	let quest = document.createElement("h2")
	let questText = document.createTextNode(el.question)
	quest.appendChild(questText)
	pregunta.appendChild(quest)

	let answA = document.createElement("h3")
	let answTextA = document.createTextNode(el.answers.answer_a)
	answA.appendChild(answTextA)
	respuestas.appendChild(answA)

	let answB = document.createElement("h3")
	let answTextB = document.createTextNode(el.answers.answer_b)
	answB.appendChild(answTextB)
	respuestas.appendChild(answB)

	let answC = document.createElement("h3")
	let answTextC = document.createTextNode(el.answers.answer_c)
	answC.appendChild(answTextC)
	respuestas.appendChild(answC)

	// let totalAnsw = document.querySelectorAll("h3")
	// totalAnsw.forEach(el => el.addEventListener("click", ()=> comparar(el)))

}

function comparar(el){
	console.log(el);
}

getQuestions(3)
	.then(data => data.map(el => pintar(el)))
	.catch(error => console.error(error))