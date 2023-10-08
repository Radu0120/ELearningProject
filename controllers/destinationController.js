const Destination = require("../models/destination");
const path = require("path");

exports.Landing = (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
};

exports.getAddDestination = (req, res) => {
  res.sendFile(path.join(__dirname, "../src/addentry.html"));
};

exports.getDestinations = (req, res) => {
  Destination.getAllDestinations()
    .then((destinations) => {
      res.status(200).json(destinations);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred." });
    });
};

exports.postAddDestination = (req, res) => {
  const title = req.body.title;
  const dateFrom = req.body.dateFrom;
  const dateTo = req.body.dateTo;
  const description = req.body.description;
  const location = req.body.location;
  const country = req.body.country;
  const pictureUrl = req.body.pictureUrl;

  if (!country || !title) {
    return res
      .status(400)
      .json({ message: "Country and title are required fields." });
  } else {
    const destination = new Destination(
      title,
      dateFrom,
      dateTo,
      description,
      location,
      country,
      pictureUrl
    );
    destination.save().then((result) => {
      //Redirect to / and return a OK status code
      res.status(201).redirect("/");
      console.log("Created Destination");
      
    });
  }
};
