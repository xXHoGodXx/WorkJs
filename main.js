let companies = [
    {
        id: Math.random(),
        name: "wepro",
        tax: 12,
        budget: 10000,
        expensesPerYear: [4000, 2000, 3000]
    },
    {
        id: Math.random(),
        name: 'Allayor',
        tax: 12,
        budget: 200,
        expensesPerYear: [150, 300, 700]
    },
    {
        id: Math.random(),
        name: "Daler-Xrust",
        tax: 10,
        budget: 50000,
        expensesPerYear: [12000, 20000, 5000]
    },
    {
        id: Math.random(),
        name: 'Luchshiy Productoviy',
        tax: 20,
        budget: 23000,
        expensesPerYear: [2000, 1000, 5000]
    },
    {
        id: Math.random(),
        name: "dilrukh salon",
        tax: 4,
        budget: 32000,
        expensesPerYear: [12000, 10000, 10000]
    },
    {
        id: Math.random(),
        name: "Necromantiya",
        tax: 10,
        budget: 300000,
        expensesPerYear: [12000, 3444, 4666]
    },
    {
        id: Math.random(),
        name: 'Artyomida.uz',
        tax: 15,
        budget: 100000,
        expensesPerYear: [10000, 3000, 90000]
    },
    {
        id: Math.random(),
        name: "bmw",
        tax: 13,
        budget: 13000,
        expensesPerYear: [3000, 4000, 1000]
    },
    {
        id: Math.random(),
        name: "dizayner",
        tax: 12,
        budget: 20000,
        expensesPerYear: [1000, 100, 200]
    },
    {
        id: Math.random(),
        name: 'Amerika_cherez_mexika',
        tax: 0,
        budget: 15000,
        expensesPerYear: [100, 4000]
    },
    {
        id: Math.random(),
        name: 'Gradus MMM',
        tax: 12,
        budget: 250000,
        expensesPerYear: [20000, 50000, 15000]
    },
    {
        id: Math.random(),
        name: "Tangir Company",
        tax: 100,
        budget: 1000000,
        expensesPerYear: [10000, 12000, 20000]
    },
    {
        id: Math.random(),
        name: "film_for_adults",
        tax: 75,
        budget: 50000,
        expensesPerYear: [15000, 10000, 5000]
    }
]

for (let item of companies) {

    item.expensesPerMonth = 0

    for (let expense of item.expensesPerYear) {
        item.total = 0
        item.expensesPerMonth += expense
    }

    let total_sum = item.tax * ((item.budget / 12) - item.expensesPerMonth) / 100
    item.total += total_sum

    let budget_minus = []
    let budget_plus = []


    if (item.total <= 0) {
        budget_minus.push(item.name)
    } else {
        budget_plus.push(item.name)
    }

    console.log(item.expensesPerMonth, item.total);
    console.log(`Ушли в минус: ${budget_minus}, Ушли в плюс: ${budget_plus}`);
}



// Посчитать все расходы за месяц
// От бюджета отнять все расходы и также налог в новом ключе итог сохоанить