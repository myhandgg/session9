async function getData() {
    const data = await fetch("https://randomuser.me/api/")
    const res = await data.json()

    const person = res.results[0]

    console.log(person.email)
    console.log(person.name.title + " " + person.name.first + " " + person.name.last)
}

getData()