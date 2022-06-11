import moment from "moment";

export default [
    {
      id: "1",
      description: "water bill",
      note: "",
      amount: 1500,
      createdAt: 0
    },
    {
      id: "2",
      description: "food",
      note: "",
      amount: 2000,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: "3",
      description: "rent bill",
      note: "",
      amount: 3000,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
  ];