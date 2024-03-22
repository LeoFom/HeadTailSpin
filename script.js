const coinIcon = document.getElementById('coin'); 
const tossBtn = 
	document.getElementById('toss-button'); 
// const result = 
// 	document.querySelector('.result'); 
// coinIcon.insertAdjacentElement('afterend', result); 
tossBtn.addEventListener('click', () => { 
	tossBtn.disabled = true; 
	tossCoinFunction(); 
}); 
function tossCoinFunction() { 
	const randomVal = Math.random(); 
	const faceCoin = randomVal < 0.5 ? 'head' : 'tail'; 
	const imageUrl = faceCoin === 'Head' ? 
'img/Charming.png' : 
'img/Snowwhitenew.png'; 
		
	coinIcon.classList.add('flip'); 
	setTimeout(() => { 
		if(faceCoin === 'head'){
			document.getElementById('head').classList.remove('close')
			document.getElementById('tail').classList.add('close')
		}
		if(faceCoin === 'tail'){
			document.getElementById('head').classList.add('close')
			document.getElementById('tail').classList.remove('close')
		}
		// coinIcon.innerHTML = 
		// 	`<img src="${imageUrl}" alt="${faceCoin}">`; 
		coinIcon.classList.remove('flip'); 
		setTimeout(() => { 
			// result.textContent = `Result: ${faceCoin}`; 
			// result.style.opacity = 1; 
			tossBtn.disabled = false; 
		}, 500); 
	}, 1000); 
}
