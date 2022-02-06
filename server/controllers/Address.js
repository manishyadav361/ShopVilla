import AddressModel from "../Models/Address.js";

export const getAddress = async (req, res) => {
  const id = req.userId;
  try {
    if (!id) return res.status(400).send("access denied");
    const address = await AddressModel.findById(id);
    res.status(200).json({ address: address });
  } catch (error) {
    console.log(error);
  }
};
export const addAddress = async (req, res) => {
  const { form } = req.body;
  const id = req.userId;

  try {
    const address = await AddressModel.create({ ...form, _id: id });
    res.status(200).json({ address: address });
  } catch (error) {
    console.log(error);
  }
};

export const updateAddress = async (req, res) => {
  const id = req?.userId;
  const { form } = req.body;
  try {
    const address = await AddressModel.findByIdAndUpdate(
      id,
      {
        ...form,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ address: address });
  } catch (error) {
    console.log(error);
  }
};
