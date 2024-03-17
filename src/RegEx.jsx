export const validEmail = /([a-z|.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/;

export const validPhoneNumber =
  /[+]?[(]?[0-9]{3}[)]?[-s]?[0-9]{3}[-s]?[0-9]{4,6}$/;

export const validRegNumber = new RegExp("/([0-9]{2})([A-Z]{3})([0-9]{4})/");

export const validName = new RegExp("([A-ZÀ-ÿ][-,a-z. ']+[ ]*)");
