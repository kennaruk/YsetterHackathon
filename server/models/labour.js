var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var labourSchema = new Schema({
  first_name: String,
  last_name: String,
  phone_number: String,
  id_number: String,
  nationality: String,
  type: String,
  follower: [
    {
      status: {
        type: String,
        enum: ["WIFE", "HUSBAND", "CHILD"]
      },
      first_name: String,
      last_name: String,
      id_number: String,
      birth_date: Date,
      nationality: String,
      vaccine: [],
      education: {
        thai: Boolean,
        not_thai: Boolean,
        other: Boolean,
        other_string: String,
        sansiri: Boolean,
        not_sansiri: Boolean
      },
      education_history: [
        {
          graduate: String,
          school: String,
          year: String
        }
      ],
      education_current: String
    }
  ],
  project: String
});

const Labour = mongoose.model("Labour", labourSchema);
module.exports = Labour;
