const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use((req, res) => {
//   console.log(req.url);
//   res.end("done!");
// });

// app.get("*", (req, res) => {
//   console.log(req.url);
//   res.end("done!");
// });

// middleware
app.use(express.json());
app.use(express.urlencoded());

// write your own middleware

// app.use((req, res) => {
// could use next
// });

// app.post("/api/note", (req, res) => {
//   console.log(req.body);
//   res.json("got it!");
// });

// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
apiRoutes(app);
htmlRoutes(app);

// could to app.get for all api routes - try that
// app.get("/api", apiRoutes);
// app.get("*", htmlRoutes);

app.listen(PORT, () => {
  console.log("listening");
});
