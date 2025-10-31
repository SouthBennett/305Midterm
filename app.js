import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));

const PORT = 3010;

// Default Route
app.get('/', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Confirmation route
app.get("/confirmation", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Handle form submission
app.post("/submit-booking", (req, res) => {
  const booking = {
    destination: req.body.destination,
    date: req.body.date,
    travelers: req.body.travelers,
  };

  console.log("New booking:", booking);

  // Redirect to the confirmation route
  res.redirect("/confirmation");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});