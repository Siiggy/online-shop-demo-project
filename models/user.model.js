class User {
	constructor(email, password, fullname, street, postal, city) {
		this.email = email;
		this.password = password;
		this.name = fullname;
		this.address = {
			street: street,
			postalCode: postal,
			city: city,
		};
	}

  signup()
}
