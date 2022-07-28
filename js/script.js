
	//background color change button
const btnBg = document.querySelector('.bg-color');
const canvas = document.querySelector('#canvas');
const backgroundInput = document.querySelector('.background-input');
const addImg = document.querySelector('.addImage');
const addTextbtn = document.querySelector('.addText');
const bgAdd = document.querySelector('.addBg');
const bgcancel = document.querySelector('.cancelBg');


btnBg.addEventListener("click", function(){
	backgroundInput.style.display = "block";
	addImg.style.top = 140 + "px";
	addTextbtn.style.top = 200 + "px";
	textInput.style.display = "none";
});

bgAdd.addEventListener("click", function(){
	backgroundInput.style.display = "none";
	addImg.style.top = null;
	addTextbtn.style.top = null;

	const color = document.querySelector('.bgColor').value;
	canvas.style.background = color;
});

bgcancel.addEventListener("click", function(){
	background.style.display = "none";
	addImg.style.top = null;
	addTextbtn.style.top = null;
});



	//add image button
const fileInput = document.querySelector('.file-input');
const imgContainer = document.querySelector('.image');
const mainImage = imgContainer.querySelector('.preview-Image');
const imgText = document.querySelector('.img-text');


addImg.addEventListener("click", function(){
	fileInput.click();
	textInput.style.display = "none";
	backgroundInput.style.display = "none";

});

fileInput.addEventListener("change", function(){
		const file = this.files[0];

		if(file){
			const reader = new FileReader();

			imgText.style.display = "none";
			mainImage.style.display = "block";

			reader.addEventListener("load", function(){
				mainImage.setAttribute("src", this.result);
			});
			reader.readAsDataURL(file);


			if(mainImage != null){
				imagePanel.style.display = "block";
			}
		}
		else{
			imgText.style.display = "none";
			mainImage.style.display = "block";

			mainImage.setAttribute("src", "");
		}
	});



	//add text button
const textInput = document.querySelector('.text-add');
const addtext = document.querySelector('.addtext');
const canceltext = document.querySelector('.canceltext');
const canvastitle = document.querySelector('.title-head');
const canvasSubtitle = document.querySelector('.title-text');


addTextbtn.addEventListener("click", function(){
	textInput.style.display = "block";
	backgroundInput.style.display = "none";
	addImg.style.top = null;
	addTextbtn.style.top = null;
});

addtext.addEventListener("click", function(){
	textInput.style.display = "none";

	const title = document.querySelector('.text1').value;
	const subtitle = document.querySelector('.text2').value;

	canvastitle.innerHTML = title;
	canvasSubtitle.innerHTML = subtitle;

	if(canvastitle != null && canvasSubtitle != null){
		text1Panel.style.display = "block";
		text2Panel.style.display = "block";
	}
});

canceltext.addEventListener("click", function(){
	textInput.style.display = "none";
});


	//clear canvas button
const buttonClear = document.querySelector('.clear-canvas');
const canvasContent = document.querySelector('.canvas-content');

buttonClear.addEventListener("click", function(){

	document.querySelector('.bgColor').value = null;
	bgAdd.click();

	mainImage.style.display = null;
	imgText.style.display = "block";

	document.querySelector('.text1').value = null;
	document.querySelector('.text2').value = null;
	addtext.click();
});


	//save button section
	function save(paravalue){
		var backup = document.body.innerHTML;
		var divContent = document.getElementById(paravalue).innerHTML;
		document.body.innerHTML = divContent;
		window.print();
		document.body.innerHTML = backup;
	}



	//panel section start
const text1Panel = document.querySelector('.text1Panel');
const text2Panel = document.querySelector('.text2Panel');
const imagePanel = document.querySelector('.imagePanel');

const label1 = document.querySelector('.label1');
const label2 = document.querySelector('.label2');
const label3 = document.querySelector('.label3');

	label1.addEventListener("click", function(){
		document.querySelector('.text1').value = null;
		addtext.click();
		text1Panel.style.display = "none";
	});

	label2.addEventListener("click", function(){
		imagePanel.style.display = null;
		mainImage.style.display = null;
		imgText.style.display = "block";
	});

	label3.addEventListener("click", function(){
		document.querySelector('.text2').value = null;
		addtext.click();
		text2Panel.style.display = "none";
	});
