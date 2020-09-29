const express = require ("express")
const app = express ()

app.get("/", (req, res) => {
res.status(200)
res.send(`
Hello Munny, Welcome To The World. Say, Hello World :)
`)
})

app.get("/about", (req, res) -> {
res.status(200)
res.send(`About Munny Reol.
I Love Relaxed Song.
I'm the biggest fan of Kumar Sanu ❤️😇
`)
} )

app.get("/:id", (req, res) -> {
res.send(`You Entered ${req.params.id}`)
})

app.listen(5000, () => {
console.log("App Listening On http://localhost:5000")
})
