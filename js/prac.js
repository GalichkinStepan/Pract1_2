letters = "";
words = " ";
Kastil = "Слова: ";
function Set_Letters(inp)
{
	letters = inp;
	for(i = 0; i < letters.length; i++)
	{
		if(letters[i].toLowerCase() == letters[i].toUpperCase())
		{
			letters = letters.replace(letters[i], '');
			i--;
		}
			
	}
	letters = letters.toLowerCase();
}

function Set_Word(cword)
{
	word = "";
		cword = cword.toLowerCase();
		word = cword;
		fl = true;
		for(i = 0; i < letters.length; i++)
		{
			if(cword.includes(letters[i]))
			{
				cword = cword.replace(cword[cword.search(letters[i])], '');
			}
			else
			{
				fl = false;
				alert("В слове нет буквы " + letters[i]);
				break;
			}
		}
		if(words.search(" " + word + " ") != -1)
		{
			fl = false;
			alert("Такое слово уже есть!");
		}
	if(fl)
		words += word + " ";
}



while (letters == "" || letters == null)
	Set_Letters(prompt("Введите буквы без пробелов"));


let div_letters = document.getElementById("Letters");
div_letters.innerHTML = "Буквы: " + letters.split('').join(" ");

let div_words = document.getElementById("Words");



/*
while(true)
{
	Set_Word(prompt("Введите слово с буквами " + letters + "\n" + "Введенные слова: " + words));
	div_words.innerHTML = "Слова: " + words;
	//alert(words);
}
*/




