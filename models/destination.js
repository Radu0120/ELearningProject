const getDb = require('../database.js').getDb

class Destination {
    constructor(title, dateFrom, dateTo, description, location, country, pictureUrl) {
        this.title = title
        this.dateFrom = dateFrom
        this.dateTo = dateTo
        this.description = description
        this.location = location
        this.country = country
        this.pictureUrl = pictureUrl
    }

    save() {
        const db = getDb()
        return db.collection('destinations')
        .insertOne(this)
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
    static getAllDestinations() {
        const db = getDb()
        return db.collection('destinations')
        .find()
        .toArray()
        .then(destinations => {
            console.log(destinations)
            return destinations
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = Destination