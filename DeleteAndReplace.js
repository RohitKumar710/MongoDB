//Update
db.podcasts.updateOne(
  {title: "The Developer Hub"},
  {$set: {topics: ["databases", "MongoDB"]}}
);
//confirm
db.podcasts.findOne({title: "The Developer Hub"});


//Update Many:
db.books.updateMany(
  {publishedDate: {$lt: ISODate("2017-04-27T08:00:00.000+00:00")}},
  {$set: {status: "NEW"}}
);


//Replace
db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    _id: ObjectId("65c292b7dd77e720d30e243e"),
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);

db.books.replaceOne(
  {_id: ObjectId("65c292b7dd77e720d30e243e")},
  {
    title: "Deep Dive into React Hooks",
    ISBN: "0-3182-1299-6",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
);


//delete
db.birds.deleteOne({_id: ObjectId("65c2ae34dd77e720d30e2440")});

//deleting many
db.birds.deleteMany({conservationStatus:"Least Concern"})
