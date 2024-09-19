import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  // figmap1 data
public figmap1arry:any={img1:"../../assets/new.store/shopee.png",}
public figmap1arry1:any={text1:"Shoppe",text2:"Beautiful eCommerce UI Kit",text3:"for your online store",}
public figmap1arry2:any={text4:"Let's get started",}
public figmap1arry3:any={text5:"I already have an account",icon1:"arrow-forward-outline",
}


  // figmap2 data
  public figmap2arry:any={img1:"../../assets/new.store/bubble02.png",img2:"../../assets/new.store/bubble01.png",}
  public figmap2arry2:any={text1:"Create Account",}
  public figmap2arry3:any={img3:"../../assets/new.store/Upload Photo.png",}
  public figmap2arry4:any={icon1:"eye-off-outline",}
  public figmap2arry5:any={img4:"../../assets/new.store/pakistaniflag.jpeg",icon2:"chevron-down-outline",}
  public figmap2arry6:any={text2:"Sign In",}
  public figmap2arry7:any={text3:"Next",}


  // figmap3 data
public figmap3arry:any={img1:"../../assets/new.store/bubble03.png",}
public figmap3data:any=[
{img2:"../../assets/new.store/image3.png",hello:"Hello",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.",},
{img2:"../../assets/new.store/card6.png",hello:"Hello",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.",},
{img2:"../../assets/new.store/sc2.png",hello:"Hello",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.",},
{img2:"../../assets/new.store/cp3.png",hello:"Hello",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.",},
]
public figmap3arry2:any={text9:"Next",}


  // figmap4 data
public figmap4arry:any={shop:"Shop",search:"Search",camera:"camera-outline"}
public figmap4arry1:any={img1:"../../assets/new.store/BigSaleBanner.png",img2:"../../assets/new.store/BigSaleBanner.png",img3:"../../assets/new.store/BigSaleBanner.png",}
public figmap4arry2:any={categories:"Categories",see:"See All",iconfor:"arrow-forward-outline"}
public figmap4data:any=[
{img4:"../../assets/new.store/img1.png",img5:"../../assets/new.store/img2.png",
img6:"../../assets/new.store/img3.png",img7:"../../assets/new.store/img4.png",product:"Clothing",price:"109",},
{img4:"../../assets/new.store/shoes1.png",img5:"../../assets/new.store/shoes2.png",img6:"../../assets/new.store/shoes3.png",img7:"../../assets/new.store/shoes4.png",product:"Shoes",price:"530",},
{img4:"../../assets/new.store/bag1.png",img5:"../../assets/new.store/bag2.png",img6:"../../assets/new.store/bag3.png",img7:"../../assets/new.store/bag4.png",product:"Bags",price:"87",},
{img4:"../../assets/new.store/linger.png",img5:"../../assets/new.store/img2.png",img6:"../../assets/new.store/card5.png",img7:"../../assets/new.store/cp4.png",product:"Lingerie",price:"649",},
{img4:"../../assets/new.store/watch1.png",img5:"../../assets/new.store/watch2.png",img6:"../../assets/new.store/watch3.png",img7:"../../assets/new.store/watch4.png",product:"Watch",price:"218",},
{img4:"../../assets/new.store/h1.png",img5:"../../assets/new.store/h2.png",img6:"../../assets/new.store/image3.png",img7:"../../assets/new.store/h4.png",product:"Hoodies",price:"351",}
]
public figmap4arry3:any={topp:"Top Products"}
public figmap4arry4:any={img8:"../../assets/new.store/bag3.png",img9:"../../assets/new.store/h3.png",
img10:"../../assets/new.store/shoes1.png",img11:"../../assets/new.store/watch2.png",img12:"../../assets/new.store/e4.jpeg",img13:"../../assets/new.store/shoes4.png"}
public figmap4arry5:any={newitm:"New Items",seall:"See All",iconfor1:"arrow-forward-outline"}
public figmap4data1:any=[
{img14:"../../assets/new.store/shoes3.png",description:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$17,00"},
{img14:"../../assets/new.store/shoes2.png",description:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$16,00"},
{img14:"../../assets/new.store/shoes4.png",description:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$18,00"},
{img14:"../../assets/new.store/shoes5.jpeg",description:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$19,00"},
]
public figmap4arry6:any={flash:"Flash Sale",seconds:"58",mints:"36",hour:"00",stopwatch:"stopwatch-outline"}
public figmap4data2:any=[
{img15:"../../assets/new.store/card1.png",discount:"-20%"},
{img15:"../../assets/new.store/card2.png",discount:"-20%"},
{img15:"../../assets/new.store/card3.png",discount:"-20%"},
{img15:"../../assets/new.store/card4.png",discount:"-20%"},
{img15:"../../assets/new.store/card5.png",discount:"-20%"},
{img15:"../../assets/new.store/card6.png",discount:"-20%"}
]

public figmap4arry7:any={popular:"Most Popular",all:"See All",iconfor2:"arrow-forward-outline"}
public figmap4data3:any=[
{img14:"../../assets/new.store/sc1.png",price1:"1380",heart:"heart",textnew:"new"},
{img14:"../../assets/new.store/sc3.png",price1:"1680",heart:"heart",textnew:"sale"},
{img14:"../../assets/new.store/sc2.png",price1:"1480",heart:"heart",textnew:"new"},
{img14:"../../assets/new.store/sc3.png",price1:"1780",heart:"heart",textnew:"hot"}
]
public figmap4arry8:any={just:"Just For You",star:"star"}
public figmap4data4:any=[
{img14:"../../assets/new.store/card6.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$17,00"},
{img14:"../../assets/new.store/card4.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$16,00"},
{img14:"../../assets/new.store/card5.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$18,00"},
{img14:"../../assets/new.store/card2.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$19,00"},
{img14:"../../assets/new.store/card3.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$21,00"},
{img14:"../../assets/new.store/cp3.png",description1:"Lorem ipsum, dolor sit amet consectetur.",
price1:"$23,00"}
  ]
  public figmap4arr: any={cart:"0"}
  
  // figmap5 data
public figmap5arry:any={img1:"../../assets/new.store/bubble8.png",img2:"../../assets/new.store/bubble7.png",}
public figmap5arry1:any={text1:"58",text2:"36",text3:"00",icon1:"stopwatch-outline",text4:"Flash Sale",
text5:"Choose Your Discount",}
public figmap5arry2:any={text6:"All",text7:"10%",text8:"20%",text9:"30%",text10:"40%",text11:"50%",}
public figmap5arry3:any={img3:"../../assets/new.store/Live.png",img4:"../../assets/new.store/Live.png",
img5:"../../assets/new.store/Live.png",}
public figmap5arry4:any={text12:"20% Discount",icon2:"options-outline",}
// Forlooparry
public figmap5data:any=[
{img6:"../../assets/new.store/card6.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$17,00",
text15:"$21,00",},
{img6:"../../assets/new.store/card4.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$19,00",
text15:"$21,00",},
{img6:"../../assets/new.store/card5.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$24,00",
text15:"$21,00",},
{img6:"../../assets/new.store/card2.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$26,00",
text15:"$21,00",},
{img6:"../../assets/new.store/card3.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$28,00",
text15:"$21,00",},
{img6:"../../assets/new.store/cp3.png",text13:"Lorem ipsum, dolor sit amet consectetur.",text14:"$21,00",
text15:"$21,00",}
]
public figmap5arr: any={cart:"0"}



// figmap6 data
public figmap6arry: any = {img1: "../../assets/new.store/pic11.png",text1: "$17,00",};
public figmap6arry1:any={icon1:"bag-handle-outline", cart:"0"}
public figmap6arry2: any = {text2: "Color Options",};
public figmap6arry3: any = {text3: "Size",};
public figmap6arry4: any = {text4: "S",text5: "M",text6: "L",text7: "XL",text8: "XXL",text9: "XXL",};
public figmap6arry5: any = {text10: "Quantity",icon2: "remove-circle-outline",count: "1",icon3: "add-circle-outline",};
public figmap6arry6: any = {icon4: "heart-outline",text12: "Add to cart",text13: "Buy now",};


// figmap7 data
public figmap7arry:any={text1:"Shop",text2:"Clothing",icon1:"camera-outline",}
public figmap7data:any=[
{img1:"../../assets/new.store/ss9.png",text3:"Addidas",img2:"../../assets/new.store/ss7.png",text4:"Cartier",
img3:"../../assets/new.store/ss6.png",text5:"Skirts",img4:"../../assets/new.store/ss5.png",text6:"Shorts",img5:"../../assets/new.store/ss4.png",text7:"Jackets",img6:"../../assets/new.store/ss2.png",text8:"Guccii",
img7:"../../assets/new.store/ss1.png",text9:"Tunics",img8:"../../assets/new.store/ss8.png",text10:"Hoodies",},
{img1:"../../assets/new.store/ss8.png",text3:"Tunics",img2:"../../assets/new.store/ss1.png",text4:"Hoodies",
img3:"../../assets/new.store/ss2.png",text5:"Guccii",img4:"../../assets/new.store/ss4.png",text6:"Jackets",
img5:"../../assets/new.store/ss5.png",text7:"Shorts",img6:"../../assets/new.store/ss6.png",text8:"Skirts",
img7:"../../assets/new.store/ss7.png",text9:"Cartier",img8:"../../assets/new.store/ss9.png",text10:"Addidas",}
]
public figmap7arry3:any={text37:"All Items",icon2:"options-outline",}
public figmap7arrym4:any={filter:"Filter",close:"close-outline"}
public figmap7data2:any=[
{imga:"../../assets/new.store/ss9.png",texta:"Cartier",imgb:"../../assets/new.store/ss7.png",textb:"Addidas",
imgc:"../../assets/new.store/ss6.png",textc:"Skirts",imgd:"../../assets/new.store/ss5.png",textd:"Shorts",
imge:"../../assets/new.store/ss4.png",texte:"Jackets",imgf:"../../assets/new.store/ss2.png",textf:"Guccii",
imgg:"../../assets/new.store/ss1.png",textg:"Tunics",imgh:"../../assets/new.store/ss8.png",texth:"Hoodies",},
{imga:"../../assets/new.store/ss8.png",texta:"Tunics",imgb:"../../assets/new.store/ss1.png",textb:"Hoodies",
imgc:"../../assets/new.store/ss2.png",textc:"Guccii",imgd:"../../assets/new.store/ss4.png",textd:"Jackets",
imge:"../../assets/new.store/ss5.png",texte:"Shorts",imgf:"../../assets/new.store/ss6.png",textf:"Skirts",
imgg:"../../assets/new.store/ss7.png",textg:"Addidas",imgh:"../../assets/new.store/ss9.png",texth:"Cartier",}  
]
public figmap7arry4:any={size:"Size",clothes:"Clothes",Shoes:"Shoes"}
public figmap7arry5:any={xs:"XS",s:"S",m:"M",l:"L",xl:"XL",xxl:"XXL",}
public figmap7arry6m:any={color:"Color"}
public figmap7arry6:any={price:"Price",$10:"$10 - $150",}
public figmap7arry7m:any={range:"Dual Knobs Range"}
public figmap7arry7:any={popular:"Popular",newest:"Newest",high:"Price High to Low",low:"Price Low to High",}
public figmap7arry8:any={clear:"Clear",apply:"Apply",}
public figmap7data1:any=[
{img17:"../../assets/new.store/card6.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$14,00",text21:"$21,00",},
{img17:"../../assets/new.store/card4.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$16,00",text21:"$23,00",},
{img17:"../../assets/new.store/card5.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$17,00",text21:"$21,00",},
{img17:"../../assets/new.store/card2.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$19,00",text21:"$25,00",},
{img17:"../../assets/new.store/card3.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$21,00",text21:"$27,00",},
{img17:"../../assets/new.store/cp3.png",text19:"Lorem ipsum, dolor sit amet.",text20:"$23,00",text21:"$28,00",}
]
public figmap7arr: any={cart:"0"}




  // figmap8-cart data
  public arry: any = {text1: "Cart",text2: "0h-",};
  public arry1: any = {text3: "Shipping Address",text4: "",icon1: "pencil-outline",};
  // text4: "26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh",
  public data: any[] = [
  {img1: "../../assets/new.store/cart1.png",icon2: "trash-outline",text5: "Lorem ipsum dolor sit amet, consectetur",text6: "Red,", size:"Size M", subtotal: 0,price: 17,icon3: "remove-circle-outline",quantity: 1,icon4: "add-circle-outline",},
  {img1: "../../assets/new.store/cart2.png",icon2: "trash-outline",text5: "Lorem ipsum dolor sit amet, consectetur",text6: "Green,", size:"Size L", subtotal: 0,price: 17,icon3: "remove-circle-outline",quantity: 1,icon4: "add-circle-outline",},
];
  public arrymodal: any = {shippingaddress: "Shipping Address",savechanges: "Save Changes"};
  public arry4: any = {text13: "Subtotal",mainsubtotal: "0",text15: "Delivery",delivery: "85",text17: "Total",total: "0",checkout: "Checkout",};


  // figmapaymentp9 data
  public paymentarry:any={text1:"Payment",}
  public shippingarry:any={text2:"Shipping Address",text3:"",icon1:"pencil-outline",} 
  // text3:26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh
  public contactarry:any={text4:"Contact Information",text5:"",text6:"",icon2:"pencil-outline",}
  // text5:"+84932000000",text6:"amandamorgan@example.com"
  public itemsarry:any={text7:"Items",cart:"0",text9:"Add Voucher",}
  public figmap9:any=[
    {img1:"../../assets/new.store/pay.png",quantity:"0",text11:"Lorem ipsum dolor sit amet,",subtotal:"$17,00",},
    {img1:"../../assets/new.store/pay1.png",quantity:"0",text11:"Lorem ipsum dolor sit amet,",subtotal:"$17,00",},
    {img1:"../../assets/new.store/pay.png",quantity:"0",text11:"Lorem ipsum dolor sit amet,",subtotal:"$17,00",},
    {img1:"../../assets/new.store/pay1.png",quantity:"0",text11:"Lorem ipsum dolor sit amet,",subtotal:"$17,00",}
  ]
  public optionsarry:any={text22:"Shipping Options",}
  public figmapay:any={standard:"Standard",standarddays:"5-7days",free:"Free",}
  public figmapay1:any={express:"Express",expressdays:"1-2days",shippingfee:"$12,",}
  
  public warnarry:any={text29:"Delivered on or before Thursday, 23 April 2020",}
  public methodarry:any={text30:"Payment Method",icon3:"pencil-outline",}
  public arrybutton:any={text31:"Card",}
  public payarry:any={total:"Total $34,00",pay:"Pay",}
  public modal1p9:any={shippingaddress:"Shipping Address",savechanges:"Save Changes"}
  public modal2p9:any={contactinformation:"Contact Information",savechanges1:"Save Changes"}
public figmap9arr: any={cart:"0"}



  // figmarecievep10 data
  public recievearry:any={recieveimg1:"../../assets/new.store/pay.png",recieverecieve:"To Recieve",
  recieveorders:"My orders",}
  public recievearry1:any={recievesetting:"settings-outline",recievereorder:"reorder-three-outline",
  recievescan:"scan-outline"}
  public recievedata:any=[
  {recieveimg1:"../../assets/new.store/img1.png",recieveimg2:"../../assets/new.store/img2.png",
  recieveimg3:"../../assets/new.store/img3.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"3 Items",recievepacked:"Packed",recievetrack:"Track",},
  {recieveimg1:"../../assets/new.store/img1.png",recieveimg2:"../../assets/new.store/img2.png",
  recieveimg3:"../../assets/new.store/img3.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"4 Items",recievepacked:"Shipped",recievetrack:"Track",},
  {recieveimg1:"../../assets/new.store/img1.png",recieveimg2:"../../assets/new.store/img2.png",
  recieveimg3:"../../assets/new.store/img3.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"3 Items",recievepacked:"Packed",recievetrack:"Track",},
  {recieveimg1:"../../assets/new.store/img1.png",recieveimg2:"../../assets/new.store/img2.png",recieveimg3:"../../assets/new.store/img2.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"2 Items",recievepacked:"Delivered",recievetrack:"Review",},
  {recieveimg1:"../../assets/new.store/img2.png",recieveimg2:"../../assets/new.store/img3.png",
  recieveimg3:"../../assets/new.store/img4.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"5 Items",recievepacked:"Delivered",recievetrack:"Review",},
  {recieveimg1:"../../assets/new.store/img4.png",recieveimg2:"../../assets/new.store/img3.png",
  recieveimg3:"../../assets/new.store/img2.png",recieveorderno:"Order #92287157",recievestandard:"Standard Delivery",recieveitems:"1 Item",recievepacked:"Delivered",recievetrack:"Review",}
  ]


  // figmasettingp11 data
  public settingarry:any={text1:"Settings",text2:"Your Profile",}
  public settingarry1:any={img1:"../../assets/new.store/avatar12.png",icon1:"pencil-outline",}
  public settingarry2:any={text3:"Save Changes"}
  public figmasettingarr: any={cart:"0"}


// figmadebitp12 data
public debitarry:any={text1:"Settings",text2:"Payment Methods",}
public debitarry1:any={icon1:"settings-outline",text3:"* * * *",text4:"* * * *",text5:"* * * *",text6:"1 5 7 9",text7:"ALI RAZA",text8:"12/26",}
public debitarry2:any={icon2:"add-outline"}
public debitarry3:any={shippingaddress:"Card Details"}
public debitarry4:any={savechanges:"Save Changes"}
public figmap12arr: any={cart:"0"}










  constructor() { }
}
