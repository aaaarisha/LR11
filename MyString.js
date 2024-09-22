class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}

module.exports = MyString; // Экспортируем класс
