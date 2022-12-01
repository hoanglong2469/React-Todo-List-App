const data = {
  products: [
    {
      name: 'iPhone 14 Pro Max 128GB',
      category: 'Phones',
      price: 999,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/4/19/637859769705950103_iPhone%2013%20Promax%20(1).jpg'
    },
    {
      name: 'iPhone 13 Pro Max 128GB',
      category: 'Phones',
      price: 899,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/5/638005785995780745_iphone-13-pro-max-dd-bh.jpg'
    },
    {
      name: 'iPhone 13 512GB',
      category: 'Phones',
      price: 850,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/25/637970354555201931_iphone-13-bh-2nam-dac-quyen.jpg'
    },
    {
      name: 'iPhone 12 Pro Max 128GB',
      category: 'Phones',
      price: 657,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg'
    },
    {
      name: 'iPhone SE 2022',
      category: 'Phones',
      price: 550,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/9/637823924290106355_iphone-se-2022-dd.jpg'
    },
    {
      name: 'iPhone 11 64GB',
      category: 'Phones',
      price: 550,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png'
    },
    {
      name: 'Ipad Pro 11 2021 M1',
      category: 'Ipads',
      price: 900,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/21/637546013880588874_ipad-pro-11-wifi-dd.jpg'
    },
    {
      name: 'Ipad Gen 9 10.2 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673410984406346_ipad-10-2-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Mini 6 8 inch Wifi 5G 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673371022722752_ipad-mini-8-3-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Mini 6 8.3 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673371022722752_ipad-mini-8-3-2021-wi-fi-dd.jpg'
    },
    {
      name: 'Ipad Air 5 8.3 inch 2021',
      category: 'Ipads',
      price: 890,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/9/637824189776891172_ipad-air-2022-wifi-cell-dd.jpg'
    },
    {
      name: 'MacBook Air M2 2022 13 inch',
      category: 'Macbooks',
      price: 1200,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901915720184032_macbook-air-m2-2022-den-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 2022 13 inch',
      category: 'Macbooks',
      price: 1400,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901935364438149_macbook-pro-m2-2022-xam-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 2022 13 inch',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/11/12/637407970062806725_mba-2020-gold-dd.png'
    },
    {
      name: 'MacBook Pro 14 inch 2021',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/20/637703173013037856_macbook-pro-14-2021-xam-dd.jpg'
    },
    {
      name: 'MacBook Pro M2 13 inch 2022 Ram 16GB',
      category: 'Macbooks',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901935364438149_macbook-pro-m2-2022-xam-dd.jpg'
    },
    {
      name: 'Apple Watch Ultra GPS + Cellular 49mm Titanium Alpine Loop Small',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/8/637982457565218496_apple-watch-ultra-49mm-alpine-loop-cam-dd.jpg'
    },
    {
      name: 'Apple Watch Ultra GPS + Cellular 49mm Titanium Alpine Loop Large',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/15/638041196321660005_apple-watch-ultra-gps-cellular-49mm-titanium-alpine-loop-large-dd.jpg'
    },
    {
      name: 'Apple Watch Series 8 GPS viền nhôm cao su',
      category: 'Watchs',
      price: 1100,
      brand: 'Apple',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg'
    },
    {
      name:'Lenovo IdeaPad Gaming 3 15IAH7 i5',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    },
    {
      name:'ThinkPad X1 Carbon Gen 10 Core i7-1255U',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://mac24h.vn/images/detailed/49/x1-carbon-gen-10_phll-j6_e8wb-ml.png?t=1663659320'
    },
    {
      name:'Lenovo ThinkBook 15 G4 IAP',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-thinkbook-15-g4-iap-21dj00cwvn-i7-1255u_be0b639ce8b943539bac696bbd1b5941_master.png'
    },
    {
      name:'Lenovo IdeaPad 5 Pro 16ARH7',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['White'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-ideapad-5-pro-16arh7-82sn00afvn_38a6e8f093ad4572881c2e30eeab27bb_master.png'
    },{
      name:'Legion 7 16IAX7',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Gray'],
      image:'https://xgear.net/wp-content/uploads/2022/08/800x800-legion7-22-3.gif'
    },
    {
      name:'Lenovo IdeaPad Gaming 3 15IAH7 i5',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    },
    {
      name:'ThinkPad X1 Carbon Gen 10 Core i7-1255U',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://mac24h.vn/images/detailed/49/x1-carbon-gen-10_phll-j6_e8wb-ml.png?t=1663659320'
    },
    {
      name:'Lenovo ThinkBook 15 G4 IAP',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Black'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-thinkbook-15-g4-iap-21dj00cwvn-i7-1255u_be0b639ce8b943539bac696bbd1b5941_master.png'
    },
    {
      name:'Lenovo IdeaPad 5 Pro 16ARH7',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['White'],
      image:'https://product.hstatic.net/1000233206/product/lenovo-ideapad-5-pro-16arh7-82sn00afvn_38a6e8f093ad4572881c2e30eeab27bb_master.png'
    },
    {
      name:'Legion 7 16IAX7',
      category:'laptop',
      price: 1599,
      brand:'Lenovo',
      color:['Gray'],
      image:'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg'
    },
    {name: 'Samsung Galaxy Z Fold4 5G 256GB',
      category: 'Phones',
      price: 999,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028876073020248_samsung-galaxy-z-fold4-kem-dd-tragop-bh.jpg'
    },
    {name: 'Samsung Galaxy Z Flip4 5G 128GB ',
      category: 'Phones',
      price: 789,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028876072863954_samsung-galaxy-z-flip4-vang-dd-tragop-bh.jpg'
    },
    {
      name: 'Samsung Galaxy Z Flip4 5G Flex Mode Collection',
      category: 'Phones',
      price: 1500,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/8/638035043498655660_samsung-galaxy-z-flip4-flex-mode-dd-docquyen-bh.jpg'
    },

    {
      name: 'Samsung Galaxy Z Fold3 5G 256GB',
      category: 'Phones',
      price: 1200,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028876072863954_samsung-galaxy-z-fold3-xanh-dd-tragop-bh.jpg'
    },
    {
      name: 'Pin sạc dự phòng Innostyle PowerGo Smart Ai 10000mAh',
      category: 'Accessories',
      price: 1200,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/1/637713876159168451_PowerGo-white-600x602.png'
    },
    {
      name: 'Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge',
      category: 'Accessories',
      price: 50,
      brand: 'Samsung',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/1/14/637146114144718738_Trip20C_Black.jpg'
    },
    {
      name: 'Xiaomi Redmi A1 2GB-32GB',
      category: 'Phones',
      price: 150,
      brand: 'Xiaomi',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/15/638014214489815604_xiaomi-redmi-a1-den-dd-bh.jpg'
    },
    {
      name: 'Xiaomi Redmi A1 4GB-32GB 2021',
      category: 'Phones',
      price: 150,
      brand: 'Xiaomi',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/5/638005792458698545_xiaomi-redmi-10-dd-bh.jpg'
    },
    {
      name: 'Xiaomi Redmi Note 11 4GB-32GB 2021',
      category: 'Phones',
      price: 150,
      brand: 'Xiaomi',
      color: ['Black', 'Silver', 'Gold'],
      image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/5/638005794858659317_xiaomi-redmi-note-11-dd-bh.jpg'
    },
    {
      name:'Laptop Asus TUF Gaming FX506LHB-HN188W i5',
      category:'laptop',
      price:2500,
      brand:'Asus',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637787904727727554_asus-tuf-gaming-fx506lh-den-2022-dd.jpg'
    },
    {
      name:'Laptop Asus TUF Gaming FA506IHRB-HN019W R5',
      category:'laptop',
      price: 1200,
      brand:'Asus',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/2/637950740313797526_asus-tuf-gaming-fa506ihr-den-dd.jpg'
    },
    {
      name:'Laptop Asus TUF Gaming FX517ZC-HN077W i5',
      category:'laptop',
      price: 2300,
      brand:'Asus',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/22/637835763372337463_asus-tuf-gaming-fx517-den-dd-rtx-3050.jpg'
    },
    {
      name:'Laptop Asus TUF Gaming FX517ZC-HN077W i5',
      category:'laptop',
      price:2300,
      brand:'Asus',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/22/637835763372337463_asus-tuf-gaming-fx517-den-dd-rtx-3050.jpg'
    },
    {
      name:'Laptop Asus Gaming TUF FA507RM-HN018W R7',
      category:'laptop',
      price:2300,
      brand:'Asus',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/20/637992834466231416_asus-tuf-gaming-fa507-xam-dd.jpg'
    },
    {
      name:'OPPO Reno8 Pro 5G 12GB - 256GB',
      category:'Phones',
      price:2100,
      brand:'Oppo',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/22/637994542580983467_oppo-reno8-pro-dd.jpg'
    },
    {
      name:'OPPO Reno8 4G 8GB - 256GB',
      category:'Phones',
      price:2300,
      brand:'Oppo',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/5/637952895644732120_oppo-reno8-4g-dd.jpg'
    },
    {
      name:'OPPO Reno7 8GB-128GB',
      category:'Phones',
      price:2300,
      brand:'Oppo',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/4/637872590554647546_oppo-reno7-4g-dd.jpg'
    },
    {
      name:'OPPO Reno7 Z 5G 8GB - 128GB',
      category:'Phones',
      price:2300,
      brand:'Oppo',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816817507294378_oppo-reno7-z-dd.jpg'
    },
    {
      name:'OPPO Reno6 Z 5G ',
      category:'Phones',
      price:2300,
      brand:'Oppo',
      color:['Black'],
      image:'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/8/637613342139496099_oppo-reno6z-dd.jpg'
    },
  ],
  brands: [
    {
      name: 'Apple',
      image: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png',
      categories: [
        {
          name: 'Phones',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg'
        },
        {
          name: 'Macbooks',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/7/637901915720184032_macbook-air-m2-2022-den-dd.jpg'
        },
        {
          name: 'Ipads',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/21/637546013880588874_ipad-pro-11-wifi-dd.jpg'
        },
        {
          name: 'Watchs',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/12/637985935050489552_apple-watch-series-8-gps-41mm-do-dd.jpg'
        }
      ]
    },
    {
      name: 'Samsung',
      image: 'https://cdn.freebiesupply.com/logos/large/2x/samsung-4-logo-png-transparent.png',
      categories: [
        {
          name: 'Phones',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/1/638028876073020248_samsung-galaxy-z-fold4-kem-dd-tragop-bh.jpg',
        },
        {
          name: 'Accessories',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/1/637713876159168451_PowerGo-white-600x602.png'
        }
      ]
    },
    {
      name: 'Xiaomi',
      image: 'https://brademar.com/wp-content/uploads/2022/05/Xiaomi-Logo-PNG-2019-%E2%80%93-Now.png',
      categories: [
        {
          name: 'Phones',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/1/637713876159168451_PowerGo-white-600x602.png'
        }
      ]

    },
    {
      name: 'Lenovo',
      image: 'https://cdn.freebiesupply.com/logos/thumbs/2x/lenovo-1-logo.png',
      categories: [
        {
          name: 'Laptop',
          image: 'https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-15ARH7-black-14.jpg' 
        }
      ]
    },
    {
      name: 'Asus',
      image: 'https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-asus-inkythuatso-2-01-26-09-21-11.jpg',
      categories: [
        {
          name: 'Laptop',
          image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/26/637787904727727554_asus-tuf-gaming-fx506lh-den-2022-dd.jpg' 
        }
      ]
    },
    {
      name: 'Oppo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png',
      categories: [
        {
          name: 'Phones',
          image: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/5/637952895644732120_oppo-reno8-4g-dd.jpg'
        }
      ]

    }
  ]
}

export default data;