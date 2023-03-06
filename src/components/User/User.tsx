interface UserInterface {
  id: String;
  name: String;
  password: String;
  dateOfBirth: String;
  email: String;
  nrCpfCnpj: String;
  gender: String;
  address: String;
  idProfile: String;
  isActive: Boolean;
  applications: String[];
}

export class User implements UserInterface {
  id!: String;
  name!: String;
  password!: String;
  dateOfBirth!: String;
  email!: String;
  nrCpfCnpj!: String;
  gender!: String;
  address!: String;
  idProfile!: String;
  isActive!: Boolean;
  applications!: String[];

  constructor(
    id: String,
    name: String,
    password: String,
    dateOfBirth: String,
    email: String,
    nrCpfCnpj: String,
    gender: String,
    address: String,
    idProfile: String,
    isActive: Boolean,
    applications: String[]
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.nrCpfCnpj = nrCpfCnpj;
    this.gender = gender;
    this.address = address;
    this.idProfile = idProfile;
    this.isActive = isActive;
    this.applications = applications;
  }
}
