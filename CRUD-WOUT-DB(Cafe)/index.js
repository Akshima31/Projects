const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 8082;

app.use(express.static(path.join(__dirname, 'project-pics')));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:'secret-key-student-management',
    resave:false,
    saveUninitialized:false
}));

// -------- DATA --------

let users = [];
let staff = [{ id: 1, name: 'Vanshita', age: 21 , phone: 9876543210, gender : "Female"},
    { id: 2, name: 'Rudra', age: 23 ,phone: 9943627643, gender : "Male" }];

// -------- AUTH MIDDLEWARE --------

function auth(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');
    }
}

// -------- REGISTER --------

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register',(req,res)=>{

    const {username,password} = req.body;

    users.push({username,password});

    res.redirect('/login');
});

// -------- LOGIN --------

app.get('/login',(req,res)=>{
    res.render('login',{error:null});
});

app.post('/login',(req,res)=>{

    const {username,password} = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if(user){
        req.session.user = user;
        res.redirect('/');
    }
    else{
        res.render('login',{error:"Invalid username or password"});
    }
});

// -------- HOME PAGE --------

app.get('/',auth,(req,res)=>{
    res.render('home',{user:req.session.user});
});

// -------- ADD STAFF PAGE --------

app.get('/add',auth,(req,res)=>{
    res.render('add',{
        staff:staff,
        user:req.session.user
    });
});

// -------- ADD STAFF --------

app.post('/staff/add',auth,(req,res)=>{

    const {name,age,phone,gender} = req.body;

    const newStaff = {
        id: staff.length > 0 ? staff[staff.length-1].id + 1 : 1,
        name,
        age,
        phone,
        gender
    };

    staff.push(newStaff);

    res.redirect('/add');
});

// -------- DELETE --------

app.post('/staff/delete/:id',auth,(req,res)=>{

    const id = parseInt(req.params.id);

    staff = staff.filter(s => s.id !== id);

    res.redirect('/add');
});

// GET Edit Staff Page
app.get('/staff/edit/:id', auth , (req, res) => {
    const staffId = parseInt(req.params.id);
    const member = staff.find(s => s.id === staffId);

    if (member) {
        res.render('edit', { member:member,staff:staff, user: req.session.user });
    } else {
        res.redirect('/add');
    }
});

// POST Edit Staff via HTML Form (Update)
app.post('/staff/edit/:id', auth, (req, res) => {

    const staffId = parseInt(req.params.id);
    const { name, age, phone, gender } = req.body;

    const staffIndex = staff.findIndex(s => s.id === staffId);

    if (staffIndex !== -1) {
        if (name) staff[staffIndex].name = name;
        if (age) staff[staffIndex].age = parseInt(age);
        if (phone) staff[staffIndex].phone = phone;
        if (gender) staff[staffIndex].gender = gender;
    }

    res.redirect('/add');
});


// -------- VIEW PAGE --------

app.get('/view',auth,(req,res)=>{
    res.render('view',{
        staff:staff,
        user:req.session.user
    });
});

// -------- LOGOUT --------

app.get('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login');
    });
});

//-------ORDER-------

const menu = [

{ id:1, name:"Burger", price:120, image:"https://b.zmtcdn.com/data/pictures/chains/6/18664896/4e0c0bafb3fe233938991cf1af655e79.jpg" },

{ id:2, name:"Pizza", price:250, image:"https://i.pinimg.com/736x/4c/dd/12/4cdd129f02bf6d9d1ebb80f8461556e5.jpg" },

{ id:3, name:"Pasta", price:200, image:"https://i.pinimg.com/originals/3d/f5/be/3df5bea6d11723b9410518f953c973c9.jpg" },

{ id:4, name:"Fries", price:80, image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877" },

{ id:5, name:"Blueberry Cheesecake (1 slice) ", price:100, image:"https://i.pinimg.com/736x/4e/41/08/4e410854238b9b4b3efe16c7d03c9c8d.jpg" },

{ id:6, name:"Cold Coffee", price:90, image:"https://i.pinimg.com/236x/98/05/da/9805daf80344f6d1575e60b7ca6400db.jpg" },

{ id:7, name:"Macha", price:110, image:"https://i.pinimg.com/736x/bb/3c/29/bb3c29c99ad4b27b42c1d7c32655414b.jpg" },

{ id:8, name:"Ice Cream", price:110, image:"https://i.pinimg.com/736x/32/cc/ed/32cced2c1f84d49b87f1d04c4e850fff.jpg" }

];

let cart = []; 

//------ORDER PAGE------

app.get("/order",auth,(req,res)=>{
res.render("order",{menu});
});

//-------ADD ITEM---------

app.post("/add-item/:id",auth, (req,res)=>{

const id = parseInt(req.params.id);

const item = menu.find(m => m.id === id);

if(item){
cart.push(item);
}

res.redirect("/order");

});

//------BILL PAGE-------

app.get("/bill",auth,(req,res)=>{

let total = 0;

cart.forEach(item=>{
total += item.price;
});

res.render("bill",{cart,total});

});
 

//-----place order button-----

let orders = [];
let orderCount = 1;

app.post('/place-order',(req,res)=>{

let total = 0;

cart.forEach(item=>{
total += item.price;
});

// SAVE ORDER
orders.push({
id: orderCount++,
total: total
});

// clear cart
cart = [];

// send success response
res.send("success");

});

//------clear order-----
app.post('/clear-order', (req,res)=>{
    cart = []; // cart empty
    res.send("cleared");
});


//-------view order-------

app.get('/viewOrder',(req,res)=>{
res.render('viewOrder',{
orders:orders
});
});


// -------- SERVER --------

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});