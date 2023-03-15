
var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];



function Slide(title, subtitle, background, label ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.label = label
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}





var Montesion = new Slide(
	"Montesión", 
	"En el Misterio se representa la oración en el huerto, mientras Jesús reza, los díscipulos se quedan dormidos bajo un olivo.", 
	"https://i2.wp.com/www.gentedepaz.es/wp-content/uploads/2022/09/MG_7053.jpg?fit=2048%2C1365&ssl=1",
	"Imagen donde se vé a Jesucristo de rodillas frente a un ángel"
);

var Redencion = new Slide(
	"Redención", 
	"El misterio representa el momento iconográfico del beso del apóstol traidor; que es una «escena» del prendimiento de Jesús.", 
	"https://hermandadredencion.com/wp-content/uploads/2019/09/sin-t%C3%ADtulo-311-2.jpg",
	"Imagen donde se vé a Jesucristo junto con Judas en el misterio de la Redención, en el cual Judas le da un beso a Jesucristo traicionando a este"
);

var sanGonzalo = new Slide(
	"San Gonzalo", 
	"El misterio representa el misterio el momento cumbre de la vida pública de Jesucristo, de donde arranca toda su Pasión y Muerte, al declarar ante el Pontífice Caifás su condición divina de Hijo de Dios; es decir, la Encarnación del Mesías cuya venida estaba prometida al pueblo de Israel.", 
	"https://semanasantaenespana.com/wp-content/uploads/2018/10/MG_3567.jpg",
	"Imagen donde se vé a Jesucristo junto a Caifás"
);

var Cigarreras = new Slide(
	"Cigarreras", 
	"El misterio representa la Flagelación de cristo.", 
	"https://cinturondeesparto.com/0.1/wp-content/uploads/2017/11/el-jueves-santo-de-las-cigarreras-2.jpg",
	"Imagen donde se vé a Jesucristo en el momento de ser flagelado"
);

var valle = new Slide(
	"Valle", 
	"El misterio representa a Cristo con el rostro abatido y la mirada baja; sentado, con clámide, maniatado y con una caña en las manos a modo de cetro.", 
	"https://elcorreoweb.es/documents/10157/0/image_content_19686996_20180330003257.jpg",
	"Imagen donde se vé a Jesucristo en el momento en el que le coronan con la corona de espinas"
);

var Macarena = new Slide(
	"Macarena", 
	"El misterio representa a Jesucristo maniatado en el momento en que un sanedrita judío lee su sentencia.", 
	"https://cinturondeesparto.com/0.1/wp-content/uploads/2020/02/Z-31.jpg",
	"Imagen donde se vé a Jesucristo en el momento de la sentencia"
);

var Paz = new Slide(
	"Paz", 
	"El misterio representa el momento en que dos sayones cargan con la cruz a Jesús", 
	"https://as2.ftcdn.net/v2/jpg/01/40/85/43/1000_F_140854373_V0pEbpkvvNcFAhwsv6RgzrEUuE5jelLz.jpg",
	"Imagen donde se vé a Jesucristo cargando con la cruz junto con dos sayones"
);

var Pasión = new Slide(
	"Pasión", 
	"El misterio representa a Jesús con la Cruz al hombro", 
	"https://www.visitarsevilla.com/wp-content/uploads/2019/08/pasion2-hda-pasion.jpg",
	"Imagen donde se vé a Jesucristo cargando con la cruz al hombro"
);

var Amargura = new Slide(
	"Amargura", 
	"María llora la perdida de Jesús (Unico palio en asistir)", 
	"https://elcorreoweb.es/binrepository/amargura-santo-entierro-2022-08-31-a_20897812_20220831092733.jpg",
	"Imagen donde se vé a María y a San Juan llorando la perdida"
);

var TresCaidas = new Slide(
	"Tres Caidas", 
	"El misterio representa a Jesús con la cruz a cuestas en el momento de su tercera caída.", 
	"https://upload.wikimedia.org/wikipedia/commons/c/c7/Misterio_de_las_Tres_Ca%C3%ADdas_de_Triana.jpg",
	"Imagen donde se vé a Jesucristo en su tercera caída"
);

var Exaltación = new Slide(
	"Exaltación", 
	"El misterio representa al Cristo crucificado en el momento de la exaltación, dos sayones levantan la cruz tirando de sogas y dos más la fijan al suelo", 
	"https://i.pinimg.com/originals/b9/c7/0b/b9c70b86602a647fbbccb827376547b7.jpg",
	"Imagen donde se vé a Jesucristo en el momento de la subida"
);

var Montserrat = new Slide(
	"Montserrat", 
	"El misterio representa la Conversión del buen ladrón", 
	"https://semanasantaenespana.com/wp-content/uploads/2018/10/MG_8160.jpg",
	"Imagen donde se vé a Jesucristo junto con dos ladrones crucificados manteniendo una conversación"
);

var Cachorro = new Slide(
	"Cachorro", 
	"El misterio representa la agonía de Jesucristo.", 
	"https://www.visitarsevilla.com/wp-content/uploads/2015/01/cristo-cachorro.jpg",
	"Imagen donde se vé a Jesucristo expirando por ultima vez antes de morir"
);

var Calvario = new Slide(
	"Calvario", 
	"El misterio representa a Cristo crucificado", 
	"https://s3.abcstatics.com/media/pasionensevilla/2021/03/18/s/calvario-nada-dios-ciudad-k9uD--1248x698@abc.jpg",
	"Imagen donde se vé a Jesucristo crucificado"
);

var QuintaAngustia = new Slide(
	"Quinta Angustia", 
	"El misterio representa el momento en el que el cuerpo de Cristo es descendido de la cruz.", 
	"https://live.staticflickr.com/8380/8577861183_9e75960208_b.jpg",
	"Imagen donde se vé a Jesucristo descendiendo de la Cruz"
);


function buildSlider(){
	var myHTML ="";
	
	for(var i = 0; i < slideArray.length; i++) {
		
		myHTML += "<div id='" + slideArray[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'"+ "aria-label='"+ slideArray[i].label + "'>" + 
		"<div class='slideOverlay'>" + 
		"<h1>" + slideArray[i].title + "</h1>" +
		"<h4>" + slideArray[i].subtitle + "</h4>" +
		"</div>" +
		"</div>";	
		
	}
	
	document.getElementById("mySlider").innerHTML = myHTML;
		
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

}

buildSlider();









function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}	
	
	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	
	currentSlideIndex = nextSlideIndex;
}


function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}	
	
	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	
	currentSlideIndex = nextSlideIndex;
}
