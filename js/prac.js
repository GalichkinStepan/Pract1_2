letters = "";
words = ""
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
	fl = true
	while(fl)
	{
		cword = cword.toLowerCase();
		word = cword;
		fl = false;
		for(i = 0; i < letters.length; i++)
		{
			if(cword.includes(letters[i]))
			{
				cword = cword.replace(cword[cword.search(letters[i])], '');
			}
			else
			{
				alert("В слове нет буквы " + letters[i]);
				fl = true;
				break;
			}
		}
		if(words.search(cword) != -1)
		{
			fl = true;
			alert("Такое слово уже есть!");
		}
	}
	words += " " + word;
}



while (letters == "" || letters == null)
	Set_Letters(prompt("Введите буквы без пробелов"));


let div_letters = document.getElementById("Letters");
div_letters.innerHTML = "Буквы: " + letters;

let div_words = document.getElementById("Words");

while(true)
{
	Set_Word(prompt("Введите слово с буквами " + letters + "\n" + "Введенные слова: " + words));
	div_words.innerHTML = "Слова: " + words;
	//alert(words);
}
//alert("All");



