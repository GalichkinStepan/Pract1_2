letters = "";
words = ""
function Set_Letter()
{
	while(letters == "" || letters == null)
		letters = prompt("Введите буквы без пробелов");
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

function Set_Word()
{
	word = "";
	fl = true
	while(fl)
	{
		cword = prompt("Введите слово с буквами " + letters + "\n" + "Введенные слова: " + words);
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

Set_Letter();

while(true)
{
	Set_Word();
}
//alert("All");



