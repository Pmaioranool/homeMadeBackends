const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(
    `Server is running at ${process.env.HOST} on port ${process.env.PORT}.`
  );
});

