const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
// const flash = require('express-flash');
const session = require('express-session');
const Expenses = require("./expense");
const ExpenseRoutes = require("./expenseRoutes");
const app = express();

app.use(express.json());
const pgp = require("pg-promise")();

const DATABASE_URL =
  process.env.DATABASE_URL || "postgresql://coder:codex123@localhost:5432/dailyexpenses";

const config = {
  connectionString: DATABASE_URL,
};

if (process.env.NODE_ENV == "production") {
  config.ssl = {
    rejectUnauthorized: false,
  };
}
const db = pgp(config);

app.use(session({

    secret : "somevalue",
    resave: false,
    saveUninitialized: true
  }));
  
  // initialise the flash middleware
  // app.use(flash());
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  //handlebars
  app.set("view engine", "hbs");
  app.engine(
    "hbs",
    exphbs.engine({
      layoutsDir: __dirname + "/views/layouts",
      extname: "hbs",
    })
  );
  
  const port = process.env.PORT || 4000;
  app.listen(port);
  console.log(`listen to server: http://localhost:${port}`);
  
  const Expenseapp = Expenses(db);
  const expenseroutes = ExpenseRoutes(Expenseapp);
  app.get("/", expenseroutes.home);
  app.post("/expense", expenseroutes.dailyExpense);