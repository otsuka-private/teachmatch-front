import axios from 'axios';

/* APIリクエストをバックエンドを送るときにこれを使用する
		例：
		sendRequest("GET", "/teacher/list", {place: "tokyo"}, auth)
		authはconst auth = getAuth()を送ってください
*/

function sendRequest(method, url, params, auth) {
	auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
		// Send token to your backend via HTTPS
		if (method == "GET") {
			axios.get(process.env.NEXT_PUBLIC_API_URL + url, {
				headers: {
					Authorization: idToken
				},
				params: params
			})
				.then(res => { console.log(res) })
				.catch(err => console.log(err))
		} else if (method == "POST") {
			axios.get(process.env.NEXT_PUBLIC_API_URL + url, {
				headers: {
					Authorization: idToken
				},
				params: params
			})
				.then(res => { console.log(res) })
				.catch(err => console.log(err))
		}
	}).catch(function (error) {
		// Handle error
		console.log(error)
	});

}
export default sendRequest