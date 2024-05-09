// // import express from"express";
// // import cors from "cors";
// // import { connectDB } from "./config/db.js";
// // import foodRouter from "./routes/foodRoute.js";
// // import userRouter from "./routes/userRoute.js";
// // import 'dotenv/config'
// // import path from "path";
// // import cartRouter from "./routes/cartRoute.js";
// // import orderRouter from "./routes/orderRoute.js";





// // // app config
// // const app=express()
// // const port=4000



// // //middleware 
// // app.use(express.json())
// // app.use(cors())

// // // DB Connection
// // connectDB();


// // // api endpoint
// // app.use("/api/food",foodRouter)
// // app.use("/images",express.static('uploads'))
// // app.use("/api/user",userRouter)
// // app.use("/api/cart",cartRouter)
// // app.use("/api/order",orderRouter)




// // app.get("/",(req,res)=>{
// //     app.use(express.static(path.resolve(__dirname,"Frontend","dist")));
// //     res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
// // })

// // app.listen(port,()=>{
// //     console.log(`Server running on http://localhost:${port}`);
// // })


// // //  mongodb+srv://bhumigautam25:7759887117@cluster0.r5smjxh.mongodb.net/?















import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app config
const app = express();
const port = 4000;

//middleware 
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static(join(__dirname, 'uploads')));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    app.use(express.static(join(__dirname, "Frontend", "dist","/")));
    res.sendFile(join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});













