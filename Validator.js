class Validator {
    isEmail(str) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(str);
    }

    isDomain(str) {
        const domainPattern = /^[a-z0-9\-]+(\.[a-z]{2,}){1,}$/;
        return domainPattern.test(str);
    }

    isDate(str) {
        const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
        return datePattern.test(str);
    }

    isPhone(str) {
        const phonePattern = /^\+\d{1,3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
        return phonePattern.test(str);
    }
}

module.exports = Validator; // Экспортируем класс
