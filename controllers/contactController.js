//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create newcontact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    console.log("The request bost is:", req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("Please enter all fields");
    }
  res.status(201).json({ message: "Create contacts" });
};

//@desc get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact info for ${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
