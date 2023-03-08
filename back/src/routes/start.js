const app= require("./server");
const { sequelize }= require ("../DB_connection");
const { saveApiData} = require("../controllers/saveApiData");

sequelize.sync({ force: true}).then(async ()=>{
    await saveApiData();
    console.log("DB conectada");
    app.listen(3001, ()=>{
        console.log("Server in port 3001")
    })
});

