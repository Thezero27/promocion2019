alert("Precionar Permitir Para poder interactuar con un asistente virtual por videocamara")

navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream)=>{
	console.log(stream)

	let video = document.getElementById('video')

	video.srcObject = stream

	video.onleadedmetadata = (ev) => video.play()

}).catch((err)=>console.log(err))