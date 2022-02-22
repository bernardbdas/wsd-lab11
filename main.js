// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'toor',
    database: 'users'
});
connection.addListener('success', function() {
    console.log("connected");
})

// simple query
function getTrains() {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
            console.log(results);
        }
    );
}


function addNewTrain(train_number, num_coaches, source_station_id, dest_station_id, running_status) {
    let vals = train_number + "," + num_coaches + "," + source_station_id + "," + dest_station_id + "," + running_status + ")";
    connection.query(
        'INSERT INTO train(train_number, num_coaches, source_station_id, dest_station_id, running_status) VALUES(' + vals,
        function(err, results, fields) {
            console.log(results);
            console.log("Success");
        }
    )
}

function updateTrain(train_number, newRunStatus) {
    connection.query(
        'UPDATE train SET running_status = 0 WHERE train_number=' + train_number,
        function(err, results, fields) {
            console.log(results);
            console.log("Updated running status");
        }
    )
}

function deleteTrain(train_number) {
    connection.query(
        'DELETE FROM train WHERE train_number=' + train_number,
        function(err, results, fields) {
            console.log(results);
            console.log("Deleted record");
        }
    )
}

function searchTrain(train_number) {
    connection.query(
        'SELECT * FROM train WHERE train_number=' + train_number,
        function(err, results, fields) {
            console.log(results);
        }
    )
}
addNewTrain('6278292918', 45, '6793829103', '5678656776', 0);
getTrains();