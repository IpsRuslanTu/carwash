export function getDaysInMonth(year: number, month: number) {
    const days: (number | null)[] = [];
    const date = new Date(year, month, 1);
    const firstDay = date.getDay() === 0 ? 7 : date.getDay();

    for (let i = 1; i < firstDay; i++) {
        days.push(null);
    }

    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }

    return days;
}