import { User } from "../../types/User";
import { CdJob } from "../../types/CdJob";

interface CdJobApplicationInterface {
  id: String;
  user: User;
  cardJob: CdJob;
  applicationDate: String;
  estimatedTime: String;
}

export class CdJobApplication implements CdJobApplicationInterface {
  id: String;
  user!: User;
  cardJob!: CdJob;
  applicationDate!: String;
  estimatedTime!: String;

  constructor(
    id: String,
    user: User,
    cardJob: CdJob,
    applicationDate: String,
    estimatedTime: String
  ) {
    this.id = id;
    this.user = user;
    this.cardJob = cardJob;
    this.applicationDate = applicationDate;
    this.estimatedTime = estimatedTime;
  }
}
