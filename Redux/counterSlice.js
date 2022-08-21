import { createSlice } from "@reduxjs/toolkit";
import { Ionicons } from "@expo/vector-icons";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,

    phoneNumber: "",
    checkloginfrom: false,
    imageReduxData: [
      {
        image1: require("../Assets/IMages/image1.png"),
        image2: require("../Assets/IMages/image2.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "70% OFF",
        image3: require("../Assets/IMages/image3.png"),
      },
      {
        image1: require("../Assets/IMages/image4.png"),
        image2: require("../Assets/IMages/image2.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Wine Solid Cut Outs Gown",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image3.png"),
      },
      {
        image1: require("../Assets/IMages/image5.png"),
        image2: require("../Assets/IMages/image2.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Black Colorblocked Wrap Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image3.png"),
      },
      {
        image1: require("../Assets/IMages/image6.png"),
        image2: require("../Assets/IMages/image2.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Solid Fit And Flare Dress",
        offrate: "₹ 999",
        rate: "₹ 669",

        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image3.png"),
      },
    ],
    imageReduxData2: [
      {
        image1: require("../Assets/IMages/image20.png"),
        image2: require("../Assets/IMages/image21.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image22.png"),
        time: " 02: 05: 50",
        member: "1/2",
      },
      {
        image1: require("../Assets/IMages/image20.png"),
        image2: require("../Assets/IMages/image21.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image22.png"),
        time: " 02: 05: 50",
        member: "1/2",
      },
      {
        image1: require("../Assets/IMages/image20.png"),
        image2: require("../Assets/IMages/image21.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image22.png"),
        time: " 02: 05: 50",
        member: "1/2",
      },
      {
        image1: require("../Assets/IMages/image20.png"),
        image2: require("../Assets/IMages/image21.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image22.png"),
        time: " 02: 05: 50",
        member: "1/2",
      },
      {
        image1: require("../Assets/IMages/image20.png"),
        image2: require("../Assets/IMages/image21.png"),
        ratingpoint: "4.5",
        ratingpeople: "223",
        itemtitle: "Rose Stripes Dress",
        offrate: "₹ 999",
        rate: "₹ 669",
        saleoffpercent: "40% OFF",
        image3: require("../Assets/IMages/image22.png"),
        time: " 02: 05: 50",
        member: "1/2",
      },
      //   {
      //     image1: require("../../../Assets/images/image23.png"),
      //     image2: require("../../../Assets/images/image21.png"),
      //     ratingpoint: "4.5",
      //     ratingpeople: "223",
      //     itemtitle: "Rose Stripes Dress",
      //     offrate: "₹ 999",
      //     rate: "₹ 669",
      //     saleoffpercent: "40% OFF",
      //     image3: require("../../../Assets/images/image22.png"),
      //     time: " 02: 05: 50",
      //     member: "1/2",
      //   },
      //   {
      //     image1: require("../../../Assets/images/image24.png"),
      //     image2: require("../../../Assets/images/image21.png"),
      //     ratingpoint: "4.5",
      //     ratingpeople: "223",
      //     itemtitle: "Rose Stripes Dress",
      //     offrate: "₹ 999",
      //     rate: "₹ 669",
      //     saleoffpercent: "40% OFF",
      //     image3: require("../../../Assets/images/image22.png"),
      //     time: " 02: 05: 50",
      //     member: "1/2",
      //   },
      //   {
      //     image1: require("../../../Assets/images/image23.png"),
      //     image2: require("../../../Assets/images/image21.png"),
      //     ratingpoint: "4.5",
      //     ratingpeople: "223",
      //     itemtitle: "Rose Stripes Dress",
      //     offrate: "₹ 999",
      //     rate: "₹ 669",
      //     saleoffpercent: "40% OFF",
      //     image3: require("../../../Assets/images/image22.png"),
      //     time: " 02: 05: 50",
      //     member: "1/2",
      //   },
    ],
    username: "",
    email: "",
    PerfileIMage: "",
    Gender: "",
    Address: "",
    BirthDay: "",
    token:" ",

    HinitName: "",
    category: "",
    products: ""
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    SetPhoneNumber: (state, action) => {
      // console.log(action.payload);
      state.phoneNumber = action.payload;
    },
    Setcheckloginfrom: (state, action) => {
      console.log(action.payload);
      state.checkloginfrom = action.payload;
    },
    SetUserName: (state, action) => {
     
      state.username = action.payload;
    },
    SeteEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfileIMage: (state, action) => {
      console.log(action.payload);
      state.PerfileIMage = action.payload;
    },
    SetGender: (state, action) => {
      state.Gender = action.payload;
    },
    SetAddress: (state, action) => {
      state.Address = action.payload;
    },
    SetBirthDay: (state, action) => {
      state.BirthDay = action.payload;
    },
    setHinitName: (state, action) => {
      state.HinitName = action.payload;
    },
    setToken:(state,action)=>{
      console.log(action.payload);
      state.token=action.payload
    },
    handleCategory: (state, action) => {
      state.category = action.payload
    },
    handleProduct: (state, action) => {
      state.products = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementByAmount,
  SetPhoneNumber,
  Setcheckloginfrom,
  SetUserName,
  SeteEmail,
  setProfileIMage,
  SetGender,
  SetAddress,
  SetBirthDay,
  setHinitName,
  setToken,

  handleCategory,
  handleProduct
} = counterSlice.actions;

export default counterSlice.reducer;
