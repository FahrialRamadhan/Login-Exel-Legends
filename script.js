const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//belajar variable...

const nama ="Fahrial Aufa Ramadhan";
let usia = 30;

function generateBiodata(){
	let generasi;
	if(usia > 10 && usia < 18){
		//KONDISI PERTAMA
		generasi ="GENERASI REMAJA"
	} 
	else if(usia > 18 && usia < 30){
		generasi ="GENERASI DEWASA"
		
	} 
	else if(usia >= 30 ){
		generasi = "GENERASI BATU"
	}
	else if(usia > 2 && usia < 10){
		generasi = "GENERASI ANAK ANAK"
	}
	else{
		//JIKA KONDISI TIDAK COCOK
		generasi = "GENERASI BALITA"
	}

	return console.log('AKU ADALAH',generasi)
}

console.log(nama)
console.log(usia)

generateBiodata()