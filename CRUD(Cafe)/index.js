const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const port = 8083;

app.use(express.static(path.join(__dirname, 'public')));

// ----MIDDLEWARE----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ----SESSION SETUP---- 
app.use(
    session({
        secret: 'secure-secret-user-student-manage',
        resave: false,
        saveUninitialized: false,
    })
);

// ----MONGODB CONNECTION-----
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// ----DATABASE & COLLECTION NAME----
const dbname = 'crud_db';
const collectionName = 'users';
const collectionName2 = 'orders';

// ----MAIN FUNCTION----
async function launchServer() {
    try {
        await client.connect();
        console.log('Connected to local MongoDB');

        const db = client.db(dbname);

        const usersCol = db.collection(collectionName);
        const ordersCol = db.collection(collectionName2);

        //--LOGIN MIDDLEWARE--
        function requireLogin(req, res, next) {
            if (!req.session.user) {
                return res.redirect('/');
            }

            next();
        }

        //--USER MIDDLEWARE--
        function isUser(req, res, next) {
            if (req.session.user?.role === 'User') {
                next();
            } else {
                res.send('Only User Can Access This Page');
            }
        }

        //--ADMIN MIDDLEWARE--
        function isAdmin(req, res, next) {
            if (req.session.user?.role === 'Admin') {
                next();
            } else {
                res.send('Only Admin Can Access This Page');
            }
        }

        // =======AUTH ROUTES=======

        //----LOGIN PAGE----
        app.get('/', (req, res) => {
            if (req.session.user) {
                if (req.session.user.role === 'Admin') {
                    return res.redirect('/index');
                }

                return res.redirect('/home');
            }

            res.render('login', { error: null });
        });

        //----LOGIN----
        app.post('/login', async (req, res) => {
            try {
                const { name, password } = req.body;

                const user = await usersCol.findOne({ name });

                if (!user) {
                    return res.render('login', {
                        error: 'No user found with that name',
                    });
                }

                if (!user.passwordHash) {
                    return res.render('login', {
                        error: 'User has no password set',
                    });
                }

                const ok = await bcrypt.compare(password , user.passwordHash);

                if (!ok) {
                    return res.render('login', {
                        error: 'Invalid password',
                    });
                }

                // SESSION STORE
                req.session.user = {
                    id: user._id,
                    name: user.name,
                    role: user.role,
                };

                // ROLE BASED REDIRECT
                if (user.role === 'Admin') {
                    return res.redirect('/index');
                }

                return res.redirect('/home');
            } catch (error) {
                res.status(500).send('Login Error: ' + error.message);
            }
        });


        //----LOGOUT----
        app.post('/logout', (req, res) => {
            req.session.destroy(() => {
                res.redirect('/');
            });
        });

        //----REGISTER PAGE----
        app.get('/register', async (req, res) => {
            try {
                const users = await usersCol.find({}).toArray();

                const success = req.query.created === '1';

                res.render('register', {
                    error: null,
                    success,
                    users,
                });
            } catch (err) {
                res.render('register', {
                    error: err.message,
                    success: false,
                    users: [],
                });
            }
        });

        //----CREATE USER----
        app.post('/add', async (req, res) => {
            try {
                const { name, email, role, password } = req.body;

                const passwordHash = password? await bcrypt.hash(password, 10): null;

                await usersCol.insertOne({
                    name,
                    email,
                    role,
                    passwordHash,
                });

                res.redirect('/register?created=1');
            } catch (error) {
                res.status(500).send(
                    'Error inserting user: ' + error.message
                );
            }
        });

        // ================= ADMIN PAGE =================

        app.get('/index', requireLogin, isAdmin, async (req, res) => {
            try {
                const users = await usersCol.find({}).toArray();

                res.render('index', {
                    users,
                    currentUser: req.session.user,
                });
            } catch (error) {
                res.send(error.message);
            }
        });

        // ================= USER PAGE =================

        app.get('/home', requireLogin, isUser, (req, res) => {
            res.render('home', {
                currentUser: req.session.user,
            });
        });

        //----MENU----
    app.get('/menu', requireLogin, isUser, (req, res) => {

            const menuItems = [

                {
                    name: "Pasta",
                    price: 250,
                    image: "/pasta.jpg"
                },
                  
                {
                    name: "Pizza",
                    price: 350,
                    image: "/pizza.jpg"
                },

                {
                    name: "Momos",
                    price: 150,
                    image: "/momos.jpg"
                },

                {
                    name: "Cold Coffee",
                    price: 130,
                    image: "/coffee.jpg"
                },

                {
                    name: "Virgin Blue Mojito",
                    price: 200,
                    image: "/mojito.jpg"
                },

                {
                    name: "Boba Tea",
                    price: 230,
                    image: "/boba.jpg"
                },

                {
                    name: "Chocolate Cake",
                    price: 200,
                    image: "/cake.jpg"
                },

                {
                    name: "Ice Cream",
                    price: 100,
                    image: "/iceCream.jpg"
                },

                {
                    name: "Brownie + Ice Cream",
                    price: 250,
                    image: "/brownie.jpg"
                },


            ];

            res.render('menu', {
                menuItems
            });
        });

        // ---------------- PLACE ORDER ----------------

        app.post('/place-order', requireLogin, async (req, res) => {

            try {

                const { items, total } = req.body;

                await ordersCol.insertOne({

                    username: req.session.user.name,

                    items,

                    total,

                    createdAt: new Date()

                });

                res.json({
                    success: true
                });

            } catch (error) {

                res.json({
                    success: false
                });
            }
        }); 

        //----ORDER HISTORY----
        app.get('/order-history' , requireLogin, isUser, async(req, res)=>{
            try{
                const orders= await ordersCol.find({
                    username: req.session.user.name
                }).toArray();

                res.render('history',{
                    orders
                });
            }catch(error){
                res.send(error.message);
            }
        });


        // ================= START SERVER =================

        app.listen(port, () => {
            console.log(
                `Server Running On: http://localhost:${port}`
            );
        });
    } catch (error) {
        console.error('Something went wrong', error);
    }
}

launchServer();