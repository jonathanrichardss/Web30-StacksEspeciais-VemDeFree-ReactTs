import { CdJob } from "./CdJob";
import { User } from "./User";

export type JobApplication = {
  id: String;
  user: User;
  cardJob: CdJob;
  applicationDate: String;
  estimatedTime: String;
};
