let string = 'Сделайте заглавным первый символ каждого слова этой строки.';
alert(
    string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);