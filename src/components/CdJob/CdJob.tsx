interface CdJobInterface {
  id: String;
  title: String;
  description: String;
  requiredExperience: String;
  company: String;
  city: String;
  issueDate: String;
  timeJob: String;
  paymentValue: Number;
}

export class CdJob implements CdJobInterface {
  id: String;
  title!: String;
  description!: String;
  requiredExperience!: String;
  company!: String;
  city!: String;
  issueDate!: String;
  timeJob!: String;
  paymentValue!: Number;

  constructor(
    id: String,
    title: String,
    description: String,
    requiredExperience: String,
    company: String,
    city: String,
    issueDate: String,
    timeJob: String,
    paymentValue: Number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.requiredExperience = requiredExperience;
    this.company = company;
    this.city = city;
    this.issueDate = issueDate;
    this.timeJob = timeJob;
    this.paymentValue = paymentValue;
  }
}
